import { FunctionComponent, useCallback, useState } from "react";
import { MenuButton } from "../common/MenuButton";
import { Editor } from "@tiptap/react";
import { LinkOutlined } from "@ant-design/icons";
import { Input, Modal } from "antd";

interface LinkButtonProps {
  editor: Editor;
}

export const LinkButton: FunctionComponent<LinkButtonProps> = ({ editor }) => {
  const [isLinkModalOpen, setIsLinkModalOpen] = useState(false);
  const [modalLink, setModalLink] = useState("");

  const onPress = useCallback(() => {
    if (editor.isActive("link")) {
      editor.chain().focus().unsetLink().run();
    } else {
      const previousUrl = editor.getAttributes("link").href;
      setModalLink(previousUrl);
      setIsLinkModalOpen(true);
    }
  }, [editor]);

  const onCreateLink = useCallback(() => {
    if (modalLink) {
      editor
        .chain()
        .focus()
        .extendMarkRange("link")
        .setLink({ href: modalLink })
        .run();
    }
    setIsLinkModalOpen(false);
  }, [modalLink, editor]);

  return (
    <>
      <MenuButton
        icon={<LinkOutlined />}
        onClick={onPress}
        disabled={!editor.can().chain().focus().toggleOrderedList().run()}
        isActive={editor.isActive("link")}
        tooltip="Insert Hyperlink"
      />
      <Modal
        title="Select your Solid Identity Provider"
        open={isLinkModalOpen}
        onOk={onCreateLink}
        onCancel={() => setIsLinkModalOpen(false)}>
        <Input
          placeholder={"https://example.com"}
          value={modalLink}
          onChange={(e) => setModalLink(e.target.value)}
        />
      </Modal>
    </>
  );
};
