import { Schema } from "shexj";

/**
 * =============================================================================
 * potentialDocumentSchema: ShexJ Schema for potentialDocument
 * =============================================================================
 */
export const potentialDocumentSchema: Schema = {
  type: "Schema",
  shapes: [
    {
      id: "https://shaperepo.com/schemas/activitystreams#PotentialObject",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          id: "https://shaperepo.com/schemas/activitystreams#ObjectShape",
          type: "TripleConstraint",
          predicate: "http://xmlns.com/foaf/0.1/primaryTopic",
          valueExpr: {
            type: "NodeConstraint",
            nodeKind: "iri",
          },
          min: 0,
          max: 1,
        },
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
  ],
};
