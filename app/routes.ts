import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("sobre-nosotros", "routes/sobre-nosotros.tsx"),
] satisfies RouteConfig;
