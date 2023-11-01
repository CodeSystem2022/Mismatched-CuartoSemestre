package utn.tienda_libros.vista;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import utn.tienda_libros.modelo.Libro;
import utn.tienda_libros.servicio.LibroServicio;

import javax.swing.*;
import javax.swing.table.DefaultTableModel;
import java.awt.*;

@Component //Va a ser un bean de Spring, para que se pueda inyectar en otras clases
public class LibroFrom extends JFrame {
    LibroServicio libroServicio;
    private JPanel panel;
    private JTable tablaLibros;
    private JTextField libroTexto;
    private JTextField autorTexto;
    private JTextField precioTexto;
    private JTextField existenciasTexto;
    private JButton agregarButton;
    private JButton modificarButton;
    private JButton eliminarButton;
    private DefaultTableModel tablaModeloLibros;

    @Autowired
    public LibroFrom(LibroServicio libroServicio) {
        this.libroServicio = libroServicio;
        iniciarForma();
        agregarButton.addActionListener(e -> agregarLibro());

    }

    private void iniciarForma() {
        setContentPane(panel);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setVisible(true);
        setSize(900, 700);
        //Para obtener las dimensiones de la ventana
        Toolkit toolkit = Toolkit.getDefaultToolkit();
        Dimension tamanioPantalla = toolkit.getScreenSize();

        int x = (tamanioPantalla.width - getWidth() / 2);
        int y = (tamanioPantalla.height - getHeight() / 2);
        setLocation(x, y);
    }

    private void agregarLibro(){
        //Leer los valores del formulario
        if(libroTexto.getText().equals("")){
            mostrarMensaje("Ingresa el nombre del libro");
            libroTexto.requestFocusInWindow();
            return;
        }
        var nombreLibro = libroTexto.getText();

        if(autorTexto.getText().equals("")){
            mostrarMensaje("Ingresa el nombre del autor");
            autorTexto.requestFocusInWindow();
            return;
        }
        var autor = autorTexto.getText();

        if(precioTexto.getText().equals("")){
            mostrarMensaje("Ingresa el precio del libro");
            precioTexto.requestFocusInWindow();
            return;
        }
        var precio = Double.parseDouble(precioTexto.getText());

        if(existenciasTexto.getText().equals("")){
            mostrarMensaje("Ingresa las existencias del libro");
            existenciasTexto.requestFocusInWindow();
            return;
        }
        var existencias = Integer.parseInt(existenciasTexto.getText());

        //Crear el objeto de libro
        var libro = new Libro(null, nombreLibro, autor, precio, existencias);//Si le agregamos el id, se va a actualizar,
        //sino se va a crear un nuevo objeto
//        libro.setNombreLibro(nombreLibro);
//        libro.setAutor(autor);
//        libro.setPrecio(precio);
//        libro.setExistencias(existencias);
        this.libroServicio.guardarLibro(libro);
        mostrarMensaje("Libro guardado correctamente");
        //Limpiar el formulario
        limpiarFormulario();
        listarLibros();
    }
    private void limpiarFormulario(){
        libroTexto.setText("");
        autorTexto.setText("");
        precioTexto.setText("");
        existenciasTexto.setText("");
    }
    private void mostrarMensaje(String mensaje){
        JOptionPane.showMessageDialog(this, mensaje);
    }

    private void createUIComponents() {//Este metodo se ejecuta antes del constructor y se va a utilizar para personalizar
        //los componentes del formulario. Ya lo tenemos disponible porque lo inyectamos en el constructor

        this.tablaModeloLibros = new DefaultTableModel(0, 5);
        String[] cabecera = {"Id", "Libro", "Autor", "Precio", "Existencias"};
        this.tablaModeloLibros.setColumnIdentifiers(cabecera);
        //Instanciar el objeto de JTable
        this.tablaLibros = new JTable(tablaModeloLibros);
        listarLibros();
    }
    private void listarLibros(){
        //Primero limpiamos la tabla
        tablaModeloLibros.setRowCount(0);
        //Obtenemos la lista de libros de la bd
        var libros = libroServicio.listarLibros();
        //Iteramos cada libro
        libros.forEach((libro) -> {//Funcion lambda
            //Creamos cada registro para agregarlos a la tabla
            Object[] renglonLibro = {
                    libro.getIdLibro(),
                    libro.getNombreLibro(),
                    libro.getAutor(),
                    libro.getPrecio(),
                    libro.getExistencias()
            };
            //Agregamos el registro al modelo de la tabla
            this.tablaModeloLibros.addRow(renglonLibro);
        });

    }

}
