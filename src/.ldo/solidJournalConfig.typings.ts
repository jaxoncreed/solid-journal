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
  type: {
    "@id": "SolidJournalConfig";
  };
  blog: {
    "@id": string;
  };
  media: {
    "@id": string;
  };
}

/**
 * SolidJournalHomepage Type
 */
export interface SolidJournalHomepage {
  "@id"?: string;
  "@context"?: ContextDefinition;
  type: {
    "@id": "Homepage";
  };
  outbox: {
    "@id": string;
  };
  content: {
    "@id": string;
  };
}
