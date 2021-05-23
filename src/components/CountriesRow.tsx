import { Card, Col, Row } from "antd";
import React from "react";
import { useCountriesForSelectedCurrency } from "../hooks/useCountriesForSelectedCurrency";
import { CountryCurrency } from "../models/Country";
import { CountriesList } from "./CountriesList";

export const CountriesRow = ({
  selectedBaseCurrency,
  selectedTargetCurrency,
}: {
  selectedBaseCurrency?: CountryCurrency;
  selectedTargetCurrency?: CountryCurrency;
}) => {
  const countriesForSelectedTargetCurrency = useCountriesForSelectedCurrency(
    selectedTargetCurrency
  );

  const countriesForSelectedBaseCurrency =
    useCountriesForSelectedCurrency(selectedBaseCurrency);
  return (
    <Row>
      <Col flex={2} style={{ margin: 10 }}>
        <Card hoverable>
          <CountriesList
            selectedCurrency={selectedBaseCurrency}
            countries={countriesForSelectedBaseCurrency}
          />
        </Card>
      </Col>

      <Col flex={2} style={{ margin: 10 }}>
        <Card hoverable>
          <CountriesList
            selectedCurrency={selectedTargetCurrency}
            countries={countriesForSelectedTargetCurrency}
          />
        </Card>
      </Col>
    </Row>
  );
};
