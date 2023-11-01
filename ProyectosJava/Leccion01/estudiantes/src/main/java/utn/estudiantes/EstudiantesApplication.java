package utn.estudiantes;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import utn.estudiantes.modelo.Estudiantes2023;
import utn.estudiantes.servicio.EstudianteServicio;

import java.util.List;
import java.util.Scanner;

@SpringBootApplication
public class EstudiantesApplication implements CommandLineRunner  {//Vamos a ejectur por pantalla

	@Autowired
	private EstudianteServicio estudianteServicio;
	private static final Logger logger= LoggerFactory.getLogger(EstudiantesApplication.class);

	String nl = System.lineSeparator();//Salto de linea para cualquier sistema operativo


	public static void main(String[] args) {

		logger.info("Iniciando aplicacion");
		//Levantar la fabrica de spring
		SpringApplication.run(EstudiantesApplication.class, args);
		logger.info("Aplicacion finalizada");
	}

	@Override
	public void run(String... args) throws Exception {
		logger.info(nl + "Ejecutando el metodo run" + nl);
		var salir = false;
		var consola = new Scanner(System.in);
		while(!salir){
			mostrarMenu();
			salir = ejecutarOpciones(consola);
			logger.info(nl);
		}//Fin ciclo while
	}
	private void mostrarMenu(){
//		logger.info(nl);
		logger.info("""
				**********Sistema de Estudiantes**********
				1. Listar estudiantes
				2. Buscar estudiante por id
				3. Agregar estudiante
				4. Modificar estudiante
				5. Eliminar estudiante
				6. Salir
				Elija una opcion: """);

	}

	private boolean ejecutarOpciones(Scanner consola){
		var opcion = Integer.parseInt(consola.nextLine());
		var salir = false;
		switch (opcion){
			case 1 -> {
				logger.info(nl + "Listado de estudiantes" + nl);
				List<Estudiantes2023> estudiantes2023 = estudianteServicio.listarEstudiantes();
				estudiantes2023.forEach(estudiante -> logger.info(estudiante.toString() + nl));
			}//Fin switch
			case 2 -> {
				logger.info(nl + "Buscar estudiante por id" + nl);
				logger.info("Ingrese el id del estudiante: ");
				var idEstudiante = Integer.parseInt(consola.nextLine());
				Estudiantes2023 estudiante = estudianteServicio.buscarEstudiantePorId(idEstudiante);
				if (estudiante != null)
					logger.info("Estudiante encontrado: " + estudiante.toString() + nl);
				else
					logger.info("No se encontro el estudiante con id: " + idEstudiante + nl);
			}
			case 3 -> {
				logger.info(nl + "Agregar estudiante" + nl);
				logger.info("Ingrese el nombre del estudiante: ");
				var nombre = consola.nextLine();
				logger.info("Ingrese el apellido del estudiante: ");
				var apellido = consola.nextLine();
				logger.info("Ingrese el telefono del estudiante: ");
				var telefono = consola.nextLine();
				logger.info("Ingrese el email del estudiante: ");
				var email = consola.nextLine();
				Estudiantes2023 estudiante = new Estudiantes2023();
				estudiante.setNombre(nombre);
				estudiante.setApellido(apellido);
				estudiante.setTelefono(telefono);
				estudiante.setEmail(email);
				estudianteServicio.guardarEstudiante(estudiante);
				logger.info("Estudiante guardado con exito"+ estudiante + nl);
			}//Fin switch
			case 4 -> {
				logger.info(nl + "Modificar estudiante" + nl);
				logger.info("Ingrese el id del estudiante: ");
				var idEstudiante = Integer.parseInt(consola.nextLine());
				Estudiantes2023 estudiante = estudianteServicio.buscarEstudiantePorId(idEstudiante);
				if (estudiante != null) {
					logger.info("Estudiante encontrado: " + estudiante.toString() + nl);
					logger.info("Ingrese el nombre del estudiante: ");
					var nombre = consola.nextLine();
					logger.info("Ingrese el apellido del estudiante: ");
					var apellido = consola.nextLine();
					logger.info("Ingrese el telefono del estudiante: ");
					var telefono = consola.nextLine();
					logger.info("Ingrese el email del estudiante: ");
					var email = consola.nextLine();
					estudiante.setNombre(nombre);
					estudiante.setApellido(apellido);
					estudiante.setTelefono(telefono);
					estudiante.setEmail(email);
					estudianteServicio.guardarEstudiante(estudiante);
					logger.info("Estudiante modificado con exito" + nl);
				} else
					logger.info("No se encontro el estudiante con id: " + idEstudiante + nl);
			}
			case 5 -> {
				logger.info(nl + "Eliminar estudiante" + nl);
				logger.info("Ingrese el id del estudiante: ");
				var idEstudiante = Integer.parseInt(consola.nextLine());
				Estudiantes2023 estudiante = estudianteServicio.buscarEstudiantePorId(idEstudiante);
				if (estudiante != null) {
					logger.info("Estudiante encontrado: " + estudiante.toString() + nl);
					estudianteServicio.eliminarEstudiante(estudiante);
					logger.info("Estudiante eliminado con exito" + nl);
				} else
					logger.info("No se encontro el estudiante con id: " + idEstudiante + nl);
			}//Fin switch
			case 6 -> {
				logger.info(nl + "Hasta pronto!" + nl);
				salir = true;
			}//Fin switch
			default -> logger.info("Opcion incorrecta" + nl);

		}
		return salir;
	}
}
