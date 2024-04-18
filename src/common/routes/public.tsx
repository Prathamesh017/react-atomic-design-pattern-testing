import React from "react";
import { Register,Login, ForgetPassword} from 'pages';
export const publicRoutes = [
  {
    path: "/",
    element: <Register/>
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/forget-password",
    element: <ForgetPassword/>
  },
];