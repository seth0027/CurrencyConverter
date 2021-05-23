import axios from "axios";

import { Country } from "../models/Country";

const API_URL = "https://restcountries.eu/rest/v2/all";
export const getCountries = async () => {
  const storedCountries = localStorage.getItem("countries");
  if (storedCountries) {
    const countries: Country[] = JSON.parse(storedCountries);
    return countries;
  }
  const res = await axios.get<Country[]>(API_URL);
  let countries = res.data;

  localStorage.setItem("countries", JSON.stringify(countries));
  return countries;
};
