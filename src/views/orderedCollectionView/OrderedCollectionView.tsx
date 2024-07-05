import { FunctionComponent } from "react";
import { CenteredArea } from "../../layout/CenteredArea";
import { ViewProps } from "../ViewProps";
import { useSubject } from "@ldo/solid-react";
import { OrderedCollectionShapeType } from "../../.ldo/activityPub.shapeTypes";
import { OrderedCollectionCard } from "./OrderedCollectionCard";
import { Card, Typography } from "antd";
import { Link } from "../../.ldo/activityPub.typings";

export const OrderedCollectionView: FunctionComponent<ViewProps> = ({
  subject,
}) => {
  const orderedCollection = useSubject(
    OrderedCollectionShapeType,
    subject?.["@id"]
  );

  return (
    <CenteredArea>
      {orderedCollection?.items?.map((item) => {
        if (item.type["@id"] === "Link") {
          return (
            <OrderedCollectionCard
              item={item as Link}
              key={(item as Link).href}
            />
          );
        }
        return (
          <Card>
            <Typography.Text type="danger">
              Error: displaying non-links in an ordered list is not supported
            </Typography.Text>
          </Card>
        );
      })}
    </CenteredArea>
  );
};
