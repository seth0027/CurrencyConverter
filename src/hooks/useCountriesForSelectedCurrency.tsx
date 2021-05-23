import React from "react";
import { getCountries } from "../data/getCountries";
import { Country, CountryCurrency } from "../models/Country";

export const useCountriesForSelectedCurrency = (
  selectedTargetCurrency: CountryCurrency | undefined
) => {
  const [countries, setCountries] = React.useState<Country[]>([]);

  const fetchCountries = async () => {
    const data = await getCountries();
    setCountries(data);
  };

  React.useEffect(() => {
    fetchCountries();
  }, []);

  const countriesForSelectedTargetCurrency = React.useMemo(() => {
    if (selectedTargetCurrency) {
      const selectedCountries = new Set<Country>();
      countries.forEach((country) => {
        country.currencies.forEach((curr) => {
          if (curr.code === selectedTargetCurrency.code) {
            selectedCountries.add(country);
          }
        });
      });
      console.log(Array.from(selectedCountries));
      return Array.from(selectedCountries);
    } else {
      return [];
    }
  }, [countries, selectedTargetCurrency]);
  return countriesForSelectedTargetCurrency;
};
