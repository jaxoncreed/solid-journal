import { Flex } from "antd";
import { FunctionComponent } from "react";
import { MenuButton } from "./common/MenuButton";
import { LockOutlined, SaveOutlined } from "@ant-design/icons";
import { useWindowSize } from "@uidotdev/usehooks";

interface PublishMenuProps {}

export const PublishMenu: FunctionComponent<PublishMenuProps> = () => {
  const { width } = useWindowSize();
  const isMobile = width ? width < 982 : true;
  return (
    <Flex justify="flex-end" style={{ padding: 8 }} align="center">
      <MenuButton
        shape={isMobile ? "circle" : "round"}
        icon={<LockOutlined />}
        children={isMobile ? undefined : "Make Private"}
      />
      <MenuButton
        type="primary"
        shape={isMobile ? "circle" : "round"}
        icon={<SaveOutlined />}
        children={isMobile ? undefined : "Save"}
      />
    </Flex>
  );
};
