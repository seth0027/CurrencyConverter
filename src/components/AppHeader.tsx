import { InfoCircleOutlined } from "@ant-design/icons";
import { Col, Row, Typography } from "antd";
import React from "react";

export const AppHeader = ({
  openNotification,
}: {
  openNotification(): void;
}) => {
  return (
    <Row>
      <Col flex={5}>
        <Typography.Title style={{ color: "white", fontStyle: "italic" }}>
          Currency Converter
        </Typography.Title>
      </Col>
      <Col flex={1}>
        <Typography.Title level={3} style={{ color: "white" }}>
          <InfoCircleOutlined onClick={openNotification} color="white" />
        </Typography.Title>
      </Col>
    </Row>
  );
};
