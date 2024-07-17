import { Schema } from "shexj";

/**
 * =============================================================================
 * solidJournalConfigSchema: ShexJ Schema for solidJournalConfig
 * =============================================================================
 */
export const solidJournalConfigSchema: Schema = {
  type: "Schema",
  shapes: [
    {
      id: "https://shaperepo.com/schemas/activitystreams#SolidJournalConfig",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          type: "EachOf",
          expressions: [
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                datatype:
                  "https://shaperepo.com/vocab/solid_journal#SolidJournalConfig",
              },
            },
            {
              type: "TripleConstraint",
              predicate: "https://shaperepo.com/vocab/solid_journal#blog",
              valueExpr: {
                type: "NodeConstraint",
                nodeKind: "iri",
              },
            },
            {
              type: "TripleConstraint",
              predicate: "https://shaperepo.com/vocab/solid_journal#media",
              valueExpr: {
                type: "NodeConstraint",
                nodeKind: "iri",
              },
            },
          ],
        },
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
  ],
};
