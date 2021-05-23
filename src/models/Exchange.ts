export interface Exchange {
  time_last_update_unix: number;
  time_next_update_unix: number;
  base_code: string;
  conversion_rates: { [key: string]: number };
}
