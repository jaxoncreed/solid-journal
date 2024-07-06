import { FunctionComponent } from "react";
import { Layout as AntdLayout } from "antd";
import { ViewRouter } from "../views/ViewRouter";
import { Header } from "./Header";

export const Layout: FunctionComponent = () => {
  return (
    <AntdLayout
      style={{
        backgroundColor: "#FFF",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}>
      <Header />
      <AntdLayout.Content
        style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <ViewRouter />
      </AntdLayout.Content>
    </AntdLayout>
  );
};
