import { ShapeType } from "@ldo/ldo";
import { solidJournalConfigSchema } from "./solidJournalConfig.schema";
import { solidJournalConfigContext } from "./solidJournalConfig.context";
import { SolidJournalConfig } from "./solidJournalConfig.typings";

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
