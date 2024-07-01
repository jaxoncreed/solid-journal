import { Button, ButtonProps } from "antd";
import { FunctionComponent } from "react";

interface MenuButton extends ButtonProps {
  isActive?: boolean;
}

export const MenuButton: FunctionComponent<MenuButton> = ({
  isActive,
  ...props
}) => {
  return (
    <Button
      shape="circle"
      type={isActive ? "primary" : "default"}
      style={{ marginRight: 4, marginBottom: 4 }}
      {...props}
    />
  );
};
