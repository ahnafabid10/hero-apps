import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "../Pages/Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/HomePage/Home";
import Apps from "../Pages/Apps/Apps";
import AppsDetails from "../Pages/AppsDetails/AppsDetails";
import Installation from "../Pages/Installation/Installation";

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
      loader:()=> fetch('data.json')
    },
    {
      path: '/apps',
      Component: Apps,
      loader:()=> fetch('data.json')
    },
    {
      path: '/installation',
      Component: Installation,
    },
    {
      path:"*" ,
      Component: ErrorPage
    },
    {
      path: '/appsDetails/:id',
      Component: AppsDetails,
      loader:()=> fetch('data.json')
    }
  
  
  
  
  ]
  },
]);

<RouterProvider router={router} />