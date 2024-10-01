import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";

import { Home, SingleProduct, About } from "../Pages/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [],
      },
      {
        path: ":p",
        element: <SingleProduct />,
      },
      {
        path: "/About",
        element: <About />,
        children: [],
      },
    ],
  },
]);

export default router;
