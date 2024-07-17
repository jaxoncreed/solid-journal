import { FunctionComponent } from "react";
import { CenteredArea } from "../../../layout/CenteredArea";
import { EditableParagraph, EditableTitle } from "../../../shared/EditableText";
import { SplashImage } from "./SplashImage";

interface ArticleMetadataProps {
  titleValue?: string;
  onTitleChange: (value: string) => void;
  summaryValue?: string;
  onSummaryChange: (value: string) => void;
  imageUri?: string;
  onNewImage: (uploaded: unknown) => void;
  isEditing: boolean;
}

export const ArticleMetadata: FunctionComponent<ArticleMetadataProps> = ({
  titleValue,
  onTitleChange,
  summaryValue,
  onSummaryChange,
  imageUri,
  onNewImage,
  isEditing,
}) => {
  return (
    <CenteredArea>
      <EditableTitle
        placeholder="Article Title"
        isEditing={isEditing}
        value={titleValue}
        onChange={(e) => onTitleChange(e.target.value)}
      />
      <SplashImage
        imageUri={imageUri}
        onNewImage={onNewImage}
        isEditing={isEditing}
      />
      <EditableParagraph
        placeholder="Article Summary"
        isEditing={isEditing}
        value={summaryValue}
        onChange={(e) => onSummaryChange(e.target.value)}
      />
    </CenteredArea>
  );
};
