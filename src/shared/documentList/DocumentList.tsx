import { FunctionComponent } from "react";
import { CenteredArea } from "../../layout/CenteredArea";
import { DocumentListCard } from "./DocumentListCard";

interface DocumentListProps {
  documentUris: string[];
}

export const DocumentList: FunctionComponent<DocumentListProps> = ({
  documentUris,
}) => {
  return (
    <CenteredArea>
      {documentUris.map((uri) => (
        <DocumentListCard uri={uri} key={uri} />
      ))}
    </CenteredArea>
  );
};
