import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import IndexPage from "./pages/IndexPage";
import ManagePage from "./pages/ManagePage";
import BookMarkPage from "./pages/BookMarkPage";
import InsurePage from "./pages/InsurePage";
import FyloPage from "./pages/FyloPage";
import ContactPage from "./pages/ContactPage";

const appRoutter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/index",
        element: <IndexPage />,
      },
      {
        path: "/manage",
        element: <ManagePage />,
      },
      {
        path: "/bookmark",
        element: <BookMarkPage />,
      },
      {
        path: "/insure",
        element: <InsurePage />,
      },
      {
        path: "/fylo",
        element: <FyloPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRoutter} />
  </React.StrictMode>
);
