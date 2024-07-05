import {
  AlignCenterOutlined,
  AlignLeftOutlined,
  AlignRightOutlined,
  BoldOutlined,
  CodeOutlined,
  FileImageOutlined,
  ItalicOutlined,
  MenuUnfoldOutlined,
  OrderedListOutlined,
  StrikethroughOutlined,
  TableOutlined,
  UnderlineOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import { Flex, Select } from "antd";
import { FunctionComponent } from "react";
import { MenuButton } from "../common/MenuButton";
import { Editor } from "@tiptap/react";

interface ContentMenuBarProps {
  editor: Editor;
}

export const ContentMenuBar: FunctionComponent<ContentMenuBarProps> = ({
  editor,
}) => {
  return (
    <Flex wrap style={{ paddingTop: 8, paddingBottom: 8 }}>
      <Select
        value={(() => {
          if (editor.isActive("paragraph")) return "p";
          if (editor.isActive("heading", { level: 1 })) return "h1";
          if (editor.isActive("heading", { level: 2 })) return "h2";
          if (editor.isActive("heading", { level: 3 })) return "h3";
          if (editor.isActive("heading", { level: 4 })) return "h4";
          return undefined;
        })()}
        onChange={(value) => {
          switch (value) {
            case "p":
              return editor.chain().focus().setParagraph().run();
            case "h1":
              return editor.chain().focus().setHeading({ level: 1 }).run();
            case "h2":
              return editor.chain().focus().setHeading({ level: 2 }).run();
            case "h3":
              return editor.chain().focus().setHeading({ level: 3 }).run();
            case "h4":
              return editor.chain().focus().setHeading({ level: 4 }).run();
          }
        }}
        options={[
          { value: "p", label: "Paragraph" },
          { value: "h1", label: "Heading 1" },
          { value: "h2", label: "Heading 2" },
          { value: "h3", label: "Heading 3" },
          { value: "h4", label: "Heading 4" },
        ]}
        style={{ marginRight: 4, marginBottom: 4, width: 109 }}
      />
      <MenuButton
        icon={<BoldOutlined />}
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        isActive={editor.isActive("bold")}
      />
      <MenuButton
        icon={<ItalicOutlined />}
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        isActive={editor.isActive("italic")}
      />
      <MenuButton
        icon={<UnderlineOutlined />}
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        disabled={!editor.can().chain().focus().toggleUnderline().run()}
        isActive={editor.isActive("underline")}
      />
      <MenuButton
        icon={<StrikethroughOutlined />}
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        isActive={editor.isActive("strike")}
      />
      <MenuButton
        icon={<AlignLeftOutlined />}
        onClick={() => editor.chain().focus().setTextAlign("left").run()}
        disabled={!editor.can().chain().focus().setTextAlign("left").run()}
        isActive={editor.isActive({ textAlign: "left" })}
      />
      <MenuButton
        icon={<AlignCenterOutlined />}
        onClick={() => editor.chain().focus().setTextAlign("center").run()}
        disabled={!editor.can().chain().focus().setTextAlign("center").run()}
        isActive={editor.isActive({ textAlign: "center" })}
      />
      <MenuButton
        icon={<AlignRightOutlined />}
        onClick={() => editor.chain().focus().setTextAlign("right").run()}
        disabled={!editor.can().chain().focus().setTextAlign("right").run()}
        isActive={editor.isActive({ textAlign: "right" })}
      />
      <MenuButton
        icon={<UnorderedListOutlined />}
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        disabled={!editor.can().chain().focus().toggleBulletList().run()}
        isActive={editor.isActive("bulletList")}
      />
      <MenuButton
        icon={<OrderedListOutlined />}
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        disabled={!editor.can().chain().focus().toggleOrderedList().run()}
        isActive={editor.isActive("orderedList")}
      />
      <MenuButton
        icon={<CodeOutlined />}
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        disabled={!editor.can().chain().focus().toggleCodeBlock().run()}
        isActive={editor.isActive("codeBlock")}
      />
      <MenuButton
        icon={<MenuUnfoldOutlined />}
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        disabled={!editor.can().chain().focus().toggleBlockquote().run()}
        isActive={editor.isActive("blockQuote")}
      />
      <MenuButton icon={<FileImageOutlined />} />
      <MenuButton icon={<TableOutlined />} />
    </Flex>
  );
};
