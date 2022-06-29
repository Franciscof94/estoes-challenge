import React from "react";
import Home from "./views/Home";
import Createproject from "./components/CreateProject/Createproject";
import { useRoutes } from "react-router-dom";

function App() {
  
  let element = useRoutes([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "add",
          element: <Createproject />,
        },
        {
          path: "edit",
          element: <Createproject />,
        },
      ],
    },
  ]);

  return element;
}

export default App;
