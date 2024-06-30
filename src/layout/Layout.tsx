import { FunctionComponent } from "react";
import { Layout as AntdLayout, Button, Flex } from "antd";
import { LoginOutlined } from "@ant-design/icons";

export const Layout: FunctionComponent = () => {
  return <AntdLayout style={{ backgroundColor: "#FFF" }}>
    <header>
      <Flex justify="space-between" align="center" style={{ padding: 8 }}>
        <h1 style={{ margin: 0 }}>OtherJackson Blog</h1>
        <Button type="text" shape="circle" icon={<LoginOutlined />} />
      </Flex>
    </header>
    <AntdLayout.Content>
      <h1>Hello</h1>
    </AntdLayout.Content>
  </AntdLayout>
};
