import React from "react";
import DashStatistics from "./components/DashStatistics";
import DashLastInvoices from "./DashInvoices/components/DashLastInvoices";
import DashLastContacts from "./DashContacts/components/DashLastContacts";
import DashLastCompanies from "./DashCompanies/components/DashLastCompanies"

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
