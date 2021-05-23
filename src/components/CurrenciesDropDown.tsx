import { Select } from "antd";
import React from "react";
import { getCurrencies } from "../data/getCurrencies";
import { CountryCurrency } from "../models/Country";

const DEFAULT_CODE = "CAD";
export const CurrenciesDropDown = ({
  currency,
  setCurrency,
  isBase,
}: {
  currency?: CountryCurrency;
  setCurrency(currency: CountryCurrency): void;
  isBase: boolean;
}) => {
  const [currencies, setCurrencies] = React.useState<CountryCurrency[]>([]);

  const fetchCurrencies = async () => {
    const data = await getCurrencies();
    setCurrencies(data);
  };

  React.useEffect(() => {
    fetchCurrencies();
  }, []);

  const localStorageKey = isBase ? "baseCurrency" : "targetCurrency";
  const mapCurrencies = currencies.map((currency) => (
    <Select.Option key={currency.code} value={currency.code}>
      {`${currency.name} (${currency.code})`}
    </Select.Option>
  ));

  const findAndSetCurrency = React.useCallback(
    (code: string) => {
      const curr = currencies.find((cu) => cu.code === code);
      if (curr) {
        setCurrency(curr);
        const stringiy = JSON.stringify(curr);
        localStorage.setItem(localStorageKey, stringiy);
        console.log(stringiy);
      }
    },
    [currencies, localStorageKey, setCurrency]
  );

  React.useEffect(() => {
    if (currencies.length > 0) {
      const item = localStorage.getItem(localStorageKey);
      if (item) {
        const curr: CountryCurrency = JSON.parse(item);
        findAndSetCurrency(curr.code);
      } else {
        findAndSetCurrency(DEFAULT_CODE);
      }
    }
  }, [currencies, findAndSetCurrency, isBase, localStorageKey]);

  return (
    <div>
      <Select
        style={{ minWidth: 150 }}
        value={currency?.code}
        onChange={findAndSetCurrency}
      >
        {mapCurrencies}
      </Select>
    </div>
  );
};
