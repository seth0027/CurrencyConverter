import { Row, Space } from "antd";
import React from "react";

const apis = ["https://www.exchangerate-api.com/", "https://restcountries.eu/"];
export const AppFooter = () => {
  return (
    <div>
      <Space direction="vertical">
        <Row>
          Currency Converter and Country checker 2021 Created by Shivam{" "}
        </Row>
        <Row>
          Apis used:
          <ul>
            {apis.map((api) => (
              <>
                <a href={api}>{api}</a>
                <br />
              </>
            ))}
          </ul>
        </Row>
      </Space>
    </div>
  );
};
