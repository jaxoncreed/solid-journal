import {
  DeleteOutlined,
  FileImageOutlined,
  PictureOutlined,
  RetweetOutlined,
} from "@ant-design/icons";
import { Button, Dropdown, Flex, Image, MenuProps } from "antd";
import { FunctionComponent, useState } from "react";
import { MenuButton } from "../../../shared/htmlEditor/contentMenu/MenuButton";
import { ImageUpload } from "../../../shared/imageUpload/ImageUpload";

interface SplashImageProps {
  onNewImage: (imageUri: string) => void;
  onImageRemove: () => void;
  imageUri?: string;
  isEditing: boolean;
}

export const SplashImage: FunctionComponent<SplashImageProps> = ({
  isEditing,
  imageUri,
  onNewImage,
  onImageRemove,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  if (isEditing) {
    return (
      <div style={{ position: "relative" }}>
        {imageUri ? (
          <>
            <img src={imageUri} alt="Splash" style={{ width: "100%" }} />
            <Flex style={{ position: "absolute", top: 8, right: 8 }}>
              <ImageUpload
                onComplete={onNewImage}
                renderMenu={(items: MenuProps["items"]) => (
                  <Dropdown menu={{ items }} arrow trigger={["click"]}>
                    <MenuButton
                      icon={<RetweetOutlined />}
                      tooltip="Replace Splash Image"
                      loading={isLoading}
                      style={{ marginRight: 4 }}
                    />
                  </Dropdown>
                )}
                onLoadingChange={setIsLoading}
              />
              <MenuButton
                icon={<DeleteOutlined />}
                onClick={onImageRemove}
                tooltip="Remove Splash Image"
              />
            </Flex>
          </>
        ) : (
          <ImageUpload
            onComplete={onNewImage}
            renderMenu={(items: MenuProps["items"]) => (
              <Dropdown menu={{ items }} arrow trigger={["click"]}>
                <Button
                  shape="round"
                  icon={<PictureOutlined />}
                  loading={isLoading}
                  size="large"
                  style={{ marginTop: "1em", marginBottom: "1em" }}>
                  Add a Splash Image
                </Button>
              </Dropdown>
            )}
            onLoadingChange={setIsLoading}
          />
        )}
      </div>
    );
  }
  return imageUri ? <Image src={imageUri} /> : <></>;
};
