import { Affix, Flex } from "antd";
import { FunctionComponent } from "react";
import { ContentMenuBar } from "./ContentMenuBar";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import { useWindowSize } from "@uidotdev/usehooks";

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

interface ArticleContentProps {}

export const ArticleContent: FunctionComponent<ArticleContentProps> = () => {
  const { width } = useWindowSize();
  const editor = useEditor({
    extensions,
    content,
  });

  if (!editor) return <></>;

  return (
    <>
      <Flex
        justify="center"
        style={{ flex: 1, marginRight: width && width < 670 ? 88 : 0 }}>
        <Flex
          vertical
          style={{
            maxWidth: 680,
            flex: 1,
            padding: 8,
          }}>
          <Affix offsetTop={0}>
            <ContentMenuBar editor={editor} />
          </Affix>
          <EditorContent editor={editor} style={{ flex: 1 }} />
        </Flex>
      </Flex>
    </>
  );
};
