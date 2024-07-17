import { Flex } from "antd";
import { FunctionComponent, useCallback, useState } from "react";
import { MenuButton } from "./common/MenuButton";
import { LockOutlined, SaveOutlined } from "@ant-design/icons";
import { useWindowSize } from "@uidotdev/usehooks";

interface PublishMenuProps {
  onSave: () => Promise<void>;
  isSavable?: boolean;
}

export const PublishMenu: FunctionComponent<PublishMenuProps> = ({
  isSavable,
  onSave,
}) => {
  const { width } = useWindowSize();
  const isMobile = width ? width < 982 : true;
  const [loadingSave, setLoadingSave] = useState(false);

  const onSaveClicked = useCallback(async () => {
    setLoadingSave(true);
    await onSave();
    setLoadingSave(false);
  }, [onSave]);

  return (
    <Flex justify="flex-end" style={{ padding: 8 }} align="center">
      <MenuButton
        shape={isMobile ? "circle" : "round"}
        icon={<LockOutlined />}
        children={isMobile ? undefined : "Make Private"}
      />
      <MenuButton
        type="primary"
        loading={loadingSave}
        shape={isMobile ? "circle" : "round"}
        icon={<SaveOutlined />}
        onClick={onSaveClicked}
        children={isMobile ? undefined : "Save"}
        disabled={!isSavable}
      />
    </Flex>
  );
};
