package utn.estudiantes.servicio;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import utn.estudiantes.modelo.Estudiantes2023;
import utn.estudiantes.repositorio.IEstudianteRepositorio;

import java.util.List;
@Service
public class EstudianteServicio implements IEstudianteServicio{
    @Autowired
    private IEstudianteRepositorio estudianteRepositorio;

    @Override
    public List<Estudiantes2023> listarEstudiantes() {
        List<Estudiantes2023> estudiantes2023 = estudianteRepositorio.findAll();
        return estudiantes2023;
    }

    @Override
    public Estudiantes2023 buscarEstudiantePorId(Integer idEstudiantes2023) {
        Estudiantes2023 estudiantes2023 = estudianteRepositorio.findById(idEstudiantes2023).orElse(null);
        return estudiantes2023;
    }

    @Override
    public void guardarEstudiante(Estudiantes2023 estudiantes2023) {
        estudianteRepositorio.save(estudiantes2023);
    }

    @Override
    public void eliminarEstudiante(Estudiantes2023 estudiantes2023) {
        estudianteRepositorio.delete(estudiantes2023);
    }
}
