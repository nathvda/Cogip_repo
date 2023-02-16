import React from "react";
import { Link } from "react-router-dom";

const FullTableInvoices = ({ currentItems }) => {
  return (
    <div className="invoices__divTable">
      <table className="invoices__table">
        <thead>
          <tr className="invoices__table__head">
            <th>Invoice number</th>
            <th>Dates due</th>
            <th>Company</th>
            <th>Created at</th>
          </tr>
        </thead>
        <tbody className="invoices__table__body">
          {currentItems.map((item, index) => (
            <tr
              key={"tableInvoices" + item.ref + item.id}
              className={index % 2 === 0 ? "even" : "odd"}
            >
              <td>
                <Link
                  className="invoices__table__body--link"
                  to={`/showinvoices/${item.id}`}
                >
                  {item.ref}
                </Link>
              </td>
              <td>{item.date_due}</td>
              <td>{item.id_company}</td>
              <td>{item.created_at}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FullTableInvoices;
