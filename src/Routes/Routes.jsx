import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "../Pages/Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/HomePage/Home";
import Apps from "../Pages/Apps/Apps";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
      index: true,
      path: '/',
      Component: Home,
    },
      {
      path: '/apps',
      Component: Apps,
    },
  
  
  
  
  ]
  },
]);

<RouterProvider router={router} />