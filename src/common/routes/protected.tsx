import React from "react";
import { List,ResetPassword} from 'pages';
export const protectedRoutes = [
  {
    path: "/list",
    element: <List/>
  },
  {
    path: "/reset-password",
    element: <ResetPassword></ResetPassword>
  },
];