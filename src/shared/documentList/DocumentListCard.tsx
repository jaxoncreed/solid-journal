import { FunctionComponent } from "react";
import { Card, Skeleton, Typography } from "antd";
import { PREVIEW_CATALOGUE } from "./previews/PreviewCatalogue";
import { useResolveSubject } from "../hooks/useResolveSubject";
import { useHybridNavigate } from "../hooks/useHybridNavigate";

interface DocumentListCardProps {
  uri: string;
}

export const DocumentListCard: FunctionComponent<DocumentListCardProps> = ({
  uri,
}) => {
  const { resource, subject } = useResolveSubject(uri);
  const navigate = useHybridNavigate();

  return (
    <Card
      style={{ height: 150, overflow: "hidden", marginBottom: 16 }}
      hoverable
      onClick={() => navigate(uri)}>
      {(() => {
        if (!resource) {
          return <Skeleton active paragraph={{ rows: 3 }} title={false} />;
        }
        if (resource.type === "container") {
          return <Typography.Text>Container: {resource.uri}</Typography.Text>;
        }

        const Component = PREVIEW_CATALOGUE[subject?.type?.["@id"] || ""];
        if (!Component) {
          return (
            <Typography.Text type="danger">
              Error: this item in the list does not have a preview.
            </Typography.Text>
          );
        }
        return <Component subject={subject} />;
      })()}
    </Card>
  );
};
