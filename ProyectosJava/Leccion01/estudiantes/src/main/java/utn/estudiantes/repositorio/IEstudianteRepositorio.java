package utn.estudiantes.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;
import utn.estudiantes.modelo.Estudiantes2023;

//@Repository al extender de JpaRepository no es necesario la notacion @Repository
public interface IEstudianteRepositorio extends JpaRepository<Estudiantes2023, Integer> {
}
