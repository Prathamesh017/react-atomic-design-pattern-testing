
import { Register,Login, ForgetPassword} from 'pages';
import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
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
]);
const App = () => {
  return<RouterProvider router={router} />
}

export default App
