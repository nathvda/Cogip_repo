import React from "react";
import DashStatistics from "./components/DashStatistics"
import DashLastInvoices from "./components/DashLastInvoices";
import DashLastContacts from "./components/DashLastContacts";
import DashLastCompanies from "./components/DashLastCompanies"

const OutletDashboard = () => {
  return (
    <div>
      <section className="dash__sectionMiddle">
        <DashStatistics />
      </section>
      <section className="dash__sectionMiddle">
        <DashLastInvoices />
      </section>
      <section className="dash__sectionMiddle">
        <DashLastContacts />
      </section>
      <section className="dash__sectionMiddle">
        <DashLastCompanies />
      </section>
    </div>
  );
};

export default OutletDashboard;
