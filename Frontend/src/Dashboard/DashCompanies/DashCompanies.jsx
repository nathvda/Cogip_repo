import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import DashTableCompanies from "./components/DashTableCompanies";

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
      <h2 className="newcompany__form__title">New company</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="newcompany__form__input--name"
          name="name"
          type="text"
          required
          minLength="3"
          maxLength="80"
          placeholder="ex: Chocopie"
          {...register("name", {
            required: true,
            maxLength: 80,
            minLength: 3,
          })}
        />

        <input
          className="newcompany__form__input--country"
          name="country"
          id="country"
          type="text"
          required
          minLength="2"
          maxLength="10"
          placeholder="ex: Belgium"
          {...register("country", {
            required: true,
            maxLength: 10,
            minLength: 2,
          })}
        />
        <input
          className="newcompany__form__input--tva"
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
          className="newcompany__form__input--type"
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
          className="newcompany__form__input--type"
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

        <button type="submit" className="newcompany__form__btn">
          Create
        </button>
      </form>
      <DashTableCompanies />
    </>
  );
};

export default DashCompanies;
