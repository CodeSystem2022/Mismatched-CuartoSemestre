// Dependencias
import { useContext, useState } from "react";
import { UserContext } from "../context/UserProvider";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { erroresFirebase } from "../utils/erroresFirebase";
import formValidates from "../utils/formValidates";
import { Link } from "react-router-dom";

// Componentes
import FormErrors from "../components/FormErrors";
import FormInput from "../components/formInput";
import { Title } from "../components/Title";
import { Button } from "../components/Button";


const Register = () => {
    const navigate = useNavigate();

    const { registerUser } = useContext(UserContext);
    const [loading, setLoading] = useState(false);
    const { required, patternEmail, minLength, validateTrim, validateEquals } = formValidates();

    const {
        register,
        formState: { errors },
        handleSubmit,
        setError,
        getValues,
    } = useForm({
        defaultValues: {
            email: "",
            password: "",
            repassword: "",
        }
    }); // Hook de react-hook-form

    const onSubmit = async (email, password) => {
        try {
            setLoading(true);
            await registerUser(email, password);
            navigate("/home");

        } catch (error) {
            console.log(error.code);
            const { code, message } = erroresFirebase(error.code);
            setError(code, { message });
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Title text="Registro" />
            {/*<FormErrors error={errors.firebase} />*/}
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormInput
                    type="email"
                    placeholder='Ingrese email'
                    {...register("email", {
                        required,
                        pattern: patternEmail,
                    })}
                    label="Ingresa tu email"
                    error={errors.email ? true : false}
                >
                    <FormErrors error={errors.email} />
                </FormInput>

                <FormInput
                    type="password"
                    placeholder='Ingrese contraseña'
                    {...register("password", {
                        minLength,
                        validate: validateTrim,
                    })}
                    label="Ingresa tu contraseña"
                    error={errors.password ? true : false}
                >
                    <FormErrors error={errors.password} />
                </FormInput>

                <FormInput
                    type="password"
                    placeholder='Ingrese nuevamente su contraseña'
                    {...register("repassword", {
                        validate: validateEquals(getValues("password")),
                    })}
                    label="Confirma tu contraseña"
                    error={errors.repassword ? true : false}
                >
                    <FormErrors error={errors.repassword} />
                </FormInput>
                <Button type="submit" text="Registrarse" color="purple" loading={loading} onClick={handleSubmit}/>
            </form>
            <p className="my-4 text-sm flex justify-between px-3">
                Volver a la pagina de Inicio
                <Link to="/" className="text-blue-700 hover:text-blue-900">
                    Inicio
                </Link>
            </p>
        </>
    );
}

export default Register;