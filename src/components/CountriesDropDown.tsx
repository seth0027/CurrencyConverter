import { Select } from "antd";
import React from "react";
import { Country } from "../models/Country";

export const CountriesDropDown = ({ countries }: { countries: Country[] }) => {
  return (
    <Select style={{ minWidth: 200 }}>
      {countries.length > 0 &&
        countries
          .filter((country) => {
            const currency = country.currencies[0];
            return currency && !currency.name.includes("[");
          })
          .map((country) => (
            <Select.Option key={country.alpha2Code} value={country.name}>
              <img
                style={{ width: 20, marginRight: 10 }}
                src={country.flag}
                alt={country.alpha3Code}
              />

              {`${country.currencies[0].name} ${
                country.currencies[0].symbol || ""
              }`}
            </Select.Option>
          ))}
    </Select>
  );
};
