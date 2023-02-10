import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import Companies from "./Companies/Companies";
import Invoices from "./Invoices/Invoices";
import Contacts from "./Contacts/Contacts";
import Showcontacts from "./Contacts/Showcontacts";
import ShowInvoices from "./Invoices/ShowInvoices";
import ShowCompanies from "./Companies/ShowCompanies";
import "./styles/index.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <HomePage />,
  },
  {
    path: `/companies`,
    element: <Companies />,
  },
  {
    path: `/invoices`,
    element: <Invoices />,
  },
  {
    path: `/showinvoices/:id`,
    element: <ShowInvoices />,
  },
  {
    path: `/contacts`,
    element: <Contacts />,
  },
  {
    path: `/showcontacts/:id`,
    element: <Showcontacts />,
  },
  {
    path: `/showcompanies/:id`,
    element: <ShowCompanies />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
