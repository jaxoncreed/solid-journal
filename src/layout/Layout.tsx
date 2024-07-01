import { FunctionComponent } from "react";
import { Layout as AntdLayout, Button, Flex } from "antd";
import { LoginOutlined } from "@ant-design/icons";
import { ViewRouter } from "../views/ViewRouter";

export const Layout: FunctionComponent = () => {
  return (
    <AntdLayout
      style={{
        backgroundColor: "#FFF",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}>
      <header>
        <Flex justify="space-between" align="center" style={{ padding: 8 }}>
          <Flex align="center">
            <img
              src="/assets/logo-orig.jpg"
              style={{ height: 40 }}
              alt="OtherJackson"
            />
            <h2 style={{ marginTop: 0, marginBottom: 0, marginLeft: 8 }}>
              OtherJackson Blog
            </h2>
          </Flex>
          <Button type="text" shape="circle" icon={<LoginOutlined />} />
        </Flex>
      </header>
      <AntdLayout.Content
        style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <ViewRouter />
      </AntdLayout.Content>
    </AntdLayout>
  );
};
