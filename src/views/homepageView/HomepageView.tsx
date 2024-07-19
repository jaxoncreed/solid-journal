import { FunctionComponent, useCallback, useRef, useState } from "react";
import { SolidJournalHomepage } from "../../.ldo/solidJournalConfig.typings";
import { ViewProps } from "../ViewProps";
import {
  HtmlEditor,
  HtmlEditorMethods,
} from "../../shared/htmlEditor/HtmlEditor";
import { LeafUri } from "@ldo/solid";
import { useResource, useSubject } from "@ldo/solid-react";
import { OrderedCollectionShapeType } from "../../.ldo/activityPub.shapeTypes";
import { OrderedCollectionView } from "../orderedCollectionView/OrderedCollectionView";
import { Affix, Flex, Typography } from "antd";
import { MenuButton } from "../../shared/htmlEditor/contentMenu/MenuButton";
import { SaveOutlined } from "@ant-design/icons";
import { useWindowSize } from "@uidotdev/usehooks";
import { CenteredArea } from "../../layout/CenteredArea";

export const HomepageView: FunctionComponent<
  ViewProps<SolidJournalHomepage>
> = ({ subject, resource, hasWriteAccess }) => {
  /**
   * Content
   */
  const [isSaving, setIsSaving] = useState(false);
  const [didContentUpdate, setDidContentUpdate] = useState(false);
  const htmlEditorRef = useRef<HtmlEditorMethods>(null);
  const onSave = useCallback(async () => {
    if (didContentUpdate) {
      setIsSaving(true);
      if (htmlEditorRef.current?.save) await htmlEditorRef.current.save();
      setIsSaving(false);
      setDidContentUpdate(false);
    }
  }, [didContentUpdate]);

  /**
   * Outbox
   */
  const outboxResource = useResource(subject?.outbox["@id"] as LeafUri);
  const outboxSubject = useSubject(
    OrderedCollectionShapeType,
    subject?.outbox["@id"]
  );

  const { width } = useWindowSize();
  const isMobile = width ? width < 1200 : true;

  const contentComponent = subject?.content["@id"] && (
    <HtmlEditor
      uri={subject?.content["@id"] as LeafUri}
      isEditing={hasWriteAccess}
      placeholder="Write custom Homepage content..."
      ref={htmlEditorRef}
      onStatusUpdate={setDidContentUpdate}
    />
  );
  const recentPostsComponent = (
    <>
      <Typography.Title level={3}>Recent Posts:</Typography.Title>
      <OrderedCollectionView
        subject={outboxSubject}
        resource={outboxResource}
        hasWriteAccess={hasWriteAccess}
      />
    </>
  );

  return (
    <>
      {hasWriteAccess && (
        <Affix>
          <Flex justify="flex-end" style={{ padding: 8 }}>
            <MenuButton
              type="primary"
              loading={isSaving}
              shape="round"
              icon={<SaveOutlined />}
              onClick={onSave}
              children="Save"
              disabled={!didContentUpdate}
            />
          </Flex>
        </Affix>
      )}
      {isMobile ? (
        <CenteredArea>
          {contentComponent}
          {recentPostsComponent}
        </CenteredArea>
      ) : (
        <Flex justify="center" align="stretch">
          <div
            style={{
              flex: 1,
              maxWidth: 550,
              padding: 8,
              marginRight: 16,
            }}>
            {contentComponent}
          </div>
          <div style={{ borderLeft: "1px solid black" }} />
          <div
            style={{
              flex: 1,
              maxWidth: 550,
              padding: 8,
              marginLeft: 16,
            }}>
            {recentPostsComponent}
          </div>
        </Flex>
      )}
    </>
  );
};
