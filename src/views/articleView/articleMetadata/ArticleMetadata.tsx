import {
  forwardRef,
  MutableRefObject,
  useCallback,
  useImperativeHandle,
  useRef,
} from "react";
import { CenteredArea } from "../../../layout/CenteredArea";
import { EditableParagraph, EditableTitle } from "../../../shared/EditableText";
import { SplashImage } from "./SplashImage";
import { Article, Image, Link } from "../../../.ldo/activityPub.typings";
import { useForceUpdate } from "../../../shared/hooks/useForceUpdate";
import { Leaf, SolidLdoTransactionDataset } from "@ldo/solid";
import { useLdo } from "@ldo/solid-react";
import { ArticleShapeType } from "../../../.ldo/activityPub.shapeTypes";
import { displayError } from "../../../actions/displayError";

export interface ArticleMetadataMethods {
  save: () => Promise<void>;
}

interface ArticleMetadataProps {
  subject?: Article;
  resource?: Leaf;
  onStatusUpdate?: (hasUnsavedChanges: boolean) => void;
  isEditing: boolean;
}

export const ArticleMetadata = forwardRef<
  ArticleMetadataMethods,
  ArticleMetadataProps
>(({ subject, resource, onStatusUpdate, isEditing }, ref) => {
  const { dataset } = useLdo();

  // All of this is really bad and ugly. It should be built into LDO
  // There's a lot of forcing a rerender to get this to work with a transaction
  // Dataset
  /**
   * Metadata transactions
   */
  const forceUpdate = useForceUpdate();
  const transactionDataset =
    useRef<SolidLdoTransactionDataset>() as MutableRefObject<SolidLdoTransactionDataset>;
  const article = useRef<Article>() as MutableRefObject<Article>;
  const initializeRefs = useCallback(() => {
    if (subject && resource) {
      transactionDataset.current = dataset.startTransaction();
      article.current = transactionDataset.current
        .usingType(ArticleShapeType)
        .write(resource.uri)
        .fromSubject(subject["@id"] as string);
    }
  }, [dataset, subject, resource]);
  if (!transactionDataset.current || !article.current) {
    initializeRefs();
  }

  const onTitleChange = useCallback(
    (text: string) => {
      article.current.name = [text];
      onStatusUpdate?.(true);
      forceUpdate();
    },
    [forceUpdate, onStatusUpdate]
  );

  const onSummaryChange = useCallback(
    (text: string) => {
      article.current.summary = [text];
      onStatusUpdate?.(true);
      forceUpdate();
    },
    [forceUpdate, onStatusUpdate]
  );

  const onNewImage = useCallback(() => {
    // TODO
    onStatusUpdate?.(true);
    forceUpdate();
  }, [forceUpdate, onStatusUpdate]);

  useImperativeHandle(ref, () => ({
    async save(): Promise<void> {
      const result = await transactionDataset.current.commitToPod();
      if (result.isError) {
        displayError(result);
        return;
      }
      initializeRefs();
    },
  }));

  const imageObject =
    (article.current?.image?.[0] as Image).url?.[0] ||
    (article.current?.image?.[0] as Link);
  const imageUri =
    typeof imageObject === "string" ? imageObject : imageObject.href;

  return (
    <CenteredArea>
      <EditableTitle
        placeholder="Article Title"
        isEditing={isEditing}
        value={article.current?.name?.[0]}
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
        value={article.current?.summary?.[0]}
        onChange={(e) => onSummaryChange(e.target.value)}
      />
    </CenteredArea>
  );
});
