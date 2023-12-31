import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import JoinNowApp from "./pages/join-now/JoinNowApp.tsx";
import Donate from "./pages/donate/donate.tsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LearnMore from "./pages/learn-more/LearnMore.tsx";
import { TurkeyApp } from "./pages/incident/turkey/TurkeyApp.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/join",
    element: <JoinNowApp />,
  },
  {
    path: "/donate",
    element: <Donate />,
  },
  {
    path: "/about",
    element: <LearnMore />,
  },
  {
    path: "incident/morocco",
    element: <h1> Hellw </h1>,
  },
  {
    path: "incident/turkey",
    element: <TurkeyApp />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
