import { Card, Row, Space, Typography } from "antd";
import React from "react";
import { getExchangeRateFor } from "../data/getExchangeRates";
import { CountryCurrency } from "../models/Country";
import { CountriesRow } from "./CountriesRow";
import { InputAndDropDownRow } from "./InputAndDropDownRow";

let perOneRate: number | undefined;

export const AppContent = () => {
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
      setBaseAmount((1 / perOneRate) * targetAmount);
    }
  }, [targetAmount]);

  const forOneRate = (rate?: number) => {
    let text = "";
    if (selectedBaseCurrency) {
      text += `1 ${selectedBaseCurrency.name} equals`;
    }
    if (selectedTargetCurrency && rate) {
      text += ` ${rate} ${selectedTargetCurrency.name}`;
    }
    return text;
  };
  return (
    <Space direction="vertical" size="large">
      <div></div>
      <Card hoverable title="Convert">
        <Space direction="vertical" size="large">
          <Typography.Title level={4}>
            {forOneRate(perOneRate)}
          </Typography.Title>
          <Row>
            <InputAndDropDownRow
              isBase
              baseAmount={baseAmount}
              setBaseAmount={setBaseAmount}
              selectedTargetCurrency={selectedBaseCurrency}
              setSelectedTargetCurrency={setSelectedBaseCurrency}
            />
          </Row>
          <Row>
            <InputAndDropDownRow
              isBase={false}
              baseAmount={targetAmount}
              setBaseAmount={setTargetAmount}
              selectedTargetCurrency={selectedTargetCurrency}
              setSelectedTargetCurrency={setSelectedTargetCurrency}
            />
          </Row>
        </Space>
      </Card>

      <CountriesRow
        selectedBaseCurrency={selectedBaseCurrency}
        selectedTargetCurrency={selectedTargetCurrency}
      />
    </Space>
  );
};
