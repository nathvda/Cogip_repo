import React from "react";
import { Link } from "react-router-dom";

const FullTableCompanies = ({ currentItems }) => {
  return (
    <div className="companies__divTable">
      <table className="companies__table">
        <thead>
          <tr className="companies__table__head">
            <th>Name</th>
            <th>TVA</th>
            <th>Country</th>
            <th>Type</th>
            <th>Created at</th>
          </tr>
        </thead>
        <tbody className="companies__table__body">
          {currentItems.map((item, index) => (
            <tr
              key={"tableCompanies" + item.name + item.id}
              className={index % 2 === 0 ? "even" : "odd"}
            >
              <td>
                <Link
                  className="companies__table__body--link"
                  to={`/showcompanies/${item.id}`}
                >
                  {item.name}
                </Link>
              </td>
              <td>{item.tva}</td>
              <td>{item.country}</td>
              <td>{item.types_id}</td>
              <td>{item.created_at}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FullTableCompanies;
