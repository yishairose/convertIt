import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Home from "./pages/Home/Home.jsx";
import News from "./pages/News.jsx";
import History from "./pages/History.jsx";
import "./index.css";
import Currencies from "./pages/Currencies.jsx";
import { loader as conversionLoader } from "./pages/Home/ConversionForm.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: conversionLoader,
      },
      {
        path: "history",
        element: <History />,
      },
      {
        path: "currencies",
        element: <Currencies />,
        children: [],
      },
      {
        path: "news",
        element: <News />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
