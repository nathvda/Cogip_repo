import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const DashInvoices = () => {
  const [id_company, setId_company] = useState([]);
  const [reference, setRef] = useState("");
  const [date, setDate] = useState("");
  const [chosenCompany, setChosenCompany] = useState(0);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    const chosenCompany = data.chosenCompany;
    const reference = data.reference;
    const date = data.date;

    try {
      setChosenCompany(chosenCompany);
      setRef(reference);
      setDate(date);

      const response = await axios.post("http://localhost:8080/invoices/add", {
        ref: reference,
        date_due: date,
        id_company: chosenCompany,
      });
      //const responseData = response.data;
      //console.log(responseData);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const getCompanies = async () => {
      try {
        const res = await axios.get("http://localhost:8080/companies");
        const data = await res.data;
        setId_company(data);
      } catch (error) {
        console.log(error);
      }
    };
    getCompanies();
  }, []);

  return (
    <>
      <h2>New invoice</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="reference"
          type="text"
          required
          minLength="10"
          maxLength="80"
          placeholder="FXXXXXXXX-XXX"
          {...register("reference", {
            required: true,
            maxLength: 80,
            minLength: 10,
          })}
        />

        <input
          name="date"
          type="date"
          required
          {...register("date", { required: true })}
        />

        <select {...register("chosenCompany", { required: true })}>
          <option value="0">Company name</option>
          {id_company.map((company, index) => (
            <option key={index} value={company.id}>
              {company.name}
            </option>
          ))}
        </select>
        {errors["Company name"] && <span>This field is required</span>}

        <button type="submit">Create</button>
      </form>
    </>
  );
};
export default DashInvoices;
