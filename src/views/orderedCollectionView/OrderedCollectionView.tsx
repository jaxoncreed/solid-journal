import { FunctionComponent } from "react";
import { ViewProps } from "../ViewProps";
import { useSubject } from "@ldo/solid-react";
import { OrderedCollectionShapeType } from "../../.ldo/activityPub.shapeTypes";
import { Link, OrderedCollection } from "../../.ldo/activityPub.typings";
import { DocumentList } from "../../shared/documentList/DocumentList";

export const OrderedCollectionView: FunctionComponent<
  ViewProps<OrderedCollection>
> = ({ subject }) => {
  const orderedCollection = useSubject(
    OrderedCollectionShapeType,
    subject?.["@id"]
  );
  const uris =
    orderedCollection?.items
      ?.filter(
        (item): item is Link =>
          item.type["@id"] === "Link" && !!(item as Link).href
      )
      .map((item) => item.href as string) || [];

  return <DocumentList documentUris={uris} />;
};
