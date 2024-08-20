import { createBrowserRouter } from "react-router-dom";

import LayOut from "./LayOut";
import Home from "./Home";
import AnimeDetails from "./components/AnimeDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut></LayOut>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: `/card/:id`,
        element: <AnimeDetails></AnimeDetails>,
      },
    ],
  },
]);
