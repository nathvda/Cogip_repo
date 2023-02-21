import React, { useState, useEffect } from "react";
import axios from "axios";


const DashTableCompanies = () => {
      const [data, setData] = useState([]);
      const modifyOne = async (id) => {
        console.log("clicked");
        console.log(id);

        try{
          await axios({
            method: "PUT",
            url:`http://localhost:8080/companies/${id}/edit`
          }).then(console.log("done"));
        } catch (error) {
          console.log(error);
        }
        window.location.reload();
      };

      useEffect(() => {
        axios({
          method: "GET",
          url: "http://localhost:8080/companies",
          responseType: "json",
        }).then((res) => setData(res.data));
      }, []);

      const currentItems = data;
      return (
            <div className="dashTable__divTable">
              <table className="dashTable__table">
                <thead>
                  <tr className="dashTable__table__head">
                    <th>Name</th>
                    <th>TVA</th>
                    <th>Country</th>
                    <th>Type</th>
                    <th>Created at</th>
                  </tr>
                </thead>
                <tbody className="dashTable__table__body">
                  {currentItems.map((item) => (
                    <tr
                      key={"tableDashCompanies" + item.name + item.id}>
                      <td> {item.name}</td>
                      <td>{item.tva}</td>
                      <td>{item.country}</td>
                      <td>{item.types_id}</td>
                      <td>{item.created_at}
                      <div className="dashTable__table__bodyContent">
                      <form className="modify"
                  onSubmit={(e) => {
                    e.preventDefault();
                    modifyOne(item.id);
                  }}
                >
                  <button type="submit">
                  <svg xmlns="http://www.w3.org/2000/svg" 
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="pencil"
                  viewBox="0 0 512 512">
                    <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"/></svg>
                  </button>
                  </form>

                      </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        };
        
export default DashTableCompanies;