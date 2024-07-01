import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Inscription from "./pages/inscription";
import PagePanier from "./components/panier";
import Cgv from "./pages/cgv";
import MentionsLegales from "./pages/mentions-legales";
import Contact from "./pages/contact";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "inscription",
    element: <Inscription />,
    
  },
  {
    path: "cgv",
    element: <Cgv />,
  },
  {
    path: "mentions-legales",
    element: <MentionsLegales />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "Panier",
    element: <PagePanier />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
