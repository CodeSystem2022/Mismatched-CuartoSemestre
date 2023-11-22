import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Card } from "../components/UI";

function HomePage() {
  const data = useContext(AuthContext);
  console.log(data);
  return (
    <Card>
      <div>
        <h1 className="font-bold justify-center text-2xl py-4">
          {" "}
          Mi proyecto PERN con autenticacion de usuarios y CRUD de tareas
        </h1>
        <h3>
          Bienvenido a la plataforma de tareas diseñada por Santiago Martos.
          Aquí, simplificamos la gestión de tareas con eficiencia y estilo
          gracias a nuestra tecnología basada en el stack PERN (PostgreSQL,
          Express, React, Node). Organiza tu día con facilidad, asigna tareas, y
          realiza un seguimiento sin esfuerzo. ¡Optimiza tu productividad hoy
          mismo con nuestra intuitiva interfaz!
        </h3>
      </div>
    </Card>
  );
}

export default HomePage;
