package utn.estudiantes.modelo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity//mapea la clase a una tabla
//boilerplate - codigo repetititivo
@Data//getters, setters, toString, equals, hashcode
@NoArgsConstructor//constructor vacio
@AllArgsConstructor//constructor con todos los atributos
@ToString//toString
public class Estudiantes2023 {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idestudiantes2023;
    private String nombre;
    private String apellido;
    private String telefono;
    private String email;
}
