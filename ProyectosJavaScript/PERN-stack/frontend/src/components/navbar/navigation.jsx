import { MdTaskAlt, MdPerson } from "react-icons/md";
import { GrTask } from "react-icons/gr";

export const PrivateRoutes = [
    {
        name: "Tareas",
        path: "/tareas",
        icon: <MdTaskAlt className="h-5 w-5"/>
    },
    {
        name: "Crear Tarea",
        path: "/tareas/crear",
        icon: <GrTask className="h-5 w-5"/>
    },
    {
        name: "Perfil",
        path: "/profile",
        icon: <MdPerson className="h-5 w-5"/>
    }
]

export const PublicRoutes = [
    {
        name: "About",
        path: "/about"
    },
    {
        name: "Iniciar Sesion",
        path: "/login"
    },
    {
        name: "Registro",
        path: "/register"
    }
] 