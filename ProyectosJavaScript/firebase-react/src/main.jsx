import "./index.css";
import {App} from "./App";
import { BrowserRouter } from "react-router-dom";
import UserProvider from "./context/UserProvider";

// Obtiene una referencia al elemento con el ID root
const root = document.getElementById("root");

// Instancia para renderizar la app
const rootElement = createRoot(root);

// Renderizamos la app en el elemento root
rootElement.render(
  <BrowserRouter>
    <UserProvider>
      <App/>
    </UserProvider>
  </BrowserRouter>
);
