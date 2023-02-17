import React from "react";
import { Link } from "react-router-dom";

const FullTableContacts = ({ currentItems }) => {
  return (
    <div className="contacts__divTable">
      <table className="contacts__table">
        <thead>
          <tr className="contacts__table__head">
            <th>Name</th>
            <th>Phone</th>
            <th>Mail</th>
            <th>Company</th>
            <th>Created at</th>
          </tr>
        </thead>
        <tbody className="contacts__table__body">
          {currentItems.map((item, index) => (
            <tr
              key={"tableContacts" + item.name + item.id}
              className={index % 2 === 0 ? "even" : "odd"}
            >
              <td>
                <Link
                  className="contacts__table__body--link"
                  to={`/showcontacts/${item.id}`}
                >
                  {item.name}
                </Link>
              </td>
              <td>{item.phone}</td>
              <td>{item.email}</td>
              <td>{item.company_id}</td>
              <td>{item.created_at}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FullTableContacts;
