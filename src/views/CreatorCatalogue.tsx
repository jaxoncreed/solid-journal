import { ReactElement } from "react";
import { creatorFunction } from "./creatorFunction";
import { PicLeftOutlined } from "@ant-design/icons";
import { articleCreator } from "./articleView/articleCreator";

export interface Creator {
  name: string;
  key: string;
  icon: ReactElement;
  creatorFunction: creatorFunction;
}

type CreatorCatalogue = Creator[];

export const CREATOR_CATALOGUE: CreatorCatalogue = [
  {
    name: "Article",
    key: "article",
    icon: <PicLeftOutlined />,
    creatorFunction: articleCreator,
  },
];
