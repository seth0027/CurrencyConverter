import React from "react";
import { Avatar, List, Typography } from "antd";
import { Country, CountryCurrency } from "../models/Country";
export const CountriesList = ({
  selectedCurrency,
  countries,
}: {
  selectedCurrency?: CountryCurrency;
  countries: Country[];
}) => {
  const mainCurrency = (item: Country) => {
    const curr = item.currencies[0];
    if (!curr.name.includes("[")) {
      return `, Main Currency: ${curr.name}`;
    }
    return "";
  };

  return (
    <div>
      {selectedCurrency && (
        <>
          <Typography.Title level={5}>
            {`Code: ${selectedCurrency.code}`}
            {selectedCurrency.symbol && `, Symbol: ${selectedCurrency.symbol}`}
          </Typography.Title>
          <Typography.Title level={4}>
            Countries where {selectedCurrency.name} is used
          </Typography.Title>
        </>
      )}

      <List
        itemLayout="horizontal"
        dataSource={countries}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={item.flag} />}
              title={
                <a href={`https://google.com/search?q=${item.name}`}>
                  {item.name}
                </a>
              }
              description={`Population: ${item.population}, Capital: ${
                item.capital
              }${mainCurrency(item)}`}
            />
          </List.Item>
        )}
      />
    </div>
  );
};
