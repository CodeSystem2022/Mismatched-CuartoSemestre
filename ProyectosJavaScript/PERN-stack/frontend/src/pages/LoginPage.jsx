import { Card, Input, Button, Label } from "../components/UI";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { Container } from "../components/UI/Container";

function LoginPage() {
  const { register, handleSubmit, formState:{errors}} = useForm();
  const { signin, errors: loginErrors } = useAuth();
  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (data) => {
    const user = await signin(data);
    if (user) {
      navigate("/tareas");
    }
  });

  return (
    <Container className="h-[calc(100vh-10rem)] flex items-center justify-center">
      <Card>
        {loginErrors &&
          loginErrors.map((error) => (
            // eslint-disable-next-line react/jsx-key
            <p className="bg-red-500 text-white text-center p-2">{error}</p>
          ))}

        <h2 className="text-4xl font-bold my-2 text-center">Iniciar Sesion</h2>
        <form onSubmit={onSubmit}>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            placeholder="Ingrese su email"
            {...register("email", {
              required: true,
            })}
          ></Input>
          {
            errors.email && <p className="text-red-500">Este campo es requerido</p>
          }

          <Label htmlFor="password">Contraseña</Label>
          <Input
            type="password"
            placeholder="Ingrese su contraseña"
            {...register("password", {
              required: true,
            })}
          ></Input>
          {
            errors.password && <p className="text-red-500">Este campo es requerido</p>
          }

          <Button>Ingresar</Button>
        </form>
        <div className="flex justify-between my-4">
          <p className="mr-4">
            ¿No tienes cuenta? <Link to="/register">Registrarse</Link>
          </p>
        </div>
      </Card>
    </Container>
  );
}

export default LoginPage;
