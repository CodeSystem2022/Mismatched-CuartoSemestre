import { useContext, useState } from 'react';
import { UserContext } from "../context/UserProvider"
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const { loginUser } = useContext(UserContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await loginUser(email, password);
            console.log("Usuario logueado");
            navigate("/");
        } catch (error) {
            console.log(error.code);
        }
    };

    return (
    <>
        <form onSubmit={handleSubmit}>
            <input 
            type="email"
            placeholder='Ingrese email'
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            />
            <input 
            type="password"
            placeholder='Ingrese contraseña'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <button type='submit'>Iniciar Sesión</button>
        </form>
    </>
    );
};

export default Login