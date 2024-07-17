import {
  FunctionComponent,
  MutableRefObject,
  useCallback,
  useRef,
  useState,
} from "react";
import { ViewProps } from "../ViewProps";
import { ArticleMetadata } from "./articleMetadata/ArticleMetadata";
import { ArticleContent } from "./articleContent/ArticleContent";
import { Affix } from "antd";
import { PublishMenu } from "./PublishMenu";
import { useLdo } from "@ldo/solid-react";
import { Article, Image, Link } from "../../.ldo/activityPub.typings";
import { SolidLdoTransactionDataset } from "@ldo/solid";
import { ArticleShapeType } from "../../.ldo/activityPub.shapeTypes";
import { useForceUpdate } from "../../shared/hooks/useForceUpdate";
import { displayError } from "../../actions/displayError";

export const ArticleView: FunctionComponent<ViewProps> = ({
  subject,
  hasWriteAccess,
  resource,
}) => {
  // All of this is really bad and ugly. It should be built into LDO
  // There's a lot of forcing a rerender to get this to work with a transaction
  // Dataset
  const { dataset } = useLdo();
  const forceUpdate = useForceUpdate();
  const transactionDataset =
    useRef<SolidLdoTransactionDataset>() as MutableRefObject<SolidLdoTransactionDataset>;
  const initializeRefs = useCallback(() => {
    console.log(initializeRefs);
    if (subject && resource) {
      transactionDataset.current = dataset.startTransaction();
      article.current = transactionDataset.current
        .usingType(ArticleShapeType)
        .write(resource.uri)
        .fromSubject(subject["@id"] as string);
    }
  }, [dataset, subject, resource]);
  const article = useRef<Article>() as MutableRefObject<Article>;
  if (!transactionDataset.current || !article.current) {
    initializeRefs();
  }

  const [didMetadataUpdate, setDidMetadataUpdate] = useState(false);
  const [didContentUpdate, setDidContentUpdate] = useState(false);

  const onSave = useCallback(async () => {
    console.log("Saving");
    console.log(transactionDataset.current.getChanges().added?.toString());
    console.log(transactionDataset.current.getChanges().removed?.toString());
    const result = await transactionDataset.current.commitToPod();
    if (result.isError) {
      displayError(result);
      return;
    }
    initializeRefs();
    setDidMetadataUpdate(false);
    setDidContentUpdate(false);
  }, [initializeRefs]);

  const onTitleChange = useCallback(
    (text: string) => {
      article.current.name = [text];
      setDidMetadataUpdate(true);
      forceUpdate();
    },
    [forceUpdate]
  );

  const onSummaryChange = useCallback(
    (text: string) => {
      article.current.summary = [text];
      setDidMetadataUpdate(true);
      forceUpdate();
    },
    [forceUpdate]
  );

  const onNewImage = useCallback(() => {
    // TODO
    setDidMetadataUpdate(true);
    forceUpdate();
  }, [forceUpdate]);

  if (!subject) return <></>;

  const imageObject =
    (article.current?.image?.[0] as Image).url?.[0] ||
    (article.current?.image?.[0] as Link);
  const imageUri =
    typeof imageObject === "string" ? imageObject : imageObject.href;

  return (
    <>
      {hasWriteAccess && (
        <Affix offsetTop={0} style={{ zIndex: 1, pointerEvents: "none" }}>
          <PublishMenu
            isSavable={didMetadataUpdate || didContentUpdate}
            onSave={onSave}
          />
        </Affix>
      )}
      <div style={{ zIndex: 0 }}>
        <ArticleMetadata
          titleValue={article.current?.name?.[0]}
          summaryValue={article.current?.summary?.[0]}
          imageUri={imageUri}
          onTitleChange={onTitleChange}
          onSummaryChange={onSummaryChange}
          onNewImage={onNewImage}
          isEditing={!!hasWriteAccess}
        />
        <ArticleContent isEditing={hasWriteAccess} />
      </div>
    </>
  );
};
