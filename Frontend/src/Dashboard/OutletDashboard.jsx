import React from "react";
import DashStatistics from "./components/DashStatistics"
import DashLastInvoices from "./components/DashLastInvoices";
import DashLastContacts from "./components/DashLastContacts";
import DashLastCompanies from "./components/DashLastCompanies"

const OutletDashboard = () => {
  return (
    <div className="dash__sectionMiddleContainer">
      <section className="dash__sectionMiddle dash__sectionMiddle--desktop">
        <DashStatistics />
      </section>
      <section className="dash__sectionMiddle dash__sectionMiddle--desktop">
        <DashLastInvoices />
      </section>
      <section className="dash__sectionMiddle dash__sectionMiddle--desktop">
        <DashLastContacts />
      </section>
      <section className="dash__sectionMiddle dash__sectionMiddle--desktop">
        <DashLastCompanies />
      </section>
    </div>
  );
};

export default OutletDashboard;
