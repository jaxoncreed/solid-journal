import React from "react";
import "./App.css";
import { BrowserSolidLdoProvider } from "@ldo/solid-react";
import { ConfigProvider } from "antd";
import { Layout } from "./layout/Layout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "*",
    element: <Layout />,
  },
]);

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
        <RouterProvider router={router} />;
      </ConfigProvider>
    </BrowserSolidLdoProvider>
  );
}

export default App;
