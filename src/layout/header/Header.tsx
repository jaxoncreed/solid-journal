import {
  EditOutlined,
  LogoutOutlined,
  PictureOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useSolidAuth } from "@ldo/solid-react";
import { Avatar, Dropdown, Flex, MenuProps } from "antd";
import { FunctionComponent, useMemo } from "react";
import { Link } from "react-router-dom";
import { LoginButton } from "./LoginButton";
import { useAppConfig } from "../../shared/providers/AppConfigProvider";
import { useHybridNavigate } from "../../shared/hooks/useHybridNavigate";

export const Header: FunctionComponent = () => {
  const { logout, session } = useSolidAuth();
  const navigate = useHybridNavigate();
  const appConfig = useAppConfig();

  const menuItems: MenuProps["items"] = useMemo(() => {
    const menuItems: MenuProps["items"] = [];
    if (appConfig.blogUri) {
      menuItems.push({
        label: "My Blog",
        icon: <EditOutlined />,
        key: "blog",
        onClick: () => navigate(appConfig.blogUri as string),
      });
    }
    if (appConfig.mediaUri) {
      menuItems.push({
        label: "My Media",
        icon: <PictureOutlined />,
        key: "media",
        onClick: () => navigate(appConfig.mediaUri as string),
      });
    }

    // {
    //   label: "My Subscriptions",
    //   icon: <PlusSquareOutlined />,
    //   key: "subscriptions",
    //   // TODO: Get location of the subscriptions from the profile
    //   onClick: () => navigate("/"),
    // },

    menuItems.push({
      label: "Log Out",
      icon: <LogoutOutlined />,
      onClick: logout,
      key: "logout",
    });
    return menuItems;
  }, [appConfig, logout, navigate]);

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
