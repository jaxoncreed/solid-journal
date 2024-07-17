import { Affix } from "antd";
import { FunctionComponent, useEffect } from "react";
import { ContentMenuBar } from "./ContentMenuBar";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import { useWindowSize } from "@uidotdev/usehooks";
import "./Editor.css";
import { CenteredArea } from "../../../layout/CenteredArea";
import Table from "@tiptap/extension-table";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import TableRow from "@tiptap/extension-table-row";
import { common, createLowlight } from "lowlight";
import Placeholder from "@tiptap/extension-placeholder";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";

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
];

const content = `
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula, elit nec tempor sollicitudin, arcu enim sollicitudin dolor, vitae tempor turpis lacus ut turpis. Nullam feugiat diam et tortor feugiat ultrices. Mauris odio felis, mattis quis finibus vel, sagittis et risus. Morbi a augue non justo auctor venenatis sed ut tortor. Vivamus porta ligula sit amet viverra vehicula. Ut egestas sapien ut nisi cursus lobortis non eget quam. Donec arcu ipsum, placerat nec rhoncus sed, eleifend et nisl. Vivamus non odio mi. In quis consequat eros, ac commodo magna.</p>

<p>Aliquam erat volutpat. Sed eget imperdiet dolor. Curabitur libero neque, condimentum a erat in, semper viverra lectus. In sed blandit nunc. Quisque pharetra massa sed libero semper lobortis. Nunc quis nulla fringilla, blandit nisi a, sodales lacus. Quisque urna sapien, porttitor at nunc non, auctor condimentum dui. Maecenas sollicitudin, nibh quis ullamcorper mollis, risus nunc posuere leo, condimentum lacinia nibh dolor et elit. Sed tempor accumsan iaculis. Nulla tincidunt sed ligula mattis vestibulum. Pellentesque gravida gravida lobortis. Suspendisse id tortor pellentesque, sagittis ex nec, consectetur turpis.</p>

<p>Cras blandit neque purus, ac malesuada tortor dignissim id. Aenean eu lacinia sapien. Pellentesque orci nibh, consectetur ut diam eu, posuere rhoncus lacus. Pellentesque pellentesque vestibulum ipsum at rhoncus. Integer ultricies euismod purus, vitae imperdiet risus sodales finibus. Nam semper justo nunc, sit amet maximus tellus condimentum eget. Fusce pharetra pulvinar eros, sit amet cursus ex rutrum sed. Mauris lacinia maximus leo a maximus. Nunc id turpis ut purus euismod venenatis.</p>

<p>Etiam eu justo non odio aliquam mollis. Ut elementum maximus ultrices. Aliquam cursus ac nisl a porta. Suspendisse fringilla malesuada velit, id consequat leo. Aliquam erat volutpat. Fusce bibendum sagittis ante, at consequat sem suscipit quis. Proin pharetra diam at ligula scelerisque rutrum. Vivamus convallis lectus augue, sed iaculis ligula porttitor et. Aliquam erat volutpat. Morbi et lobortis mi. In in efficitur lacus, at placerat turpis. Suspendisse non neque sed mi elementum consequat.</p>

<p>In venenatis ac est sit amet semper. In egestas quis ligula a ultricies. Curabitur mi ligula, consectetur eget iaculis id, mollis ac urna. Vestibulum blandit mi a risus vestibulum, vel convallis arcu feugiat. Cras sit amet congue felis. Donec at ante eget nibh viverra molestie ac ac tortor. Quisque non arcu et nisl ultricies condimentum vitae mattis justo. Aliquam ut consectetur nunc. Sed scelerisque dolor turpis, ac lobortis quam gravida placerat.</p>`;

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

  useEffect(() => {
    if (editor) {
      editor.setOptions({ editable: isEditing });
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
        <EditorContent editor={editor} style={{ flex: 1 }} />
      </div>
    </CenteredArea>
  );
};
