
import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { AppRoutes } from 'common/routes';

const routes=AppRoutes();
const router = createBrowserRouter(routes);
const App = () => {
  return<RouterProvider router={router} />
}

export default App
