import { createBrowserRouter } from "react-router-dom";

import { Pages } from "./pages";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Pages.Home />,
  },
  {
    path: "/state",
    element: <Pages.State />,
  },
  {
    path: "/effect",
    element: <Pages.Effect />,
  },
  {
    path: "/callback",
    element: <Pages.Callback />,
  },
]);

export default Router;
