import { FunctionComponent } from "react";
import { Typography, Upload } from "antd";
import { CenteredArea } from "../../../layout/CenteredArea";
import { InboxOutlined } from "@ant-design/icons";

export const ArticleMetadata: FunctionComponent = () => {
  return (
    <CenteredArea>
      <Typography.Title editable level={1}>
        Work Title
      </Typography.Title>
      <Upload.Dragger>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">
          Click or drag file to this area to upload
        </p>
        <p className="ant-upload-hint">
          Support for a single or bulk upload. Strictly prohibited from
          uploading company data or other banned files.
        </p>
      </Upload.Dragger>
      <Typography.Paragraph editable style={{ fontSize: 20 }}>
        This is an example of a description. I love that. Descriptions are the
        best.
      </Typography.Paragraph>
    </CenteredArea>
  );
};
