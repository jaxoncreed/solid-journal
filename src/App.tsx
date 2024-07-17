import React from "react";
import "./App.css";
import { BrowserSolidLdoProvider } from "@ldo/solid-react";
import { ConfigProvider } from "antd";
import { Layout } from "./layout/Layout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AppConfigProvider } from "./shared/providers/AppConfigProvider";

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
        <AppConfigProvider>
          <RouterProvider router={router} />;
          <ToastContainer />
        </AppConfigProvider>
      </ConfigProvider>
    </BrowserSolidLdoProvider>
  );
}

export default App;
