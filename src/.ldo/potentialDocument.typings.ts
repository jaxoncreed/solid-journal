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
  type?: {
    "@id": string;
  };
  primaryTopic?: PotentialSubject;
}

/**
 * PotentialSubject Type
 */
export interface PotentialSubject {
  "@id"?: string;
  "@context"?: ContextDefinition;
  type?: {
    "@id": string;
  };
}
