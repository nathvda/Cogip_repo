import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './pages/HomePage';
import Companies from './pages/Companies';
import Invoices from './pages/Invoices';
import Contacts from './pages/Contacts';
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
