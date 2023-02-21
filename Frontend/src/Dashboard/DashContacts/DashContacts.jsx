import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import DashTableContacts from "./components/DashTableContacts";

const DashContacts = () => {
  const [name, setName] = useState("");
  const [company_id, setCompany_id] = useState([]);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState([]);
  const [chosenCompany, setChosenCompany] = useState(0);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    const name = data.name;
    const email = data.email;
    const phone = data.phone;
    const chosenCompany = data.chosenCompany;

    try {
      setName(name);
      setEmail(email);
      setPhone(phone);
      setChosenCompany(chosenCompany);

      const response = await axios.post("http://localhost:8080/contacts/add", {
        name: name,
        company_id: chosenCompany,
        email: email,
        phone: phone,
      });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const getCompanies = async () => {
      try {
        const res = await axios.get("http://localhost:8080/companies");
        const data = await res.data;
        setCompany_id(data);
      } catch (error) {
        console.log(error);
      }
    };
    getCompanies();
  }, []);

  return (
    <div className="forms">
      <h2>New contact</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="name"
          type="text"
          required
          minLength="3"
          maxLength="80"
          placeholder="Name"
          {...register("name", {
            required: true,
            maxLength: 80,
            minLength: 3,
          })}
        />
        <input
          name="phone"
          type="tel"
          required
          placeholder="Phone"
          {...register("phone", {
            required: true,
            pattern: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g,
          })}
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />

        <select {...register("chosenCompany", { required: true })}>
          <option value="0">Company name</option>
          {company_id.map((company, index) => (
            <option key={index} value={company.id}>
              {company.name}
            </option>
          ))}
        </select>
        {errors["Company name"] && <span>This field is required</span>}

        <button type="submit">Create</button>
      </form>
      <DashTableContacts />
    </div>
  );
};

export default DashContacts;
