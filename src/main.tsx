import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PostDetail from "./components/PostDetail.tsx";
import Form from "./components/form/Form.tsx";
import Header from "./components/header/Header.tsx";
import ArticleList from "./components/list/ArticleList.tsx";
import EditForm from "./components/form/EditForm.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/post/:id",
    element: <PostDetail />,
  },

  {
    path: "/form",
    element: <Form />,
  },
  {
    path: "/editform/:id",
    element: <EditForm />,
  },
  {
    path: "/list",
    element: <ArticleList />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
