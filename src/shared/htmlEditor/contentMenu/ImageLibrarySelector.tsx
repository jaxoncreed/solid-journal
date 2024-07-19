import { ContainerUri } from "@ldo/solid";
import { FunctionComponent } from "react";
import { useAppConfig } from "../../../shared/providers/AppConfigProvider";
import { useResource } from "@ldo/solid-react";
import { Flex } from "antd";
import { CheckOutlined } from "@ant-design/icons";

interface ImageLibraraySelectorProps {
  onSelect: (uri: string) => void;
  selectedValue?: string;
}

export const ImageLibraraySelector: FunctionComponent<
  ImageLibraraySelectorProps
> = ({ onSelect, selectedValue }) => {
  const { mediaUri } = useAppConfig();
  const mediaContainer = useResource(mediaUri as ContainerUri, {
    reloadOnMount: true,
  });

  return (
    <Flex wrap="wrap" style={{ maxHeight: "80vh", overflow: "scroll" }}>
      {mediaContainer.children().map((child) => (
        <div
          style={{
            width: 149,
            height: 149,
            margin: 4,
            cursor: "pointer",
            position: "relative",
          }}
          onClick={() => onSelect(child.uri)}>
          <img
            src={child.uri}
            alt="selectable content"
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
          {selectedValue === child.uri && (
            <div
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                left: 0,
                bottom: 0,
                backgroundColor: "rgba(255, 255, 255, 0.7)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}>
              <CheckOutlined style={{ fontSize: 24 }} />
            </div>
          )}
        </div>
      ))}
    </Flex>
  );
};
