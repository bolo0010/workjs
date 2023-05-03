import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from "./components/Home/Login";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import NotFound from "./components/partials/NotFound/NotFound";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Register from "./components/Home/Register";
import Profile from "./components/Profile/Profile";
import MainList from "./components/Lists/MainList";
import List from "./components/Lists/List";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/list",
        element: <List />,
    },
    {
        path: "/profile",
        element: <Profile />,
    },
    {
        path: "/*",
        element: <NotFound />,
    },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);