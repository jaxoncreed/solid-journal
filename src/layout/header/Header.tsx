import { EditOutlined, LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { useSolidAuth } from "@ldo/solid-react";
import { Avatar, Dropdown, Flex, MenuProps } from "antd";
import { FunctionComponent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginButton } from "./LoginButton";

export const Header: FunctionComponent = () => {
  const { logout, session } = useSolidAuth();
  const navigate = useNavigate();

  const menuItems: MenuProps["items"] = [
    {
      label: "Blog",
      icon: <EditOutlined />,
      key: "blog",
      onClick: () => navigate("/blog/"),
    },
    // {
    //   label: "My Subscriptions",
    //   icon: <PlusSquareOutlined />,
    //   key: "subscriptions",
    //   // TODO: Get location of the subscriptions from the profile
    //   onClick: () => navigate("/"),
    // },
    {
      label: "Log Out",
      icon: <LogoutOutlined />,
      onClick: logout,
      key: "logout",
    },
  ];

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
        {!session.isLoggedIn ? (
          <LoginButton />
        ) : (
          <Dropdown
            menu={{ items: menuItems }}
            placement="bottomLeft"
            arrow
            trigger={["click"]}>
            <Avatar icon={<UserOutlined />} style={{ cursor: "pointer" }} />
          </Dropdown>
        )}
      </Flex>
    </header>
  );
};
