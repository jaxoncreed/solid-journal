import { FunctionComponent, useMemo } from "react";
import { Card, Skeleton, Typography } from "antd";
import { PREVIEW_CATALOGUE } from "./previews/PreviewCatalogue";
import { useNavigate } from "react-router-dom";
import { useResolveSubject } from "../hooks/useResolveSubject";

interface DocumentListCardProps {
  uri: string;
}

export const DocumentListCard: FunctionComponent<DocumentListCardProps> = ({
  uri,
}) => {
  const { resource, subject } = useResolveSubject(uri);
  const navigate = useNavigate();
  const pathAndHash = useMemo(() => {
    const url = new URL(uri);
    return `${url.pathname}${url.search}${url.hash}`;
  }, [uri]);

  return (
    <Card
      style={{ height: 150, overflow: "hidden", marginBottom: 16 }}
      hoverable
      onClick={() => navigate(pathAndHash)}>
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
