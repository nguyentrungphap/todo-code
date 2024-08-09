import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TodoList from "./Todo/TodoList/index.jsx";
import FormLogin from "./Todo/FormLogin/index.jsx";
import LoginWithReduxHookForm from "./Todo/LoginWithReduxHookForm/index.jsx";
import Apicode from "./Todo/Apicode/index.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "TodoList",
        element: <TodoList />,
      },
      {
        path: "FormLogin",
        element: <FormLogin />,
      },
      {
        path: "LoginWithReduxHookForm",
        element: <LoginWithReduxHookForm />,
      },
      {
        path: "Apicode",
        element: <Apicode />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
