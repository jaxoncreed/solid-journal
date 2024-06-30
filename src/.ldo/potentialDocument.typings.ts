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
  primaryTopic?: PotententialSubject;
}

/**
 * PotententialSubject Type
 */
export interface PotententialSubject {
  "@id"?: string;
  "@context"?: ContextDefinition;
  type?: {
    "@id": string;
  };
}
