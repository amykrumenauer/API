import App from "./App";
import "./index.css"
import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Visualizar from "./pages/Visualizar";
import Atualizar from "./pages/Atualizar";
import Deletar from "./pages/Deletar";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/visualizar",
    element: <Visualizar />,
  },
  {
    path: "/atualizar",
    element: <Atualizar />,
  },
  {
    path: "/deletar",
    element: <Deletar />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
