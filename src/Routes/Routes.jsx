import React from 'react';
import {
  createBrowserRouter,
  
} from "react-router";
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import Apps from '../Pages/Apps/Apps';
import Installation from '../Pages/Installation/Installation';
import AppDetails from '../Pages/AppDetails/AppDetails';



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
          Component: Apps,
          
        },
       
         {
              path: "/appdetails/:id",
               loader: ()=>fetch('./AppsData.json'),
              Component: AppDetails
            },
        {
          path: "installation",
          loader: ()=>fetch('AppsData.json'),
          Component: Installation
        }
    ]
  },
]);