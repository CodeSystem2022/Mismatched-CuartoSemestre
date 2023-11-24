import { useEffect, useState } from "react";
import { Title } from "../components/Title";
import { Button } from "../components/Button";
import { useFirestore } from "../hooks/useFirestore";
import formValidates from "../utils/formValidates";
import { useForm } from "react-hook-form";
import FormInput from "../components/formInput";
import FormError from "../components/FormErrors";

const Home = () => {

  const [ copy, setCopy ] = useState({ propiedadX: true });
  const { required, patternURL } = formValidates;
  const {
    register,
    handleSubmit,
    formState: {errors},
    resetField,
    setError,
    setValue,
  } = useForm();

  const { data, error, loading, getData, addData, deleteData, updateData } = useFirestore();
  const [newOriginID, setNewOriginID] = useState();

  useEffect(() => {
    getData();
  }, [])

  if (loading.getData) {
    return <p>Cargando Datos....</p>
  }

  if (error) return <p>{error}</p>

  const onSubmit = async ({url}) => {
    try {
      if (newOriginID) {
        await updateData(newOriginID, url);
        setNewOriginID("");
      } else {
        await addData(url);
      }
      resetField("url");

    } catch (error) {
      const { code, message } = erroresFirebase(error.code);
      setError(code, {message})
    }
  };

  const handleClickDelete = async (nanoid) => {
    await deleteData(nanoid);
  };

  const handleClickEdit = async (item) => {
    setValue("url", item.origin);
    setNewOriginID(item.nanoid);
  };

  const pathURL = window.location.href;

  const handleClickCopy = async (nanoid) => {
    await navigator.clipboard.writeText(pathURL + nanoid);
    setCopy({[nanoid]: true});
  }

  return (
    <>
      <Title text="Administrador de URLS" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
        label="Ingresa tu URL"
        type="text"
        placeholder="www.UTN-FRSR.com.ar"
        {...register("url", {
          required,
          pattern: patternURL
        })}
        error={errors.url}>
          <FormError error={errors.url}/>
        </FormInput>
        {newOriginID ? (
          <Button
          type="submit"
          text="Editar URL"
          color="yellow"
          loading={loading.updateData}
          />

        ) : (
          <Button
          type="submit"
          text="Agregar URL"
          color="blue"
          loading={loading.addData}
          />
        )}
      </form>
      {data.map(item => (
          <div key={item.nanoid}>
            <p>{item.nanoid}</p>
            <p>{item.origin}</p>
            <p>{item.uid}</p>
          </div>
        ))
      }
    </>
  );
};

export default Home;