import React from 'react';
import {
  createBrowserRouter,
  
} from "react-router";
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import Apps from '../Pages/Apps/Apps';


export let router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            index: true,
            // path:"/",
            loader: ()=>fetch('AppsData.json'),
            Component:Home

        },
        {
          path: "apps",
          loader: ()=>fetch('AppsData.json'),
          Component: Apps
        }
    ]
  },
]);