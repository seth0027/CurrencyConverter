import { CountryCurrency } from "../models/Country";
import { getCountries } from "./getCountries";

export const getCurrencies = async () => {
  const countries = await getCountries();
  const currencies = countries
    .map((country) => country.currencies[0])
    .filter((currency, index) => !currency.name.includes("["));

  const data: CountryCurrency[] = [];
  const arr = Array.from(
    new Set(
      currencies
        .map((curr) => curr.code)
        .map((code) => currencies.find((curr) => curr.code === code))
    )
  );
  arr.forEach((item) => {
    if (item) {
      data.push(item);
    }
  });

  return data;
};
