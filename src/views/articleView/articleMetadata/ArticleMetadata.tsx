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
  // All of this is really bad and ugly. It should be built into LDO
  // There's a lot of forcing a rerender to get this to work with a transaction
  // Dataset
  /**
   * Metadata transactions
   */
  // const forceUpdate = useForceUpdate();
  // const transactionDataset =
  //   useRef<SolidLdoTransactionDataset>() as MutableRefObject<SolidLdoTransactionDataset>;
  // const initializeRefs = useCallback(() => {
  //   if (subject && resource) {
  //     transactionDataset.current = dataset.startTransaction();
  //     article.current = transactionDataset.current
  //       .usingType(ArticleShapeType)
  //       .write(resource.uri)
  //       .fromSubject(subject["@id"] as string);
  //   }
  // }, [dataset, subject, resource]);
  // const article = useRef<Article>() as MutableRefObject<Article>;
  // if (!transactionDataset.current || !article.current) {
  //   initializeRefs();
  // }

  // const onTitleChange = useCallback(
  //   (text: string) => {
  //     article.current.name = [text];
  //     setDidMetadataUpdate(true);
  //     forceUpdate();
  //   },
  //   [forceUpdate]
  // );

  // const onSummaryChange = useCallback(
  //   (text: string) => {
  //     article.current.summary = [text];
  //     setDidMetadataUpdate(true);
  //     forceUpdate();
  //   },
  //   [forceUpdate]
  // );

  // const onNewImage = useCallback(() => {
  //   // TODO
  //   setDidMetadataUpdate(true);
  //   forceUpdate();
  // }, [forceUpdate]);

  // const onSave = useCallback(async () => {
  //   if (didMetadataUpdate) {
  //     const result = await transactionDataset.current.commitToPod();
  //     if (result.isError) {
  //       displayError(result);
  //       return;
  //     }
  //   }
  //   if (didContentUpdate) {
  //     // TODO
  //   }
  //   initializeRefs();
  //   setDidMetadataUpdate(false);
  //   setDidContentUpdate(false);
  // }, [initializeRefs, didMetadataUpdate, didContentUpdate]);

  //   const imageObject =
  //   (article.current?.image?.[0] as Image).url?.[0] ||
  //   (article.current?.image?.[0] as Link);
  // const imageUri =
  //   typeof imageObject === "string" ? imageObject : imageObject.href;

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
