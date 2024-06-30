import { ShapeType } from "@ldo/ldo";
import { potentialDocumentSchema } from "./potentialDocument.schema";
import { potentialDocumentContext } from "./potentialDocument.context";
import {
  PotentialObject,
  PotententialSubject,
} from "./potentialDocument.typings";

/**
 * =============================================================================
 * LDO ShapeTypes potentialDocument
 * =============================================================================
 */

/**
 * PotentialObject ShapeType
 */
export const PotentialObjectShapeType: ShapeType<PotentialObject> = {
  schema: potentialDocumentSchema,
  shape: "https://shaperepo.com/schemas/activitystreams#PotentialObject",
  context: potentialDocumentContext,
};

/**
 * PotententialSubject ShapeType
 */
export const PotententialSubjectShapeType: ShapeType<PotententialSubject> = {
  schema: potentialDocumentSchema,
  shape: "https://shaperepo.com/schemas/activitystreams#PotententialSubject",
  context: potentialDocumentContext,
};
