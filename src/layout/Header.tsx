import { LoginOutlined } from "@ant-design/icons";
import { useSolidAuth } from "@ldo/solid-react";
import { Button, Flex } from "antd";
import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

export const Header: FunctionComponent = () => {
  // const { login, logout, session } = useSolidAuth();
  return (
    <header>
      <Flex justify="space-between" align="center" style={{ padding: 8 }}>
        <Link to="/">
          <Flex align="center">
            <img
              src="/assets/logo-orig.jpg"
              style={{ height: 40 }}
              alt="OtherJackson"
            />
            <h2
              style={{
                marginTop: 0,
                marginBottom: 0,
                marginLeft: 8,
                color: "#000",
              }}>
              OtherJackson Blog
            </h2>
          </Flex>
        </Link>
        <Button type="text" shape="circle" icon={<LoginOutlined />} />
      </Flex>
    </header>
  );
};
