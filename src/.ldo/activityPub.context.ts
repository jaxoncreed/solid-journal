import { ContextDefinition } from "jsonld";

/**
 * =============================================================================
 * activityPubContext: JSONLD Context for activityPub
 * =============================================================================
 */
export const activityPubContext: ContextDefinition = {
  type: {
    "@id": "@type",
  },
  Object: "https://www.w3.org/ns/activitystreams#Object",
  attachment: {
    "@id": "https://www.w3.org/ns/activitystreams#attachment",
    "@type": "@id",
    "@container": "@set",
  },
  Link: "https://www.w3.org/ns/activitystreams#Link",
  href: {
    "@id": "https://www.w3.org/ns/activitystreams#href",
    "@type": "http://www.w3.org/2001/XMLSchema#anyURI",
  },
  rel: {
    "@id": "https://www.w3.org/ns/activitystreams#rel",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
    "@container": "@set",
  },
  mediaType: {
    "@id": "https://www.w3.org/ns/activitystreams#mediaType",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  name: {
    "@id": "https://www.w3.org/ns/activitystreams#name",
    "@type": [
      "http://www.w3.org/2001/XMLSchema#string",
      "http://www.w3.org/1999/02/22-rdf-syntax-ns#langString",
    ],
    "@container": "@set",
  },
  hreflang: {
    "@id": "https://www.w3.org/ns/activitystreams#hreflang",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  height: {
    "@id": "https://www.w3.org/ns/activitystreams#height",
    "@type": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
  },
  width: {
    "@id": "https://www.w3.org/ns/activitystreams#width",
    "@type": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
  },
  preview: {
    "@id": "https://www.w3.org/ns/activitystreams#preview",
    "@type": "@id",
    "@container": "@set",
  },
  attributedTo: {
    "@id": "https://www.w3.org/ns/activitystreams#attributedTo",
    "@type": "@id",
    "@container": "@set",
  },
  audience: {
    "@id": "https://www.w3.org/ns/activitystreams#audience",
    "@type": "@id",
    "@container": "@set",
  },
  content: {
    "@id": "https://www.w3.org/ns/activitystreams#content",
    "@type": [
      "http://www.w3.org/2001/XMLSchema#string",
      "http://www.w3.org/1999/02/22-rdf-syntax-ns#langString",
    ],
    "@container": "@set",
  },
  context: {
    "@id": "https://www.w3.org/ns/activitystreams#context",
    "@type": "@id",
    "@container": "@set",
  },
  endTime: {
    "@id": "https://www.w3.org/ns/activitystreams#endTime",
    "@type": "http://www.w3.org/2001/XMLSchema#dateTime",
  },
  generator: {
    "@id": "https://www.w3.org/ns/activitystreams#generator",
    "@type": "@id",
    "@container": "@set",
  },
  icon: {
    "@id": "https://www.w3.org/ns/activitystreams#icon",
    "@type": "@id",
    "@container": "@set",
  },
  Document: "https://www.w3.org/ns/activitystreams#Document",
  Image: "https://www.w3.org/ns/activitystreams#Image",
  image: {
    "@id": "https://www.w3.org/ns/activitystreams#image",
    "@type": "@id",
    "@container": "@set",
  },
  inReplyTo: {
    "@id": "https://www.w3.org/ns/activitystreams#inReplyTo",
    "@type": "@id",
    "@container": "@set",
  },
  location: {
    "@id": "https://www.w3.org/ns/activitystreams#location",
    "@type": "@id",
    "@container": "@set",
  },
  published: {
    "@id": "https://www.w3.org/ns/activitystreams#published",
    "@type": "http://www.w3.org/2001/XMLSchema#dateTime",
  },
  replies: {
    "@id": "https://www.w3.org/ns/activitystreams#replies",
    "@type": "@id",
  },
  Collection: "https://www.w3.org/ns/activitystreams#Collection",
  totalItems: {
    "@id": "https://www.w3.org/ns/activitystreams#totalItems",
    "@type": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
  },
  current: {
    "@id": "https://www.w3.org/ns/activitystreams#current",
    "@type": "@id",
  },
  CollectionPage: "https://www.w3.org/ns/activitystreams#CollectionPage",
  partOf: {
    "@id": "https://www.w3.org/ns/activitystreams#partOf",
    "@type": "@id",
  },
  next: {
    "@id": "https://www.w3.org/ns/activitystreams#next",
    "@type": "@id",
  },
  prev: {
    "@id": "https://www.w3.org/ns/activitystreams#prev",
    "@type": "@id",
  },
  first: {
    "@id": "https://www.w3.org/ns/activitystreams#first",
    "@type": "@id",
  },
  last: {
    "@id": "https://www.w3.org/ns/activitystreams#last",
    "@type": "@id",
  },
  items: {
    "@id": "https://www.w3.org/ns/activitystreams#items",
    "@type": "@id",
    "@container": "@set",
  },
  startTime: {
    "@id": "https://www.w3.org/ns/activitystreams#startTime",
    "@type": "http://www.w3.org/2001/XMLSchema#dateTime",
  },
  summary: {
    "@id": "https://www.w3.org/ns/activitystreams#summary",
    "@type": [
      "http://www.w3.org/2001/XMLSchema#string",
      "http://www.w3.org/1999/02/22-rdf-syntax-ns#langString",
    ],
    "@container": "@set",
  },
  tag: {
    "@id": "https://www.w3.org/ns/activitystreams#tag",
    "@type": "@id",
    "@container": "@set",
  },
  updated: {
    "@id": "https://www.w3.org/ns/activitystreams#updated",
    "@type": "http://www.w3.org/2001/XMLSchema#dateTime",
  },
  url: {
    "@id": "https://www.w3.org/ns/activitystreams#url",
    "@type": ["http://www.w3.org/2001/XMLSchema#anyURI", "@id"],
    "@container": "@set",
  },
  to: {
    "@id": "https://www.w3.org/ns/activitystreams#to",
    "@type": "@id",
    "@container": "@set",
  },
  bto: {
    "@id": "https://www.w3.org/ns/activitystreams#bto",
    "@type": "@id",
    "@container": "@set",
  },
  cc: {
    "@id": "https://www.w3.org/ns/activitystreams#cc",
    "@type": "@id",
    "@container": "@set",
  },
  bcc: {
    "@id": "https://www.w3.org/ns/activitystreams#bcc",
    "@type": "@id",
    "@container": "@set",
  },
  duration: {
    "@id": "https://www.w3.org/ns/activitystreams#duration",
    "@type": "http://www.w3.org/2001/XMLSchema#duration",
  },
  Activity: "https://www.w3.org/ns/activitystreams#Activity",
  actor: {
    "@id": "https://www.w3.org/ns/activitystreams#actor",
    "@type": "@id",
    "@container": "@set",
  },
  object: {
    "@id": "https://www.w3.org/ns/activitystreams#object",
    "@type": "@id",
    "@container": "@set",
  },
  target: {
    "@id": "https://www.w3.org/ns/activitystreams#target",
    "@type": "@id",
    "@container": "@set",
  },
  result: {
    "@id": "https://www.w3.org/ns/activitystreams#result",
    "@type": "@id",
    "@container": "@set",
  },
  origin: {
    "@id": "https://www.w3.org/ns/activitystreams#origin",
    "@type": "@id",
    "@container": "@set",
  },
  instrument: {
    "@id": "https://www.w3.org/ns/activitystreams#instrument",
    "@type": "@id",
    "@container": "@set",
  },
  IntransitiveActivity:
    "https://www.w3.org/ns/activitystreams#IntransitiveActivity",
  OrderedCollection: "https://www.w3.org/ns/activitystreams#OrderedCollection",
  OrderedCollectionPage:
    "https://www.w3.org/ns/activitystreams#OrderedCollectionPage",
  startIndex: {
    "@id": "https://www.w3.org/ns/activitystreams#startIndex",
    "@type": "http://www.w3.org/2001/XMLSchema#nonNegativeInteger",
  },
  Accept: "https://www.w3.org/ns/activitystreams#Accept",
  TentativeAccept: "https://www.w3.org/ns/activitystreams#TentativeAccept",
  Add: "https://www.w3.org/ns/activitystreams#Add",
  Arrive: "https://www.w3.org/ns/activitystreams#Arrive",
  Create: "https://www.w3.org/ns/activitystreams#Create",
  Delete: "https://www.w3.org/ns/activitystreams#Delete",
  Follow: "https://www.w3.org/ns/activitystreams#Follow",
  Ignore: "https://www.w3.org/ns/activitystreams#Ignore",
  Join: "https://www.w3.org/ns/activitystreams#Join",
  Leave: "https://www.w3.org/ns/activitystreams#Leave",
  Like: "https://www.w3.org/ns/activitystreams#Like",
  Offer: "https://www.w3.org/ns/activitystreams#Offer",
  Invite: "https://www.w3.org/ns/activitystreams#Invite",
  Reject: "https://www.w3.org/ns/activitystreams#Reject",
  TentativeReject: "https://www.w3.org/ns/activitystreams#TentativeReject",
  Remove: "https://www.w3.org/ns/activitystreams#Remove",
  Undo: "https://www.w3.org/ns/activitystreams#Undo",
  Update: "https://www.w3.org/ns/activitystreams#Update",
  View: "https://www.w3.org/ns/activitystreams#View",
  Listen: "https://www.w3.org/ns/activitystreams#Listen",
  Read: "https://www.w3.org/ns/activitystreams#Read",
  Move: "https://www.w3.org/ns/activitystreams#Move",
  Travel: "https://www.w3.org/ns/activitystreams#Travel",
  Announce: "https://www.w3.org/ns/activitystreams#Announce",
  Block: "https://www.w3.org/ns/activitystreams#Block",
  Flag: "https://www.w3.org/ns/activitystreams#Flag",
  Dislike: "https://www.w3.org/ns/activitystreams#Dislike",
  Question: "https://www.w3.org/ns/activitystreams#Question",
  oneOf: {
    "@id": "https://www.w3.org/ns/activitystreams#oneOf",
    "@type": "@id",
    "@container": "@set",
  },
  anyOf: {
    "@id": "https://www.w3.org/ns/activitystreams#anyOf",
    "@type": "@id",
    "@container": "@set",
  },
  closed: {
    "@id": "https://www.w3.org/ns/activitystreams#closed",
    "@type": [
      "@id",
      "http://www.w3.org/2001/XMLSchema#dateTime",
      "http://www.w3.org/2001/XMLSchema#boolean",
    ],
    "@container": "@set",
  },
  inbox: {
    "@id": "https://www.w3.org/ns/activitystreams#inbox",
    "@type": "@id",
  },
  outbox: {
    "@id": "https://www.w3.org/ns/activitystreams#outbox",
    "@type": "@id",
  },
  following: {
    "@id": "https://www.w3.org/ns/activitystreams#following",
    "@type": "@id",
  },
  followers: {
    "@id": "https://www.w3.org/ns/activitystreams#followers",
    "@type": "@id",
  },
  liked: {
    "@id": "https://www.w3.org/ns/activitystreams#liked",
    "@type": "@id",
  },
  streams: {
    "@id": "https://www.w3.org/ns/activitystreams#streams",
    "@type": "@id",
  },
  preferredUsername: {
    "@id": "https://www.w3.org/ns/activitystreams#preferredUsername",
    "@type": "http://www.w3.org/2001/XMLSchema#string",
  },
  Application: "https://www.w3.org/ns/activitystreams#Application",
  Group: "https://www.w3.org/ns/activitystreams#Group",
  Organization: "https://www.w3.org/ns/activitystreams#Organization",
  Person: "https://www.w3.org/ns/activitystreams#Person",
  Service: "https://www.w3.org/ns/activitystreams#Service",
  Relationship: "https://www.w3.org/ns/activitystreams#Relationship",
  subject: {
    "@id": "https://www.w3.org/ns/activitystreams#subject",
    "@type": "@id",
  },
  relationship: {
    "@id": "https://www.w3.org/ns/activitystreams#relationship",
    "@type": "@id",
    "@container": "@set",
  },
  Article: "https://www.w3.org/ns/activitystreams#Article",
  Audio: "https://www.w3.org/ns/activitystreams#Audio",
  Video: "https://www.w3.org/ns/activitystreams#Video",
  Note: "https://www.w3.org/ns/activitystreams#Note",
  Page: "https://www.w3.org/ns/activitystreams#Page",
  Event: "https://www.w3.org/ns/activitystreams#Event",
  Place: "https://www.w3.org/ns/activitystreams#Place",
  accuracy: {
    "@id": "https://www.w3.org/ns/activitystreams#accuracy",
    "@type": "http://www.w3.org/2001/XMLSchema#float",
  },
  altitude: {
    "@id": "https://www.w3.org/ns/activitystreams#altitude",
    "@type": "http://www.w3.org/2001/XMLSchema#float",
  },
  latitude: {
    "@id": "https://www.w3.org/ns/activitystreams#latitude",
    "@type": "http://www.w3.org/2001/XMLSchema#float",
  },
  radius: {
    "@id": "https://www.w3.org/ns/activitystreams#radius",
    "@type": "http://www.w3.org/2001/XMLSchema#float",
  },
  unit: {
    "@id": "https://www.w3.org/ns/activitystreams#unit",
  },
  Mention: "https://www.w3.org/ns/activitystreams#Mention",
  Profile: "https://www.w3.org/ns/activitystreams#Profile",
  describes: {
    "@id": "https://www.w3.org/ns/activitystreams#describes",
    "@type": "@id",
  },
  Tombstone: "https://www.w3.org/ns/activitystreams#Tombstone",
  formerType: {
    "@id": "https://www.w3.org/ns/activitystreams#formerType",
    "@type": "@id",
    "@container": "@set",
  },
  deleted: {
    "@id": "https://www.w3.org/ns/activitystreams#deleted",
    "@type": "http://www.w3.org/2001/XMLSchema#dateTime",
  },
};
