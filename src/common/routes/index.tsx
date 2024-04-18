
import { protectedRoutes } from './protected';
import { publicRoutes } from './public';

export const AppRoutes = () => {
  const token=localStorage.getItem("access-token");
  const routes = token ? [...protectedRoutes,...publicRoutes] : publicRoutes;

  return routes;
};