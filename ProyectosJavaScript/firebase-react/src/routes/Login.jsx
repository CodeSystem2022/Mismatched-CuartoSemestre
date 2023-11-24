import { useContext, /*useState*/ } from 'react';
import { UserContext } from "../context/UserProvider"
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import FormErrors from '../components/FormErrors';
import FormInput from '../components/formInput';
import formValidates from "../utils/formValidates";
import { erroresFirebase } from '../utils/erroresFirebase';


import { Title } from "../components/Title";
import { Button } from "../components/Button";

const Login = () => {
    //const [email, setEmail] = useState();
    //const [password, setPassword] = useState();

    const { loginUser } = useContext(UserContext);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { required, patternEmail, minLength, validateTrim } = formValidates();

    const {
        register,
        formState: { errors },
        handleSubmit,
        setError,
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
            await loginUser(email, password);
            navigate("/");

        } catch (error) {
            const { code, message } = erroresFirebase(error.code);
            setError(code, { message });
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Title text="Inicio de Sesion" />
            {/*<FormErrors error={errors.firebase} />*/}
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormInput
                    type="email"
                    placeholder='Ingrese email'
                    {...register("email", {
                        required,
                        pattern: patternEmail,
                    })}
                    label="Ingresa tu correo"
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
                <Button type="submit" text="Iniciar Sesion" color="purple" loading={loading} onClick={handleSubmit}/>
            </form>
            <p className="my-4 text-sm flex justify-between px-3">
                Volver a la pagina de Inicio
                <Link to="/" className="text-blue-700 hover:text-blue-900">
                    Inicio
                </Link>
            </p>
        </>
    );
};

export default Login;