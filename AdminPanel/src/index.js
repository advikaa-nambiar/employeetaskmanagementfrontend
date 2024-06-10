
import React from 'react';
import ReactDOM from 'react-dom/client';
import '/index.css';
import App from './App';
import LoginSignup from './Components/loginsignup/loginsignup';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home';

const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginSignup />,
    },
    {
        path: "loginsignup",
        element: <LoginSignup />,
      },
  ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);