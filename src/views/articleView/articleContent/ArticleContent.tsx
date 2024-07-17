import { Affix } from "antd";
import { FunctionComponent } from "react";
import { ContentMenuBar } from "./ContentMenuBar";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import { useWindowSize } from "@uidotdev/usehooks";
import "./Editor.css";
import { CenteredArea } from "../../../layout/CenteredArea";

const extensions = [
  StarterKit,
  Underline,
  TextAlign.configure({
    types: ["heading", "paragraph"],
  }),
];

// const content = `<p>Begin writing your article...</p>`;

const content = `<p>Hello World</p>
<p>Hello World</p>
<p>Hello World</p>
<p>Hello World</p>
<p>Hello World</p>
<p>Hello World</p>
<p>Hello World</p>
<p>Hello World</p>
<p>Hello World</p>
<p>Hello World</p>
<p>Hello World</p>
<p>Hello World</p>
<p>Hello World</p>
<p>Hello World</p>
<p>Hello World</p>
<p>Hello World</p>
<p>Hello World</p>
<p>Hello World</p>
<p>Hello World</p>
<p>Hello World</p>
<p>Hello World</p>
<p>Hello World</p>
<p>Hello World</p>
<p>Hello World</p>
<p>Hello World</p>
<p>Hello World</p>
<p>Hello World</p>
<p>Hello World</p>
<p>Hello World</p>
<p>Hello World</p>
<p>Hello World</p>
<p>Hello World</p>
<p>Hello World</p>
<p>Hello World</p>
<p>Hello World</p>
<p>Hello World</p>
<p>Hello World</p>
<p>Hello World</p>
<p>Hello World</p>
<p>Hello World</p>
<p>Hello World</p>
<p>Hello World</p>
<p>Hello World</p>
<p>Hello World</p>
<p>Hello World</p>
`;

interface ArticleContentProps {
  isEditing?: boolean;
}

export const ArticleContent: FunctionComponent<ArticleContentProps> = ({
  isEditing,
}) => {
  const { width } = useWindowSize();
  const editor = useEditor({
    extensions,
    content,
  });

  if (!editor) return <></>;

  return (
    <CenteredArea>
      {isEditing && (
        <Affix
          offsetTop={0}
          style={{ marginRight: width && width < 670 ? 88 : 0 }}>
          <ContentMenuBar editor={editor} />
        </Affix>
      )}
      <EditorContent editor={editor} style={{ flex: 1 }} />
    </CenteredArea>
  );
};
