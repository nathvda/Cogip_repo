import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './HomePage/HomePage';
import Companies from './Companies/Companies';
import Invoices from './Invoices/Invoices';
import Contacts from './Contacts/Contacts';
import "./styles/index.scss"

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <HomePage />,
  },
  {
    path: `/companies`,
    element: <Companies />
  },
  {
    path: `/invoices`,
    element: <Invoices />
  },
  {
    path: `/contacts`,
    element: <Contacts />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
