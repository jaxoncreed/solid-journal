import { LeafUri } from "@ldo/solid";
import { useResource } from "@ldo/solid-react";
import { forwardRef, useCallback, useImperativeHandle, useState } from "react";
import useAsyncEffect from "use-async-effect";
import { TipTapEditor } from "./TipTapEditor";
import { Skeleton } from "antd";

export interface HtmlEditorMethods {
  save: () => Promise<void>;
}

interface HtmlEditorProps {
  onStatusUpdate?: (hasUnsavedChanges: boolean) => void;
  uri: LeafUri;
  isEditing?: boolean;
}

export const HtmlEditor = forwardRef<HtmlEditorMethods, HtmlEditorProps>(
  ({ onStatusUpdate, uri, isEditing }, ref) => {
    /**
     * Fetch Content
     */
    const contentResource = useResource(uri);
    const [html, setHtml] = useState<string>();

    const onChange = useCallback(
      (text: string) => {
        setHtml(text);
        onStatusUpdate?.(true);
      },
      [onStatusUpdate]
    );

    useAsyncEffect(async () => {
      if (
        contentResource.isPresent() &&
        contentResource.getMimeType() === "text/html"
      ) {
        const rawHtml = await contentResource.getBlob()?.text();
        setHtml(rawHtml);
      }
    }, [contentResource]);

    /**
     * Save Content
     */
    useImperativeHandle(ref, () => ({
      async save(): Promise<void> {
        await contentResource.uploadAndOverwrite(
          new Blob([html || ""], {
            type: "text/html",
          }),
          "text/html"
        );
      },
    }));

    return html === undefined ? (
      <Skeleton active />
    ) : (
      <TipTapEditor
        initialValue={html}
        onChange={onChange}
        isEditing={isEditing}
      />
    );
  }
);