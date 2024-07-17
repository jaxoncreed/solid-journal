import { Button, ButtonProps, Tooltip } from "antd";
import { FunctionComponent } from "react";

interface MenuButtonProps extends ButtonProps {
  isActive?: boolean;
  tooltip?: string;
}

export const MenuButton: FunctionComponent<MenuButtonProps> = ({
  isActive,
  tooltip,
  ...props
}) => {
  const button = (
    <Button
      shape="circle"
      type={isActive ? "primary" : "default"}
      style={{ marginRight: 4, marginBottom: 4 }}
      {...props}
    />
  );
  return tooltip ? <Tooltip title={tooltip}>{button}</Tooltip> : button;
};
