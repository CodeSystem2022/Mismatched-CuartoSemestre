import {Button, Card, Container, Input, Label} from "../components/UI";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext';

function RegisterPage() {
  
  const { register, handleSubmit, formState: {errors}} = useForm();

  const {signup, errors: setUserErrors } = useAuth();
  const navigate = useNavigate();
  const onSubmit = handleSubmit(async(data) => {
    const user = await signup(data);
    if (user){
      navigate("/tareas");
    }
  });


  return (
    <Container className="h-[calc(100vh-10rem)] flex items-center justify-center">
      <Card>
        {setUserErrors &&
          setUserErrors.map((error) => (
            // eslint-disable-next-line react/jsx-key
            <p className="bg-red-500 text-white text-center p-2">{error}</p>
          ))
        }
      <h2 className="text-4xl font-bold my-4"> Registro</h2>
        <form onSubmit={onSubmit}>
        <Label htmlFor='name'>Nombre</Label>
          <Input placeholder="Ingrese su nombre"
          {...register("name", {required:true})}></Input>

          {
            errors.name && <p className="text-red-500">Este campo es requerido</p>
          }
          <Label htmlFor='email'>Email</Label>
          <Input type="email" placeholder="Ingrese su email"
          {...register("email", {required:true})}></Input>

          {
            errors.email && <p className="text-red-500">Este campo es requerido</p>
          }
          <Label htmlFor='password'>Contraseña</Label>
          <Input type="password" placeholder="Ingrese su contraseña"
          {...register("password", {required:true})}></Input>

          {
            errors.password && <p className="text-red-500">Este campo es requerido</p>
          }

          <Button>Registrarse</Button>
        </form>
        <div className="flex justify-between my-4">
          <p className="mr-4">¿Ya tienes cuenta?{' '}<Link to="/login">Iniciar sesion</Link></p>
        </div>
      </Card>
    </Container>
  );
}

export default RegisterPage;
