import React from "react";
import { getExchangeRateFor } from "../data/getExchangeRates";
import { CountryCurrency } from "../models/Country";

let perOneRate: number | undefined;
export const useConversion = () => {
  const [selectedTargetCurrency, setSelectedTargetCurrency] =
    React.useState<CountryCurrency | undefined>();

  const [selectedBaseCurrency, setSelectedBaseCurrency] =
    React.useState<CountryCurrency | undefined>();

  const [baseAmount, setBaseAmount] = React.useState(1);
  const [targetAmount, setTargetAmount] = React.useState(1);

  React.useEffect(() => {
    const fetchRateFor = async (base: string, target: string) => {
      const rate = await getExchangeRateFor(base, target);
      perOneRate = rate;
      setTargetAmount(rate * baseAmount);
    };
    if (selectedBaseCurrency && selectedTargetCurrency) {
      fetchRateFor(selectedBaseCurrency.code, selectedTargetCurrency.code);
    }
  }, [baseAmount, selectedBaseCurrency, selectedTargetCurrency]);

  React.useEffect(() => {
    if (perOneRate) {
      setBaseAmount(parseFloat(((1 / perOneRate) * targetAmount).toFixed(4)));
    }
  }, [targetAmount]);

  const forOneRate = () => {
    let text = "";
    if (selectedBaseCurrency) {
      text += `1 ${selectedBaseCurrency.name} equals`;
    }
    if (selectedTargetCurrency && perOneRate) {
      text += ` ${perOneRate} ${selectedTargetCurrency.name}`;
    }
    return text;
  };

  return {
    selectedTargetCurrency,
    setSelectedTargetCurrency,
    selectedBaseCurrency,
    setSelectedBaseCurrency,
    baseAmount,
    targetAmount,
    setBaseAmount,
    setTargetAmount,
    forOneRate,
  };
};
