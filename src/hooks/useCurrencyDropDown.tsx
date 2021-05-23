import React from "react";
import { getCurrencies } from "../data/getCurrencies";
import { CountryCurrency } from "../models/Country";

export const useCurrencyDropDown = () => {
  const [currencies, setCurrencies] = React.useState<CountryCurrency[]>([]);

  const fetchCurrencies = async () => {
    const data = await getCurrencies();
    setCurrencies(data);
  };

  React.useEffect(() => {
    fetchCurrencies();
  }, []);

  return currencies;
};
