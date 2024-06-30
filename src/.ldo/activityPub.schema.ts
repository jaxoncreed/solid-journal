import { Schema } from "shexj";

/**
 * =============================================================================
 * activityPubSchema: ShexJ Schema for activityPub
 * =============================================================================
 */
export const activityPubSchema: Schema = {
  type: "Schema",
  shapes: [
    {
      id: "https://shaperepo.com/schemas/activitystreams#ActivityPubObject",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          id: "https://shaperepo.com/schemas/activitystreams#ObjectShape",
          type: "EachOf",
          expressions: [
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                values: ["https://www.w3.org/ns/activitystreams#Object"],
              },
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value:
                      "Describes an object of any kind. The Object type serves as the base type for most of the other kinds of objects defined in the Activity Vocabulary, including other Core types such as Activity, IntransitiveActivity, Collection and OrderedCollection.",
                  },
                },
              ],
            },
            {
              type: "EachOf",
              expressions: [
                {
                  type: "TripleConstraint",
                  predicate: "https://www.w3.org/ns/activitystreams#attachment",
                  valueExpr:
                    "https://shaperepo.com/schemas/activitystreams#ActivityPubObject",
                  min: 0,
                  max: -1,
                },
                {
                  type: "TripleConstraint",
                  predicate: "https://www.w3.org/ns/activitystreams#attachment",
                  valueExpr:
                    "https://shaperepo.com/schemas/activitystreams#Link",
                  min: 0,
                  max: -1,
                },
              ],
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value:
                      "Identifies a resource attached or related to an object that potentially requires special handling. The intent is to provide a model that is at least semantically similar to attachments in email.",
                  },
                },
              ],
            },
            {
              type: "EachOf",
              expressions: [
                {
                  type: "TripleConstraint",
                  predicate:
                    "https://www.w3.org/ns/activitystreams#attributedTo",
                  valueExpr:
                    "https://shaperepo.com/schemas/activitystreams#ActivityPubObject",
                },
                {
                  type: "TripleConstraint",
                  predicate:
                    "https://www.w3.org/ns/activitystreams#attributedTo",
                  valueExpr:
                    "https://shaperepo.com/schemas/activitystreams#Link",
                  min: 0,
                  max: -1,
                },
              ],
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value:
                      "Identifies one or more entities to which this object is attributed. The attributed entities might not be Actors. For instance, an object might be attributed to the completion of another activity.",
                  },
                },
              ],
            },
            {
              type: "EachOf",
              expressions: [
                {
                  type: "TripleConstraint",
                  predicate: "https://www.w3.org/ns/activitystreams#audience",
                  valueExpr:
                    "https://shaperepo.com/schemas/activitystreams#ActivityPubObject",
                  min: 0,
                  max: -1,
                },
                {
                  type: "TripleConstraint",
                  predicate: "https://www.w3.org/ns/activitystreams#audience",
                  valueExpr:
                    "https://shaperepo.com/schemas/activitystreams#Link",
                  min: 0,
                  max: -1,
                },
              ],
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value:
                      "Identifies one or more entities that represent the total population of entities for which the object can considered to be relevant.",
                  },
                },
              ],
            },
            {
              type: "EachOf",
              expressions: [
                {
                  type: "TripleConstraint",
                  predicate: "https://www.w3.org/ns/activitystreams#content",
                  valueExpr: {
                    type: "NodeConstraint",
                    datatype: "http://www.w3.org/2001/XMLSchema#string",
                  },
                  min: 0,
                  max: -1,
                },
                {
                  type: "TripleConstraint",
                  predicate: "https://www.w3.org/ns/activitystreams#content",
                  valueExpr: {
                    type: "NodeConstraint",
                    datatype:
                      "http://www.w3.org/1999/02/22-rdf-syntax-ns#langString",
                  },
                  min: 0,
                  max: -1,
                },
              ],
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value:
                      "The content or textual representation of the Object encoded as a JSON string. By default, the value of content is HTML. The mediaType property can be used in the object to indicate a different content type. The content MAY be expressed using multiple language-tagged values. ",
                  },
                },
              ],
            },
            {
              type: "EachOf",
              expressions: [
                {
                  type: "TripleConstraint",
                  predicate: "https://www.w3.org/ns/activitystreams#context",
                  valueExpr:
                    "https://shaperepo.com/schemas/activitystreams#ActivityPubObject",
                  min: 0,
                  max: -1,
                },
                {
                  type: "TripleConstraint",
                  predicate: "https://www.w3.org/ns/activitystreams#context",
                  valueExpr:
                    "https://shaperepo.com/schemas/activitystreams#Link",
                  min: 0,
                  max: -1,
                },
              ],
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value:
                      'Identifies the context within which the object exists or an activity was performed. The notion of "context" used is intentionally vague. The intended function is to serve as a means of grouping objects and activities that share a common originating context or purpose. An example could be all activities relating to a common project or event.',
                  },
                },
              ],
            },
            {
              type: "EachOf",
              expressions: [
                {
                  type: "TripleConstraint",
                  predicate: "https://www.w3.org/ns/activitystreams#name",
                  valueExpr: {
                    type: "NodeConstraint",
                    datatype: "http://www.w3.org/2001/XMLSchema#string",
                  },
                  min: 0,
                  max: -1,
                },
                {
                  type: "TripleConstraint",
                  predicate: "https://www.w3.org/ns/activitystreams#name",
                  valueExpr: {
                    type: "NodeConstraint",
                    datatype:
                      "http://www.w3.org/1999/02/22-rdf-syntax-ns#langString",
                  },
                  min: 0,
                  max: -1,
                },
              ],
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value:
                      "A simple, human-readable, plain-text name for the object. HTML markup MUST NOT be included. The name MAY be expressed using multiple language-tagged values.",
                  },
                },
              ],
            },
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#endTime",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#dateTime",
              },
              min: 0,
              max: 1,
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value:
                      "The date and time describing the actual or expected ending time of the object. When used with an Activity object, for instance, the endTime property specifies the moment the activity concluded or is expected to conclude.",
                  },
                },
              ],
            },
            {
              type: "EachOf",
              expressions: [
                {
                  type: "TripleConstraint",
                  predicate: "https://www.w3.org/ns/activitystreams#generator",
                  valueExpr:
                    "https://shaperepo.com/schemas/activitystreams#ActivityPubObject",
                  min: 0,
                  max: -1,
                },
                {
                  type: "TripleConstraint",
                  predicate: "https://www.w3.org/ns/activitystreams#generator",
                  valueExpr:
                    "https://shaperepo.com/schemas/activitystreams#Link",
                  min: 0,
                  max: -1,
                },
              ],
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value:
                      "Identifies the entity (e.g. an application) that generated the object. ",
                  },
                },
              ],
            },
            {
              type: "EachOf",
              expressions: [
                {
                  type: "TripleConstraint",
                  predicate: "https://www.w3.org/ns/activitystreams#icon",
                  valueExpr:
                    "https://shaperepo.com/schemas/activitystreams#Image",
                  min: 0,
                  max: -1,
                },
                {
                  type: "TripleConstraint",
                  predicate: "https://www.w3.org/ns/activitystreams#icon",
                  valueExpr:
                    "https://shaperepo.com/schemas/activitystreams#Link",
                  min: 0,
                  max: -1,
                },
              ],
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value:
                      "Indicates an entity that describes an icon for this object. The image should have an aspect ratio of one (horizontal) to one (vertical) and should be suitable for presentation at a small size.",
                  },
                },
              ],
            },
            {
              type: "EachOf",
              expressions: [
                {
                  type: "TripleConstraint",
                  predicate: "https://www.w3.org/ns/activitystreams#image",
                  valueExpr:
                    "https://shaperepo.com/schemas/activitystreams#Image",
                  min: 0,
                  max: -1,
                },
                {
                  type: "TripleConstraint",
                  predicate: "https://www.w3.org/ns/activitystreams#image",
                  valueExpr:
                    "https://shaperepo.com/schemas/activitystreams#Link",
                  min: 0,
                  max: -1,
                },
              ],
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value:
                      "Indicates an entity that describes an image for this object. Unlike the icon property, there are no aspect ratio or display size limitations assumed.",
                  },
                },
              ],
            },
            {
              type: "EachOf",
              expressions: [
                {
                  type: "TripleConstraint",
                  predicate: "https://www.w3.org/ns/activitystreams#inReplyTo",
                  valueExpr:
                    "https://shaperepo.com/schemas/activitystreams#ActivityPubObject",
                  min: 0,
                  max: -1,
                },
                {
                  type: "TripleConstraint",
                  predicate: "https://www.w3.org/ns/activitystreams#inReplyTo",
                  valueExpr:
                    "https://shaperepo.com/schemas/activitystreams#Link",
                  min: 0,
                  max: -1,
                },
              ],
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value:
                      "Indicates one or more entities for which this object is considered a response.",
                  },
                },
              ],
            },
            {
              type: "EachOf",
              expressions: [
                {
                  type: "TripleConstraint",
                  predicate: "https://www.w3.org/ns/activitystreams#location",
                  valueExpr:
                    "https://shaperepo.com/schemas/activitystreams#ActivityPubObject",
                  min: 0,
                  max: -1,
                },
                {
                  type: "TripleConstraint",
                  predicate: "https://www.w3.org/ns/activitystreams#location",
                  valueExpr:
                    "https://shaperepo.com/schemas/activitystreams#Link",
                  min: 0,
                  max: -1,
                },
              ],
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value:
                      "Indicates one or more physical or logical locations associated with the object.",
                  },
                },
              ],
            },
            {
              type: "EachOf",
              expressions: [
                {
                  type: "TripleConstraint",
                  predicate: "https://www.w3.org/ns/activitystreams#preview",
                  valueExpr:
                    "https://shaperepo.com/schemas/activitystreams#ActivityPubObject",
                  min: 0,
                  max: -1,
                },
                {
                  type: "TripleConstraint",
                  predicate: "https://www.w3.org/ns/activitystreams#preview",
                  valueExpr:
                    "https://shaperepo.com/schemas/activitystreams#Link",
                  min: 0,
                  max: -1,
                },
              ],
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value:
                      "Identifies an entity that provides a preview of this object.",
                  },
                },
              ],
            },
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#published",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#dateTime",
              },
              min: 0,
              max: 1,
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value:
                      "The date and time at which the object was published",
                  },
                },
              ],
            },
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#replies",
              valueExpr:
                "https://shaperepo.com/schemas/activitystreams#Collection",
              min: 0,
              max: 1,
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value:
                      "Identifies a Collection containing objects considered to be responses to this object.",
                  },
                },
              ],
            },
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#startTime",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#dateTime",
              },
              min: 0,
              max: 1,
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value:
                      "The date and time describing the actual or expected starting time of the object. When used with an Activity object, for instance, the startTime property specifies the moment the activity began or is scheduled to begin.",
                  },
                },
              ],
            },
            {
              type: "EachOf",
              expressions: [
                {
                  type: "TripleConstraint",
                  predicate: "https://www.w3.org/ns/activitystreams#summary",
                  valueExpr: {
                    type: "NodeConstraint",
                    datatype: "http://www.w3.org/2001/XMLSchema#string",
                  },
                  min: 0,
                  max: -1,
                },
                {
                  type: "TripleConstraint",
                  predicate: "https://www.w3.org/ns/activitystreams#summary",
                  valueExpr: {
                    type: "NodeConstraint",
                    datatype:
                      "http://www.w3.org/1999/02/22-rdf-syntax-ns#langString",
                  },
                  min: 0,
                  max: -1,
                },
              ],
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value:
                      "A natural language summarization of the object encoded as HTML. Multiple language tagged summaries MAY be provided.",
                  },
                },
              ],
            },
            {
              type: "EachOf",
              expressions: [
                {
                  type: "TripleConstraint",
                  predicate: "https://www.w3.org/ns/activitystreams#tag",
                  valueExpr:
                    "https://shaperepo.com/schemas/activitystreams#ActivityPubObject",
                  min: 0,
                  max: -1,
                },
                {
                  type: "TripleConstraint",
                  predicate: "https://www.w3.org/ns/activitystreams#tag",
                  valueExpr:
                    "https://shaperepo.com/schemas/activitystreams#Link",
                  min: 0,
                  max: -1,
                },
              ],
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value:
                      'One or more "tags" that have been associated with an objects. A tag can be any kind of Object. The key difference between attachment and tag is that the former implies association by inclusion, while the latter implies associated by reference.',
                  },
                },
              ],
            },
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#updated",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#dateTime",
              },
              min: 0,
              max: 1,
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value: "The date and time at which the object was updated",
                  },
                },
              ],
            },
            {
              type: "EachOf",
              expressions: [
                {
                  type: "TripleConstraint",
                  predicate: "https://www.w3.org/ns/activitystreams#url",
                  valueExpr: {
                    type: "NodeConstraint",
                    datatype: "http://www.w3.org/2001/XMLSchema#anyURI",
                  },
                  min: 0,
                  max: -1,
                },
                {
                  type: "TripleConstraint",
                  predicate: "https://www.w3.org/ns/activitystreams#url",
                  valueExpr:
                    "https://shaperepo.com/schemas/activitystreams#Link",
                  min: 0,
                  max: -1,
                },
              ],
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value:
                      "Identifies one or more links to representations of the object",
                  },
                },
              ],
            },
            {
              type: "EachOf",
              expressions: [
                {
                  type: "TripleConstraint",
                  predicate: "https://www.w3.org/ns/activitystreams#to",
                  valueExpr:
                    "https://shaperepo.com/schemas/activitystreams#ActivityPubObject",
                  min: 0,
                  max: -1,
                },
                {
                  type: "TripleConstraint",
                  predicate: "https://www.w3.org/ns/activitystreams#to",
                  valueExpr:
                    "https://shaperepo.com/schemas/activitystreams#Link",
                  min: 0,
                  max: -1,
                },
              ],
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value:
                      "Identifies an entity considered to be part of the public primary audience of an Object",
                  },
                },
              ],
            },
            {
              type: "EachOf",
              expressions: [
                {
                  type: "TripleConstraint",
                  predicate: "https://www.w3.org/ns/activitystreams#bto",
                  valueExpr:
                    "https://shaperepo.com/schemas/activitystreams#ActivityPubObject",
                  min: 0,
                  max: -1,
                },
                {
                  type: "TripleConstraint",
                  predicate: "https://www.w3.org/ns/activitystreams#bto",
                  valueExpr:
                    "https://shaperepo.com/schemas/activitystreams#Link",
                  min: 0,
                  max: -1,
                },
              ],
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value:
                      "Identifies an Object that is part of the private primary audience of this Object.",
                  },
                },
              ],
            },
            {
              type: "EachOf",
              expressions: [
                {
                  type: "TripleConstraint",
                  predicate: "https://www.w3.org/ns/activitystreams#cc",
                  valueExpr:
                    "https://shaperepo.com/schemas/activitystreams#ActivityPubObject",
                  min: 0,
                  max: -1,
                },
                {
                  type: "TripleConstraint",
                  predicate: "https://www.w3.org/ns/activitystreams#cc",
                  valueExpr:
                    "https://shaperepo.com/schemas/activitystreams#Link",
                  min: 0,
                  max: -1,
                },
              ],
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value:
                      "Identifies an Object that is part of the public secondary audience of this Object.",
                  },
                },
              ],
            },
            {
              type: "EachOf",
              expressions: [
                {
                  type: "TripleConstraint",
                  predicate: "https://www.w3.org/ns/activitystreams#bcc",
                  valueExpr:
                    "https://shaperepo.com/schemas/activitystreams#ActivityPubObject",
                  min: 0,
                  max: -1,
                },
                {
                  type: "TripleConstraint",
                  predicate: "https://www.w3.org/ns/activitystreams#bcc",
                  valueExpr:
                    "https://shaperepo.com/schemas/activitystreams#Link",
                  min: 0,
                  max: -1,
                },
              ],
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value:
                      "Identifies one or more Objects that are part of the private secondary audience of this Object.",
                  },
                },
              ],
            },
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#mediaType",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 0,
              max: 1,
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value:
                      "When used on a Link, identifies the MIME media type of the referenced resource. When used on an Object, identifies the MIME media type of the value of the content property. If not specified, the content property is assumed to contain text/html content.",
                  },
                },
              ],
            },
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#duration",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#duration",
              },
              min: 0,
              max: 1,
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value:
                      'When the object describes a time-bound resource, such as an audio or video, a meeting, etc, the duration property indicates the object\'s approximate duration. The value MUST be expressed as an xsd:duration as defined by [ xmlschema11-2], section 3.3.6 (e.g. a period of 5 seconds is represented as "PT5S").',
                  },
                },
              ],
            },
          ],
        },
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
    {
      id: "https://shaperepo.com/schemas/activitystreams#Link",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          id: "https://shaperepo.com/schemas/activitystreams#LinkShape",
          type: "EachOf",
          expressions: [
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                values: ["https://www.w3.org/ns/activitystreams#Link"],
              },
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value:
                      "A Link is an indirect, qualified reference to a resource identified by a URL. The fundamental model for links is established by [ RFC5988]. Many of the properties defined by the Activity Vocabulary allow values that are either instances of Object or Link. When a Link is used, it establishes a qualified relation connecting the subject (the containing object) to the resource identified by the href. Properties of the Link are properties of the reference as opposed to properties of the resource.",
                  },
                },
              ],
            },
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#href",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#anyURI",
              },
              min: 0,
              max: 1,
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value: "The target resource pointed to by a Link.",
                  },
                },
              ],
            },
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#rel",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 0,
              max: -1,
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value:
                      'A link relation associated with a Link. The value MUST conform to both the [HTML5] and [RFC5988] "link relation" definitions. In the [HTML5], any string not containing the "space" U+0020, "tab" (U+0009), "LF" (U+000A), "FF" (U+000C), "CR" (U+000D) or "," (U+002C) characters can be used as a valid link relation.',
                  },
                },
              ],
            },
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#mediaType",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 0,
              max: 1,
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value:
                      "When used on a Link, identifies the MIME media type of the referenced resource. When used on an Object, identifies the MIME media type of the value of the content property. If not specified, the content property is assumed to contain text/html content.",
                  },
                },
              ],
            },
            {
              type: "EachOf",
              expressions: [
                {
                  type: "TripleConstraint",
                  predicate: "https://www.w3.org/ns/activitystreams#name",
                  valueExpr: {
                    type: "NodeConstraint",
                    datatype: "http://www.w3.org/2001/XMLSchema#string",
                  },
                  min: 0,
                  max: -1,
                },
                {
                  type: "TripleConstraint",
                  predicate: "https://www.w3.org/ns/activitystreams#name",
                  valueExpr: {
                    type: "NodeConstraint",
                    datatype:
                      "http://www.w3.org/1999/02/22-rdf-syntax-ns#langString",
                  },
                  min: 0,
                  max: -1,
                },
              ],
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value:
                      "A simple, human-readable, plain-text name for the object. HTML markup MUST NOT be included. The name MAY be expressed using multiple language-tagged values.",
                  },
                },
              ],
            },
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#hreflang",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 0,
              max: 1,
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value:
                      "Hints as to the language used by the target resource. Value MUST be a [BCP47] Language-Tag.",
                  },
                },
              ],
            },
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#height",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
              },
              min: 0,
              max: 1,
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value:
                      "On a Link, specifies a hint as to the rendering height in device-independent pixels of the linked resource.",
                  },
                },
              ],
            },
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#width",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
              },
              min: 0,
              max: 1,
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value:
                      "On a Link, specifies a hint as to the rendering width in device-independent pixels of the linked resource.",
                  },
                },
              ],
            },
            {
              type: "EachOf",
              expressions: [
                {
                  type: "TripleConstraint",
                  predicate: "https://www.w3.org/ns/activitystreams#preview",
                  valueExpr:
                    "https://shaperepo.com/schemas/activitystreams#ActivityPubObject",
                  min: 0,
                  max: -1,
                },
                {
                  type: "TripleConstraint",
                  predicate: "https://www.w3.org/ns/activitystreams#preview",
                  valueExpr:
                    "https://shaperepo.com/schemas/activitystreams#Link",
                  min: 0,
                  max: -1,
                },
              ],
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value:
                      "Identifies an entity that provides a preview of this object.",
                  },
                },
              ],
            },
          ],
        },
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
    {
      id: "https://shaperepo.com/schemas/activitystreams#Activity",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          id: "https://shaperepo.com/schemas/activitystreams#ActivityShape",
          type: "EachOf",
          expressions: [
            "https://shaperepo.com/schemas/activitystreams#ObjectShape",
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                values: ["https://www.w3.org/ns/activitystreams#Activity"],
              },
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value:
                      "An Activity is a subtype of Object that describes some form of action that may happen, is currently happening, or has already happened. The Activity type itself serves as an abstract base type for all types of activities. It is important to note that the Activity type itself does not carry any specific semantics about the kind of action being taken.",
                  },
                },
              ],
            },
            {
              type: "EachOf",
              expressions: [
                {
                  type: "TripleConstraint",
                  predicate: "https://www.w3.org/ns/activitystreams#actor",
                  valueExpr:
                    "https://shaperepo.com/schemas/activitystreams#ActivityPubObject",
                  min: 0,
                  max: -1,
                },
                {
                  type: "TripleConstraint",
                  predicate: "https://www.w3.org/ns/activitystreams#actor",
                  valueExpr:
                    "https://shaperepo.com/schemas/activitystreams#Link",
                  min: 0,
                  max: -1,
                },
              ],
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value:
                      "Describes one or more entities that either performed or are expected to perform the activity. Any single activity can have multiple actors. The actor MAY be specified using an indirect Link.",
                  },
                },
              ],
            },
            {
              type: "EachOf",
              expressions: [
                {
                  type: "TripleConstraint",
                  predicate: "https://www.w3.org/ns/activitystreams#object",
                  valueExpr:
                    "https://shaperepo.com/schemas/activitystreams#ActivityPubObject",
                  min: 0,
                  max: -1,
                },
                {
                  type: "TripleConstraint",
                  predicate: "https://www.w3.org/ns/activitystreams#object",
                  valueExpr:
                    "https://shaperepo.com/schemas/activitystreams#Link",
                  min: 0,
                  max: -1,
                },
              ],
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value:
                      'When used within an Activity, describes the direct object of the activity. For instance, in the activity "John added a movie to his wishlist", the object of the activity is the movie added. When used within a Relationship describes the entity to which the subject is related.',
                  },
                },
              ],
            },
            {
              type: "EachOf",
              expressions: [
                {
                  type: "TripleConstraint",
                  predicate: "https://www.w3.org/ns/activitystreams#target",
                  valueExpr:
                    "https://shaperepo.com/schemas/activitystreams#ActivityPubObject",
                  min: 0,
                  max: -1,
                },
                {
                  type: "TripleConstraint",
                  predicate: "https://www.w3.org/ns/activitystreams#target",
                  valueExpr:
                    "https://shaperepo.com/schemas/activitystreams#Link",
                  min: 0,
                  max: -1,
                },
              ],
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value:
                      'Describes the indirect object, or target, of the activity. The precise meaning of the target is largely dependent on the type of action being described but will often be the object of the English preposition "to". For instance, in the activity "John added a movie to his wishlist", the target of the activity is John\'s wishlist. An activity can have more than one target.',
                  },
                },
              ],
            },
            {
              type: "EachOf",
              expressions: [
                {
                  type: "TripleConstraint",
                  predicate: "https://www.w3.org/ns/activitystreams#result",
                  valueExpr:
                    "https://shaperepo.com/schemas/activitystreams#ActivityPubObject",
                  min: 0,
                  max: -1,
                },
                {
                  type: "TripleConstraint",
                  predicate: "https://www.w3.org/ns/activitystreams#result",
                  valueExpr:
                    "https://shaperepo.com/schemas/activitystreams#Link",
                  min: 0,
                  max: -1,
                },
              ],
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value:
                      "Describes the result of the activity. For instance, if a particular action results in the creation of a new resource, the result property can be used to describe that new resource.",
                  },
                },
              ],
            },
            {
              type: "EachOf",
              expressions: [
                {
                  type: "TripleConstraint",
                  predicate: "https://www.w3.org/ns/activitystreams#origin",
                  valueExpr:
                    "https://shaperepo.com/schemas/activitystreams#ActivityPubObject",
                  min: 0,
                  max: -1,
                },
                {
                  type: "TripleConstraint",
                  predicate: "https://www.w3.org/ns/activitystreams#origin",
                  valueExpr:
                    "https://shaperepo.com/schemas/activitystreams#Link",
                  min: 0,
                  max: -1,
                },
              ],
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value:
                      'Describes an indirect object of the activity from which the activity is directed. The precise meaning of the origin is the object of the English preposition "from". For instance, in the activity "John moved an item to List B from List A", the origin of the activity is "List A". ',
                  },
                },
              ],
            },
            {
              type: "EachOf",
              expressions: [
                {
                  type: "TripleConstraint",
                  predicate: "https://www.w3.org/ns/activitystreams#instrument",
                  valueExpr:
                    "https://shaperepo.com/schemas/activitystreams#ActivityPubObject",
                  min: 0,
                  max: -1,
                },
                {
                  type: "TripleConstraint",
                  predicate: "https://www.w3.org/ns/activitystreams#instrument",
                  valueExpr:
                    "https://shaperepo.com/schemas/activitystreams#Link",
                  min: 0,
                  max: -1,
                },
              ],
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value:
                      "Identifies one or more objects used (or to be used) in the completion of an Activity.",
                  },
                },
              ],
            },
          ],
        },
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
    {
      id: "https://shaperepo.com/schemas/activitystreams#InstransitiveActivity",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          id: "https://shaperepo.com/schemas/activitystreams#IntransitiveActivityShape",
          type: "EachOf",
          expressions: [
            "https://shaperepo.com/schemas/activitystreams#ActivityShape",
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                values: [
                  "https://www.w3.org/ns/activitystreams#IntransitiveActivity",
                ],
              },
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value:
                      "Instances of IntransitiveActivity are a subtype of Activity representing intransitive actions. The object property is therefore inappropriate for these activities.",
                  },
                },
              ],
            },
          ],
        },
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
    {
      id: "https://shaperepo.com/schemas/activitystreams#Collection",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          id: "https://shaperepo.com/schemas/activitystreams#CollectionShape",
          type: "EachOf",
          expressions: [
            "https://shaperepo.com/schemas/activitystreams#ObjectShape",
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                values: ["https://www.w3.org/ns/activitystreams#Collection"],
              },
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value:
                      "A Collection is a subtype of Object that represents ordered or unordered sets of Object or Link instances. Refer to the Activity Streams 2.0 Core specification for a complete description of the Collection type. ",
                  },
                },
              ],
            },
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#totalItems",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
              },
              min: 0,
              max: 1,
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value:
                      "A non-negative integer specifying the total number of objects contained by the logical view of the collection. This number might not reflect the actual number of items serialized within the Collection object instance.",
                  },
                },
              ],
            },
            {
              type: "OneOf",
              expressions: [
                {
                  type: "TripleConstraint",
                  predicate: "https://www.w3.org/ns/activitystreams#current",
                  valueExpr:
                    "https://shaperepo.com/schemas/activitystreams#CollectionPage",
                  min: 0,
                  max: 1,
                },
                {
                  type: "TripleConstraint",
                  predicate: "https://www.w3.org/ns/activitystreams#current",
                  valueExpr:
                    "https://shaperepo.com/schemas/activitystreams#Link",
                  min: 0,
                  max: 1,
                },
              ],
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value:
                      "In a paged Collection, indicates the page that contains the most recently updated member items.",
                  },
                },
              ],
            },
            {
              type: "OneOf",
              expressions: [
                {
                  type: "TripleConstraint",
                  predicate: "https://www.w3.org/ns/activitystreams#first",
                  valueExpr:
                    "https://shaperepo.com/schemas/activitystreams#CollectionPage",
                  min: 0,
                  max: 1,
                },
                {
                  type: "TripleConstraint",
                  predicate: "https://www.w3.org/ns/activitystreams#first",
                  valueExpr:
                    "https://shaperepo.com/schemas/activitystreams#Link",
                  min: 0,
                  max: 1,
                },
              ],
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value:
                      "In a paged Collection, indicates the furthest preceeding page of items in the collection.",
                  },
                },
              ],
            },
            {
              type: "OneOf",
              expressions: [
                {
                  type: "TripleConstraint",
                  predicate: "https://www.w3.org/ns/activitystreams#last",
                  valueExpr:
                    "https://shaperepo.com/schemas/activitystreams#CollectionPage",
                  min: 0,
                  max: 1,
                },
                {
                  type: "TripleConstraint",
                  predicate: "https://www.w3.org/ns/activitystreams#last",
                  valueExpr:
                    "https://shaperepo.com/schemas/activitystreams#Link",
                  min: 0,
                  max: 1,
                },
              ],
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value:
                      "In a paged Collection, indicates the furthest proceeding page of the collection.",
                  },
                },
              ],
            },
            {
              type: "EachOf",
              expressions: [
                {
                  type: "TripleConstraint",
                  predicate: "https://www.w3.org/ns/activitystreams#items",
                  valueExpr:
                    "https://shaperepo.com/schemas/activitystreams#ActivityPubObject",
                  min: 0,
                  max: -1,
                },
                {
                  type: "TripleConstraint",
                  predicate: "https://www.w3.org/ns/activitystreams#items",
                  valueExpr:
                    "https://shaperepo.com/schemas/activitystreams#Link",
                  min: 0,
                  max: -1,
                },
              ],
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value:
                      "Identifies the items contained in a collection. The items might be ordered or unordered. ",
                  },
                },
              ],
            },
          ],
        },
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
    {
      id: "https://shaperepo.com/schemas/activitystreams#OrderedCollection",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          id: "https://shaperepo.com/schemas/activitystreams#OrderedCollectionShape",
          type: "EachOf",
          expressions: [
            "https://shaperepo.com/schemas/activitystreams#CollectionShape",
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                values: [
                  "https://www.w3.org/ns/activitystreams#OrderedCollection",
                ],
              },
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value:
                      "A subtype of Collection in which members of the logical collection are assumed to always be strictly ordered.",
                  },
                },
              ],
            },
          ],
        },
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
    {
      id: "https://shaperepo.com/schemas/activitystreams#CollectionPage",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          id: "https://shaperepo.com/schemas/activitystreams#CollectionPageShape",
          type: "EachOf",
          expressions: [
            "https://shaperepo.com/schemas/activitystreams#CollectionShape",
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                values: [
                  "https://www.w3.org/ns/activitystreams#CollectionPage",
                ],
              },
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value:
                      "Used to represent distinct subsets of items from a Collection. Refer to the Activity Streams 2.0 Core for a complete description of the CollectionPage object.",
                  },
                },
              ],
            },
            {
              type: "OneOf",
              expressions: [
                {
                  type: "TripleConstraint",
                  predicate: "https://www.w3.org/ns/activitystreams#partOf",
                  valueExpr:
                    "https://shaperepo.com/schemas/activitystreams#Link",
                  min: 0,
                  max: 1,
                },
                {
                  type: "TripleConstraint",
                  predicate: "https://www.w3.org/ns/activitystreams#partOf",
                  valueExpr:
                    "https://shaperepo.com/schemas/activitystreams#Collection",
                  min: 0,
                  max: 1,
                },
              ],
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value:
                      "Identifies the Collection to which a CollectionPage objects items belong.",
                  },
                },
              ],
            },
            {
              type: "OneOf",
              expressions: [
                {
                  type: "TripleConstraint",
                  predicate: "https://www.w3.org/ns/activitystreams#next",
                  valueExpr:
                    "https://shaperepo.com/schemas/activitystreams#CollectionPage",
                  min: 0,
                  max: 1,
                },
                {
                  type: "TripleConstraint",
                  predicate: "https://www.w3.org/ns/activitystreams#next",
                  valueExpr:
                    "https://shaperepo.com/schemas/activitystreams#Link",
                  min: 0,
                  max: 1,
                },
              ],
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value:
                      "In a paged Collection, indicates the next page of items.",
                  },
                },
              ],
            },
            {
              type: "OneOf",
              expressions: [
                {
                  type: "TripleConstraint",
                  predicate: "https://www.w3.org/ns/activitystreams#prev",
                  valueExpr:
                    "https://shaperepo.com/schemas/activitystreams#CollectionPage",
                  min: 0,
                  max: 1,
                },
                {
                  type: "TripleConstraint",
                  predicate: "https://www.w3.org/ns/activitystreams#next",
                  valueExpr:
                    "https://shaperepo.com/schemas/activitystreams#Link",
                  min: 0,
                  max: 1,
                },
              ],
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value:
                      "In a paged Collection, identifies the previous page of items.",
                  },
                },
              ],
            },
          ],
        },
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
    {
      id: "https://shaperepo.com/schemas/activitystreams#OrderedCollectionPage",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          id: "https://shaperepo.com/schemas/activitystreams#OrderedCollectionPageShape",
          type: "EachOf",
          expressions: [
            "https://shaperepo.com/schemas/activitystreams#OrderedCollectionShape",
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                values: [
                  "https://www.w3.org/ns/activitystreams#OrderedCollectionPage",
                ],
              },
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value:
                      "Used to represent ordered subsets of items from an OrderedCollection. Refer to the Activity Streams 2.0 Core for a complete description of the OrderedCollectionPage object.",
                  },
                },
              ],
            },
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#startIndex",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
              },
              min: 0,
              max: 1,
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value:
                      "A non-negative integer value identifying the relative position within the logical view of a strictly ordered collection.",
                  },
                },
              ],
            },
          ],
        },
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
    {
      id: "https://shaperepo.com/schemas/activitystreams#Accept",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          id: "https://shaperepo.com/schemas/activitystreams#AcceptShape",
          type: "EachOf",
          expressions: [
            "https://shaperepo.com/schemas/activitystreams#ActivityShape",
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                values: ["https://www.w3.org/ns/activitystreams#Accept"],
              },
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value:
                      "Indicates that the actor accepts the object. The target property can be used in certain circumstances to indicate the context into which the object has been accepted.",
                  },
                },
              ],
            },
          ],
        },
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
    {
      id: "https://shaperepo.com/schemas/activitystreams#TentativeAccept",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          id: "https://shaperepo.com/schemas/activitystreams#TentativeAcceptShape",
          type: "EachOf",
          expressions: [
            "https://shaperepo.com/schemas/activitystreams#AcceptShape",
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                values: [
                  "https://www.w3.org/ns/activitystreams#TentativeAccept",
                ],
              },
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value:
                      "A specialization of Accept indicating that the acceptance is tentative.",
                  },
                },
              ],
            },
          ],
        },
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
    {
      id: "https://shaperepo.com/schemas/activitystreams#Add",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          id: "https://shaperepo.com/schemas/activitystreams#AddShape",
          type: "EachOf",
          expressions: [
            "https://shaperepo.com/schemas/activitystreams#ActivityShape",
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                values: ["https://www.w3.org/ns/activitystreams#Add"],
              },
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value:
                      "Indicates that the actor has added the object to the target. If the target property is not explicitly specified, the target would need to be determined implicitly by context. The origin can be used to identify the context from which the object originated. ",
                  },
                },
              ],
            },
          ],
        },
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
    {
      id: "https://shaperepo.com/schemas/activitystreams#Arrive",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          id: "https://shaperepo.com/schemas/activitystreams#ArriveShape",
          type: "EachOf",
          expressions: [
            "https://shaperepo.com/schemas/activitystreams#IntransitiveActivityShape",
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                values: ["https://www.w3.org/ns/activitystreams#Arrive"],
              },
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value:
                      "An IntransitiveActivity that indicates that the actor has arrived at the location. The origin can be used to identify the context from which the actor originated. The target typically has no defined meaning.",
                  },
                },
              ],
            },
          ],
        },
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
    {
      id: "https://shaperepo.com/schemas/activitystreams#Create",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          id: "https://shaperepo.com/schemas/activitystreams#CreateShape",
          type: "EachOf",
          expressions: [
            "https://shaperepo.com/schemas/activitystreams#ActivityShape",
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                values: ["https://www.w3.org/ns/activitystreams#Create"],
              },
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value: "Indicates that the actor has created the object.",
                  },
                },
              ],
            },
          ],
        },
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
    {
      id: "https://shaperepo.com/schemas/activitystreams#Delete",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          id: "https://shaperepo.com/schemas/activitystreams#DeleteShape",
          type: "EachOf",
          expressions: [
            "https://shaperepo.com/schemas/activitystreams#ActivityShape",
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                values: ["https://www.w3.org/ns/activitystreams#Delete"],
              },
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value:
                      "Indicates that the actor has deleted the object. If specified, the origin indicates the context from which the object was deleted.",
                  },
                },
              ],
            },
          ],
        },
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
    {
      id: "https://shaperepo.com/schemas/activitystreams#Follow",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          id: "https://shaperepo.com/schemas/activitystreams#FollowShape",
          type: "EachOf",
          expressions: [
            "https://shaperepo.com/schemas/activitystreams#ActivityShape",
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                values: ["https://www.w3.org/ns/activitystreams#Follow"],
              },
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value:
                      'Indicates that the actor is "following" the object. Following is defined in the sense typically used within Social systems in which the actor is interested in any activity performed by or on the object. The target and origin typically have no defined meaning.',
                  },
                },
              ],
            },
          ],
        },
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
    {
      id: "https://shaperepo.com/schemas/activitystreams#Ignore",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          id: "https://shaperepo.com/schemas/activitystreams#IgnoreShape",
          type: "EachOf",
          expressions: [
            "https://shaperepo.com/schemas/activitystreams#ActivityShape",
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                values: ["https://www.w3.org/ns/activitystreams#Ignore"],
              },
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value:
                      "Indicates that the actor is ignoring the object. The target and origin typically have no defined meaning.",
                  },
                },
              ],
            },
          ],
        },
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
    {
      id: "https://shaperepo.com/schemas/activitystreams#Join",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          id: "https://shaperepo.com/schemas/activitystreams#JoinShape",
          type: "EachOf",
          expressions: [
            "https://shaperepo.com/schemas/activitystreams#ActivityShape",
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                values: ["https://www.w3.org/ns/activitystreams#Join"],
              },
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value:
                      "Indicates that the actor has joined the object. The target and origin typically have no defined meaning.",
                  },
                },
              ],
            },
          ],
        },
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
    {
      id: "https://shaperepo.com/schemas/activitystreams#Leave",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          id: "https://shaperepo.com/schemas/activitystreams#LeaveShape",
          type: "EachOf",
          expressions: [
            "https://shaperepo.com/schemas/activitystreams#ActivityShape",
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                values: ["https://www.w3.org/ns/activitystreams#Leave"],
              },
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value:
                      "Indicates that the actor has left the object. The target and origin typically have no meaning.",
                  },
                },
              ],
            },
          ],
        },
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
    {
      id: "https://shaperepo.com/schemas/activitystreams#Like",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          id: "https://shaperepo.com/schemas/activitystreams#LikeShape",
          type: "EachOf",
          expressions: [
            "https://shaperepo.com/schemas/activitystreams#ActivityShape",
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                values: ["https://www.w3.org/ns/activitystreams#Like"],
              },
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value:
                      "Indicates that the actor likes, recommends or endorses the object. The target and origin typically have no defined meaning.",
                  },
                },
              ],
            },
          ],
        },
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
    {
      id: "https://shaperepo.com/schemas/activitystreams#Offer",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          id: "https://shaperepo.com/schemas/activitystreams#OfferShape",
          type: "EachOf",
          expressions: [
            "https://shaperepo.com/schemas/activitystreams#ActivityShape",
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                values: ["https://www.w3.org/ns/activitystreams#Offer"],
              },
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value:
                      "Indicates that the actor is offering the object. If specified, the target indicates the entity to which the object is being offered.",
                  },
                },
              ],
            },
          ],
        },
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
    {
      id: "https://shaperepo.com/schemas/activitystreams#Invite",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          id: "https://shaperepo.com/schemas/activitystreams#InviteShape",
          type: "EachOf",
          expressions: [
            "https://shaperepo.com/schemas/activitystreams#OfferShape",
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                values: ["https://www.w3.org/ns/activitystreams#Invite"],
              },
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value:
                      "A specialization of Offer in which the actor is extending an invitation for the object to the target.",
                  },
                },
              ],
            },
          ],
        },
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
    {
      id: "https://shaperepo.com/schemas/activitystreams#Reject",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          id: "https://shaperepo.com/schemas/activitystreams#RejectShape",
          type: "EachOf",
          expressions: [
            "https://shaperepo.com/schemas/activitystreams#ActivityShape",
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                values: ["https://www.w3.org/ns/activitystreams#Reject"],
              },
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value:
                      "Indicates that the actor is rejecting the object. The target and origin typically have no defined meaning.",
                  },
                },
              ],
            },
          ],
        },
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
    {
      id: "https://shaperepo.com/schemas/activitystreams#TentativeReject",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          id: "https://shaperepo.com/schemas/activitystreams#TentativeRejectShape",
          type: "EachOf",
          expressions: [
            "https://shaperepo.com/schemas/activitystreams#RejectShape",
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                values: [
                  "https://www.w3.org/ns/activitystreams#TentativeReject",
                ],
              },
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value:
                      "A specialization of Reject in which the rejection is considered tentative.",
                  },
                },
              ],
            },
          ],
        },
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
    {
      id: "https://shaperepo.com/schemas/activitystreams#Remove",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          id: "https://shaperepo.com/schemas/activitystreams#RemoveShape",
          type: "EachOf",
          expressions: [
            "https://shaperepo.com/schemas/activitystreams#ActivityShape",
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                values: ["https://www.w3.org/ns/activitystreams#Remove"],
              },
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value:
                      "Indicates that the actor is removing the object. If specified, the origin indicates the context from which the object is being removed.",
                  },
                },
              ],
            },
          ],
        },
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
    {
      id: "https://shaperepo.com/schemas/activitystreams#Undo",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          id: "https://shaperepo.com/schemas/activitystreams#UndoShape",
          type: "EachOf",
          expressions: [
            "https://shaperepo.com/schemas/activitystreams#ActivityShape",
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                values: ["https://www.w3.org/ns/activitystreams#Undo"],
              },
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value:
                      ' Indicates that the actor is undoing the object. In most cases, the object will be an Activity describing some previously performed action (for instance, a person may have previously "liked" an article but, for whatever reason, might choose to undo that like at some later point in time). The target and origin typically have no defined meaning.',
                  },
                },
              ],
            },
          ],
        },
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
    {
      id: "https://shaperepo.com/schemas/activitystreams#Update",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          id: "https://shaperepo.com/schemas/activitystreams#UpdateShape",
          type: "EachOf",
          expressions: [
            "https://shaperepo.com/schemas/activitystreams#ActivityShape",
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                values: ["https://www.w3.org/ns/activitystreams#Update"],
              },
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value:
                      "Indicates that the actor has updated the object. Note, however, that this vocabulary does not define a mechanism for describing the actual set of modifications made to object. The target and origin typically have no defined meaning.",
                  },
                },
              ],
            },
          ],
        },
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
    {
      id: "https://shaperepo.com/schemas/activitystreams#View",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          id: "https://shaperepo.com/schemas/activitystreams#ViewShape",
          type: "EachOf",
          expressions: [
            "https://shaperepo.com/schemas/activitystreams#ActivityShape",
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                values: ["https://www.w3.org/ns/activitystreams#View"],
              },
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value: "Indicates that the actor has viewed the object.",
                  },
                },
              ],
            },
          ],
        },
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
    {
      id: "https://shaperepo.com/schemas/activitystreams#Listen",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          id: "https://shaperepo.com/schemas/activitystreams#ListenShape",
          type: "EachOf",
          expressions: [
            "https://shaperepo.com/schemas/activitystreams#ActivityShape",
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                values: ["https://www.w3.org/ns/activitystreams#Listen"],
              },
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value:
                      "Indicates that the actor has listened to the object.",
                  },
                },
              ],
            },
          ],
        },
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
    {
      id: "https://shaperepo.com/schemas/activitystreams#Read",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          id: "https://shaperepo.com/schemas/activitystreams#ReadShape",
          type: "EachOf",
          expressions: [
            "https://shaperepo.com/schemas/activitystreams#ActivityShape",
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                values: ["https://www.w3.org/ns/activitystreams#Read"],
              },
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value: "Indicates that the actor has read the object.",
                  },
                },
              ],
            },
          ],
        },
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
    {
      id: "https://shaperepo.com/schemas/activitystreams#Move",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          id: "https://shaperepo.com/schemas/activitystreams#MoveShape",
          type: "EachOf",
          expressions: [
            "https://shaperepo.com/schemas/activitystreams#ActivityShape",
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                values: ["https://www.w3.org/ns/activitystreams#Move"],
              },
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value:
                      "Indicates that the actor has moved object from origin to target. If the origin or target are not specified, either can be determined by context.",
                  },
                },
              ],
            },
          ],
        },
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
    {
      id: "https://shaperepo.com/schemas/activitystreams#Travel",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          id: "https://shaperepo.com/schemas/activitystreams#TravelShape",
          type: "EachOf",
          expressions: [
            "https://shaperepo.com/schemas/activitystreams#IntransitiveActivityShape",
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                values: ["https://www.w3.org/ns/activitystreams#Travel"],
              },
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value:
                      "Indicates that the actor is traveling to target from origin. Travel is an IntransitiveObject whose actor specifies the direct object. If the target or origin are not specified, either can be determined by context.",
                  },
                },
              ],
            },
          ],
        },
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
    {
      id: "https://shaperepo.com/schemas/activitystreams#Announce",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          id: "https://shaperepo.com/schemas/activitystreams#AnnounceShape",
          type: "EachOf",
          expressions: [
            "https://shaperepo.com/schemas/activitystreams#ActivityShape",
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                values: ["https://www.w3.org/ns/activitystreams#Announce"],
              },
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value:
                      "Indicates that the actor is calling the target's attention the object. The origin typically has no defined meaning.",
                  },
                },
              ],
            },
          ],
        },
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
    {
      id: "https://shaperepo.com/schemas/activitystreams#Block",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          id: "https://shaperepo.com/schemas/activitystreams#BlockShape",
          type: "EachOf",
          expressions: [
            "https://shaperepo.com/schemas/activitystreams#IgnoreShape",
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                values: ["https://www.w3.org/ns/activitystreams#Block"],
              },
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value:
                      "Indicates that the actor is blocking the object. Blocking is a stronger form of Ignore. The typical use is to support social systems that allow one user to block activities or content of other users. The target and origin typically have no defined meaning.",
                  },
                },
              ],
            },
          ],
        },
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
    {
      id: "https://shaperepo.com/schemas/activitystreams#Flag",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          id: "https://shaperepo.com/schemas/activitystreams#FlagShape",
          type: "EachOf",
          expressions: [
            "https://shaperepo.com/schemas/activitystreams#ActivityShape",
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                values: ["https://www.w3.org/ns/activitystreams#Flag"],
              },
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value:
                      'Indicates that the actor is "flagging" the object. Flagging is defined in the sense common to many social platforms as reporting content as being inappropriate for any number of reasons.',
                  },
                },
              ],
            },
          ],
        },
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
    {
      id: "https://shaperepo.com/schemas/activitystreams#Dislike",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          id: "https://shaperepo.com/schemas/activitystreams#DislikeShape",
          type: "EachOf",
          expressions: [
            "https://shaperepo.com/schemas/activitystreams#ActivityShape",
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                values: ["https://www.w3.org/ns/activitystreams#Dislike"],
              },
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value: "Indicates that the actor dislikes the object.",
                  },
                },
              ],
            },
          ],
        },
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
    {
      id: "https://shaperepo.com/schemas/activitystreams#Question",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          id: "https://shaperepo.com/schemas/activitystreams#QuestionShape",
          type: "EachOf",
          expressions: [
            "https://shaperepo.com/schemas/activitystreams#IntransitiveActivityShape",
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                values: ["https://www.w3.org/ns/activitystreams#Question"],
              },
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value:
                      " Represents a question being asked. Question objects are an extension of IntransitiveActivity. That is, the Question object is an Activity, but the direct object is the question itself and therefore it would not contain an object property. Either of the anyOf and oneOf properties MAY be used to express possible answers, but a Question object MUST NOT have both properties. ",
                  },
                },
              ],
            },
            {
              type: "OneOf",
              expressions: [
                {
                  type: "EachOf",
                  expressions: [
                    {
                      type: "TripleConstraint",
                      predicate: "https://www.w3.org/ns/activitystreams#oneOf",
                      valueExpr:
                        "https://shaperepo.com/schemas/activitystreams#ActivityPubObject",
                      min: 0,
                      max: -1,
                    },
                    {
                      type: "TripleConstraint",
                      predicate: "https://www.w3.org/ns/activitystreams#oneOf",
                      valueExpr:
                        "https://shaperepo.com/schemas/activitystreams#Link",
                      min: 0,
                      max: -1,
                    },
                  ],
                  annotations: [
                    {
                      type: "Annotation",
                      predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                      object: {
                        value:
                          " Identifies an exclusive option for a Question. Use of oneOf implies that the Question can have only a single answer. To indicate that a Question can have multiple answers, use anyOf.",
                      },
                    },
                  ],
                },
                {
                  type: "EachOf",
                  expressions: [
                    {
                      type: "TripleConstraint",
                      predicate: "https://www.w3.org/ns/activitystreams#anyOf",
                      valueExpr:
                        "https://shaperepo.com/schemas/activitystreams#ActivityPubObject",
                      min: 0,
                      max: -1,
                    },
                    {
                      type: "TripleConstraint",
                      predicate: "https://www.w3.org/ns/activitystreams#anyOf",
                      valueExpr:
                        "https://shaperepo.com/schemas/activitystreams#Link",
                      min: 0,
                      max: -1,
                    },
                  ],
                  annotations: [
                    {
                      type: "Annotation",
                      predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                      object: {
                        value:
                          " Identifies an inclusive option for a Question. Use of anyOf implies that the Question can have multiple answers. To indicate that a Question can have only one answer, use oneOf.",
                      },
                    },
                  ],
                },
              ],
            },
            {
              type: "EachOf",
              expressions: [
                {
                  type: "TripleConstraint",
                  predicate: "https://www.w3.org/ns/activitystreams#closed",
                  valueExpr:
                    "https://shaperepo.com/schemas/activitystreams#ActivityPubObject",
                  min: 0,
                  max: -1,
                },
                {
                  type: "TripleConstraint",
                  predicate: "https://www.w3.org/ns/activitystreams#closed",
                  valueExpr:
                    "https://shaperepo.com/schemas/activitystreams#Link",
                  min: 0,
                  max: -1,
                },
                {
                  type: "TripleConstraint",
                  predicate: "https://www.w3.org/ns/activitystreams#closed",
                  valueExpr: {
                    type: "NodeConstraint",
                    datatype: "http://www.w3.org/2001/XMLSchema#dateTime",
                  },
                  min: 0,
                  max: 1,
                },
                {
                  type: "TripleConstraint",
                  predicate: "https://www.w3.org/ns/activitystreams#closed",
                  valueExpr: {
                    type: "NodeConstraint",
                    datatype: "http://www.w3.org/2001/XMLSchema#boolean",
                  },
                },
              ],
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value:
                      "Indicates that a question has been closed, and answers are no longer accepted.",
                  },
                },
              ],
            },
          ],
        },
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
    {
      id: "https://shaperepo.com/schemas/activitystreams#Actor",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          id: "https://shaperepo.com/schemas/activitystreams#ActorShape",
          type: "EachOf",
          expressions: [
            "https://shaperepo.com/schemas/activitystreams#ObjectShape",
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#inbox",
              valueExpr:
                "https://shaperepo.com/schemas/activitystreams#OrderedCollection",
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value:
                      "A reference to an [ActivityStreams] OrderedCollection comprised of all the messages received by the actor.",
                  },
                },
              ],
            },
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#outbox",
              valueExpr:
                "https://shaperepo.com/schemas/activitystreams#OrderedCollection",
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value:
                      "An [ActivityStreams] OrderedCollection comprised of all the messages produced by the actor.",
                  },
                },
              ],
            },
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#following",
              valueExpr:
                "https://shaperepo.com/schemas/activitystreams#Collection",
              min: 0,
              max: 1,
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value:
                      "A link to an [ActivityStreams] collection of the actors that this actor is following",
                  },
                },
              ],
            },
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#followers",
              valueExpr:
                "https://shaperepo.com/schemas/activitystreams#Collection",
              min: 0,
              max: 1,
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value:
                      "A link to an [ActivityStreams] collection of the actors that follow this actor.",
                  },
                },
              ],
            },
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#liked",
              valueExpr:
                "https://shaperepo.com/schemas/activitystreams#Collection",
              min: 0,
              max: 1,
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value:
                      "A link to an [ActivityStreams] collection of objects this actor has liked.",
                  },
                },
              ],
            },
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#streams",
              valueExpr:
                "https://shaperepo.com/schemas/activitystreams#Collection",
              min: 0,
              max: 1,
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value:
                      "A list of supplementary Collections which may be of interest.",
                  },
                },
              ],
            },
            {
              type: "TripleConstraint",
              predicate:
                "https://www.w3.org/ns/activitystreams#preferredUsername",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#string",
              },
              min: 0,
              max: 1,
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value:
                      "A short username which may be used to refer to the actor, with no uniqueness guarantees.",
                  },
                },
              ],
            },
          ],
        },
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
    {
      id: "https://shaperepo.com/schemas/activitystreams#Application",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          id: "https://shaperepo.com/schemas/activitystreams#ApplicationShape",
          type: "EachOf",
          expressions: [
            "https://shaperepo.com/schemas/activitystreams#ActorShape",
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                values: ["https://www.w3.org/ns/activitystreams#Application"],
              },
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value: "Describes a software application.",
                  },
                },
              ],
            },
          ],
        },
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
    {
      id: "https://shaperepo.com/schemas/activitystreams#Group",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          id: "https://shaperepo.com/schemas/activitystreams#GroupShape",
          type: "EachOf",
          expressions: [
            "https://shaperepo.com/schemas/activitystreams#ActorShape",
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                values: ["https://www.w3.org/ns/activitystreams#Group"],
              },
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value:
                      "Represents a formal or informal collective of Actors.",
                  },
                },
              ],
            },
          ],
        },
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
    {
      id: "https://shaperepo.com/schemas/activitystreams#Organization",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          id: "https://shaperepo.com/schemas/activitystreams#OrganizationShape",
          type: "EachOf",
          expressions: [
            "https://shaperepo.com/schemas/activitystreams#ActorShape",
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                values: ["https://www.w3.org/ns/activitystreams#Organization"],
              },
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value: "Represents an organization.",
                  },
                },
              ],
            },
          ],
        },
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
    {
      id: "https://shaperepo.com/schemas/activitystreams#Person",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          id: "https://shaperepo.com/schemas/activitystreams#PersonShape",
          type: "EachOf",
          expressions: [
            "https://shaperepo.com/schemas/activitystreams#ActorShape",
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                values: ["https://www.w3.org/ns/activitystreams#Person"],
              },
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value: "Represents an individual person.",
                  },
                },
              ],
            },
          ],
        },
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
    {
      id: "https://shaperepo.com/schemas/activitystreams#Service",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          id: "https://shaperepo.com/schemas/activitystreams#ServiceShape",
          type: "EachOf",
          expressions: [
            "https://shaperepo.com/schemas/activitystreams#ActorShape",
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                values: ["https://www.w3.org/ns/activitystreams#Service"],
              },
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value: "Represents a service of any kind.",
                  },
                },
              ],
            },
          ],
        },
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
    {
      id: "https://shaperepo.com/schemas/activitystreams#Relationship",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          id: "https://shaperepo.com/schemas/activitystreams#RelationshipShape",
          type: "EachOf",
          expressions: [
            "https://shaperepo.com/schemas/activitystreams#ObjectShape",
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                values: ["https://www.w3.org/ns/activitystreams#Relationship"],
              },
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value:
                      " Describes a relationship between two individuals. The subject and object properties are used to identify the connected individuals. See 5.2 Representing Relationships Between Entities for additional information. ",
                  },
                },
              ],
            },
            {
              type: "OneOf",
              expressions: [
                {
                  type: "TripleConstraint",
                  predicate: "https://www.w3.org/ns/activitystreams#subject",
                  valueExpr:
                    "https://shaperepo.com/schemas/activitystreams#ActivityPubObject",
                  min: 0,
                  max: 1,
                },
                {
                  type: "TripleConstraint",
                  predicate: "https://www.w3.org/ns/activitystreams#subject",
                  valueExpr:
                    "https://shaperepo.com/schemas/activitystreams#Link",
                  min: 0,
                  max: 1,
                },
              ],
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value:
                      'On a Relationship object, the subject property identifies one of the connected individuals. For instance, for a Relationship object describing "John is related to Sally", subject would refer to John.',
                  },
                },
              ],
            },
            {
              type: "OneOf",
              expressions: [
                {
                  type: "TripleConstraint",
                  predicate: "https://www.w3.org/ns/activitystreams#object",
                  valueExpr:
                    "https://shaperepo.com/schemas/activitystreams#ActivityPubObject",
                  min: 0,
                  max: 1,
                },
                {
                  type: "TripleConstraint",
                  predicate: "https://www.w3.org/ns/activitystreams#object",
                  valueExpr:
                    "https://shaperepo.com/schemas/activitystreams#Link",
                  min: 0,
                  max: 1,
                },
              ],
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value:
                      'When used within an Activity, describes the direct object of the activity. For instance, in the activity "John added a movie to his wishlist", the object of the activity is the movie added. When used within a Relationship describes the entity to which the subject is related.',
                  },
                },
              ],
            },
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#relationship",
              valueExpr:
                "https://shaperepo.com/schemas/activitystreams#ActivityPubObject",
              min: 0,
              max: -1,
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value:
                      "On a Relationship object, the relationship property identifies the kind of relationship that exists between subject and object.",
                  },
                },
              ],
            },
          ],
        },
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
    {
      id: "https://shaperepo.com/schemas/activitystreams#Article",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          id: "https://shaperepo.com/schemas/activitystreams#ArticleShape",
          type: "EachOf",
          expressions: [
            "https://shaperepo.com/schemas/activitystreams#ObjectShape",
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                values: ["https://www.w3.org/ns/activitystreams#Article"],
              },
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value:
                      "Represents any kind of multi-paragraph written work.",
                  },
                },
              ],
            },
          ],
        },
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
    {
      id: "https://shaperepo.com/schemas/activitystreams#Document",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          id: "https://shaperepo.com/schemas/activitystreams#DocumentShape",
          type: "EachOf",
          expressions: [
            "https://shaperepo.com/schemas/activitystreams#ObjectShape",
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                values: ["https://www.w3.org/ns/activitystreams#Document"],
              },
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value: "Represents a document of any kind.",
                  },
                },
              ],
            },
          ],
        },
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
    {
      id: "https://shaperepo.com/schemas/activitystreams#Audio",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          id: "https://shaperepo.com/schemas/activitystreams#AudioShape",
          type: "EachOf",
          expressions: [
            "https://shaperepo.com/schemas/activitystreams#DocumentShape",
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                values: ["https://www.w3.org/ns/activitystreams#Audio"],
              },
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value: "Represents an audio document of any kind.",
                  },
                },
              ],
            },
          ],
        },
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
    {
      id: "https://shaperepo.com/schemas/activitystreams#Image",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          id: "https://shaperepo.com/schemas/activitystreams#ImageShape",
          type: "EachOf",
          expressions: [
            "https://shaperepo.com/schemas/activitystreams#DocumentShape",
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                values: ["https://www.w3.org/ns/activitystreams#Image"],
              },
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value: "An image document of any kind",
                  },
                },
              ],
            },
          ],
        },
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
    {
      id: "https://shaperepo.com/schemas/activitystreams#Video",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          id: "https://shaperepo.com/schemas/activitystreams#VideoShape",
          type: "EachOf",
          expressions: [
            "https://shaperepo.com/schemas/activitystreams#DocumentShape",
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                values: ["https://www.w3.org/ns/activitystreams#Video"],
              },
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value: "Represents a video document of any kind. ",
                  },
                },
              ],
            },
          ],
        },
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
    {
      id: "https://shaperepo.com/schemas/activitystreams#Note",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          id: "https://shaperepo.com/schemas/activitystreams#NoteShape",
          type: "EachOf",
          expressions: [
            "https://shaperepo.com/schemas/activitystreams#ObjectShape",
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                values: ["https://www.w3.org/ns/activitystreams#Note"],
              },
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value:
                      "Represents a short written work typically less than a single paragraph in length.",
                  },
                },
              ],
            },
          ],
        },
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
    {
      id: "https://shaperepo.com/schemas/activitystreams#Page",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          id: "https://shaperepo.com/schemas/activitystreams#PageShape",
          type: "EachOf",
          expressions: [
            "https://shaperepo.com/schemas/activitystreams#DocumentShape",
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                values: ["https://www.w3.org/ns/activitystreams#Page"],
              },
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value: "Represents a Web Page.",
                  },
                },
              ],
            },
          ],
        },
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
    {
      id: "https://shaperepo.com/schemas/activitystreams#Event",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          id: "https://shaperepo.com/schemas/activitystreams#EventShape",
          type: "EachOf",
          expressions: [
            "https://shaperepo.com/schemas/activitystreams#ObjectShape",
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                values: ["https://www.w3.org/ns/activitystreams#Event"],
              },
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value: "Represents any kind of event.",
                  },
                },
              ],
            },
          ],
        },
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
    {
      id: "https://shaperepo.com/schemas/activitystreams#Place",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          id: "https://shaperepo.com/schemas/activitystreams#PlaceShape",
          type: "EachOf",
          expressions: [
            "https://shaperepo.com/schemas/activitystreams#ObjectShape",
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                values: ["https://www.w3.org/ns/activitystreams#Place"],
              },
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value:
                      "Represents a logical or physical location. See 5.3 Representing Places for additional information.",
                  },
                },
              ],
            },
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#accuracy",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#float",
              },
              min: 0,
              max: 1,
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value:
                      'Indicates the accuracy of position coordinates on a Place objects. Expressed in properties of percentage. e.g. "94.0" means "94.0% accurate".',
                  },
                },
              ],
            },
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#altitude",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#float",
              },
              min: 0,
              max: 1,
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value:
                      'Indicates the altitude of a place. The measurement units is indicated using the units property. If units is not specified, the default is assumed to be "m" indicating meters. ',
                  },
                },
              ],
            },
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#latitude",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#float",
              },
              min: 0,
              max: 1,
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value: "The latitude of a place",
                  },
                },
              ],
            },
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#latitude",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#float",
              },
              min: 0,
              max: 1,
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value: "The longitude of a place",
                  },
                },
              ],
            },
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#radius",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#float",
              },
              min: 0,
              max: 1,
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value:
                      'The radius from the given latitude and longitude for a Place. The units is expressed by the units property. If units is not specified, the default is assumed to be "m" indicating "meters".',
                  },
                },
              ],
            },
            {
              type: "OneOf",
              expressions: [
                {
                  type: "TripleConstraint",
                  predicate: "https://www.w3.org/ns/activitystreams#unit",
                  valueExpr: {
                    type: "NodeConstraint",
                    values: [
                      {
                        value: "cm",
                        type: "http://www.w3.org/2001/XMLSchema#string",
                      },
                      {
                        value: "feet",
                        type: "http://www.w3.org/2001/XMLSchema#string",
                      },
                      {
                        value: "inches",
                        type: "http://www.w3.org/2001/XMLSchema#string",
                      },
                      {
                        value: "km",
                        type: "http://www.w3.org/2001/XMLSchema#string",
                      },
                      {
                        value: "m",
                        type: "http://www.w3.org/2001/XMLSchema#string",
                      },
                      {
                        value: "miles",
                        type: "http://www.w3.org/2001/XMLSchema#string",
                      },
                    ],
                  },
                  min: 0,
                  max: 1,
                },
                {
                  type: "TripleConstraint",
                  predicate: "https://www.w3.org/ns/activitystreams#unit",
                  valueExpr: {
                    type: "NodeConstraint",
                    datatype: "http://www.w3.org/2001/XMLSchema#anyURI",
                  },
                },
              ],
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value:
                      'Specifies the measurement units for the radius and altitude properties on a Place object. If not specified, the default is assumed to be "m" for "meters".',
                  },
                },
              ],
            },
          ],
        },
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
    {
      id: "https://shaperepo.com/schemas/activitystreams#Mention",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          id: "https://shaperepo.com/schemas/activitystreams#MentionShape",
          type: "EachOf",
          expressions: [
            "https://shaperepo.com/schemas/activitystreams#LinkShape",
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                values: ["https://www.w3.org/ns/activitystreams#Mention"],
              },
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value: "A specialized Link that represents an @mention.",
                  },
                },
              ],
            },
          ],
        },
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
    {
      id: "https://shaperepo.com/schemas/activitystreams#Profile",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          id: "https://shaperepo.com/schemas/activitystreams#ProfileShape",
          type: "EachOf",
          expressions: [
            "https://shaperepo.com/schemas/activitystreams#ObjectShape",
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                values: ["https://www.w3.org/ns/activitystreams#Profile"],
              },
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value:
                      "A Profile is a content object that describes another Object, typically used to describe Actor Type objects. The describes property is used to reference the object being described by the profile.",
                  },
                },
              ],
            },
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#describes",
              valueExpr:
                "https://shaperepo.com/schemas/activitystreams#ActivityPubObject",
              min: 0,
              max: 1,
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value:
                      "On a Profile object, the describes property identifies the object described by the Profile.",
                  },
                },
              ],
            },
          ],
        },
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
    {
      id: "https://shaperepo.com/schemas/activitystreams#Tombstone",
      type: "ShapeDecl",
      shapeExpr: {
        type: "Shape",
        expression: {
          id: "https://shaperepo.com/schemas/activitystreams#TombstoneShape",
          type: "EachOf",
          expressions: [
            "https://shaperepo.com/schemas/activitystreams#ObjectShape",
            {
              type: "TripleConstraint",
              predicate: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
              valueExpr: {
                type: "NodeConstraint",
                values: ["https://www.w3.org/ns/activitystreams#Tombstone"],
              },
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value:
                      "A Tombstone represents a content object that has been deleted. It can be used in Collections to signify that there used to be an object at this position, but it has been deleted.",
                  },
                },
              ],
            },
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#formerType",
              valueExpr:
                "https://shaperepo.com/schemas/activitystreams#ActivityPubObject",
              min: 0,
              max: -1,
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value:
                      "On a Tombstone object, the formerType property identifies the type of the object that was deleted.",
                  },
                },
              ],
            },
            {
              type: "TripleConstraint",
              predicate: "https://www.w3.org/ns/activitystreams#deleted",
              valueExpr: {
                type: "NodeConstraint",
                datatype: "http://www.w3.org/2001/XMLSchema#dateTime",
              },
              min: 0,
              max: 1,
              annotations: [
                {
                  type: "Annotation",
                  predicate: "http://www.w3.org/2000/01/rdf-schema#comment",
                  object: {
                    value:
                      "On a Tombstone object, the deleted property is a timestamp for when the object was deleted.",
                  },
                },
              ],
            },
          ],
        },
        extra: ["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"],
      },
    },
  ],
};
