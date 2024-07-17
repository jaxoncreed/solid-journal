import { ContextDefinition } from "jsonld";

/**
 * =============================================================================
 * Typescript Typings for solidJournalConfig
 * =============================================================================
 */

/**
 * SolidJournalConfig Type
 */
export interface SolidJournalConfig {
  "@id"?: string;
  "@context"?: ContextDefinition;
  type: string;
  blog: {
    "@id": string;
  };
  media: {
    "@id": string;
  };
}
