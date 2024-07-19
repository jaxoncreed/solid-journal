import { Affix } from "antd";
import { FunctionComponent, useEffect } from "react";
import { ContentMenuBar } from "./contentMenu/ContentMenuBar";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import { useWindowSize } from "@uidotdev/usehooks";
import "./Editor.css";
import { CenteredArea } from "../../layout/CenteredArea";
import Table from "@tiptap/extension-table";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import TableRow from "@tiptap/extension-table-row";
import { common, createLowlight } from "lowlight";
import Placeholder from "@tiptap/extension-placeholder";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import "./Editor.css";

const lowlight = createLowlight(common);

const extensions = [
  StarterKit,
  Underline,
  TextAlign.configure({
    types: ["heading", "paragraph"],
  }),
  CodeBlockLowlight.configure({
    lowlight,
  }),
  Table.configure({
    resizable: true,
  }),
  TableRow,
  TableHeader,
  TableCell,
  Placeholder.configure({
    placeholder: "Write your article…",
  }),
  Link.configure({
    openOnClick: false,
    autolink: true,
    defaultProtocol: "https",
  }),
  Image,
];

interface TipTapEditorProps {
  isEditing?: boolean;
  initialValue?: string;
  onChange?: (html: string) => void;
}

export const TipTapEditor: FunctionComponent<TipTapEditorProps> = ({
  isEditing,
  initialValue,
  onChange,
}) => {
  const { width } = useWindowSize();
  const editor = useEditor({
    extensions,
    content: initialValue,
    onUpdate: ({ editor }) => {
      onChange?.(editor.getHTML());
    },
    editable: !!isEditing,
  });

  useEffect(() => {
    if (editor) {
      editor.setOptions({ editable: !!isEditing });
    }
  }, [isEditing, editor]);

  if (!editor) return <></>;

  return (
    <CenteredArea>
      <div style={{ minHeight: isEditing ? "100vh" : undefined }}>
        {isEditing && (
          <Affix offsetTop={0}>
            <div
              style={{
                backgroundColor: "#FFF",
                borderBottom: "1px solid rgba(61, 37, 20, 0.12)",
              }}>
              <div style={{ marginRight: width && width < 670 ? 88 : 0 }}>
                <ContentMenuBar editor={editor} />
              </div>
            </div>
          </Affix>
        )}
        <EditorContent editor={editor} />
      </div>
    </CenteredArea>
  );
};