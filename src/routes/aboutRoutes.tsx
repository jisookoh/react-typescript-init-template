import { RouteObject } from "react-router-dom";
import About from "@pages/about";
import Greeting from "@pages/about/greeting";
import History from "@pages/about/history";

const aboutRoutes: RouteObject[] = [
  {
    path: "about",
    element: <About />,
    loader: () => ({ text: "About!" }),
  },
  {
    path: "greeting",
    element: <Greeting />,
    loader: () => ({ text: "Greeting!" }),
  },
  {
    path: "history",
    element: <History />,
    loader: () => ({ text: "History!" }),
  },
];

export default aboutRoutes;
