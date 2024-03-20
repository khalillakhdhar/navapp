import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Root from "./routes/root";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./ErrorPage";
import "./index.css";
import Accueil from "./routes/Accueil";
import Details from "./routes/Details";
import Propos from "./routes/Propos";
import Specialite from "./routes/Specialite";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Accueil></Accueil>},
      {
        path: "/propos",
        element: <Propos></Propos>,
      },
      {
        path: "/specialite",
        element: <Specialite></Specialite>,
      },
      {
        path: "/details/:id",
        //element: <Details  />,
        // details with specialité props be passed as props
        element: <Details  />,
      }
    ],
    
    //path to error page error.jsx
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);