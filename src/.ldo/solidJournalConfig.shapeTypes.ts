import { ShapeType } from "@ldo/ldo";
import { solidJournalConfigSchema } from "./solidJournalConfig.schema";
import { solidJournalConfigContext } from "./solidJournalConfig.context";
import {
  SolidJournalConfig,
  SolidJournalHomepage,
} from "./solidJournalConfig.typings";

/**
 * =============================================================================
 * LDO ShapeTypes solidJournalConfig
 * =============================================================================
 */

/**
 * SolidJournalConfig ShapeType
 */
export const SolidJournalConfigShapeType: ShapeType<SolidJournalConfig> = {
  schema: solidJournalConfigSchema,
  shape: "https://shaperepo.com/schemas/activitystreams#SolidJournalConfig",
  context: solidJournalConfigContext,
};

/**
 * SolidJournalHomepage ShapeType
 */
export const SolidJournalHomepageShapeType: ShapeType<SolidJournalHomepage> = {
  schema: solidJournalConfigSchema,
  shape: "https://shaperepo.com/schemas/activitystreams#SolidJournalHomepage",
  context: solidJournalConfigContext,
};
