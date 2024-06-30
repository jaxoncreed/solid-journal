import React from "react";
import "./App.css";
import { BrowserSolidLdoProvider } from "@ldo/solid-react";
import { ConfigProvider } from "antd";
import { Layout } from "./layout/Layout";

function App() {
  return (
    <BrowserSolidLdoProvider>
      <ConfigProvider>
        <Layout />
      </ConfigProvider>
    </BrowserSolidLdoProvider>
  );
}

export default App;
