import { Container } from "@ldo/solid";
import { FunctionComponent } from "react";
import { DocumentList } from "../../shared/documentList/DocumentList";

interface ContainerViewProps {
  conatiner: Container;
}

export const ContainerView: FunctionComponent<ContainerViewProps> = ({
  conatiner,
}) => {
  return (
    <DocumentList
      documentUris={conatiner.children().map((child) => child.uri)}
    />
  );
};
