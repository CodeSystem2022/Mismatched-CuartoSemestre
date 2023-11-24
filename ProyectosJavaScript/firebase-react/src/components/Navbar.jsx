import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/UserProvider";

const Navbar = () => {
    const { user, signOutUser } = useContext(UserContext);

    const handleClickLogout = async () => {
        try {
            await signOutUser();
            console.log("Usuario deslogueado")
        } catch (error) {
            console.log(error.code);
        }
    }
    const classButtonBlue =
        "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800";


    const classButtonRed =
        "focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900";

    return (
        <div>
            {user ? (
                <>
                    <NavLink to="/Home" className={classButtonBlue}>Inicio</NavLink>
                    <button onClick={handleClickLogout} className={classButtonRed}>Cerrar Sesión</button>
                </>
            ) : (
                <>
                    <NavLink to="/login" className={classButtonBlue}>Login</NavLink>
                    <NavLink to="/register" className={classButtonBlue}>Registrarse</NavLink>
                </>
            )}
        </div>
    );
};

export default Navbar;