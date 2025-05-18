import "reset-css";
import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";

import Login from "./App/Views/Login/Login";
import Profile from "./App/Views/Profile/Profile";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import ProfileProvider from "./Components/ProfileProvider/ProfileProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProfileProvider>
        <Outlet />
      </ProfileProvider>
    ),
    children: [
      {
        path: "",
        element: <Profile />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
