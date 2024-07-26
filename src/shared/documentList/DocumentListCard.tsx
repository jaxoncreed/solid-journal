import { FunctionComponent } from "react";
import { Card, Flex, Popconfirm, Skeleton, Space, Typography } from "antd";
import { getComponentFromCatalogue } from "./previews/PreviewCatalogue";
import { useResolveSubject } from "../hooks/useResolveSubject";
import { useHybridNavigate } from "../hooks/useHybridNavigate";
import { MenuButton } from "../htmlEditor/contentMenu/MenuButton";
import { DeleteOutlined } from "@ant-design/icons";

interface DocumentListCardProps {
  uri: string;
}

export const DocumentListCard: FunctionComponent<DocumentListCardProps> = ({
  uri,
}) => {
  const { resource, subject } = useResolveSubject(uri);
  const navigate = useHybridNavigate();

  return (
    <Flex>
      <Space direction="vertical" size="middle" style={{ display: "flex" }}>
        <Popconfirm
          title="Delete the item"
          description="Are you sure to delete this item?"
          onConfirm={() => resource?.delete()}
          okText="Yes"
          cancelText="No">
          <MenuButton icon={<DeleteOutlined />} />
        </Popconfirm>
      </Space>
      <Card
        style={{ height: 150, overflow: "hidden", marginBottom: 16, flex: 1 }}
        hoverable
        onClick={() => navigate(uri)}>
        {(() => {
          if (!resource) {
            return <Skeleton active paragraph={{ rows: 3 }} title={false} />;
          }
          if (resource.type === "container") {
            return <Typography.Text>Container: {resource.uri}</Typography.Text>;
          }

          const Component = getComponentFromCatalogue({ subject, resource });
          if (!Component) {
            return (
              <Typography.Text type="danger">
                Error: this item in the list does not have a preview.
              </Typography.Text>
            );
          }
          return <Component subject={subject} resource={resource} />;
        })()}
      </Card>
    </Flex>
  );
};
