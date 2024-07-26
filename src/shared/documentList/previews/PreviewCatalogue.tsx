import { ComponentType } from "react";
import { ViewProps } from "../../../views/ViewProps";
import { ArticlePreview } from "./ArticlePreview";
import { ImagePreview } from "./ImagePreview";
import { PotentialSubject } from "../../../.ldo/potentialDocument.typings";
import { Container, Leaf } from "@ldo/solid";
import MimeMatcher from "mime-matcher";

type PreviewCatalogue = Record<string, ComponentType<ViewProps<any>>>;

export const PREVIEW_SUBJECT_CATALOGUE: PreviewCatalogue = {
  "https://www.w3.org/ns/activitystreams#Article": ArticlePreview,
};

export const PREVIEW_CATALOGUE_BY_MIME_TYPE: PreviewCatalogue = {
  "image/*": ImagePreview,
};

export function getComponentFromCatalogue({
  subject,
  resource,
}: {
  subject?: PotentialSubject;
  resource: Leaf | Container;
}): ComponentType<ViewProps<any>> | undefined {
  const fromSubjectCatalogue =
    PREVIEW_SUBJECT_CATALOGUE[subject?.type?.["@id"] || ""];
  if (fromSubjectCatalogue) return fromSubjectCatalogue;

  if (resource.type === "leaf" && resource.isBinary()) {
    for (const [key, value] of Object.entries(PREVIEW_CATALOGUE_BY_MIME_TYPE)) {
      if (new MimeMatcher(key).match(resource.getMimeType()!)) {
        return value;
      }
    }
  }

  return undefined;
}
