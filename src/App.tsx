import React from "react";

import "./App.css";

import { notification, Layout } from "antd";
import { SmileOutlined } from "@ant-design/icons";

import { Content, Footer, Header } from "antd/lib/layout/layout";
import { AppContent } from "./components/AppContent";
import { AppHeader } from "./components/AppHeader";
import { AppFooter } from "./components/AppFooter";

function App() {
  const openNotification = () => {
    notification.open({
      message: "Thank you for visiting",
      description:
        "This is a currency converter app. This app also lists the countries where specified currencies are used",
      icon: <SmileOutlined style={{ color: "#108ee9" }} />,
    });
  };

  React.useEffect(() => {
    const value = localStorage.getItem("show");
    if (!value) {
      openNotification();
      localStorage.setItem("show", "shown");
    }
  }, []);

  return (
    <div className="App">
      <Layout>
        <Header>
          <AppHeader openNotification={openNotification} />
        </Header>
        <Content>
          <AppContent />
        </Content>
        <Footer>
          <AppFooter />
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
