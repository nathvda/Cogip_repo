import React, { useState, useEffect } from "react";
import axios from "axios";

const DashTableCompanies = () => {
      const [data, setData] = useState([]);
      const [currentPage, setCurrentPage] = useState(1);
      const [itemsPerPage, setItemsPerPage] = useState(10);

      useEffect(() => {
        axios({
          method: "get",
          url: "http://localhost:8080/companies",
          responseType: "json",
        }).then((res) => setData(res.data));
      }, []);

      const currentItems = data;
      return (
            <div className="dashcompanies__divTable">
              <table className="dashcompanies__table">
                <thead>
                  <tr className="dashcompanies__table__head">
                    <th>Name</th>
                    <th>TVA</th>
                    <th>Country</th>
                    <th>Type</th>
                    <th>Created at</th>
                  </tr>
                </thead>
                <tbody className="dashcompanies__table__body">
                  {currentItems.map((item) => (
                    <tr
                      key={"tableDashCompanies" + item.name + item.id}>
                      <td> {item.name}</td>
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
        
export default DashTableCompanies;