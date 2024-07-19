import { FunctionComponent, useState } from "react";
import { MenuButton } from "./MenuButton";
import { Editor } from "@tiptap/react";
import { PictureOutlined } from "@ant-design/icons";
import { Dropdown, MenuProps } from "antd";
import { ImageUpload } from "../../imageUpload/ImageUpload";

interface ImageButtonProps {
  editor: Editor;
}

export const ImageButton: FunctionComponent<ImageButtonProps> = ({
  editor,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <ImageUpload
      onComplete={(uri: string) =>
        editor.chain().focus().setImage({ src: uri }).run()
      }
      renderMenu={(items: MenuProps["items"]) => (
        <Dropdown menu={{ items }} arrow trigger={["click"]}>
          <MenuButton
            icon={<PictureOutlined />}
            tooltip="Insert Image"
            loading={isLoading}
          />
        </Dropdown>
      )}
      onLoadingChange={setIsLoading}
    />
  );
};
