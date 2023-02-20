import React, { useState} from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const DashCompanies = () => {
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [tva, setTva] = useState([]);
  const [type, setType] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    const name = data.name;
    const country = data.country;
    const tva = data.tva;
    const type = data.type;

    try {
      setName(name);
      setCountry(country);
      setTva(tva);
      setType(type);

      const response = await axios.post("http://localhost:8080/companies/add", {
        name: name,
        country: country,
        tva: tva,
        type: type,
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <h2>New company</h2>
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
          name="country"
          id="country"
          type="text"
          required
          minLength="2"
          maxLength="10"
          placeholder="Country"
          {...register("country", {
            required: true,
            maxLength: 10,
            minLength: 2,
          })}
        />
        <input
          name="tva"
          id="tva"
          type="text"
          required
          minLength="11"
          maxLength="80"
          placeholder="TVA"
          {...register("tva", {
            required: true,
            maxLength: 80,
            minLength: 2,
          })}
        />
      

        <input
          name="type"
          id="client"
          type="radio"
          value="Client"
          required
          {...register("type", {
            required: true,
          })}
        />
        <label for="client">Client</label>

        <input
          name="type"
          id="seller"
          type="radio"
          value="Seller"
          required
          {...register("type", {
            required: true,
          })}
        />
        <label for="seller">Seller</label>

        <button type="submit">Create</button>
      </form>
    </>
  );
};

export default DashCompanies;
