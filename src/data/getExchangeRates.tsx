import axios from "axios";
import { Exchange } from "../models/Exchange";

// type CacheType = {
//   [key: string]: { exchange: Exchange; cacheTimeStamp: number };
// };

const API_KEY = process.env.REACT_APP_EXCHANGE_API_KEY;
const API_URL = (baseCode: string) =>
  `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${baseCode}`;

// const cache: CacheType = {};
export const getExchangeRates = async (
  baseCode: string,
  cacheTime: number = 1000 * 60 * 5 * 12 * 3
) => {
  const localValue = localStorage.getItem(baseCode);
  if (localValue) {
    const res: { exchange: Exchange; cacheTimeStamp: number } =
      JSON.parse(localValue);

    if (Date.now() - res.cacheTimeStamp <= cacheTime) {
      return res.exchange;
    }
  }
  //In memory cache strategy
  //   if (
  //     cache[baseCode] &&
  //     Date.now() - cache[baseCode].cacheTimeStamp <= cacheTime
  //   ) {
  //     return cache[baseCode].exchange;
  //   }

  const res = await axios.get<Exchange>(API_URL(baseCode));
  let exchange = res.data;
  localStorage.setItem(
    baseCode,
    JSON.stringify({ exchange, cacheTimeStamp: Date.now() })
  );
  //   cache[baseCode] = { exchange, cacheTimeStamp: Date.now() };
  return exchange;
};

export const getExchangeRateFor = async (
  baseCode: string,
  targetCode: string
) => {
  const exchange = await getExchangeRates(baseCode);
  return exchange.conversion_rates[targetCode];
};
