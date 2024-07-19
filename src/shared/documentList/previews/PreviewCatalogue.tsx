import { ComponentType } from "react";
import { ViewProps } from "../../../views/ViewProps";
import { ArticlePreview } from "./ArticlePreview";

type PreviewCatalogue = Record<string, ComponentType<ViewProps<any>>>;

export const PREVIEW_CATALOGUE: PreviewCatalogue = {
  "https://www.w3.org/ns/activitystreams#Article": ArticlePreview,
};
