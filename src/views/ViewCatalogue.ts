import { ComponentType } from "react";
import { ViewProps } from "./ViewProps";
import { ArticleView } from "./articleView/ArticleView";

type ViewCatalogue = Record<string, ComponentType<ViewProps>>;

export const VIEW_CATALOGUE: ViewCatalogue = {
  "https://www.w3.org/ns/activitystreams#Article": ArticleView,
};
