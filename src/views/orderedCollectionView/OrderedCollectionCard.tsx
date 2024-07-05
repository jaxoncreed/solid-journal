import { useResource, useSubject } from "@ldo/solid-react";
import { Link } from "../../.ldo/activityPub.typings";
import { FunctionComponent } from "react";
import { Card, Skeleton, Typography } from "antd";
import { PotentialSubjectShapeType } from "../../.ldo/potentialDocument.shapeTypes";
import { PREVIEW_CATALOGUE } from "./previews/PreviewCatalogue";

interface OrderedCollectionCardProps {
  item: Link;
}

export const OrderedCollectionCard: FunctionComponent<
  OrderedCollectionCardProps
> = ({ item }) => {
  const itemResource = useResource(item.href);
  const itemSubject = useSubject(PotentialSubjectShapeType, item.href);

  return (
    <Card style={{ height: 150 }} hoverable>
      {(() => {
        if (!itemResource) {
          return (
            <Typography.Text type="danger">
              Error: this item in the list does not have an href.
            </Typography.Text>
          );
        } else if (itemResource.isLoading()) {
          return <Skeleton active paragraph={{ rows: 3 }} title={false} />;
        }

        console.log(itemSubject?.type?.["@id"]);
        const Component = PREVIEW_CATALOGUE[itemSubject?.type?.["@id"] || ""];
        if (!Component) {
          return (
            <Typography.Text type="danger">
              Error: this item in the list does not have a preview.
            </Typography.Text>
          );
        }
        return <Component subject={itemSubject} />;
      })()}
    </Card>
  );
};
