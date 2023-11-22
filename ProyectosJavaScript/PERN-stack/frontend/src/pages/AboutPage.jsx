
function AboutPage() {
  return (
    <div>
      <h1 className=" text-center font-bold py-4 px-3 text-4xl">Tecnologias Utilizadas</h1>
      <h2 className="text-2xl py-4 px-2">
        Antes de profundizar en el desarrollo, echemos un vistazo a las
        tecnologias clave que usaremos en este proyecto:
      </h2>
      <h3 className="py-4 px-2">
        {" "}
        PostgreSQL: Una potente base de datos relacional que almacenara nuestros
        datos de usuario y tareas. Express: Un marco de desarrollo de Node.js
        que proporcionara un servidor para la aplicacion y gestionara las
        solicitudes de API. React: La biblioteca de JavaScript que utilizaremos
        para construir la interfaz de usuario de nuestra aplicacion. Node.js: El
        entorno de tiempo de ejecucion que ejecutara nuestro servidor y la
        logica del lado del servidor. JSON WEB Tokens (JWT): Utilizaremos
        JWTpara la autenticacion de usuarios, permitiendo que los usuarios se
        autentiquen y accedan a sus tareas de manera segura.
      </h3>
      <h2 className="text-2xl py-4 px-2">Configuracion del Proyecto</h2>
      <h3 className="py-4 px-2">
        Para comenzar, hay que inicializar el proyecto. Se debe tener PostgreSQL
        instalado y configurado con una base de datos. Luego, configura el
        servidor Express.js: Se crea un servidor Express para manejar las
        solicitudes de la API. Se deberan de implementar las rutas para la
        autenticacion del usuario y sus operaciones CRUD de tareas. Se debe
        configurar la base de datos: conecta tu servidor a la base de datos
        PostgreSQL. Crea tablas para usuarios y tareas. Define los modelos
        correspondientes en tu servidor. Desarrolla el Fronted React: se
        construye la interfaz de usuario utilizando React. Se deben de
        crearcomponentes para mostrar la lista de tareas, el formulario de
        inicio de sesion y el formulario de registro. Se implementa la
        autenticacion de usuarios. Operaciones CRUD de Tareas: Se crean las
        rutas y controladores para realizar operaciones CRUD en las tareas. Esto
        incluye crear una nueva tarea, leer la lista de tareas, actualizar una
        tarea y eliminar una tarea.
      </h3>
    </div>
  );
}

export default AboutPage;
