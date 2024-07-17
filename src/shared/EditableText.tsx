import { ChangeEvent, FunctionComponent } from "react";
import { Input, Typography } from "antd";
import TextArea from "antd/es/input/TextArea";

interface EditableTitleProps {
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  placeholder?: string;
  isEditing: boolean;
}

export const EditableTitle: FunctionComponent<EditableTitleProps> = ({
  onChange,
  value,
  placeholder,
  isEditing,
}) => {
  return isEditing ? (
    <Input
      style={{
        borderTop: "none",
        borderLeft: "none",
        borderRight: "none",
        fontSize: 38,
        fontWeight: 600,
        padding: 0,
        marginBottom: "0.5em",
        marginTop: "0.5em",
        borderRadius: 0,
        lineHeight: "normal",
      }}
      styles={{}}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  ) : (
    <Typography.Title
      style={{
        marginLeft: 0,
        marginRight: 0,
        marginBottom: "0.5em",
        marginTop: "0.5em",
        boxSizing: "border-box",
        lineHeight: "normal",
      }}>
      {value}
    </Typography.Title>
  );
};

interface EditableParagraphProps {
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  value?: string;
  placeholder?: string;
  isEditing: boolean;
}

export const EditableParagraph: FunctionComponent<EditableParagraphProps> = ({
  onChange,
  value,
  placeholder,
  isEditing,
}) => {
  return isEditing ? (
    <TextArea
      style={{
        borderTop: "none",
        borderLeft: "none",
        borderRight: "none",
        fontSize: 20,
        padding: 0,
        marginBottom: "1em",
        marginTop: "1em",
        borderRadius: 0,
        lineHeight: "normal",
        fontStyle: "italic",
      }}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  ) : (
    <Typography.Paragraph
      style={{
        marginLeft: 0,
        marginRight: 0,
        fontSize: 20,
        marginBottom: "1em",
        marginTop: "1em",
        boxSizing: "border-box",
        lineHeight: "normal",
        fontStyle: "italic",
      }}>
      {value}
    </Typography.Paragraph>
  );
};
