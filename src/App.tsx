import React from "react";
import "./App.css";
import { BrowserSolidLdoProvider } from "@ldo/solid-react";
import { ConfigProvider } from "antd";
import { Layout } from "./layout/Layout";

function App() {
  return (
    <BrowserSolidLdoProvider>
      <ConfigProvider
        theme={{
          token: {
            fontSize: 14,
            fontSizeIcon: 10,
            colorPrimary: "#000",
          },
        }}>
        <Layout />
      </ConfigProvider>
    </BrowserSolidLdoProvider>
  );
}

export default App;
