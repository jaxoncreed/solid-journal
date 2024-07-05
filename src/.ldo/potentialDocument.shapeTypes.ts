import { ShapeType } from "@ldo/ldo";
import { potentialDocumentSchema } from "./potentialDocument.schema";
import { potentialDocumentContext } from "./potentialDocument.context";
import { PotentialObject, PotentialSubject } from "./potentialDocument.typings";

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
 * PotentialSubject ShapeType
 */
export const PotentialSubjectShapeType: ShapeType<PotentialSubject> = {
  schema: potentialDocumentSchema,
  shape: "https://shaperepo.com/schemas/activitystreams#PotentialSubject",
  context: potentialDocumentContext,
};
