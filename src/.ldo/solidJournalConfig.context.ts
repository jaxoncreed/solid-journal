import { ContextDefinition } from "jsonld";

/**
 * =============================================================================
 * solidJournalConfigContext: JSONLD Context for solidJournalConfig
 * =============================================================================
 */
export const solidJournalConfigContext: ContextDefinition = {
  type: {
    "@id": "@type",
    "@type": "https://shaperepo.com/vocab/solid_journal#SolidJournalConfig",
  },
  blog: {
    "@id": "https://shaperepo.com/vocab/solid_journal#blog",
    "@type": "@id",
  },
  media: {
    "@id": "https://shaperepo.com/vocab/solid_journal#media",
    "@type": "@id",
  },
};
