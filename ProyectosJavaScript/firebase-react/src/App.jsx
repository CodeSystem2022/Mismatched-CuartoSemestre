import { Routes, Route } from "react-router-dom";

import Login from "./routes/Login";
import Register from "./routes/Register";
import Home from "./routes/Home";
import Inicio from "./routes/Inicio";
import Perfil from "./routes/Perfil";


import Navbar from "./components/Navbar";
//import RequireAuth from "./components/RequireAuth";
import { useContext } from "react";
import { UserContext } from "./context/UserProvider";
import LayoutContainerForm from "./components/layouts/LayoutContainerForm";
import { LayoutRequireAuth } from "./components/layouts/LayoutRequireAuth";
import NotFound from "./routes/NotFound";



const App = () => {
  const { user } = useContext(UserContext);
  if (user === false) {
    return <p>Loading...</p>
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Inicio />} />

        <Route path="/" element={<LayoutRequireAuth />}>
          <Route path="/home" element={<Home />} />
          <Route path="/perfil" element={<Perfil />} />
        </Route>

        <Route path="/" element={<LayoutContainerForm />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        <Route path="*" element={<NotFound />}></Route>

      </Routes >
    </>
  );
};

export default App;