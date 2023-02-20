import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import Companies from "./Companies/Companies";
import Invoices from "./Invoices/Invoices";
import Contacts from "./Contacts/Contacts";
import Showcontacts from "./Contacts/Showcontacts";
import ShowInvoices from "./Invoices/ShowInvoices";
import ShowCompanies from "./Companies/ShowCompanies";
import Dashboard from "./Dashboard/Dashboard";
import DashInvoices from "./Dashboard/DashInvoices";
import DashCompanies from "./Dashboard/DashCompanies";
import DashContacts from "./Dashboard/DashContacts";
import "./styles/index.scss";
import ProtectedRoute from "./componentsIndividuals/ProtectedRoute";
import OutletDashboard from "./Dashboard/OutletDashboard";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="*" element={<HomePage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="invoices" element={<Invoices />} />
      <Route path="contacts" element={<Contacts />} />
      <Route path="companies" element={<Companies />} />
      <Route path="showcontacts/:id" element={<Showcontacts />} />
      <Route path="showinvoices/:id" element={<ShowInvoices />} />
      <Route path="showcompanies/:id" element={<ShowCompanies />} />
      <Route path="dashboard" element={<Dashboard />}>
        <Route path="" element={<OutletDashboard />} />
        <Route path="companies" element={<DashCompanies />} />
        <Route path="contacts" element={<DashContacts />} />
        <Route path="invoices" element={<DashInvoices />} />
      </Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
