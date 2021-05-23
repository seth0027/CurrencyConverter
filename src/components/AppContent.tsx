import { Card, Row, Space, Typography } from "antd";
import React from "react";
import { useConversion } from "../hooks/useConversion";
import { CountriesRow } from "./CountriesRow";
import { InputAndDropDownRow } from "./InputAndDropDownRow";

export const AppContent = () => {
  const {
    baseAmount,
    forOneRate,
    setBaseAmount,
    selectedBaseCurrency,
    setSelectedBaseCurrency,
    targetAmount,
    setTargetAmount,
    selectedTargetCurrency,
    setSelectedTargetCurrency,
  } = useConversion();

  return (
    <Space direction="vertical" size="large">
      <div></div>
      <Card hoverable title="Convert">
        <Space direction="vertical" size="large">
          <Typography.Title level={4}>{forOneRate()}</Typography.Title>
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
