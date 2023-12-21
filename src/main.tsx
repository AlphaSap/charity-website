import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import JoinNowApp from "./pages/join-now/JoinNowApp.tsx";
import Donate from "./pages/donate/donate.tsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LearnMore from "./pages/learn-more/LearnMore.tsx";

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
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
