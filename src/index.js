import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import './index.css';
import Root from "./routes/root.jsx";
import ErrorPage from "./error-page.jsx";
import Checkout from "./routes/checkout.jsx";
import Success, {loader as paymentLoader} from "./routes/success.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/checkout",
    element: <Checkout/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/success/:paymentId",
    element: <Success/>,
    loader: paymentLoader,
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
