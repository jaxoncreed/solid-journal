import { ContextDefinition } from "jsonld";

/**
 * =============================================================================
 * potentialDocumentContext: JSONLD Context for potentialDocument
 * =============================================================================
 */
export const potentialDocumentContext: ContextDefinition = {
  primaryTopic: {
    "@id": "http://xmlns.com/foaf/0.1/primaryTopic",
    "@type": "@id",
  },
};
