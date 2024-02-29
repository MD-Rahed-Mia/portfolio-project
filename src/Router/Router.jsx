import { createBrowserRouter } from "react-router-dom";
import Project from "../Pages/Project/Project";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/project/:projectId",
    element: <Project />,
  },
]);

export default router;
