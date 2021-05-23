export interface CountryCurrency {
  code: string;
  name: string;
  symbol: string;
}

export interface Country {
  name: string;
  alpha2Code: string;
  alpha3Code: string;
  capital: string;
  region: string;
  population: number;
  nativeName: string;
  currencies: CountryCurrency[];
  flag: string;
}
