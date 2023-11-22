import { Card, Button } from "../UI";
import { useTareas } from "../../context/TareasContext"
import { useNavigate } from "react-router-dom";
import { AiTwotoneEdit } from "react-icons/ai";
import { CiTrash } from "react-icons/ci";

export function CardTareas({ tarea }) {

    const { eliminarTarea } = useTareas();
    const navigate = useNavigate();
    return (
    <Card key={tarea.id} className="py-4 justify-center flex flex-col">
        <div>
            <h1 className="text-2xl font-bold">{tarea.titulo}</h1>
            <p className="py-4">{tarea.descripcion}</p>
        </div>
        <div className="flex justify-end gap-x-2">
            <Button
            onClick={() => navigate(`/tareas/${tarea.id}/editar`)}
            >Editar<AiTwotoneEdit className="text-white"/></Button>
            <Button className= "bg-red-500 hover:bg-red-600"
            onClick={async() => {
            if (window.confirm("¿Estas seguro de eliminar esta tarea?")){
                await eliminarTarea(tarea.id);
            }}}>Borrar<CiTrash className="text-white"/></Button>
        </div>
    </Card>
    );
}

export default CardTareas;
