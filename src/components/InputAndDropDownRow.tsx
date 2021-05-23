import { Col, InputNumber, Row, Space } from "antd";
import React from "react";
import { CountryCurrency } from "../models/Country";
import { CurrenciesDropDown } from "./CurrenciesDropDown";

export const InputAndDropDownRow = ({
  baseAmount,
  setBaseAmount,
  selectedTargetCurrency,
  setSelectedTargetCurrency,
  isBase,
}: {
  baseAmount: number;
  setBaseAmount(num: number): void;
  selectedTargetCurrency?: CountryCurrency;
  setSelectedTargetCurrency(curr: CountryCurrency): void;
  isBase: boolean;
}) => {
  return (
    <Row>
      <Space size="large">
        <Col>
          <InputNumber
            // readOnly={!isBase}
            style={{ minWidth: 150 }}
            min={0}
            value={baseAmount}
            onChange={(value) => {
              setBaseAmount(value);
            }}
          />
        </Col>
        <Col>
          <CurrenciesDropDown
            isBase={isBase}
            currency={selectedTargetCurrency}
            setCurrency={setSelectedTargetCurrency}
          />
        </Col>
      </Space>
    </Row>
  );
};
