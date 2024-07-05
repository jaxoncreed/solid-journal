import { Flex } from "antd";
import { FunctionComponent, PropsWithChildren } from "react";

export const CenteredArea: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  return (
    <div style={{ flex: 1 }}>
      <div
        style={{
          maxWidth: 680,
          flex: 1,
          padding: 8,
          margin: "auto",
        }}>
        {children}
      </div>
    </div>
  );
};
