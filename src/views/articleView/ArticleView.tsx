import { FunctionComponent, useCallback, useRef, useState } from "react";
import { ViewProps } from "../ViewProps";
import {
  HtmlEditor,
  HtmlEditorMethods,
} from "../../shared/htmlEditor/HtmlEditor";
import { Affix } from "antd";
import { PublishMenu } from "./PublishMenu";
import { Article } from "../../.ldo/activityPub.typings";
import { LeafUri } from "@ldo/solid";
import {
  ArticleMetadata,
  ArticleMetadataMethods,
} from "./articleMetadata/ArticleMetadata";

export const ArticleView: FunctionComponent<ViewProps<Article>> = ({
  subject,
  hasWriteAccess,
  resource,
}) => {
  const [didMetadataUpdate, setDidMetadataUpdate] = useState(false);
  const [didContentUpdate, setDidContentUpdate] = useState(false);

  const article = subject as unknown as Article;

  /**
   * HtmlEditor
   */
  const htmlEditorRef = useRef<HtmlEditorMethods>(null);

  /**
   * Metadata
   */
  const metadataRef = useRef<ArticleMetadataMethods>(null);

  /**
   * Save
   */
  const onSave = useCallback(async () => {
    await Promise.all([
      (async () => {
        if (didMetadataUpdate && metadataRef.current?.save) {
          await metadataRef.current.save();
          setDidMetadataUpdate(false);
        }
      })(),
      (async () => {
        if (didContentUpdate && htmlEditorRef.current?.save) {
          await htmlEditorRef.current.save();
          setDidContentUpdate(false);
        }
      })(),
    ]);
  }, [didMetadataUpdate, didContentUpdate]);

  if (!subject) return <></>;

  const contentUri = article.url?.[0] as LeafUri | undefined;

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
          resource={resource}
          subject={subject}
          onStatusUpdate={setDidMetadataUpdate}
          isEditing={!!hasWriteAccess}
          ref={metadataRef}
        />
        {contentUri && (
          <HtmlEditor
            isEditing={hasWriteAccess}
            uri={contentUri}
            ref={htmlEditorRef}
            onStatusUpdate={setDidContentUpdate}
          />
        )}
      </div>
    </>
  );
};
