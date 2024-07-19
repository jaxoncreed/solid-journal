import { ComponentType } from "react";
import { ViewProps } from "./ViewProps";
import { ArticleView } from "./articleView/ArticleView";
import { OrderedCollectionView } from "./orderedCollectionView/OrderedCollectionView";
import { LdoBase, ShapeType } from "@ldo/ldo";
import {
  ArticleShapeType,
  OrderedCollectionShapeType,
} from "../.ldo/activityPub.shapeTypes";
import { SolidJournalHomepageShapeType } from "../.ldo/solidJournalConfig.shapeTypes";
import { HomepageView } from "./homepageView/HomepageView";

export interface ViewCatalogueRecord<Type extends LdoBase> {
  shapeType: ShapeType<Type>;
  Component: ComponentType<ViewProps<Type>>;
}

export type ViewCatalogue = Record<string, ViewCatalogueRecord<any>>;

export const VIEW_CATALOGUE: ViewCatalogue = {
  "https://www.w3.org/ns/activitystreams#Article": {
    shapeType: ArticleShapeType,
    Component: ArticleView,
  },
  "https://www.w3.org/ns/activitystreams#OrderedCollection": {
    shapeType: OrderedCollectionShapeType,
    Component: OrderedCollectionView,
  },
  "https://shaperepo.com/vocab/solid_journal#Homepage": {
    shapeType: SolidJournalHomepageShapeType,
    Component: HomepageView,
  },
};
