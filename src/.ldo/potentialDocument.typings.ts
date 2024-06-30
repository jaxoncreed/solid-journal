import { ContextDefinition } from "jsonld";

/**
 * =============================================================================
 * Typescript Typings for potentialDocument
 * =============================================================================
 */

/**
 * PotentialObject Type
 */
export interface PotentialObject {
  "@id"?: string;
  "@context"?: ContextDefinition;
  primaryTopic?: {
    "@id": string;
  };
}
