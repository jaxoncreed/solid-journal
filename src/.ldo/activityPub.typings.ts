import { ContextDefinition } from "jsonld";

/**
 * =============================================================================
 * Typescript Typings for activityPub
 * =============================================================================
 */

/**
 * ActivityPubObject Type
 */
export interface ActivityPubObject {
  "@id"?: string;
  "@context"?: ContextDefinition;
  /**
   * Describes an object of any kind. The Object type serves as the base type for most of the other kinds of objects defined in the Activity Vocabulary, including other Core types such as Activity, IntransitiveActivity, Collection and OrderedCollection.
   */
  type: {
    "@id": "Object";
  };
  /**
   * Identifies a resource attached or related to an object that potentially requires special handling. The intent is to provide a model that is at least semantically similar to attachments in email.
   */
  attachment?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more entities to which this object is attributed. The attributed entities might not be Actors. For instance, an object might be attributed to the completion of another activity.
   */
  attributedTo?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more entities that represent the total population of entities for which the object can considered to be relevant.
   */
  audience?: (ActivityPubObject | Link)[];
  /**
   * The content or textual representation of the Object encoded as a JSON string. By default, the value of content is HTML. The mediaType property can be used in the object to indicate a different content type. The content MAY be expressed using multiple language-tagged values.
   */
  content?: (string | string)[];
  /**
   * Identifies the context within which the object exists or an activity was performed. The notion of "context" used is intentionally vague. The intended function is to serve as a means of grouping objects and activities that share a common originating context or purpose. An example could be all activities relating to a common project or event.
   */
  context?: (ActivityPubObject | Link)[];
  /**
   * A simple, human-readable, plain-text name for the object. HTML markup MUST NOT be included. The name MAY be expressed using multiple language-tagged values.
   */
  name?: (string | string)[];
  /**
   * The date and time describing the actual or expected ending time of the object. When used with an Activity object, for instance, the endTime property specifies the moment the activity concluded or is expected to conclude.
   */
  endTime?: string;
  /**
   * Identifies the entity (e.g. an application) that generated the object.
   */
  generator?: (ActivityPubObject | Link)[];
  /**
   * Indicates an entity that describes an icon for this object. The image should have an aspect ratio of one (horizontal) to one (vertical) and should be suitable for presentation at a small size.
   */
  icon?: (Image | Link)[];
  /**
   * Indicates an entity that describes an image for this object. Unlike the icon property, there are no aspect ratio or display size limitations assumed.
   */
  image?: (Image | Link)[];
  /**
   * Indicates one or more entities for which this object is considered a response.
   */
  inReplyTo?: (ActivityPubObject | Link)[];
  /**
   * Indicates one or more physical or logical locations associated with the object.
   */
  location?: (ActivityPubObject | Link)[];
  /**
   * Identifies an entity that provides a preview of this object.
   */
  preview?: (ActivityPubObject | Link)[];
  /**
   * The date and time at which the object was published
   */
  published?: string;
  /**
   * Identifies a Collection containing objects considered to be responses to this object.
   */
  replies?: Collection;
  /**
   * The date and time describing the actual or expected starting time of the object. When used with an Activity object, for instance, the startTime property specifies the moment the activity began or is scheduled to begin.
   */
  startTime?: string;
  /**
   * A natural language summarization of the object encoded as HTML. Multiple language tagged summaries MAY be provided.
   */
  summary?: (string | string)[];
  /**
   * One or more "tags" that have been associated with an objects. A tag can be any kind of Object. The key difference between attachment and tag is that the former implies association by inclusion, while the latter implies associated by reference.
   */
  tag?: (ActivityPubObject | Link)[];
  /**
   * The date and time at which the object was updated
   */
  updated?: string;
  /**
   * Identifies one or more links to representations of the object
   */
  url?: (string | Link)[];
  /**
   * Identifies an entity considered to be part of the public primary audience of an Object
   */
  to?: (ActivityPubObject | Link)[];
  /**
   * Identifies an Object that is part of the private primary audience of this Object.
   */
  bto?: (ActivityPubObject | Link)[];
  /**
   * Identifies an Object that is part of the public secondary audience of this Object.
   */
  cc?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more Objects that are part of the private secondary audience of this Object.
   */
  bcc?: (ActivityPubObject | Link)[];
  /**
   * When used on a Link, identifies the MIME media type of the referenced resource. When used on an Object, identifies the MIME media type of the value of the content property. If not specified, the content property is assumed to contain text/html content.
   */
  mediaType?: string;
  /**
   * When the object describes a time-bound resource, such as an audio or video, a meeting, etc, the duration property indicates the object's approximate duration. The value MUST be expressed as an xsd:duration as defined by [ xmlschema11-2], section 3.3.6 (e.g. a period of 5 seconds is represented as "PT5S").
   */
  duration?: string;
}

/**
 * Link Type
 */
export interface Link {
  "@id"?: string;
  "@context"?: ContextDefinition;
  /**
   * A Link is an indirect, qualified reference to a resource identified by a URL. The fundamental model for links is established by [ RFC5988]. Many of the properties defined by the Activity Vocabulary allow values that are either instances of Object or Link. When a Link is used, it establishes a qualified relation connecting the subject (the containing object) to the resource identified by the href. Properties of the Link are properties of the reference as opposed to properties of the resource.
   */
  type: {
    "@id": "Link";
  };
  /**
   * The target resource pointed to by a Link.
   */
  href?: string;
  /**
   * A link relation associated with a Link. The value MUST conform to both the [HTML5] and [RFC5988] "link relation" definitions. In the [HTML5], any string not containing the "space" U+0020, "tab" (U+0009), "LF" (U+000A), "FF" (U+000C), "CR" (U+000D) or "," (U+002C) characters can be used as a valid link relation.
   */
  rel?: string[];
  /**
   * When used on a Link, identifies the MIME media type of the referenced resource. When used on an Object, identifies the MIME media type of the value of the content property. If not specified, the content property is assumed to contain text/html content.
   */
  mediaType?: string;
  /**
   * A simple, human-readable, plain-text name for the object. HTML markup MUST NOT be included. The name MAY be expressed using multiple language-tagged values.
   */
  name?: (string | string)[];
  /**
   * Hints as to the language used by the target resource. Value MUST be a [BCP47] Language-Tag.
   */
  hreflang?: string;
  /**
   * On a Link, specifies a hint as to the rendering height in device-independent pixels of the linked resource.
   */
  height?: number;
  /**
   * On a Link, specifies a hint as to the rendering width in device-independent pixels of the linked resource.
   */
  width?: number;
  /**
   * Identifies an entity that provides a preview of this object.
   */
  preview?: (ActivityPubObject | Link)[];
}

/**
 * Activity Type
 */
export interface Activity {
  "@id"?: string;
  "@context"?: ContextDefinition;
  /**
   * Describes an object of any kind. The Object type serves as the base type for most of the other kinds of objects defined in the Activity Vocabulary, including other Core types such as Activity, IntransitiveActivity, Collection and OrderedCollection. | An Activity is a subtype of Object that describes some form of action that may happen, is currently happening, or has already happened. The Activity type itself serves as an abstract base type for all types of activities. It is important to note that the Activity type itself does not carry any specific semantics about the kind of action being taken.
   */
  type: (
    | {
        "@id": "Object";
      }
    | {
        "@id": "Activity";
      }
  )[];
  /**
   * Identifies a resource attached or related to an object that potentially requires special handling. The intent is to provide a model that is at least semantically similar to attachments in email.
   */
  attachment?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more entities to which this object is attributed. The attributed entities might not be Actors. For instance, an object might be attributed to the completion of another activity.
   */
  attributedTo?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more entities that represent the total population of entities for which the object can considered to be relevant.
   */
  audience?: (ActivityPubObject | Link)[];
  /**
   * The content or textual representation of the Object encoded as a JSON string. By default, the value of content is HTML. The mediaType property can be used in the object to indicate a different content type. The content MAY be expressed using multiple language-tagged values.
   */
  content?: (string | string)[];
  /**
   * Identifies the context within which the object exists or an activity was performed. The notion of "context" used is intentionally vague. The intended function is to serve as a means of grouping objects and activities that share a common originating context or purpose. An example could be all activities relating to a common project or event.
   */
  context?: (ActivityPubObject | Link)[];
  /**
   * A simple, human-readable, plain-text name for the object. HTML markup MUST NOT be included. The name MAY be expressed using multiple language-tagged values.
   */
  name?: (string | string)[];
  /**
   * The date and time describing the actual or expected ending time of the object. When used with an Activity object, for instance, the endTime property specifies the moment the activity concluded or is expected to conclude.
   */
  endTime?: string;
  /**
   * Identifies the entity (e.g. an application) that generated the object.
   */
  generator?: (ActivityPubObject | Link)[];
  /**
   * Indicates an entity that describes an icon for this object. The image should have an aspect ratio of one (horizontal) to one (vertical) and should be suitable for presentation at a small size.
   */
  icon?: (Image | Link)[];
  /**
   * Indicates an entity that describes an image for this object. Unlike the icon property, there are no aspect ratio or display size limitations assumed.
   */
  image?: (Image | Link)[];
  /**
   * Indicates one or more entities for which this object is considered a response.
   */
  inReplyTo?: (ActivityPubObject | Link)[];
  /**
   * Indicates one or more physical or logical locations associated with the object.
   */
  location?: (ActivityPubObject | Link)[];
  /**
   * Identifies an entity that provides a preview of this object.
   */
  preview?: (ActivityPubObject | Link)[];
  /**
   * The date and time at which the object was published
   */
  published?: string;
  /**
   * Identifies a Collection containing objects considered to be responses to this object.
   */
  replies?: Collection;
  /**
   * The date and time describing the actual or expected starting time of the object. When used with an Activity object, for instance, the startTime property specifies the moment the activity began or is scheduled to begin.
   */
  startTime?: string;
  /**
   * A natural language summarization of the object encoded as HTML. Multiple language tagged summaries MAY be provided.
   */
  summary?: (string | string)[];
  /**
   * One or more "tags" that have been associated with an objects. A tag can be any kind of Object. The key difference between attachment and tag is that the former implies association by inclusion, while the latter implies associated by reference.
   */
  tag?: (ActivityPubObject | Link)[];
  /**
   * The date and time at which the object was updated
   */
  updated?: string;
  /**
   * Identifies one or more links to representations of the object
   */
  url?: (string | Link)[];
  /**
   * Identifies an entity considered to be part of the public primary audience of an Object
   */
  to?: (ActivityPubObject | Link)[];
  /**
   * Identifies an Object that is part of the private primary audience of this Object.
   */
  bto?: (ActivityPubObject | Link)[];
  /**
   * Identifies an Object that is part of the public secondary audience of this Object.
   */
  cc?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more Objects that are part of the private secondary audience of this Object.
   */
  bcc?: (ActivityPubObject | Link)[];
  /**
   * When used on a Link, identifies the MIME media type of the referenced resource. When used on an Object, identifies the MIME media type of the value of the content property. If not specified, the content property is assumed to contain text/html content.
   */
  mediaType?: string;
  /**
   * When the object describes a time-bound resource, such as an audio or video, a meeting, etc, the duration property indicates the object's approximate duration. The value MUST be expressed as an xsd:duration as defined by [ xmlschema11-2], section 3.3.6 (e.g. a period of 5 seconds is represented as "PT5S").
   */
  duration?: string;
  /**
   * Describes one or more entities that either performed or are expected to perform the activity. Any single activity can have multiple actors. The actor MAY be specified using an indirect Link.
   */
  actor?: (ActivityPubObject | Link)[];
  /**
   * When used within an Activity, describes the direct object of the activity. For instance, in the activity "John added a movie to his wishlist", the object of the activity is the movie added. When used within a Relationship describes the entity to which the subject is related.
   */
  object?: (ActivityPubObject | Link)[];
  /**
   * Describes the indirect object, or target, of the activity. The precise meaning of the target is largely dependent on the type of action being described but will often be the object of the English preposition "to". For instance, in the activity "John added a movie to his wishlist", the target of the activity is John's wishlist. An activity can have more than one target.
   */
  target?: (ActivityPubObject | Link)[];
  /**
   * Describes the result of the activity. For instance, if a particular action results in the creation of a new resource, the result property can be used to describe that new resource.
   */
  result?: (ActivityPubObject | Link)[];
  /**
   * Describes an indirect object of the activity from which the activity is directed. The precise meaning of the origin is the object of the English preposition "from". For instance, in the activity "John moved an item to List B from List A", the origin of the activity is "List A".
   */
  origin?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more objects used (or to be used) in the completion of an Activity.
   */
  instrument?: (ActivityPubObject | Link)[];
}

/**
 * InstransitiveActivity Type
 */
export interface InstransitiveActivity {
  "@id"?: string;
  "@context"?: ContextDefinition;
  /**
   * Describes an object of any kind. The Object type serves as the base type for most of the other kinds of objects defined in the Activity Vocabulary, including other Core types such as Activity, IntransitiveActivity, Collection and OrderedCollection. | An Activity is a subtype of Object that describes some form of action that may happen, is currently happening, or has already happened. The Activity type itself serves as an abstract base type for all types of activities. It is important to note that the Activity type itself does not carry any specific semantics about the kind of action being taken. | Instances of IntransitiveActivity are a subtype of Activity representing intransitive actions. The object property is therefore inappropriate for these activities.
   */
  type: (
    | {
        "@id": "Object";
      }
    | {
        "@id": "Activity";
      }
    | {
        "@id": "IntransitiveActivity";
      }
  )[];
  /**
   * Identifies a resource attached or related to an object that potentially requires special handling. The intent is to provide a model that is at least semantically similar to attachments in email.
   */
  attachment?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more entities to which this object is attributed. The attributed entities might not be Actors. For instance, an object might be attributed to the completion of another activity.
   */
  attributedTo?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more entities that represent the total population of entities for which the object can considered to be relevant.
   */
  audience?: (ActivityPubObject | Link)[];
  /**
   * The content or textual representation of the Object encoded as a JSON string. By default, the value of content is HTML. The mediaType property can be used in the object to indicate a different content type. The content MAY be expressed using multiple language-tagged values.
   */
  content?: (string | string)[];
  /**
   * Identifies the context within which the object exists or an activity was performed. The notion of "context" used is intentionally vague. The intended function is to serve as a means of grouping objects and activities that share a common originating context or purpose. An example could be all activities relating to a common project or event.
   */
  context?: (ActivityPubObject | Link)[];
  /**
   * A simple, human-readable, plain-text name for the object. HTML markup MUST NOT be included. The name MAY be expressed using multiple language-tagged values.
   */
  name?: (string | string)[];
  /**
   * The date and time describing the actual or expected ending time of the object. When used with an Activity object, for instance, the endTime property specifies the moment the activity concluded or is expected to conclude.
   */
  endTime?: string;
  /**
   * Identifies the entity (e.g. an application) that generated the object.
   */
  generator?: (ActivityPubObject | Link)[];
  /**
   * Indicates an entity that describes an icon for this object. The image should have an aspect ratio of one (horizontal) to one (vertical) and should be suitable for presentation at a small size.
   */
  icon?: (Image | Link)[];
  /**
   * Indicates an entity that describes an image for this object. Unlike the icon property, there are no aspect ratio or display size limitations assumed.
   */
  image?: (Image | Link)[];
  /**
   * Indicates one or more entities for which this object is considered a response.
   */
  inReplyTo?: (ActivityPubObject | Link)[];
  /**
   * Indicates one or more physical or logical locations associated with the object.
   */
  location?: (ActivityPubObject | Link)[];
  /**
   * Identifies an entity that provides a preview of this object.
   */
  preview?: (ActivityPubObject | Link)[];
  /**
   * The date and time at which the object was published
   */
  published?: string;
  /**
   * Identifies a Collection containing objects considered to be responses to this object.
   */
  replies?: Collection;
  /**
   * The date and time describing the actual or expected starting time of the object. When used with an Activity object, for instance, the startTime property specifies the moment the activity began or is scheduled to begin.
   */
  startTime?: string;
  /**
   * A natural language summarization of the object encoded as HTML. Multiple language tagged summaries MAY be provided.
   */
  summary?: (string | string)[];
  /**
   * One or more "tags" that have been associated with an objects. A tag can be any kind of Object. The key difference between attachment and tag is that the former implies association by inclusion, while the latter implies associated by reference.
   */
  tag?: (ActivityPubObject | Link)[];
  /**
   * The date and time at which the object was updated
   */
  updated?: string;
  /**
   * Identifies one or more links to representations of the object
   */
  url?: (string | Link)[];
  /**
   * Identifies an entity considered to be part of the public primary audience of an Object
   */
  to?: (ActivityPubObject | Link)[];
  /**
   * Identifies an Object that is part of the private primary audience of this Object.
   */
  bto?: (ActivityPubObject | Link)[];
  /**
   * Identifies an Object that is part of the public secondary audience of this Object.
   */
  cc?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more Objects that are part of the private secondary audience of this Object.
   */
  bcc?: (ActivityPubObject | Link)[];
  /**
   * When used on a Link, identifies the MIME media type of the referenced resource. When used on an Object, identifies the MIME media type of the value of the content property. If not specified, the content property is assumed to contain text/html content.
   */
  mediaType?: string;
  /**
   * When the object describes a time-bound resource, such as an audio or video, a meeting, etc, the duration property indicates the object's approximate duration. The value MUST be expressed as an xsd:duration as defined by [ xmlschema11-2], section 3.3.6 (e.g. a period of 5 seconds is represented as "PT5S").
   */
  duration?: string;
  /**
   * Describes one or more entities that either performed or are expected to perform the activity. Any single activity can have multiple actors. The actor MAY be specified using an indirect Link.
   */
  actor?: (ActivityPubObject | Link)[];
  /**
   * When used within an Activity, describes the direct object of the activity. For instance, in the activity "John added a movie to his wishlist", the object of the activity is the movie added. When used within a Relationship describes the entity to which the subject is related.
   */
  object?: (ActivityPubObject | Link)[];
  /**
   * Describes the indirect object, or target, of the activity. The precise meaning of the target is largely dependent on the type of action being described but will often be the object of the English preposition "to". For instance, in the activity "John added a movie to his wishlist", the target of the activity is John's wishlist. An activity can have more than one target.
   */
  target?: (ActivityPubObject | Link)[];
  /**
   * Describes the result of the activity. For instance, if a particular action results in the creation of a new resource, the result property can be used to describe that new resource.
   */
  result?: (ActivityPubObject | Link)[];
  /**
   * Describes an indirect object of the activity from which the activity is directed. The precise meaning of the origin is the object of the English preposition "from". For instance, in the activity "John moved an item to List B from List A", the origin of the activity is "List A".
   */
  origin?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more objects used (or to be used) in the completion of an Activity.
   */
  instrument?: (ActivityPubObject | Link)[];
}

/**
 * Collection Type
 */
export interface Collection {
  "@id"?: string;
  "@context"?: ContextDefinition;
  /**
   * Describes an object of any kind. The Object type serves as the base type for most of the other kinds of objects defined in the Activity Vocabulary, including other Core types such as Activity, IntransitiveActivity, Collection and OrderedCollection. | A Collection is a subtype of Object that represents ordered or unordered sets of Object or Link instances. Refer to the Activity Streams 2.0 Core specification for a complete description of the Collection type.
   */
  type: (
    | {
        "@id": "Object";
      }
    | {
        "@id": "Collection";
      }
  )[];
  /**
   * Identifies a resource attached or related to an object that potentially requires special handling. The intent is to provide a model that is at least semantically similar to attachments in email.
   */
  attachment?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more entities to which this object is attributed. The attributed entities might not be Actors. For instance, an object might be attributed to the completion of another activity.
   */
  attributedTo?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more entities that represent the total population of entities for which the object can considered to be relevant.
   */
  audience?: (ActivityPubObject | Link)[];
  /**
   * The content or textual representation of the Object encoded as a JSON string. By default, the value of content is HTML. The mediaType property can be used in the object to indicate a different content type. The content MAY be expressed using multiple language-tagged values.
   */
  content?: (string | string)[];
  /**
   * Identifies the context within which the object exists or an activity was performed. The notion of "context" used is intentionally vague. The intended function is to serve as a means of grouping objects and activities that share a common originating context or purpose. An example could be all activities relating to a common project or event.
   */
  context?: (ActivityPubObject | Link)[];
  /**
   * A simple, human-readable, plain-text name for the object. HTML markup MUST NOT be included. The name MAY be expressed using multiple language-tagged values.
   */
  name?: (string | string)[];
  /**
   * The date and time describing the actual or expected ending time of the object. When used with an Activity object, for instance, the endTime property specifies the moment the activity concluded or is expected to conclude.
   */
  endTime?: string;
  /**
   * Identifies the entity (e.g. an application) that generated the object.
   */
  generator?: (ActivityPubObject | Link)[];
  /**
   * Indicates an entity that describes an icon for this object. The image should have an aspect ratio of one (horizontal) to one (vertical) and should be suitable for presentation at a small size.
   */
  icon?: (Image | Link)[];
  /**
   * Indicates an entity that describes an image for this object. Unlike the icon property, there are no aspect ratio or display size limitations assumed.
   */
  image?: (Image | Link)[];
  /**
   * Indicates one or more entities for which this object is considered a response.
   */
  inReplyTo?: (ActivityPubObject | Link)[];
  /**
   * Indicates one or more physical or logical locations associated with the object.
   */
  location?: (ActivityPubObject | Link)[];
  /**
   * Identifies an entity that provides a preview of this object.
   */
  preview?: (ActivityPubObject | Link)[];
  /**
   * The date and time at which the object was published
   */
  published?: string;
  /**
   * Identifies a Collection containing objects considered to be responses to this object.
   */
  replies?: Collection;
  /**
   * The date and time describing the actual or expected starting time of the object. When used with an Activity object, for instance, the startTime property specifies the moment the activity began or is scheduled to begin.
   */
  startTime?: string;
  /**
   * A natural language summarization of the object encoded as HTML. Multiple language tagged summaries MAY be provided.
   */
  summary?: (string | string)[];
  /**
   * One or more "tags" that have been associated with an objects. A tag can be any kind of Object. The key difference between attachment and tag is that the former implies association by inclusion, while the latter implies associated by reference.
   */
  tag?: (ActivityPubObject | Link)[];
  /**
   * The date and time at which the object was updated
   */
  updated?: string;
  /**
   * Identifies one or more links to representations of the object
   */
  url?: (string | Link)[];
  /**
   * Identifies an entity considered to be part of the public primary audience of an Object
   */
  to?: (ActivityPubObject | Link)[];
  /**
   * Identifies an Object that is part of the private primary audience of this Object.
   */
  bto?: (ActivityPubObject | Link)[];
  /**
   * Identifies an Object that is part of the public secondary audience of this Object.
   */
  cc?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more Objects that are part of the private secondary audience of this Object.
   */
  bcc?: (ActivityPubObject | Link)[];
  /**
   * When used on a Link, identifies the MIME media type of the referenced resource. When used on an Object, identifies the MIME media type of the value of the content property. If not specified, the content property is assumed to contain text/html content.
   */
  mediaType?: string;
  /**
   * When the object describes a time-bound resource, such as an audio or video, a meeting, etc, the duration property indicates the object's approximate duration. The value MUST be expressed as an xsd:duration as defined by [ xmlschema11-2], section 3.3.6 (e.g. a period of 5 seconds is represented as "PT5S").
   */
  duration?: string;
  /**
   * A non-negative integer specifying the total number of objects contained by the logical view of the collection. This number might not reflect the actual number of items serialized within the Collection object instance.
   */
  totalItems?: number;
  /**
   * Identifies the items contained in a collection. The items might be ordered or unordered.
   */
  items?: (ActivityPubObject | Link)[];
}

/**
 * OrderedCollection Type
 */
export interface OrderedCollection {
  "@id"?: string;
  "@context"?: ContextDefinition;
  /**
   * Describes an object of any kind. The Object type serves as the base type for most of the other kinds of objects defined in the Activity Vocabulary, including other Core types such as Activity, IntransitiveActivity, Collection and OrderedCollection. | A Collection is a subtype of Object that represents ordered or unordered sets of Object or Link instances. Refer to the Activity Streams 2.0 Core specification for a complete description of the Collection type.  | A subtype of Collection in which members of the logical collection are assumed to always be strictly ordered.
   */
  type: (
    | {
        "@id": "Object";
      }
    | {
        "@id": "Collection";
      }
    | {
        "@id": "OrderedCollection";
      }
  )[];
  /**
   * Identifies a resource attached or related to an object that potentially requires special handling. The intent is to provide a model that is at least semantically similar to attachments in email.
   */
  attachment?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more entities to which this object is attributed. The attributed entities might not be Actors. For instance, an object might be attributed to the completion of another activity.
   */
  attributedTo?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more entities that represent the total population of entities for which the object can considered to be relevant.
   */
  audience?: (ActivityPubObject | Link)[];
  /**
   * The content or textual representation of the Object encoded as a JSON string. By default, the value of content is HTML. The mediaType property can be used in the object to indicate a different content type. The content MAY be expressed using multiple language-tagged values.
   */
  content?: (string | string)[];
  /**
   * Identifies the context within which the object exists or an activity was performed. The notion of "context" used is intentionally vague. The intended function is to serve as a means of grouping objects and activities that share a common originating context or purpose. An example could be all activities relating to a common project or event.
   */
  context?: (ActivityPubObject | Link)[];
  /**
   * A simple, human-readable, plain-text name for the object. HTML markup MUST NOT be included. The name MAY be expressed using multiple language-tagged values.
   */
  name?: (string | string)[];
  /**
   * The date and time describing the actual or expected ending time of the object. When used with an Activity object, for instance, the endTime property specifies the moment the activity concluded or is expected to conclude.
   */
  endTime?: string;
  /**
   * Identifies the entity (e.g. an application) that generated the object.
   */
  generator?: (ActivityPubObject | Link)[];
  /**
   * Indicates an entity that describes an icon for this object. The image should have an aspect ratio of one (horizontal) to one (vertical) and should be suitable for presentation at a small size.
   */
  icon?: (Image | Link)[];
  /**
   * Indicates an entity that describes an image for this object. Unlike the icon property, there are no aspect ratio or display size limitations assumed.
   */
  image?: (Image | Link)[];
  /**
   * Indicates one or more entities for which this object is considered a response.
   */
  inReplyTo?: (ActivityPubObject | Link)[];
  /**
   * Indicates one or more physical or logical locations associated with the object.
   */
  location?: (ActivityPubObject | Link)[];
  /**
   * Identifies an entity that provides a preview of this object.
   */
  preview?: (ActivityPubObject | Link)[];
  /**
   * The date and time at which the object was published
   */
  published?: string;
  /**
   * Identifies a Collection containing objects considered to be responses to this object.
   */
  replies?: Collection;
  /**
   * The date and time describing the actual or expected starting time of the object. When used with an Activity object, for instance, the startTime property specifies the moment the activity began or is scheduled to begin.
   */
  startTime?: string;
  /**
   * A natural language summarization of the object encoded as HTML. Multiple language tagged summaries MAY be provided.
   */
  summary?: (string | string)[];
  /**
   * One or more "tags" that have been associated with an objects. A tag can be any kind of Object. The key difference between attachment and tag is that the former implies association by inclusion, while the latter implies associated by reference.
   */
  tag?: (ActivityPubObject | Link)[];
  /**
   * The date and time at which the object was updated
   */
  updated?: string;
  /**
   * Identifies one or more links to representations of the object
   */
  url?: (string | Link)[];
  /**
   * Identifies an entity considered to be part of the public primary audience of an Object
   */
  to?: (ActivityPubObject | Link)[];
  /**
   * Identifies an Object that is part of the private primary audience of this Object.
   */
  bto?: (ActivityPubObject | Link)[];
  /**
   * Identifies an Object that is part of the public secondary audience of this Object.
   */
  cc?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more Objects that are part of the private secondary audience of this Object.
   */
  bcc?: (ActivityPubObject | Link)[];
  /**
   * When used on a Link, identifies the MIME media type of the referenced resource. When used on an Object, identifies the MIME media type of the value of the content property. If not specified, the content property is assumed to contain text/html content.
   */
  mediaType?: string;
  /**
   * When the object describes a time-bound resource, such as an audio or video, a meeting, etc, the duration property indicates the object's approximate duration. The value MUST be expressed as an xsd:duration as defined by [ xmlschema11-2], section 3.3.6 (e.g. a period of 5 seconds is represented as "PT5S").
   */
  duration?: string;
  /**
   * A non-negative integer specifying the total number of objects contained by the logical view of the collection. This number might not reflect the actual number of items serialized within the Collection object instance.
   */
  totalItems?: number;
  /**
   * Identifies the items contained in a collection. The items might be ordered or unordered.
   */
  items?: (ActivityPubObject | Link)[];
}

/**
 * CollectionPage Type
 */
export interface CollectionPage {
  "@id"?: string;
  "@context"?: ContextDefinition;
  /**
   * Describes an object of any kind. The Object type serves as the base type for most of the other kinds of objects defined in the Activity Vocabulary, including other Core types such as Activity, IntransitiveActivity, Collection and OrderedCollection. | A Collection is a subtype of Object that represents ordered or unordered sets of Object or Link instances. Refer to the Activity Streams 2.0 Core specification for a complete description of the Collection type.  | Used to represent distinct subsets of items from a Collection. Refer to the Activity Streams 2.0 Core for a complete description of the CollectionPage object.
   */
  type: (
    | {
        "@id": "Object";
      }
    | {
        "@id": "Collection";
      }
    | {
        "@id": "CollectionPage";
      }
  )[];
  /**
   * Identifies a resource attached or related to an object that potentially requires special handling. The intent is to provide a model that is at least semantically similar to attachments in email.
   */
  attachment?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more entities to which this object is attributed. The attributed entities might not be Actors. For instance, an object might be attributed to the completion of another activity.
   */
  attributedTo?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more entities that represent the total population of entities for which the object can considered to be relevant.
   */
  audience?: (ActivityPubObject | Link)[];
  /**
   * The content or textual representation of the Object encoded as a JSON string. By default, the value of content is HTML. The mediaType property can be used in the object to indicate a different content type. The content MAY be expressed using multiple language-tagged values.
   */
  content?: (string | string)[];
  /**
   * Identifies the context within which the object exists or an activity was performed. The notion of "context" used is intentionally vague. The intended function is to serve as a means of grouping objects and activities that share a common originating context or purpose. An example could be all activities relating to a common project or event.
   */
  context?: (ActivityPubObject | Link)[];
  /**
   * A simple, human-readable, plain-text name for the object. HTML markup MUST NOT be included. The name MAY be expressed using multiple language-tagged values.
   */
  name?: (string | string)[];
  /**
   * The date and time describing the actual or expected ending time of the object. When used with an Activity object, for instance, the endTime property specifies the moment the activity concluded or is expected to conclude.
   */
  endTime?: string;
  /**
   * Identifies the entity (e.g. an application) that generated the object.
   */
  generator?: (ActivityPubObject | Link)[];
  /**
   * Indicates an entity that describes an icon for this object. The image should have an aspect ratio of one (horizontal) to one (vertical) and should be suitable for presentation at a small size.
   */
  icon?: (Image | Link)[];
  /**
   * Indicates an entity that describes an image for this object. Unlike the icon property, there are no aspect ratio or display size limitations assumed.
   */
  image?: (Image | Link)[];
  /**
   * Indicates one or more entities for which this object is considered a response.
   */
  inReplyTo?: (ActivityPubObject | Link)[];
  /**
   * Indicates one or more physical or logical locations associated with the object.
   */
  location?: (ActivityPubObject | Link)[];
  /**
   * Identifies an entity that provides a preview of this object.
   */
  preview?: (ActivityPubObject | Link)[];
  /**
   * The date and time at which the object was published
   */
  published?: string;
  /**
   * Identifies a Collection containing objects considered to be responses to this object.
   */
  replies?: Collection;
  /**
   * The date and time describing the actual or expected starting time of the object. When used with an Activity object, for instance, the startTime property specifies the moment the activity began or is scheduled to begin.
   */
  startTime?: string;
  /**
   * A natural language summarization of the object encoded as HTML. Multiple language tagged summaries MAY be provided.
   */
  summary?: (string | string)[];
  /**
   * One or more "tags" that have been associated with an objects. A tag can be any kind of Object. The key difference between attachment and tag is that the former implies association by inclusion, while the latter implies associated by reference.
   */
  tag?: (ActivityPubObject | Link)[];
  /**
   * The date and time at which the object was updated
   */
  updated?: string;
  /**
   * Identifies one or more links to representations of the object
   */
  url?: (string | Link)[];
  /**
   * Identifies an entity considered to be part of the public primary audience of an Object
   */
  to?: (ActivityPubObject | Link)[];
  /**
   * Identifies an Object that is part of the private primary audience of this Object.
   */
  bto?: (ActivityPubObject | Link)[];
  /**
   * Identifies an Object that is part of the public secondary audience of this Object.
   */
  cc?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more Objects that are part of the private secondary audience of this Object.
   */
  bcc?: (ActivityPubObject | Link)[];
  /**
   * When used on a Link, identifies the MIME media type of the referenced resource. When used on an Object, identifies the MIME media type of the value of the content property. If not specified, the content property is assumed to contain text/html content.
   */
  mediaType?: string;
  /**
   * When the object describes a time-bound resource, such as an audio or video, a meeting, etc, the duration property indicates the object's approximate duration. The value MUST be expressed as an xsd:duration as defined by [ xmlschema11-2], section 3.3.6 (e.g. a period of 5 seconds is represented as "PT5S").
   */
  duration?: string;
  /**
   * A non-negative integer specifying the total number of objects contained by the logical view of the collection. This number might not reflect the actual number of items serialized within the Collection object instance.
   */
  totalItems?: number;
  /**
   * Identifies the items contained in a collection. The items might be ordered or unordered.
   */
  items?: (ActivityPubObject | Link)[];
}

/**
 * OrderedCollectionPage Type
 */
export interface OrderedCollectionPage {
  "@id"?: string;
  "@context"?: ContextDefinition;
  /**
   * Describes an object of any kind. The Object type serves as the base type for most of the other kinds of objects defined in the Activity Vocabulary, including other Core types such as Activity, IntransitiveActivity, Collection and OrderedCollection. | A Collection is a subtype of Object that represents ordered or unordered sets of Object or Link instances. Refer to the Activity Streams 2.0 Core specification for a complete description of the Collection type.  | A subtype of Collection in which members of the logical collection are assumed to always be strictly ordered. | Used to represent ordered subsets of items from an OrderedCollection. Refer to the Activity Streams 2.0 Core for a complete description of the OrderedCollectionPage object.
   */
  type: (
    | {
        "@id": "Object";
      }
    | {
        "@id": "Collection";
      }
    | {
        "@id": "OrderedCollection";
      }
    | {
        "@id": "OrderedCollectionPage";
      }
  )[];
  /**
   * Identifies a resource attached or related to an object that potentially requires special handling. The intent is to provide a model that is at least semantically similar to attachments in email.
   */
  attachment?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more entities to which this object is attributed. The attributed entities might not be Actors. For instance, an object might be attributed to the completion of another activity.
   */
  attributedTo?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more entities that represent the total population of entities for which the object can considered to be relevant.
   */
  audience?: (ActivityPubObject | Link)[];
  /**
   * The content or textual representation of the Object encoded as a JSON string. By default, the value of content is HTML. The mediaType property can be used in the object to indicate a different content type. The content MAY be expressed using multiple language-tagged values.
   */
  content?: (string | string)[];
  /**
   * Identifies the context within which the object exists or an activity was performed. The notion of "context" used is intentionally vague. The intended function is to serve as a means of grouping objects and activities that share a common originating context or purpose. An example could be all activities relating to a common project or event.
   */
  context?: (ActivityPubObject | Link)[];
  /**
   * A simple, human-readable, plain-text name for the object. HTML markup MUST NOT be included. The name MAY be expressed using multiple language-tagged values.
   */
  name?: (string | string)[];
  /**
   * The date and time describing the actual or expected ending time of the object. When used with an Activity object, for instance, the endTime property specifies the moment the activity concluded or is expected to conclude.
   */
  endTime?: string;
  /**
   * Identifies the entity (e.g. an application) that generated the object.
   */
  generator?: (ActivityPubObject | Link)[];
  /**
   * Indicates an entity that describes an icon for this object. The image should have an aspect ratio of one (horizontal) to one (vertical) and should be suitable for presentation at a small size.
   */
  icon?: (Image | Link)[];
  /**
   * Indicates an entity that describes an image for this object. Unlike the icon property, there are no aspect ratio or display size limitations assumed.
   */
  image?: (Image | Link)[];
  /**
   * Indicates one or more entities for which this object is considered a response.
   */
  inReplyTo?: (ActivityPubObject | Link)[];
  /**
   * Indicates one or more physical or logical locations associated with the object.
   */
  location?: (ActivityPubObject | Link)[];
  /**
   * Identifies an entity that provides a preview of this object.
   */
  preview?: (ActivityPubObject | Link)[];
  /**
   * The date and time at which the object was published
   */
  published?: string;
  /**
   * Identifies a Collection containing objects considered to be responses to this object.
   */
  replies?: Collection;
  /**
   * The date and time describing the actual or expected starting time of the object. When used with an Activity object, for instance, the startTime property specifies the moment the activity began or is scheduled to begin.
   */
  startTime?: string;
  /**
   * A natural language summarization of the object encoded as HTML. Multiple language tagged summaries MAY be provided.
   */
  summary?: (string | string)[];
  /**
   * One or more "tags" that have been associated with an objects. A tag can be any kind of Object. The key difference between attachment and tag is that the former implies association by inclusion, while the latter implies associated by reference.
   */
  tag?: (ActivityPubObject | Link)[];
  /**
   * The date and time at which the object was updated
   */
  updated?: string;
  /**
   * Identifies one or more links to representations of the object
   */
  url?: (string | Link)[];
  /**
   * Identifies an entity considered to be part of the public primary audience of an Object
   */
  to?: (ActivityPubObject | Link)[];
  /**
   * Identifies an Object that is part of the private primary audience of this Object.
   */
  bto?: (ActivityPubObject | Link)[];
  /**
   * Identifies an Object that is part of the public secondary audience of this Object.
   */
  cc?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more Objects that are part of the private secondary audience of this Object.
   */
  bcc?: (ActivityPubObject | Link)[];
  /**
   * When used on a Link, identifies the MIME media type of the referenced resource. When used on an Object, identifies the MIME media type of the value of the content property. If not specified, the content property is assumed to contain text/html content.
   */
  mediaType?: string;
  /**
   * When the object describes a time-bound resource, such as an audio or video, a meeting, etc, the duration property indicates the object's approximate duration. The value MUST be expressed as an xsd:duration as defined by [ xmlschema11-2], section 3.3.6 (e.g. a period of 5 seconds is represented as "PT5S").
   */
  duration?: string;
  /**
   * A non-negative integer specifying the total number of objects contained by the logical view of the collection. This number might not reflect the actual number of items serialized within the Collection object instance.
   */
  totalItems?: number;
  /**
   * Identifies the items contained in a collection. The items might be ordered or unordered.
   */
  items?: (ActivityPubObject | Link)[];
  /**
   * A non-negative integer value identifying the relative position within the logical view of a strictly ordered collection.
   */
  startIndex?: number;
}

/**
 * Accept Type
 */
export interface Accept {
  "@id"?: string;
  "@context"?: ContextDefinition;
  /**
   * Describes an object of any kind. The Object type serves as the base type for most of the other kinds of objects defined in the Activity Vocabulary, including other Core types such as Activity, IntransitiveActivity, Collection and OrderedCollection. | An Activity is a subtype of Object that describes some form of action that may happen, is currently happening, or has already happened. The Activity type itself serves as an abstract base type for all types of activities. It is important to note that the Activity type itself does not carry any specific semantics about the kind of action being taken. | Indicates that the actor accepts the object. The target property can be used in certain circumstances to indicate the context into which the object has been accepted.
   */
  type: (
    | {
        "@id": "Object";
      }
    | {
        "@id": "Activity";
      }
    | {
        "@id": "Accept";
      }
  )[];
  /**
   * Identifies a resource attached or related to an object that potentially requires special handling. The intent is to provide a model that is at least semantically similar to attachments in email.
   */
  attachment?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more entities to which this object is attributed. The attributed entities might not be Actors. For instance, an object might be attributed to the completion of another activity.
   */
  attributedTo?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more entities that represent the total population of entities for which the object can considered to be relevant.
   */
  audience?: (ActivityPubObject | Link)[];
  /**
   * The content or textual representation of the Object encoded as a JSON string. By default, the value of content is HTML. The mediaType property can be used in the object to indicate a different content type. The content MAY be expressed using multiple language-tagged values.
   */
  content?: (string | string)[];
  /**
   * Identifies the context within which the object exists or an activity was performed. The notion of "context" used is intentionally vague. The intended function is to serve as a means of grouping objects and activities that share a common originating context or purpose. An example could be all activities relating to a common project or event.
   */
  context?: (ActivityPubObject | Link)[];
  /**
   * A simple, human-readable, plain-text name for the object. HTML markup MUST NOT be included. The name MAY be expressed using multiple language-tagged values.
   */
  name?: (string | string)[];
  /**
   * The date and time describing the actual or expected ending time of the object. When used with an Activity object, for instance, the endTime property specifies the moment the activity concluded or is expected to conclude.
   */
  endTime?: string;
  /**
   * Identifies the entity (e.g. an application) that generated the object.
   */
  generator?: (ActivityPubObject | Link)[];
  /**
   * Indicates an entity that describes an icon for this object. The image should have an aspect ratio of one (horizontal) to one (vertical) and should be suitable for presentation at a small size.
   */
  icon?: (Image | Link)[];
  /**
   * Indicates an entity that describes an image for this object. Unlike the icon property, there are no aspect ratio or display size limitations assumed.
   */
  image?: (Image | Link)[];
  /**
   * Indicates one or more entities for which this object is considered a response.
   */
  inReplyTo?: (ActivityPubObject | Link)[];
  /**
   * Indicates one or more physical or logical locations associated with the object.
   */
  location?: (ActivityPubObject | Link)[];
  /**
   * Identifies an entity that provides a preview of this object.
   */
  preview?: (ActivityPubObject | Link)[];
  /**
   * The date and time at which the object was published
   */
  published?: string;
  /**
   * Identifies a Collection containing objects considered to be responses to this object.
   */
  replies?: Collection;
  /**
   * The date and time describing the actual or expected starting time of the object. When used with an Activity object, for instance, the startTime property specifies the moment the activity began or is scheduled to begin.
   */
  startTime?: string;
  /**
   * A natural language summarization of the object encoded as HTML. Multiple language tagged summaries MAY be provided.
   */
  summary?: (string | string)[];
  /**
   * One or more "tags" that have been associated with an objects. A tag can be any kind of Object. The key difference between attachment and tag is that the former implies association by inclusion, while the latter implies associated by reference.
   */
  tag?: (ActivityPubObject | Link)[];
  /**
   * The date and time at which the object was updated
   */
  updated?: string;
  /**
   * Identifies one or more links to representations of the object
   */
  url?: (string | Link)[];
  /**
   * Identifies an entity considered to be part of the public primary audience of an Object
   */
  to?: (ActivityPubObject | Link)[];
  /**
   * Identifies an Object that is part of the private primary audience of this Object.
   */
  bto?: (ActivityPubObject | Link)[];
  /**
   * Identifies an Object that is part of the public secondary audience of this Object.
   */
  cc?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more Objects that are part of the private secondary audience of this Object.
   */
  bcc?: (ActivityPubObject | Link)[];
  /**
   * When used on a Link, identifies the MIME media type of the referenced resource. When used on an Object, identifies the MIME media type of the value of the content property. If not specified, the content property is assumed to contain text/html content.
   */
  mediaType?: string;
  /**
   * When the object describes a time-bound resource, such as an audio or video, a meeting, etc, the duration property indicates the object's approximate duration. The value MUST be expressed as an xsd:duration as defined by [ xmlschema11-2], section 3.3.6 (e.g. a period of 5 seconds is represented as "PT5S").
   */
  duration?: string;
  /**
   * Describes one or more entities that either performed or are expected to perform the activity. Any single activity can have multiple actors. The actor MAY be specified using an indirect Link.
   */
  actor?: (ActivityPubObject | Link)[];
  /**
   * When used within an Activity, describes the direct object of the activity. For instance, in the activity "John added a movie to his wishlist", the object of the activity is the movie added. When used within a Relationship describes the entity to which the subject is related.
   */
  object?: (ActivityPubObject | Link)[];
  /**
   * Describes the indirect object, or target, of the activity. The precise meaning of the target is largely dependent on the type of action being described but will often be the object of the English preposition "to". For instance, in the activity "John added a movie to his wishlist", the target of the activity is John's wishlist. An activity can have more than one target.
   */
  target?: (ActivityPubObject | Link)[];
  /**
   * Describes the result of the activity. For instance, if a particular action results in the creation of a new resource, the result property can be used to describe that new resource.
   */
  result?: (ActivityPubObject | Link)[];
  /**
   * Describes an indirect object of the activity from which the activity is directed. The precise meaning of the origin is the object of the English preposition "from". For instance, in the activity "John moved an item to List B from List A", the origin of the activity is "List A".
   */
  origin?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more objects used (or to be used) in the completion of an Activity.
   */
  instrument?: (ActivityPubObject | Link)[];
}

/**
 * TentativeAccept Type
 */
export interface TentativeAccept {
  "@id"?: string;
  "@context"?: ContextDefinition;
  /**
   * Describes an object of any kind. The Object type serves as the base type for most of the other kinds of objects defined in the Activity Vocabulary, including other Core types such as Activity, IntransitiveActivity, Collection and OrderedCollection. | An Activity is a subtype of Object that describes some form of action that may happen, is currently happening, or has already happened. The Activity type itself serves as an abstract base type for all types of activities. It is important to note that the Activity type itself does not carry any specific semantics about the kind of action being taken. | Indicates that the actor accepts the object. The target property can be used in certain circumstances to indicate the context into which the object has been accepted. | A specialization of Accept indicating that the acceptance is tentative.
   */
  type: (
    | {
        "@id": "Object";
      }
    | {
        "@id": "Activity";
      }
    | {
        "@id": "Accept";
      }
    | {
        "@id": "TentativeAccept";
      }
  )[];
  /**
   * Identifies a resource attached or related to an object that potentially requires special handling. The intent is to provide a model that is at least semantically similar to attachments in email.
   */
  attachment?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more entities to which this object is attributed. The attributed entities might not be Actors. For instance, an object might be attributed to the completion of another activity.
   */
  attributedTo?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more entities that represent the total population of entities for which the object can considered to be relevant.
   */
  audience?: (ActivityPubObject | Link)[];
  /**
   * The content or textual representation of the Object encoded as a JSON string. By default, the value of content is HTML. The mediaType property can be used in the object to indicate a different content type. The content MAY be expressed using multiple language-tagged values.
   */
  content?: (string | string)[];
  /**
   * Identifies the context within which the object exists or an activity was performed. The notion of "context" used is intentionally vague. The intended function is to serve as a means of grouping objects and activities that share a common originating context or purpose. An example could be all activities relating to a common project or event.
   */
  context?: (ActivityPubObject | Link)[];
  /**
   * A simple, human-readable, plain-text name for the object. HTML markup MUST NOT be included. The name MAY be expressed using multiple language-tagged values.
   */
  name?: (string | string)[];
  /**
   * The date and time describing the actual or expected ending time of the object. When used with an Activity object, for instance, the endTime property specifies the moment the activity concluded or is expected to conclude.
   */
  endTime?: string;
  /**
   * Identifies the entity (e.g. an application) that generated the object.
   */
  generator?: (ActivityPubObject | Link)[];
  /**
   * Indicates an entity that describes an icon for this object. The image should have an aspect ratio of one (horizontal) to one (vertical) and should be suitable for presentation at a small size.
   */
  icon?: (Image | Link)[];
  /**
   * Indicates an entity that describes an image for this object. Unlike the icon property, there are no aspect ratio or display size limitations assumed.
   */
  image?: (Image | Link)[];
  /**
   * Indicates one or more entities for which this object is considered a response.
   */
  inReplyTo?: (ActivityPubObject | Link)[];
  /**
   * Indicates one or more physical or logical locations associated with the object.
   */
  location?: (ActivityPubObject | Link)[];
  /**
   * Identifies an entity that provides a preview of this object.
   */
  preview?: (ActivityPubObject | Link)[];
  /**
   * The date and time at which the object was published
   */
  published?: string;
  /**
   * Identifies a Collection containing objects considered to be responses to this object.
   */
  replies?: Collection;
  /**
   * The date and time describing the actual or expected starting time of the object. When used with an Activity object, for instance, the startTime property specifies the moment the activity began or is scheduled to begin.
   */
  startTime?: string;
  /**
   * A natural language summarization of the object encoded as HTML. Multiple language tagged summaries MAY be provided.
   */
  summary?: (string | string)[];
  /**
   * One or more "tags" that have been associated with an objects. A tag can be any kind of Object. The key difference between attachment and tag is that the former implies association by inclusion, while the latter implies associated by reference.
   */
  tag?: (ActivityPubObject | Link)[];
  /**
   * The date and time at which the object was updated
   */
  updated?: string;
  /**
   * Identifies one or more links to representations of the object
   */
  url?: (string | Link)[];
  /**
   * Identifies an entity considered to be part of the public primary audience of an Object
   */
  to?: (ActivityPubObject | Link)[];
  /**
   * Identifies an Object that is part of the private primary audience of this Object.
   */
  bto?: (ActivityPubObject | Link)[];
  /**
   * Identifies an Object that is part of the public secondary audience of this Object.
   */
  cc?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more Objects that are part of the private secondary audience of this Object.
   */
  bcc?: (ActivityPubObject | Link)[];
  /**
   * When used on a Link, identifies the MIME media type of the referenced resource. When used on an Object, identifies the MIME media type of the value of the content property. If not specified, the content property is assumed to contain text/html content.
   */
  mediaType?: string;
  /**
   * When the object describes a time-bound resource, such as an audio or video, a meeting, etc, the duration property indicates the object's approximate duration. The value MUST be expressed as an xsd:duration as defined by [ xmlschema11-2], section 3.3.6 (e.g. a period of 5 seconds is represented as "PT5S").
   */
  duration?: string;
  /**
   * Describes one or more entities that either performed or are expected to perform the activity. Any single activity can have multiple actors. The actor MAY be specified using an indirect Link.
   */
  actor?: (ActivityPubObject | Link)[];
  /**
   * When used within an Activity, describes the direct object of the activity. For instance, in the activity "John added a movie to his wishlist", the object of the activity is the movie added. When used within a Relationship describes the entity to which the subject is related.
   */
  object?: (ActivityPubObject | Link)[];
  /**
   * Describes the indirect object, or target, of the activity. The precise meaning of the target is largely dependent on the type of action being described but will often be the object of the English preposition "to". For instance, in the activity "John added a movie to his wishlist", the target of the activity is John's wishlist. An activity can have more than one target.
   */
  target?: (ActivityPubObject | Link)[];
  /**
   * Describes the result of the activity. For instance, if a particular action results in the creation of a new resource, the result property can be used to describe that new resource.
   */
  result?: (ActivityPubObject | Link)[];
  /**
   * Describes an indirect object of the activity from which the activity is directed. The precise meaning of the origin is the object of the English preposition "from". For instance, in the activity "John moved an item to List B from List A", the origin of the activity is "List A".
   */
  origin?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more objects used (or to be used) in the completion of an Activity.
   */
  instrument?: (ActivityPubObject | Link)[];
}

/**
 * Add Type
 */
export interface Add {
  "@id"?: string;
  "@context"?: ContextDefinition;
  /**
   * Describes an object of any kind. The Object type serves as the base type for most of the other kinds of objects defined in the Activity Vocabulary, including other Core types such as Activity, IntransitiveActivity, Collection and OrderedCollection. | An Activity is a subtype of Object that describes some form of action that may happen, is currently happening, or has already happened. The Activity type itself serves as an abstract base type for all types of activities. It is important to note that the Activity type itself does not carry any specific semantics about the kind of action being taken. | Indicates that the actor has added the object to the target. If the target property is not explicitly specified, the target would need to be determined implicitly by context. The origin can be used to identify the context from which the object originated.
   */
  type: (
    | {
        "@id": "Object";
      }
    | {
        "@id": "Activity";
      }
    | {
        "@id": "Add";
      }
  )[];
  /**
   * Identifies a resource attached or related to an object that potentially requires special handling. The intent is to provide a model that is at least semantically similar to attachments in email.
   */
  attachment?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more entities to which this object is attributed. The attributed entities might not be Actors. For instance, an object might be attributed to the completion of another activity.
   */
  attributedTo?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more entities that represent the total population of entities for which the object can considered to be relevant.
   */
  audience?: (ActivityPubObject | Link)[];
  /**
   * The content or textual representation of the Object encoded as a JSON string. By default, the value of content is HTML. The mediaType property can be used in the object to indicate a different content type. The content MAY be expressed using multiple language-tagged values.
   */
  content?: (string | string)[];
  /**
   * Identifies the context within which the object exists or an activity was performed. The notion of "context" used is intentionally vague. The intended function is to serve as a means of grouping objects and activities that share a common originating context or purpose. An example could be all activities relating to a common project or event.
   */
  context?: (ActivityPubObject | Link)[];
  /**
   * A simple, human-readable, plain-text name for the object. HTML markup MUST NOT be included. The name MAY be expressed using multiple language-tagged values.
   */
  name?: (string | string)[];
  /**
   * The date and time describing the actual or expected ending time of the object. When used with an Activity object, for instance, the endTime property specifies the moment the activity concluded or is expected to conclude.
   */
  endTime?: string;
  /**
   * Identifies the entity (e.g. an application) that generated the object.
   */
  generator?: (ActivityPubObject | Link)[];
  /**
   * Indicates an entity that describes an icon for this object. The image should have an aspect ratio of one (horizontal) to one (vertical) and should be suitable for presentation at a small size.
   */
  icon?: (Image | Link)[];
  /**
   * Indicates an entity that describes an image for this object. Unlike the icon property, there are no aspect ratio or display size limitations assumed.
   */
  image?: (Image | Link)[];
  /**
   * Indicates one or more entities for which this object is considered a response.
   */
  inReplyTo?: (ActivityPubObject | Link)[];
  /**
   * Indicates one or more physical or logical locations associated with the object.
   */
  location?: (ActivityPubObject | Link)[];
  /**
   * Identifies an entity that provides a preview of this object.
   */
  preview?: (ActivityPubObject | Link)[];
  /**
   * The date and time at which the object was published
   */
  published?: string;
  /**
   * Identifies a Collection containing objects considered to be responses to this object.
   */
  replies?: Collection;
  /**
   * The date and time describing the actual or expected starting time of the object. When used with an Activity object, for instance, the startTime property specifies the moment the activity began or is scheduled to begin.
   */
  startTime?: string;
  /**
   * A natural language summarization of the object encoded as HTML. Multiple language tagged summaries MAY be provided.
   */
  summary?: (string | string)[];
  /**
   * One or more "tags" that have been associated with an objects. A tag can be any kind of Object. The key difference between attachment and tag is that the former implies association by inclusion, while the latter implies associated by reference.
   */
  tag?: (ActivityPubObject | Link)[];
  /**
   * The date and time at which the object was updated
   */
  updated?: string;
  /**
   * Identifies one or more links to representations of the object
   */
  url?: (string | Link)[];
  /**
   * Identifies an entity considered to be part of the public primary audience of an Object
   */
  to?: (ActivityPubObject | Link)[];
  /**
   * Identifies an Object that is part of the private primary audience of this Object.
   */
  bto?: (ActivityPubObject | Link)[];
  /**
   * Identifies an Object that is part of the public secondary audience of this Object.
   */
  cc?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more Objects that are part of the private secondary audience of this Object.
   */
  bcc?: (ActivityPubObject | Link)[];
  /**
   * When used on a Link, identifies the MIME media type of the referenced resource. When used on an Object, identifies the MIME media type of the value of the content property. If not specified, the content property is assumed to contain text/html content.
   */
  mediaType?: string;
  /**
   * When the object describes a time-bound resource, such as an audio or video, a meeting, etc, the duration property indicates the object's approximate duration. The value MUST be expressed as an xsd:duration as defined by [ xmlschema11-2], section 3.3.6 (e.g. a period of 5 seconds is represented as "PT5S").
   */
  duration?: string;
  /**
   * Describes one or more entities that either performed or are expected to perform the activity. Any single activity can have multiple actors. The actor MAY be specified using an indirect Link.
   */
  actor?: (ActivityPubObject | Link)[];
  /**
   * When used within an Activity, describes the direct object of the activity. For instance, in the activity "John added a movie to his wishlist", the object of the activity is the movie added. When used within a Relationship describes the entity to which the subject is related.
   */
  object?: (ActivityPubObject | Link)[];
  /**
   * Describes the indirect object, or target, of the activity. The precise meaning of the target is largely dependent on the type of action being described but will often be the object of the English preposition "to". For instance, in the activity "John added a movie to his wishlist", the target of the activity is John's wishlist. An activity can have more than one target.
   */
  target?: (ActivityPubObject | Link)[];
  /**
   * Describes the result of the activity. For instance, if a particular action results in the creation of a new resource, the result property can be used to describe that new resource.
   */
  result?: (ActivityPubObject | Link)[];
  /**
   * Describes an indirect object of the activity from which the activity is directed. The precise meaning of the origin is the object of the English preposition "from". For instance, in the activity "John moved an item to List B from List A", the origin of the activity is "List A".
   */
  origin?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more objects used (or to be used) in the completion of an Activity.
   */
  instrument?: (ActivityPubObject | Link)[];
}

/**
 * Arrive Type
 */
export interface Arrive {
  "@id"?: string;
  "@context"?: ContextDefinition;
  /**
   * Describes an object of any kind. The Object type serves as the base type for most of the other kinds of objects defined in the Activity Vocabulary, including other Core types such as Activity, IntransitiveActivity, Collection and OrderedCollection. | An Activity is a subtype of Object that describes some form of action that may happen, is currently happening, or has already happened. The Activity type itself serves as an abstract base type for all types of activities. It is important to note that the Activity type itself does not carry any specific semantics about the kind of action being taken. | Instances of IntransitiveActivity are a subtype of Activity representing intransitive actions. The object property is therefore inappropriate for these activities. | An IntransitiveActivity that indicates that the actor has arrived at the location. The origin can be used to identify the context from which the actor originated. The target typically has no defined meaning.
   */
  type: (
    | {
        "@id": "Object";
      }
    | {
        "@id": "Activity";
      }
    | {
        "@id": "IntransitiveActivity";
      }
    | {
        "@id": "Arrive";
      }
  )[];
  /**
   * Identifies a resource attached or related to an object that potentially requires special handling. The intent is to provide a model that is at least semantically similar to attachments in email.
   */
  attachment?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more entities to which this object is attributed. The attributed entities might not be Actors. For instance, an object might be attributed to the completion of another activity.
   */
  attributedTo?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more entities that represent the total population of entities for which the object can considered to be relevant.
   */
  audience?: (ActivityPubObject | Link)[];
  /**
   * The content or textual representation of the Object encoded as a JSON string. By default, the value of content is HTML. The mediaType property can be used in the object to indicate a different content type. The content MAY be expressed using multiple language-tagged values.
   */
  content?: (string | string)[];
  /**
   * Identifies the context within which the object exists or an activity was performed. The notion of "context" used is intentionally vague. The intended function is to serve as a means of grouping objects and activities that share a common originating context or purpose. An example could be all activities relating to a common project or event.
   */
  context?: (ActivityPubObject | Link)[];
  /**
   * A simple, human-readable, plain-text name for the object. HTML markup MUST NOT be included. The name MAY be expressed using multiple language-tagged values.
   */
  name?: (string | string)[];
  /**
   * The date and time describing the actual or expected ending time of the object. When used with an Activity object, for instance, the endTime property specifies the moment the activity concluded or is expected to conclude.
   */
  endTime?: string;
  /**
   * Identifies the entity (e.g. an application) that generated the object.
   */
  generator?: (ActivityPubObject | Link)[];
  /**
   * Indicates an entity that describes an icon for this object. The image should have an aspect ratio of one (horizontal) to one (vertical) and should be suitable for presentation at a small size.
   */
  icon?: (Image | Link)[];
  /**
   * Indicates an entity that describes an image for this object. Unlike the icon property, there are no aspect ratio or display size limitations assumed.
   */
  image?: (Image | Link)[];
  /**
   * Indicates one or more entities for which this object is considered a response.
   */
  inReplyTo?: (ActivityPubObject | Link)[];
  /**
   * Indicates one or more physical or logical locations associated with the object.
   */
  location?: (ActivityPubObject | Link)[];
  /**
   * Identifies an entity that provides a preview of this object.
   */
  preview?: (ActivityPubObject | Link)[];
  /**
   * The date and time at which the object was published
   */
  published?: string;
  /**
   * Identifies a Collection containing objects considered to be responses to this object.
   */
  replies?: Collection;
  /**
   * The date and time describing the actual or expected starting time of the object. When used with an Activity object, for instance, the startTime property specifies the moment the activity began or is scheduled to begin.
   */
  startTime?: string;
  /**
   * A natural language summarization of the object encoded as HTML. Multiple language tagged summaries MAY be provided.
   */
  summary?: (string | string)[];
  /**
   * One or more "tags" that have been associated with an objects. A tag can be any kind of Object. The key difference between attachment and tag is that the former implies association by inclusion, while the latter implies associated by reference.
   */
  tag?: (ActivityPubObject | Link)[];
  /**
   * The date and time at which the object was updated
   */
  updated?: string;
  /**
   * Identifies one or more links to representations of the object
   */
  url?: (string | Link)[];
  /**
   * Identifies an entity considered to be part of the public primary audience of an Object
   */
  to?: (ActivityPubObject | Link)[];
  /**
   * Identifies an Object that is part of the private primary audience of this Object.
   */
  bto?: (ActivityPubObject | Link)[];
  /**
   * Identifies an Object that is part of the public secondary audience of this Object.
   */
  cc?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more Objects that are part of the private secondary audience of this Object.
   */
  bcc?: (ActivityPubObject | Link)[];
  /**
   * When used on a Link, identifies the MIME media type of the referenced resource. When used on an Object, identifies the MIME media type of the value of the content property. If not specified, the content property is assumed to contain text/html content.
   */
  mediaType?: string;
  /**
   * When the object describes a time-bound resource, such as an audio or video, a meeting, etc, the duration property indicates the object's approximate duration. The value MUST be expressed as an xsd:duration as defined by [ xmlschema11-2], section 3.3.6 (e.g. a period of 5 seconds is represented as "PT5S").
   */
  duration?: string;
  /**
   * Describes one or more entities that either performed or are expected to perform the activity. Any single activity can have multiple actors. The actor MAY be specified using an indirect Link.
   */
  actor?: (ActivityPubObject | Link)[];
  /**
   * When used within an Activity, describes the direct object of the activity. For instance, in the activity "John added a movie to his wishlist", the object of the activity is the movie added. When used within a Relationship describes the entity to which the subject is related.
   */
  object?: (ActivityPubObject | Link)[];
  /**
   * Describes the indirect object, or target, of the activity. The precise meaning of the target is largely dependent on the type of action being described but will often be the object of the English preposition "to". For instance, in the activity "John added a movie to his wishlist", the target of the activity is John's wishlist. An activity can have more than one target.
   */
  target?: (ActivityPubObject | Link)[];
  /**
   * Describes the result of the activity. For instance, if a particular action results in the creation of a new resource, the result property can be used to describe that new resource.
   */
  result?: (ActivityPubObject | Link)[];
  /**
   * Describes an indirect object of the activity from which the activity is directed. The precise meaning of the origin is the object of the English preposition "from". For instance, in the activity "John moved an item to List B from List A", the origin of the activity is "List A".
   */
  origin?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more objects used (or to be used) in the completion of an Activity.
   */
  instrument?: (ActivityPubObject | Link)[];
}

/**
 * Create Type
 */
export interface Create {
  "@id"?: string;
  "@context"?: ContextDefinition;
  /**
   * Describes an object of any kind. The Object type serves as the base type for most of the other kinds of objects defined in the Activity Vocabulary, including other Core types such as Activity, IntransitiveActivity, Collection and OrderedCollection. | An Activity is a subtype of Object that describes some form of action that may happen, is currently happening, or has already happened. The Activity type itself serves as an abstract base type for all types of activities. It is important to note that the Activity type itself does not carry any specific semantics about the kind of action being taken. | Indicates that the actor has created the object.
   */
  type: (
    | {
        "@id": "Object";
      }
    | {
        "@id": "Activity";
      }
    | {
        "@id": "Create";
      }
  )[];
  /**
   * Identifies a resource attached or related to an object that potentially requires special handling. The intent is to provide a model that is at least semantically similar to attachments in email.
   */
  attachment?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more entities to which this object is attributed. The attributed entities might not be Actors. For instance, an object might be attributed to the completion of another activity.
   */
  attributedTo?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more entities that represent the total population of entities for which the object can considered to be relevant.
   */
  audience?: (ActivityPubObject | Link)[];
  /**
   * The content or textual representation of the Object encoded as a JSON string. By default, the value of content is HTML. The mediaType property can be used in the object to indicate a different content type. The content MAY be expressed using multiple language-tagged values.
   */
  content?: (string | string)[];
  /**
   * Identifies the context within which the object exists or an activity was performed. The notion of "context" used is intentionally vague. The intended function is to serve as a means of grouping objects and activities that share a common originating context or purpose. An example could be all activities relating to a common project or event.
   */
  context?: (ActivityPubObject | Link)[];
  /**
   * A simple, human-readable, plain-text name for the object. HTML markup MUST NOT be included. The name MAY be expressed using multiple language-tagged values.
   */
  name?: (string | string)[];
  /**
   * The date and time describing the actual or expected ending time of the object. When used with an Activity object, for instance, the endTime property specifies the moment the activity concluded or is expected to conclude.
   */
  endTime?: string;
  /**
   * Identifies the entity (e.g. an application) that generated the object.
   */
  generator?: (ActivityPubObject | Link)[];
  /**
   * Indicates an entity that describes an icon for this object. The image should have an aspect ratio of one (horizontal) to one (vertical) and should be suitable for presentation at a small size.
   */
  icon?: (Image | Link)[];
  /**
   * Indicates an entity that describes an image for this object. Unlike the icon property, there are no aspect ratio or display size limitations assumed.
   */
  image?: (Image | Link)[];
  /**
   * Indicates one or more entities for which this object is considered a response.
   */
  inReplyTo?: (ActivityPubObject | Link)[];
  /**
   * Indicates one or more physical or logical locations associated with the object.
   */
  location?: (ActivityPubObject | Link)[];
  /**
   * Identifies an entity that provides a preview of this object.
   */
  preview?: (ActivityPubObject | Link)[];
  /**
   * The date and time at which the object was published
   */
  published?: string;
  /**
   * Identifies a Collection containing objects considered to be responses to this object.
   */
  replies?: Collection;
  /**
   * The date and time describing the actual or expected starting time of the object. When used with an Activity object, for instance, the startTime property specifies the moment the activity began or is scheduled to begin.
   */
  startTime?: string;
  /**
   * A natural language summarization of the object encoded as HTML. Multiple language tagged summaries MAY be provided.
   */
  summary?: (string | string)[];
  /**
   * One or more "tags" that have been associated with an objects. A tag can be any kind of Object. The key difference between attachment and tag is that the former implies association by inclusion, while the latter implies associated by reference.
   */
  tag?: (ActivityPubObject | Link)[];
  /**
   * The date and time at which the object was updated
   */
  updated?: string;
  /**
   * Identifies one or more links to representations of the object
   */
  url?: (string | Link)[];
  /**
   * Identifies an entity considered to be part of the public primary audience of an Object
   */
  to?: (ActivityPubObject | Link)[];
  /**
   * Identifies an Object that is part of the private primary audience of this Object.
   */
  bto?: (ActivityPubObject | Link)[];
  /**
   * Identifies an Object that is part of the public secondary audience of this Object.
   */
  cc?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more Objects that are part of the private secondary audience of this Object.
   */
  bcc?: (ActivityPubObject | Link)[];
  /**
   * When used on a Link, identifies the MIME media type of the referenced resource. When used on an Object, identifies the MIME media type of the value of the content property. If not specified, the content property is assumed to contain text/html content.
   */
  mediaType?: string;
  /**
   * When the object describes a time-bound resource, such as an audio or video, a meeting, etc, the duration property indicates the object's approximate duration. The value MUST be expressed as an xsd:duration as defined by [ xmlschema11-2], section 3.3.6 (e.g. a period of 5 seconds is represented as "PT5S").
   */
  duration?: string;
  /**
   * Describes one or more entities that either performed or are expected to perform the activity. Any single activity can have multiple actors. The actor MAY be specified using an indirect Link.
   */
  actor?: (ActivityPubObject | Link)[];
  /**
   * When used within an Activity, describes the direct object of the activity. For instance, in the activity "John added a movie to his wishlist", the object of the activity is the movie added. When used within a Relationship describes the entity to which the subject is related.
   */
  object?: (ActivityPubObject | Link)[];
  /**
   * Describes the indirect object, or target, of the activity. The precise meaning of the target is largely dependent on the type of action being described but will often be the object of the English preposition "to". For instance, in the activity "John added a movie to his wishlist", the target of the activity is John's wishlist. An activity can have more than one target.
   */
  target?: (ActivityPubObject | Link)[];
  /**
   * Describes the result of the activity. For instance, if a particular action results in the creation of a new resource, the result property can be used to describe that new resource.
   */
  result?: (ActivityPubObject | Link)[];
  /**
   * Describes an indirect object of the activity from which the activity is directed. The precise meaning of the origin is the object of the English preposition "from". For instance, in the activity "John moved an item to List B from List A", the origin of the activity is "List A".
   */
  origin?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more objects used (or to be used) in the completion of an Activity.
   */
  instrument?: (ActivityPubObject | Link)[];
}

/**
 * Delete Type
 */
export interface Delete {
  "@id"?: string;
  "@context"?: ContextDefinition;
  /**
   * Describes an object of any kind. The Object type serves as the base type for most of the other kinds of objects defined in the Activity Vocabulary, including other Core types such as Activity, IntransitiveActivity, Collection and OrderedCollection. | An Activity is a subtype of Object that describes some form of action that may happen, is currently happening, or has already happened. The Activity type itself serves as an abstract base type for all types of activities. It is important to note that the Activity type itself does not carry any specific semantics about the kind of action being taken. | Indicates that the actor has deleted the object. If specified, the origin indicates the context from which the object was deleted.
   */
  type: (
    | {
        "@id": "Object";
      }
    | {
        "@id": "Activity";
      }
    | {
        "@id": "Delete";
      }
  )[];
  /**
   * Identifies a resource attached or related to an object that potentially requires special handling. The intent is to provide a model that is at least semantically similar to attachments in email.
   */
  attachment?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more entities to which this object is attributed. The attributed entities might not be Actors. For instance, an object might be attributed to the completion of another activity.
   */
  attributedTo?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more entities that represent the total population of entities for which the object can considered to be relevant.
   */
  audience?: (ActivityPubObject | Link)[];
  /**
   * The content or textual representation of the Object encoded as a JSON string. By default, the value of content is HTML. The mediaType property can be used in the object to indicate a different content type. The content MAY be expressed using multiple language-tagged values.
   */
  content?: (string | string)[];
  /**
   * Identifies the context within which the object exists or an activity was performed. The notion of "context" used is intentionally vague. The intended function is to serve as a means of grouping objects and activities that share a common originating context or purpose. An example could be all activities relating to a common project or event.
   */
  context?: (ActivityPubObject | Link)[];
  /**
   * A simple, human-readable, plain-text name for the object. HTML markup MUST NOT be included. The name MAY be expressed using multiple language-tagged values.
   */
  name?: (string | string)[];
  /**
   * The date and time describing the actual or expected ending time of the object. When used with an Activity object, for instance, the endTime property specifies the moment the activity concluded or is expected to conclude.
   */
  endTime?: string;
  /**
   * Identifies the entity (e.g. an application) that generated the object.
   */
  generator?: (ActivityPubObject | Link)[];
  /**
   * Indicates an entity that describes an icon for this object. The image should have an aspect ratio of one (horizontal) to one (vertical) and should be suitable for presentation at a small size.
   */
  icon?: (Image | Link)[];
  /**
   * Indicates an entity that describes an image for this object. Unlike the icon property, there are no aspect ratio or display size limitations assumed.
   */
  image?: (Image | Link)[];
  /**
   * Indicates one or more entities for which this object is considered a response.
   */
  inReplyTo?: (ActivityPubObject | Link)[];
  /**
   * Indicates one or more physical or logical locations associated with the object.
   */
  location?: (ActivityPubObject | Link)[];
  /**
   * Identifies an entity that provides a preview of this object.
   */
  preview?: (ActivityPubObject | Link)[];
  /**
   * The date and time at which the object was published
   */
  published?: string;
  /**
   * Identifies a Collection containing objects considered to be responses to this object.
   */
  replies?: Collection;
  /**
   * The date and time describing the actual or expected starting time of the object. When used with an Activity object, for instance, the startTime property specifies the moment the activity began or is scheduled to begin.
   */
  startTime?: string;
  /**
   * A natural language summarization of the object encoded as HTML. Multiple language tagged summaries MAY be provided.
   */
  summary?: (string | string)[];
  /**
   * One or more "tags" that have been associated with an objects. A tag can be any kind of Object. The key difference between attachment and tag is that the former implies association by inclusion, while the latter implies associated by reference.
   */
  tag?: (ActivityPubObject | Link)[];
  /**
   * The date and time at which the object was updated
   */
  updated?: string;
  /**
   * Identifies one or more links to representations of the object
   */
  url?: (string | Link)[];
  /**
   * Identifies an entity considered to be part of the public primary audience of an Object
   */
  to?: (ActivityPubObject | Link)[];
  /**
   * Identifies an Object that is part of the private primary audience of this Object.
   */
  bto?: (ActivityPubObject | Link)[];
  /**
   * Identifies an Object that is part of the public secondary audience of this Object.
   */
  cc?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more Objects that are part of the private secondary audience of this Object.
   */
  bcc?: (ActivityPubObject | Link)[];
  /**
   * When used on a Link, identifies the MIME media type of the referenced resource. When used on an Object, identifies the MIME media type of the value of the content property. If not specified, the content property is assumed to contain text/html content.
   */
  mediaType?: string;
  /**
   * When the object describes a time-bound resource, such as an audio or video, a meeting, etc, the duration property indicates the object's approximate duration. The value MUST be expressed as an xsd:duration as defined by [ xmlschema11-2], section 3.3.6 (e.g. a period of 5 seconds is represented as "PT5S").
   */
  duration?: string;
  /**
   * Describes one or more entities that either performed or are expected to perform the activity. Any single activity can have multiple actors. The actor MAY be specified using an indirect Link.
   */
  actor?: (ActivityPubObject | Link)[];
  /**
   * When used within an Activity, describes the direct object of the activity. For instance, in the activity "John added a movie to his wishlist", the object of the activity is the movie added. When used within a Relationship describes the entity to which the subject is related.
   */
  object?: (ActivityPubObject | Link)[];
  /**
   * Describes the indirect object, or target, of the activity. The precise meaning of the target is largely dependent on the type of action being described but will often be the object of the English preposition "to". For instance, in the activity "John added a movie to his wishlist", the target of the activity is John's wishlist. An activity can have more than one target.
   */
  target?: (ActivityPubObject | Link)[];
  /**
   * Describes the result of the activity. For instance, if a particular action results in the creation of a new resource, the result property can be used to describe that new resource.
   */
  result?: (ActivityPubObject | Link)[];
  /**
   * Describes an indirect object of the activity from which the activity is directed. The precise meaning of the origin is the object of the English preposition "from". For instance, in the activity "John moved an item to List B from List A", the origin of the activity is "List A".
   */
  origin?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more objects used (or to be used) in the completion of an Activity.
   */
  instrument?: (ActivityPubObject | Link)[];
}

/**
 * Follow Type
 */
export interface Follow {
  "@id"?: string;
  "@context"?: ContextDefinition;
  /**
   * Describes an object of any kind. The Object type serves as the base type for most of the other kinds of objects defined in the Activity Vocabulary, including other Core types such as Activity, IntransitiveActivity, Collection and OrderedCollection. | An Activity is a subtype of Object that describes some form of action that may happen, is currently happening, or has already happened. The Activity type itself serves as an abstract base type for all types of activities. It is important to note that the Activity type itself does not carry any specific semantics about the kind of action being taken. | Indicates that the actor is "following" the object. Following is defined in the sense typically used within Social systems in which the actor is interested in any activity performed by or on the object. The target and origin typically have no defined meaning.
   */
  type: (
    | {
        "@id": "Object";
      }
    | {
        "@id": "Activity";
      }
    | {
        "@id": "Follow";
      }
  )[];
  /**
   * Identifies a resource attached or related to an object that potentially requires special handling. The intent is to provide a model that is at least semantically similar to attachments in email.
   */
  attachment?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more entities to which this object is attributed. The attributed entities might not be Actors. For instance, an object might be attributed to the completion of another activity.
   */
  attributedTo?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more entities that represent the total population of entities for which the object can considered to be relevant.
   */
  audience?: (ActivityPubObject | Link)[];
  /**
   * The content or textual representation of the Object encoded as a JSON string. By default, the value of content is HTML. The mediaType property can be used in the object to indicate a different content type. The content MAY be expressed using multiple language-tagged values.
   */
  content?: (string | string)[];
  /**
   * Identifies the context within which the object exists or an activity was performed. The notion of "context" used is intentionally vague. The intended function is to serve as a means of grouping objects and activities that share a common originating context or purpose. An example could be all activities relating to a common project or event.
   */
  context?: (ActivityPubObject | Link)[];
  /**
   * A simple, human-readable, plain-text name for the object. HTML markup MUST NOT be included. The name MAY be expressed using multiple language-tagged values.
   */
  name?: (string | string)[];
  /**
   * The date and time describing the actual or expected ending time of the object. When used with an Activity object, for instance, the endTime property specifies the moment the activity concluded or is expected to conclude.
   */
  endTime?: string;
  /**
   * Identifies the entity (e.g. an application) that generated the object.
   */
  generator?: (ActivityPubObject | Link)[];
  /**
   * Indicates an entity that describes an icon for this object. The image should have an aspect ratio of one (horizontal) to one (vertical) and should be suitable for presentation at a small size.
   */
  icon?: (Image | Link)[];
  /**
   * Indicates an entity that describes an image for this object. Unlike the icon property, there are no aspect ratio or display size limitations assumed.
   */
  image?: (Image | Link)[];
  /**
   * Indicates one or more entities for which this object is considered a response.
   */
  inReplyTo?: (ActivityPubObject | Link)[];
  /**
   * Indicates one or more physical or logical locations associated with the object.
   */
  location?: (ActivityPubObject | Link)[];
  /**
   * Identifies an entity that provides a preview of this object.
   */
  preview?: (ActivityPubObject | Link)[];
  /**
   * The date and time at which the object was published
   */
  published?: string;
  /**
   * Identifies a Collection containing objects considered to be responses to this object.
   */
  replies?: Collection;
  /**
   * The date and time describing the actual or expected starting time of the object. When used with an Activity object, for instance, the startTime property specifies the moment the activity began or is scheduled to begin.
   */
  startTime?: string;
  /**
   * A natural language summarization of the object encoded as HTML. Multiple language tagged summaries MAY be provided.
   */
  summary?: (string | string)[];
  /**
   * One or more "tags" that have been associated with an objects. A tag can be any kind of Object. The key difference between attachment and tag is that the former implies association by inclusion, while the latter implies associated by reference.
   */
  tag?: (ActivityPubObject | Link)[];
  /**
   * The date and time at which the object was updated
   */
  updated?: string;
  /**
   * Identifies one or more links to representations of the object
   */
  url?: (string | Link)[];
  /**
   * Identifies an entity considered to be part of the public primary audience of an Object
   */
  to?: (ActivityPubObject | Link)[];
  /**
   * Identifies an Object that is part of the private primary audience of this Object.
   */
  bto?: (ActivityPubObject | Link)[];
  /**
   * Identifies an Object that is part of the public secondary audience of this Object.
   */
  cc?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more Objects that are part of the private secondary audience of this Object.
   */
  bcc?: (ActivityPubObject | Link)[];
  /**
   * When used on a Link, identifies the MIME media type of the referenced resource. When used on an Object, identifies the MIME media type of the value of the content property. If not specified, the content property is assumed to contain text/html content.
   */
  mediaType?: string;
  /**
   * When the object describes a time-bound resource, such as an audio or video, a meeting, etc, the duration property indicates the object's approximate duration. The value MUST be expressed as an xsd:duration as defined by [ xmlschema11-2], section 3.3.6 (e.g. a period of 5 seconds is represented as "PT5S").
   */
  duration?: string;
  /**
   * Describes one or more entities that either performed or are expected to perform the activity. Any single activity can have multiple actors. The actor MAY be specified using an indirect Link.
   */
  actor?: (ActivityPubObject | Link)[];
  /**
   * When used within an Activity, describes the direct object of the activity. For instance, in the activity "John added a movie to his wishlist", the object of the activity is the movie added. When used within a Relationship describes the entity to which the subject is related.
   */
  object?: (ActivityPubObject | Link)[];
  /**
   * Describes the indirect object, or target, of the activity. The precise meaning of the target is largely dependent on the type of action being described but will often be the object of the English preposition "to". For instance, in the activity "John added a movie to his wishlist", the target of the activity is John's wishlist. An activity can have more than one target.
   */
  target?: (ActivityPubObject | Link)[];
  /**
   * Describes the result of the activity. For instance, if a particular action results in the creation of a new resource, the result property can be used to describe that new resource.
   */
  result?: (ActivityPubObject | Link)[];
  /**
   * Describes an indirect object of the activity from which the activity is directed. The precise meaning of the origin is the object of the English preposition "from". For instance, in the activity "John moved an item to List B from List A", the origin of the activity is "List A".
   */
  origin?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more objects used (or to be used) in the completion of an Activity.
   */
  instrument?: (ActivityPubObject | Link)[];
}

/**
 * Ignore Type
 */
export interface Ignore {
  "@id"?: string;
  "@context"?: ContextDefinition;
  /**
   * Describes an object of any kind. The Object type serves as the base type for most of the other kinds of objects defined in the Activity Vocabulary, including other Core types such as Activity, IntransitiveActivity, Collection and OrderedCollection. | An Activity is a subtype of Object that describes some form of action that may happen, is currently happening, or has already happened. The Activity type itself serves as an abstract base type for all types of activities. It is important to note that the Activity type itself does not carry any specific semantics about the kind of action being taken. | Indicates that the actor is ignoring the object. The target and origin typically have no defined meaning.
   */
  type: (
    | {
        "@id": "Object";
      }
    | {
        "@id": "Activity";
      }
    | {
        "@id": "Ignore";
      }
  )[];
  /**
   * Identifies a resource attached or related to an object that potentially requires special handling. The intent is to provide a model that is at least semantically similar to attachments in email.
   */
  attachment?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more entities to which this object is attributed. The attributed entities might not be Actors. For instance, an object might be attributed to the completion of another activity.
   */
  attributedTo?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more entities that represent the total population of entities for which the object can considered to be relevant.
   */
  audience?: (ActivityPubObject | Link)[];
  /**
   * The content or textual representation of the Object encoded as a JSON string. By default, the value of content is HTML. The mediaType property can be used in the object to indicate a different content type. The content MAY be expressed using multiple language-tagged values.
   */
  content?: (string | string)[];
  /**
   * Identifies the context within which the object exists or an activity was performed. The notion of "context" used is intentionally vague. The intended function is to serve as a means of grouping objects and activities that share a common originating context or purpose. An example could be all activities relating to a common project or event.
   */
  context?: (ActivityPubObject | Link)[];
  /**
   * A simple, human-readable, plain-text name for the object. HTML markup MUST NOT be included. The name MAY be expressed using multiple language-tagged values.
   */
  name?: (string | string)[];
  /**
   * The date and time describing the actual or expected ending time of the object. When used with an Activity object, for instance, the endTime property specifies the moment the activity concluded or is expected to conclude.
   */
  endTime?: string;
  /**
   * Identifies the entity (e.g. an application) that generated the object.
   */
  generator?: (ActivityPubObject | Link)[];
  /**
   * Indicates an entity that describes an icon for this object. The image should have an aspect ratio of one (horizontal) to one (vertical) and should be suitable for presentation at a small size.
   */
  icon?: (Image | Link)[];
  /**
   * Indicates an entity that describes an image for this object. Unlike the icon property, there are no aspect ratio or display size limitations assumed.
   */
  image?: (Image | Link)[];
  /**
   * Indicates one or more entities for which this object is considered a response.
   */
  inReplyTo?: (ActivityPubObject | Link)[];
  /**
   * Indicates one or more physical or logical locations associated with the object.
   */
  location?: (ActivityPubObject | Link)[];
  /**
   * Identifies an entity that provides a preview of this object.
   */
  preview?: (ActivityPubObject | Link)[];
  /**
   * The date and time at which the object was published
   */
  published?: string;
  /**
   * Identifies a Collection containing objects considered to be responses to this object.
   */
  replies?: Collection;
  /**
   * The date and time describing the actual or expected starting time of the object. When used with an Activity object, for instance, the startTime property specifies the moment the activity began or is scheduled to begin.
   */
  startTime?: string;
  /**
   * A natural language summarization of the object encoded as HTML. Multiple language tagged summaries MAY be provided.
   */
  summary?: (string | string)[];
  /**
   * One or more "tags" that have been associated with an objects. A tag can be any kind of Object. The key difference between attachment and tag is that the former implies association by inclusion, while the latter implies associated by reference.
   */
  tag?: (ActivityPubObject | Link)[];
  /**
   * The date and time at which the object was updated
   */
  updated?: string;
  /**
   * Identifies one or more links to representations of the object
   */
  url?: (string | Link)[];
  /**
   * Identifies an entity considered to be part of the public primary audience of an Object
   */
  to?: (ActivityPubObject | Link)[];
  /**
   * Identifies an Object that is part of the private primary audience of this Object.
   */
  bto?: (ActivityPubObject | Link)[];
  /**
   * Identifies an Object that is part of the public secondary audience of this Object.
   */
  cc?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more Objects that are part of the private secondary audience of this Object.
   */
  bcc?: (ActivityPubObject | Link)[];
  /**
   * When used on a Link, identifies the MIME media type of the referenced resource. When used on an Object, identifies the MIME media type of the value of the content property. If not specified, the content property is assumed to contain text/html content.
   */
  mediaType?: string;
  /**
   * When the object describes a time-bound resource, such as an audio or video, a meeting, etc, the duration property indicates the object's approximate duration. The value MUST be expressed as an xsd:duration as defined by [ xmlschema11-2], section 3.3.6 (e.g. a period of 5 seconds is represented as "PT5S").
   */
  duration?: string;
  /**
   * Describes one or more entities that either performed or are expected to perform the activity. Any single activity can have multiple actors. The actor MAY be specified using an indirect Link.
   */
  actor?: (ActivityPubObject | Link)[];
  /**
   * When used within an Activity, describes the direct object of the activity. For instance, in the activity "John added a movie to his wishlist", the object of the activity is the movie added. When used within a Relationship describes the entity to which the subject is related.
   */
  object?: (ActivityPubObject | Link)[];
  /**
   * Describes the indirect object, or target, of the activity. The precise meaning of the target is largely dependent on the type of action being described but will often be the object of the English preposition "to". For instance, in the activity "John added a movie to his wishlist", the target of the activity is John's wishlist. An activity can have more than one target.
   */
  target?: (ActivityPubObject | Link)[];
  /**
   * Describes the result of the activity. For instance, if a particular action results in the creation of a new resource, the result property can be used to describe that new resource.
   */
  result?: (ActivityPubObject | Link)[];
  /**
   * Describes an indirect object of the activity from which the activity is directed. The precise meaning of the origin is the object of the English preposition "from". For instance, in the activity "John moved an item to List B from List A", the origin of the activity is "List A".
   */
  origin?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more objects used (or to be used) in the completion of an Activity.
   */
  instrument?: (ActivityPubObject | Link)[];
}

/**
 * Join Type
 */
export interface Join {
  "@id"?: string;
  "@context"?: ContextDefinition;
  /**
   * Describes an object of any kind. The Object type serves as the base type for most of the other kinds of objects defined in the Activity Vocabulary, including other Core types such as Activity, IntransitiveActivity, Collection and OrderedCollection. | An Activity is a subtype of Object that describes some form of action that may happen, is currently happening, or has already happened. The Activity type itself serves as an abstract base type for all types of activities. It is important to note that the Activity type itself does not carry any specific semantics about the kind of action being taken. | Indicates that the actor has joined the object. The target and origin typically have no defined meaning.
   */
  type: (
    | {
        "@id": "Object";
      }
    | {
        "@id": "Activity";
      }
    | {
        "@id": "Join";
      }
  )[];
  /**
   * Identifies a resource attached or related to an object that potentially requires special handling. The intent is to provide a model that is at least semantically similar to attachments in email.
   */
  attachment?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more entities to which this object is attributed. The attributed entities might not be Actors. For instance, an object might be attributed to the completion of another activity.
   */
  attributedTo?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more entities that represent the total population of entities for which the object can considered to be relevant.
   */
  audience?: (ActivityPubObject | Link)[];
  /**
   * The content or textual representation of the Object encoded as a JSON string. By default, the value of content is HTML. The mediaType property can be used in the object to indicate a different content type. The content MAY be expressed using multiple language-tagged values.
   */
  content?: (string | string)[];
  /**
   * Identifies the context within which the object exists or an activity was performed. The notion of "context" used is intentionally vague. The intended function is to serve as a means of grouping objects and activities that share a common originating context or purpose. An example could be all activities relating to a common project or event.
   */
  context?: (ActivityPubObject | Link)[];
  /**
   * A simple, human-readable, plain-text name for the object. HTML markup MUST NOT be included. The name MAY be expressed using multiple language-tagged values.
   */
  name?: (string | string)[];
  /**
   * The date and time describing the actual or expected ending time of the object. When used with an Activity object, for instance, the endTime property specifies the moment the activity concluded or is expected to conclude.
   */
  endTime?: string;
  /**
   * Identifies the entity (e.g. an application) that generated the object.
   */
  generator?: (ActivityPubObject | Link)[];
  /**
   * Indicates an entity that describes an icon for this object. The image should have an aspect ratio of one (horizontal) to one (vertical) and should be suitable for presentation at a small size.
   */
  icon?: (Image | Link)[];
  /**
   * Indicates an entity that describes an image for this object. Unlike the icon property, there are no aspect ratio or display size limitations assumed.
   */
  image?: (Image | Link)[];
  /**
   * Indicates one or more entities for which this object is considered a response.
   */
  inReplyTo?: (ActivityPubObject | Link)[];
  /**
   * Indicates one or more physical or logical locations associated with the object.
   */
  location?: (ActivityPubObject | Link)[];
  /**
   * Identifies an entity that provides a preview of this object.
   */
  preview?: (ActivityPubObject | Link)[];
  /**
   * The date and time at which the object was published
   */
  published?: string;
  /**
   * Identifies a Collection containing objects considered to be responses to this object.
   */
  replies?: Collection;
  /**
   * The date and time describing the actual or expected starting time of the object. When used with an Activity object, for instance, the startTime property specifies the moment the activity began or is scheduled to begin.
   */
  startTime?: string;
  /**
   * A natural language summarization of the object encoded as HTML. Multiple language tagged summaries MAY be provided.
   */
  summary?: (string | string)[];
  /**
   * One or more "tags" that have been associated with an objects. A tag can be any kind of Object. The key difference between attachment and tag is that the former implies association by inclusion, while the latter implies associated by reference.
   */
  tag?: (ActivityPubObject | Link)[];
  /**
   * The date and time at which the object was updated
   */
  updated?: string;
  /**
   * Identifies one or more links to representations of the object
   */
  url?: (string | Link)[];
  /**
   * Identifies an entity considered to be part of the public primary audience of an Object
   */
  to?: (ActivityPubObject | Link)[];
  /**
   * Identifies an Object that is part of the private primary audience of this Object.
   */
  bto?: (ActivityPubObject | Link)[];
  /**
   * Identifies an Object that is part of the public secondary audience of this Object.
   */
  cc?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more Objects that are part of the private secondary audience of this Object.
   */
  bcc?: (ActivityPubObject | Link)[];
  /**
   * When used on a Link, identifies the MIME media type of the referenced resource. When used on an Object, identifies the MIME media type of the value of the content property. If not specified, the content property is assumed to contain text/html content.
   */
  mediaType?: string;
  /**
   * When the object describes a time-bound resource, such as an audio or video, a meeting, etc, the duration property indicates the object's approximate duration. The value MUST be expressed as an xsd:duration as defined by [ xmlschema11-2], section 3.3.6 (e.g. a period of 5 seconds is represented as "PT5S").
   */
  duration?: string;
  /**
   * Describes one or more entities that either performed or are expected to perform the activity. Any single activity can have multiple actors. The actor MAY be specified using an indirect Link.
   */
  actor?: (ActivityPubObject | Link)[];
  /**
   * When used within an Activity, describes the direct object of the activity. For instance, in the activity "John added a movie to his wishlist", the object of the activity is the movie added. When used within a Relationship describes the entity to which the subject is related.
   */
  object?: (ActivityPubObject | Link)[];
  /**
   * Describes the indirect object, or target, of the activity. The precise meaning of the target is largely dependent on the type of action being described but will often be the object of the English preposition "to". For instance, in the activity "John added a movie to his wishlist", the target of the activity is John's wishlist. An activity can have more than one target.
   */
  target?: (ActivityPubObject | Link)[];
  /**
   * Describes the result of the activity. For instance, if a particular action results in the creation of a new resource, the result property can be used to describe that new resource.
   */
  result?: (ActivityPubObject | Link)[];
  /**
   * Describes an indirect object of the activity from which the activity is directed. The precise meaning of the origin is the object of the English preposition "from". For instance, in the activity "John moved an item to List B from List A", the origin of the activity is "List A".
   */
  origin?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more objects used (or to be used) in the completion of an Activity.
   */
  instrument?: (ActivityPubObject | Link)[];
}

/**
 * Leave Type
 */
export interface Leave {
  "@id"?: string;
  "@context"?: ContextDefinition;
  /**
   * Describes an object of any kind. The Object type serves as the base type for most of the other kinds of objects defined in the Activity Vocabulary, including other Core types such as Activity, IntransitiveActivity, Collection and OrderedCollection. | An Activity is a subtype of Object that describes some form of action that may happen, is currently happening, or has already happened. The Activity type itself serves as an abstract base type for all types of activities. It is important to note that the Activity type itself does not carry any specific semantics about the kind of action being taken. | Indicates that the actor has left the object. The target and origin typically have no meaning.
   */
  type: (
    | {
        "@id": "Object";
      }
    | {
        "@id": "Activity";
      }
    | {
        "@id": "Leave";
      }
  )[];
  /**
   * Identifies a resource attached or related to an object that potentially requires special handling. The intent is to provide a model that is at least semantically similar to attachments in email.
   */
  attachment?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more entities to which this object is attributed. The attributed entities might not be Actors. For instance, an object might be attributed to the completion of another activity.
   */
  attributedTo?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more entities that represent the total population of entities for which the object can considered to be relevant.
   */
  audience?: (ActivityPubObject | Link)[];
  /**
   * The content or textual representation of the Object encoded as a JSON string. By default, the value of content is HTML. The mediaType property can be used in the object to indicate a different content type. The content MAY be expressed using multiple language-tagged values.
   */
  content?: (string | string)[];
  /**
   * Identifies the context within which the object exists or an activity was performed. The notion of "context" used is intentionally vague. The intended function is to serve as a means of grouping objects and activities that share a common originating context or purpose. An example could be all activities relating to a common project or event.
   */
  context?: (ActivityPubObject | Link)[];
  /**
   * A simple, human-readable, plain-text name for the object. HTML markup MUST NOT be included. The name MAY be expressed using multiple language-tagged values.
   */
  name?: (string | string)[];
  /**
   * The date and time describing the actual or expected ending time of the object. When used with an Activity object, for instance, the endTime property specifies the moment the activity concluded or is expected to conclude.
   */
  endTime?: string;
  /**
   * Identifies the entity (e.g. an application) that generated the object.
   */
  generator?: (ActivityPubObject | Link)[];
  /**
   * Indicates an entity that describes an icon for this object. The image should have an aspect ratio of one (horizontal) to one (vertical) and should be suitable for presentation at a small size.
   */
  icon?: (Image | Link)[];
  /**
   * Indicates an entity that describes an image for this object. Unlike the icon property, there are no aspect ratio or display size limitations assumed.
   */
  image?: (Image | Link)[];
  /**
   * Indicates one or more entities for which this object is considered a response.
   */
  inReplyTo?: (ActivityPubObject | Link)[];
  /**
   * Indicates one or more physical or logical locations associated with the object.
   */
  location?: (ActivityPubObject | Link)[];
  /**
   * Identifies an entity that provides a preview of this object.
   */
  preview?: (ActivityPubObject | Link)[];
  /**
   * The date and time at which the object was published
   */
  published?: string;
  /**
   * Identifies a Collection containing objects considered to be responses to this object.
   */
  replies?: Collection;
  /**
   * The date and time describing the actual or expected starting time of the object. When used with an Activity object, for instance, the startTime property specifies the moment the activity began or is scheduled to begin.
   */
  startTime?: string;
  /**
   * A natural language summarization of the object encoded as HTML. Multiple language tagged summaries MAY be provided.
   */
  summary?: (string | string)[];
  /**
   * One or more "tags" that have been associated with an objects. A tag can be any kind of Object. The key difference between attachment and tag is that the former implies association by inclusion, while the latter implies associated by reference.
   */
  tag?: (ActivityPubObject | Link)[];
  /**
   * The date and time at which the object was updated
   */
  updated?: string;
  /**
   * Identifies one or more links to representations of the object
   */
  url?: (string | Link)[];
  /**
   * Identifies an entity considered to be part of the public primary audience of an Object
   */
  to?: (ActivityPubObject | Link)[];
  /**
   * Identifies an Object that is part of the private primary audience of this Object.
   */
  bto?: (ActivityPubObject | Link)[];
  /**
   * Identifies an Object that is part of the public secondary audience of this Object.
   */
  cc?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more Objects that are part of the private secondary audience of this Object.
   */
  bcc?: (ActivityPubObject | Link)[];
  /**
   * When used on a Link, identifies the MIME media type of the referenced resource. When used on an Object, identifies the MIME media type of the value of the content property. If not specified, the content property is assumed to contain text/html content.
   */
  mediaType?: string;
  /**
   * When the object describes a time-bound resource, such as an audio or video, a meeting, etc, the duration property indicates the object's approximate duration. The value MUST be expressed as an xsd:duration as defined by [ xmlschema11-2], section 3.3.6 (e.g. a period of 5 seconds is represented as "PT5S").
   */
  duration?: string;
  /**
   * Describes one or more entities that either performed or are expected to perform the activity. Any single activity can have multiple actors. The actor MAY be specified using an indirect Link.
   */
  actor?: (ActivityPubObject | Link)[];
  /**
   * When used within an Activity, describes the direct object of the activity. For instance, in the activity "John added a movie to his wishlist", the object of the activity is the movie added. When used within a Relationship describes the entity to which the subject is related.
   */
  object?: (ActivityPubObject | Link)[];
  /**
   * Describes the indirect object, or target, of the activity. The precise meaning of the target is largely dependent on the type of action being described but will often be the object of the English preposition "to". For instance, in the activity "John added a movie to his wishlist", the target of the activity is John's wishlist. An activity can have more than one target.
   */
  target?: (ActivityPubObject | Link)[];
  /**
   * Describes the result of the activity. For instance, if a particular action results in the creation of a new resource, the result property can be used to describe that new resource.
   */
  result?: (ActivityPubObject | Link)[];
  /**
   * Describes an indirect object of the activity from which the activity is directed. The precise meaning of the origin is the object of the English preposition "from". For instance, in the activity "John moved an item to List B from List A", the origin of the activity is "List A".
   */
  origin?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more objects used (or to be used) in the completion of an Activity.
   */
  instrument?: (ActivityPubObject | Link)[];
}

/**
 * Like Type
 */
export interface Like {
  "@id"?: string;
  "@context"?: ContextDefinition;
  /**
   * Describes an object of any kind. The Object type serves as the base type for most of the other kinds of objects defined in the Activity Vocabulary, including other Core types such as Activity, IntransitiveActivity, Collection and OrderedCollection. | An Activity is a subtype of Object that describes some form of action that may happen, is currently happening, or has already happened. The Activity type itself serves as an abstract base type for all types of activities. It is important to note that the Activity type itself does not carry any specific semantics about the kind of action being taken. | Indicates that the actor likes, recommends or endorses the object. The target and origin typically have no defined meaning.
   */
  type: (
    | {
        "@id": "Object";
      }
    | {
        "@id": "Activity";
      }
    | {
        "@id": "Like";
      }
  )[];
  /**
   * Identifies a resource attached or related to an object that potentially requires special handling. The intent is to provide a model that is at least semantically similar to attachments in email.
   */
  attachment?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more entities to which this object is attributed. The attributed entities might not be Actors. For instance, an object might be attributed to the completion of another activity.
   */
  attributedTo?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more entities that represent the total population of entities for which the object can considered to be relevant.
   */
  audience?: (ActivityPubObject | Link)[];
  /**
   * The content or textual representation of the Object encoded as a JSON string. By default, the value of content is HTML. The mediaType property can be used in the object to indicate a different content type. The content MAY be expressed using multiple language-tagged values.
   */
  content?: (string | string)[];
  /**
   * Identifies the context within which the object exists or an activity was performed. The notion of "context" used is intentionally vague. The intended function is to serve as a means of grouping objects and activities that share a common originating context or purpose. An example could be all activities relating to a common project or event.
   */
  context?: (ActivityPubObject | Link)[];
  /**
   * A simple, human-readable, plain-text name for the object. HTML markup MUST NOT be included. The name MAY be expressed using multiple language-tagged values.
   */
  name?: (string | string)[];
  /**
   * The date and time describing the actual or expected ending time of the object. When used with an Activity object, for instance, the endTime property specifies the moment the activity concluded or is expected to conclude.
   */
  endTime?: string;
  /**
   * Identifies the entity (e.g. an application) that generated the object.
   */
  generator?: (ActivityPubObject | Link)[];
  /**
   * Indicates an entity that describes an icon for this object. The image should have an aspect ratio of one (horizontal) to one (vertical) and should be suitable for presentation at a small size.
   */
  icon?: (Image | Link)[];
  /**
   * Indicates an entity that describes an image for this object. Unlike the icon property, there are no aspect ratio or display size limitations assumed.
   */
  image?: (Image | Link)[];
  /**
   * Indicates one or more entities for which this object is considered a response.
   */
  inReplyTo?: (ActivityPubObject | Link)[];
  /**
   * Indicates one or more physical or logical locations associated with the object.
   */
  location?: (ActivityPubObject | Link)[];
  /**
   * Identifies an entity that provides a preview of this object.
   */
  preview?: (ActivityPubObject | Link)[];
  /**
   * The date and time at which the object was published
   */
  published?: string;
  /**
   * Identifies a Collection containing objects considered to be responses to this object.
   */
  replies?: Collection;
  /**
   * The date and time describing the actual or expected starting time of the object. When used with an Activity object, for instance, the startTime property specifies the moment the activity began or is scheduled to begin.
   */
  startTime?: string;
  /**
   * A natural language summarization of the object encoded as HTML. Multiple language tagged summaries MAY be provided.
   */
  summary?: (string | string)[];
  /**
   * One or more "tags" that have been associated with an objects. A tag can be any kind of Object. The key difference between attachment and tag is that the former implies association by inclusion, while the latter implies associated by reference.
   */
  tag?: (ActivityPubObject | Link)[];
  /**
   * The date and time at which the object was updated
   */
  updated?: string;
  /**
   * Identifies one or more links to representations of the object
   */
  url?: (string | Link)[];
  /**
   * Identifies an entity considered to be part of the public primary audience of an Object
   */
  to?: (ActivityPubObject | Link)[];
  /**
   * Identifies an Object that is part of the private primary audience of this Object.
   */
  bto?: (ActivityPubObject | Link)[];
  /**
   * Identifies an Object that is part of the public secondary audience of this Object.
   */
  cc?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more Objects that are part of the private secondary audience of this Object.
   */
  bcc?: (ActivityPubObject | Link)[];
  /**
   * When used on a Link, identifies the MIME media type of the referenced resource. When used on an Object, identifies the MIME media type of the value of the content property. If not specified, the content property is assumed to contain text/html content.
   */
  mediaType?: string;
  /**
   * When the object describes a time-bound resource, such as an audio or video, a meeting, etc, the duration property indicates the object's approximate duration. The value MUST be expressed as an xsd:duration as defined by [ xmlschema11-2], section 3.3.6 (e.g. a period of 5 seconds is represented as "PT5S").
   */
  duration?: string;
  /**
   * Describes one or more entities that either performed or are expected to perform the activity. Any single activity can have multiple actors. The actor MAY be specified using an indirect Link.
   */
  actor?: (ActivityPubObject | Link)[];
  /**
   * When used within an Activity, describes the direct object of the activity. For instance, in the activity "John added a movie to his wishlist", the object of the activity is the movie added. When used within a Relationship describes the entity to which the subject is related.
   */
  object?: (ActivityPubObject | Link)[];
  /**
   * Describes the indirect object, or target, of the activity. The precise meaning of the target is largely dependent on the type of action being described but will often be the object of the English preposition "to". For instance, in the activity "John added a movie to his wishlist", the target of the activity is John's wishlist. An activity can have more than one target.
   */
  target?: (ActivityPubObject | Link)[];
  /**
   * Describes the result of the activity. For instance, if a particular action results in the creation of a new resource, the result property can be used to describe that new resource.
   */
  result?: (ActivityPubObject | Link)[];
  /**
   * Describes an indirect object of the activity from which the activity is directed. The precise meaning of the origin is the object of the English preposition "from". For instance, in the activity "John moved an item to List B from List A", the origin of the activity is "List A".
   */
  origin?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more objects used (or to be used) in the completion of an Activity.
   */
  instrument?: (ActivityPubObject | Link)[];
}

/**
 * Offer Type
 */
export interface Offer {
  "@id"?: string;
  "@context"?: ContextDefinition;
  /**
   * Describes an object of any kind. The Object type serves as the base type for most of the other kinds of objects defined in the Activity Vocabulary, including other Core types such as Activity, IntransitiveActivity, Collection and OrderedCollection. | An Activity is a subtype of Object that describes some form of action that may happen, is currently happening, or has already happened. The Activity type itself serves as an abstract base type for all types of activities. It is important to note that the Activity type itself does not carry any specific semantics about the kind of action being taken. | Indicates that the actor is offering the object. If specified, the target indicates the entity to which the object is being offered.
   */
  type: (
    | {
        "@id": "Object";
      }
    | {
        "@id": "Activity";
      }
    | {
        "@id": "Offer";
      }
  )[];
  /**
   * Identifies a resource attached or related to an object that potentially requires special handling. The intent is to provide a model that is at least semantically similar to attachments in email.
   */
  attachment?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more entities to which this object is attributed. The attributed entities might not be Actors. For instance, an object might be attributed to the completion of another activity.
   */
  attributedTo?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more entities that represent the total population of entities for which the object can considered to be relevant.
   */
  audience?: (ActivityPubObject | Link)[];
  /**
   * The content or textual representation of the Object encoded as a JSON string. By default, the value of content is HTML. The mediaType property can be used in the object to indicate a different content type. The content MAY be expressed using multiple language-tagged values.
   */
  content?: (string | string)[];
  /**
   * Identifies the context within which the object exists or an activity was performed. The notion of "context" used is intentionally vague. The intended function is to serve as a means of grouping objects and activities that share a common originating context or purpose. An example could be all activities relating to a common project or event.
   */
  context?: (ActivityPubObject | Link)[];
  /**
   * A simple, human-readable, plain-text name for the object. HTML markup MUST NOT be included. The name MAY be expressed using multiple language-tagged values.
   */
  name?: (string | string)[];
  /**
   * The date and time describing the actual or expected ending time of the object. When used with an Activity object, for instance, the endTime property specifies the moment the activity concluded or is expected to conclude.
   */
  endTime?: string;
  /**
   * Identifies the entity (e.g. an application) that generated the object.
   */
  generator?: (ActivityPubObject | Link)[];
  /**
   * Indicates an entity that describes an icon for this object. The image should have an aspect ratio of one (horizontal) to one (vertical) and should be suitable for presentation at a small size.
   */
  icon?: (Image | Link)[];
  /**
   * Indicates an entity that describes an image for this object. Unlike the icon property, there are no aspect ratio or display size limitations assumed.
   */
  image?: (Image | Link)[];
  /**
   * Indicates one or more entities for which this object is considered a response.
   */
  inReplyTo?: (ActivityPubObject | Link)[];
  /**
   * Indicates one or more physical or logical locations associated with the object.
   */
  location?: (ActivityPubObject | Link)[];
  /**
   * Identifies an entity that provides a preview of this object.
   */
  preview?: (ActivityPubObject | Link)[];
  /**
   * The date and time at which the object was published
   */
  published?: string;
  /**
   * Identifies a Collection containing objects considered to be responses to this object.
   */
  replies?: Collection;
  /**
   * The date and time describing the actual or expected starting time of the object. When used with an Activity object, for instance, the startTime property specifies the moment the activity began or is scheduled to begin.
   */
  startTime?: string;
  /**
   * A natural language summarization of the object encoded as HTML. Multiple language tagged summaries MAY be provided.
   */
  summary?: (string | string)[];
  /**
   * One or more "tags" that have been associated with an objects. A tag can be any kind of Object. The key difference between attachment and tag is that the former implies association by inclusion, while the latter implies associated by reference.
   */
  tag?: (ActivityPubObject | Link)[];
  /**
   * The date and time at which the object was updated
   */
  updated?: string;
  /**
   * Identifies one or more links to representations of the object
   */
  url?: (string | Link)[];
  /**
   * Identifies an entity considered to be part of the public primary audience of an Object
   */
  to?: (ActivityPubObject | Link)[];
  /**
   * Identifies an Object that is part of the private primary audience of this Object.
   */
  bto?: (ActivityPubObject | Link)[];
  /**
   * Identifies an Object that is part of the public secondary audience of this Object.
   */
  cc?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more Objects that are part of the private secondary audience of this Object.
   */
  bcc?: (ActivityPubObject | Link)[];
  /**
   * When used on a Link, identifies the MIME media type of the referenced resource. When used on an Object, identifies the MIME media type of the value of the content property. If not specified, the content property is assumed to contain text/html content.
   */
  mediaType?: string;
  /**
   * When the object describes a time-bound resource, such as an audio or video, a meeting, etc, the duration property indicates the object's approximate duration. The value MUST be expressed as an xsd:duration as defined by [ xmlschema11-2], section 3.3.6 (e.g. a period of 5 seconds is represented as "PT5S").
   */
  duration?: string;
  /**
   * Describes one or more entities that either performed or are expected to perform the activity. Any single activity can have multiple actors. The actor MAY be specified using an indirect Link.
   */
  actor?: (ActivityPubObject | Link)[];
  /**
   * When used within an Activity, describes the direct object of the activity. For instance, in the activity "John added a movie to his wishlist", the object of the activity is the movie added. When used within a Relationship describes the entity to which the subject is related.
   */
  object?: (ActivityPubObject | Link)[];
  /**
   * Describes the indirect object, or target, of the activity. The precise meaning of the target is largely dependent on the type of action being described but will often be the object of the English preposition "to". For instance, in the activity "John added a movie to his wishlist", the target of the activity is John's wishlist. An activity can have more than one target.
   */
  target?: (ActivityPubObject | Link)[];
  /**
   * Describes the result of the activity. For instance, if a particular action results in the creation of a new resource, the result property can be used to describe that new resource.
   */
  result?: (ActivityPubObject | Link)[];
  /**
   * Describes an indirect object of the activity from which the activity is directed. The precise meaning of the origin is the object of the English preposition "from". For instance, in the activity "John moved an item to List B from List A", the origin of the activity is "List A".
   */
  origin?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more objects used (or to be used) in the completion of an Activity.
   */
  instrument?: (ActivityPubObject | Link)[];
}

/**
 * Invite Type
 */
export interface Invite {
  "@id"?: string;
  "@context"?: ContextDefinition;
  /**
   * Describes an object of any kind. The Object type serves as the base type for most of the other kinds of objects defined in the Activity Vocabulary, including other Core types such as Activity, IntransitiveActivity, Collection and OrderedCollection. | An Activity is a subtype of Object that describes some form of action that may happen, is currently happening, or has already happened. The Activity type itself serves as an abstract base type for all types of activities. It is important to note that the Activity type itself does not carry any specific semantics about the kind of action being taken. | Indicates that the actor is offering the object. If specified, the target indicates the entity to which the object is being offered. | A specialization of Offer in which the actor is extending an invitation for the object to the target.
   */
  type: (
    | {
        "@id": "Object";
      }
    | {
        "@id": "Activity";
      }
    | {
        "@id": "Offer";
      }
    | {
        "@id": "Invite";
      }
  )[];
  /**
   * Identifies a resource attached or related to an object that potentially requires special handling. The intent is to provide a model that is at least semantically similar to attachments in email.
   */
  attachment?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more entities to which this object is attributed. The attributed entities might not be Actors. For instance, an object might be attributed to the completion of another activity.
   */
  attributedTo?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more entities that represent the total population of entities for which the object can considered to be relevant.
   */
  audience?: (ActivityPubObject | Link)[];
  /**
   * The content or textual representation of the Object encoded as a JSON string. By default, the value of content is HTML. The mediaType property can be used in the object to indicate a different content type. The content MAY be expressed using multiple language-tagged values.
   */
  content?: (string | string)[];
  /**
   * Identifies the context within which the object exists or an activity was performed. The notion of "context" used is intentionally vague. The intended function is to serve as a means of grouping objects and activities that share a common originating context or purpose. An example could be all activities relating to a common project or event.
   */
  context?: (ActivityPubObject | Link)[];
  /**
   * A simple, human-readable, plain-text name for the object. HTML markup MUST NOT be included. The name MAY be expressed using multiple language-tagged values.
   */
  name?: (string | string)[];
  /**
   * The date and time describing the actual or expected ending time of the object. When used with an Activity object, for instance, the endTime property specifies the moment the activity concluded or is expected to conclude.
   */
  endTime?: string;
  /**
   * Identifies the entity (e.g. an application) that generated the object.
   */
  generator?: (ActivityPubObject | Link)[];
  /**
   * Indicates an entity that describes an icon for this object. The image should have an aspect ratio of one (horizontal) to one (vertical) and should be suitable for presentation at a small size.
   */
  icon?: (Image | Link)[];
  /**
   * Indicates an entity that describes an image for this object. Unlike the icon property, there are no aspect ratio or display size limitations assumed.
   */
  image?: (Image | Link)[];
  /**
   * Indicates one or more entities for which this object is considered a response.
   */
  inReplyTo?: (ActivityPubObject | Link)[];
  /**
   * Indicates one or more physical or logical locations associated with the object.
   */
  location?: (ActivityPubObject | Link)[];
  /**
   * Identifies an entity that provides a preview of this object.
   */
  preview?: (ActivityPubObject | Link)[];
  /**
   * The date and time at which the object was published
   */
  published?: string;
  /**
   * Identifies a Collection containing objects considered to be responses to this object.
   */
  replies?: Collection;
  /**
   * The date and time describing the actual or expected starting time of the object. When used with an Activity object, for instance, the startTime property specifies the moment the activity began or is scheduled to begin.
   */
  startTime?: string;
  /**
   * A natural language summarization of the object encoded as HTML. Multiple language tagged summaries MAY be provided.
   */
  summary?: (string | string)[];
  /**
   * One or more "tags" that have been associated with an objects. A tag can be any kind of Object. The key difference between attachment and tag is that the former implies association by inclusion, while the latter implies associated by reference.
   */
  tag?: (ActivityPubObject | Link)[];
  /**
   * The date and time at which the object was updated
   */
  updated?: string;
  /**
   * Identifies one or more links to representations of the object
   */
  url?: (string | Link)[];
  /**
   * Identifies an entity considered to be part of the public primary audience of an Object
   */
  to?: (ActivityPubObject | Link)[];
  /**
   * Identifies an Object that is part of the private primary audience of this Object.
   */
  bto?: (ActivityPubObject | Link)[];
  /**
   * Identifies an Object that is part of the public secondary audience of this Object.
   */
  cc?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more Objects that are part of the private secondary audience of this Object.
   */
  bcc?: (ActivityPubObject | Link)[];
  /**
   * When used on a Link, identifies the MIME media type of the referenced resource. When used on an Object, identifies the MIME media type of the value of the content property. If not specified, the content property is assumed to contain text/html content.
   */
  mediaType?: string;
  /**
   * When the object describes a time-bound resource, such as an audio or video, a meeting, etc, the duration property indicates the object's approximate duration. The value MUST be expressed as an xsd:duration as defined by [ xmlschema11-2], section 3.3.6 (e.g. a period of 5 seconds is represented as "PT5S").
   */
  duration?: string;
  /**
   * Describes one or more entities that either performed or are expected to perform the activity. Any single activity can have multiple actors. The actor MAY be specified using an indirect Link.
   */
  actor?: (ActivityPubObject | Link)[];
  /**
   * When used within an Activity, describes the direct object of the activity. For instance, in the activity "John added a movie to his wishlist", the object of the activity is the movie added. When used within a Relationship describes the entity to which the subject is related.
   */
  object?: (ActivityPubObject | Link)[];
  /**
   * Describes the indirect object, or target, of the activity. The precise meaning of the target is largely dependent on the type of action being described but will often be the object of the English preposition "to". For instance, in the activity "John added a movie to his wishlist", the target of the activity is John's wishlist. An activity can have more than one target.
   */
  target?: (ActivityPubObject | Link)[];
  /**
   * Describes the result of the activity. For instance, if a particular action results in the creation of a new resource, the result property can be used to describe that new resource.
   */
  result?: (ActivityPubObject | Link)[];
  /**
   * Describes an indirect object of the activity from which the activity is directed. The precise meaning of the origin is the object of the English preposition "from". For instance, in the activity "John moved an item to List B from List A", the origin of the activity is "List A".
   */
  origin?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more objects used (or to be used) in the completion of an Activity.
   */
  instrument?: (ActivityPubObject | Link)[];
}

/**
 * Reject Type
 */
export interface Reject {
  "@id"?: string;
  "@context"?: ContextDefinition;
  /**
   * Describes an object of any kind. The Object type serves as the base type for most of the other kinds of objects defined in the Activity Vocabulary, including other Core types such as Activity, IntransitiveActivity, Collection and OrderedCollection. | An Activity is a subtype of Object that describes some form of action that may happen, is currently happening, or has already happened. The Activity type itself serves as an abstract base type for all types of activities. It is important to note that the Activity type itself does not carry any specific semantics about the kind of action being taken. | Indicates that the actor is rejecting the object. The target and origin typically have no defined meaning.
   */
  type: (
    | {
        "@id": "Object";
      }
    | {
        "@id": "Activity";
      }
    | {
        "@id": "Reject";
      }
  )[];
  /**
   * Identifies a resource attached or related to an object that potentially requires special handling. The intent is to provide a model that is at least semantically similar to attachments in email.
   */
  attachment?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more entities to which this object is attributed. The attributed entities might not be Actors. For instance, an object might be attributed to the completion of another activity.
   */
  attributedTo?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more entities that represent the total population of entities for which the object can considered to be relevant.
   */
  audience?: (ActivityPubObject | Link)[];
  /**
   * The content or textual representation of the Object encoded as a JSON string. By default, the value of content is HTML. The mediaType property can be used in the object to indicate a different content type. The content MAY be expressed using multiple language-tagged values.
   */
  content?: (string | string)[];
  /**
   * Identifies the context within which the object exists or an activity was performed. The notion of "context" used is intentionally vague. The intended function is to serve as a means of grouping objects and activities that share a common originating context or purpose. An example could be all activities relating to a common project or event.
   */
  context?: (ActivityPubObject | Link)[];
  /**
   * A simple, human-readable, plain-text name for the object. HTML markup MUST NOT be included. The name MAY be expressed using multiple language-tagged values.
   */
  name?: (string | string)[];
  /**
   * The date and time describing the actual or expected ending time of the object. When used with an Activity object, for instance, the endTime property specifies the moment the activity concluded or is expected to conclude.
   */
  endTime?: string;
  /**
   * Identifies the entity (e.g. an application) that generated the object.
   */
  generator?: (ActivityPubObject | Link)[];
  /**
   * Indicates an entity that describes an icon for this object. The image should have an aspect ratio of one (horizontal) to one (vertical) and should be suitable for presentation at a small size.
   */
  icon?: (Image | Link)[];
  /**
   * Indicates an entity that describes an image for this object. Unlike the icon property, there are no aspect ratio or display size limitations assumed.
   */
  image?: (Image | Link)[];
  /**
   * Indicates one or more entities for which this object is considered a response.
   */
  inReplyTo?: (ActivityPubObject | Link)[];
  /**
   * Indicates one or more physical or logical locations associated with the object.
   */
  location?: (ActivityPubObject | Link)[];
  /**
   * Identifies an entity that provides a preview of this object.
   */
  preview?: (ActivityPubObject | Link)[];
  /**
   * The date and time at which the object was published
   */
  published?: string;
  /**
   * Identifies a Collection containing objects considered to be responses to this object.
   */
  replies?: Collection;
  /**
   * The date and time describing the actual or expected starting time of the object. When used with an Activity object, for instance, the startTime property specifies the moment the activity began or is scheduled to begin.
   */
  startTime?: string;
  /**
   * A natural language summarization of the object encoded as HTML. Multiple language tagged summaries MAY be provided.
   */
  summary?: (string | string)[];
  /**
   * One or more "tags" that have been associated with an objects. A tag can be any kind of Object. The key difference between attachment and tag is that the former implies association by inclusion, while the latter implies associated by reference.
   */
  tag?: (ActivityPubObject | Link)[];
  /**
   * The date and time at which the object was updated
   */
  updated?: string;
  /**
   * Identifies one or more links to representations of the object
   */
  url?: (string | Link)[];
  /**
   * Identifies an entity considered to be part of the public primary audience of an Object
   */
  to?: (ActivityPubObject | Link)[];
  /**
   * Identifies an Object that is part of the private primary audience of this Object.
   */
  bto?: (ActivityPubObject | Link)[];
  /**
   * Identifies an Object that is part of the public secondary audience of this Object.
   */
  cc?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more Objects that are part of the private secondary audience of this Object.
   */
  bcc?: (ActivityPubObject | Link)[];
  /**
   * When used on a Link, identifies the MIME media type of the referenced resource. When used on an Object, identifies the MIME media type of the value of the content property. If not specified, the content property is assumed to contain text/html content.
   */
  mediaType?: string;
  /**
   * When the object describes a time-bound resource, such as an audio or video, a meeting, etc, the duration property indicates the object's approximate duration. The value MUST be expressed as an xsd:duration as defined by [ xmlschema11-2], section 3.3.6 (e.g. a period of 5 seconds is represented as "PT5S").
   */
  duration?: string;
  /**
   * Describes one or more entities that either performed or are expected to perform the activity. Any single activity can have multiple actors. The actor MAY be specified using an indirect Link.
   */
  actor?: (ActivityPubObject | Link)[];
  /**
   * When used within an Activity, describes the direct object of the activity. For instance, in the activity "John added a movie to his wishlist", the object of the activity is the movie added. When used within a Relationship describes the entity to which the subject is related.
   */
  object?: (ActivityPubObject | Link)[];
  /**
   * Describes the indirect object, or target, of the activity. The precise meaning of the target is largely dependent on the type of action being described but will often be the object of the English preposition "to". For instance, in the activity "John added a movie to his wishlist", the target of the activity is John's wishlist. An activity can have more than one target.
   */
  target?: (ActivityPubObject | Link)[];
  /**
   * Describes the result of the activity. For instance, if a particular action results in the creation of a new resource, the result property can be used to describe that new resource.
   */
  result?: (ActivityPubObject | Link)[];
  /**
   * Describes an indirect object of the activity from which the activity is directed. The precise meaning of the origin is the object of the English preposition "from". For instance, in the activity "John moved an item to List B from List A", the origin of the activity is "List A".
   */
  origin?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more objects used (or to be used) in the completion of an Activity.
   */
  instrument?: (ActivityPubObject | Link)[];
}

/**
 * TentativeReject Type
 */
export interface TentativeReject {
  "@id"?: string;
  "@context"?: ContextDefinition;
  /**
   * Describes an object of any kind. The Object type serves as the base type for most of the other kinds of objects defined in the Activity Vocabulary, including other Core types such as Activity, IntransitiveActivity, Collection and OrderedCollection. | An Activity is a subtype of Object that describes some form of action that may happen, is currently happening, or has already happened. The Activity type itself serves as an abstract base type for all types of activities. It is important to note that the Activity type itself does not carry any specific semantics about the kind of action being taken. | Indicates that the actor is rejecting the object. The target and origin typically have no defined meaning. | A specialization of Reject in which the rejection is considered tentative.
   */
  type: (
    | {
        "@id": "Object";
      }
    | {
        "@id": "Activity";
      }
    | {
        "@id": "Reject";
      }
    | {
        "@id": "TentativeReject";
      }
  )[];
  /**
   * Identifies a resource attached or related to an object that potentially requires special handling. The intent is to provide a model that is at least semantically similar to attachments in email.
   */
  attachment?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more entities to which this object is attributed. The attributed entities might not be Actors. For instance, an object might be attributed to the completion of another activity.
   */
  attributedTo?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more entities that represent the total population of entities for which the object can considered to be relevant.
   */
  audience?: (ActivityPubObject | Link)[];
  /**
   * The content or textual representation of the Object encoded as a JSON string. By default, the value of content is HTML. The mediaType property can be used in the object to indicate a different content type. The content MAY be expressed using multiple language-tagged values.
   */
  content?: (string | string)[];
  /**
   * Identifies the context within which the object exists or an activity was performed. The notion of "context" used is intentionally vague. The intended function is to serve as a means of grouping objects and activities that share a common originating context or purpose. An example could be all activities relating to a common project or event.
   */
  context?: (ActivityPubObject | Link)[];
  /**
   * A simple, human-readable, plain-text name for the object. HTML markup MUST NOT be included. The name MAY be expressed using multiple language-tagged values.
   */
  name?: (string | string)[];
  /**
   * The date and time describing the actual or expected ending time of the object. When used with an Activity object, for instance, the endTime property specifies the moment the activity concluded or is expected to conclude.
   */
  endTime?: string;
  /**
   * Identifies the entity (e.g. an application) that generated the object.
   */
  generator?: (ActivityPubObject | Link)[];
  /**
   * Indicates an entity that describes an icon for this object. The image should have an aspect ratio of one (horizontal) to one (vertical) and should be suitable for presentation at a small size.
   */
  icon?: (Image | Link)[];
  /**
   * Indicates an entity that describes an image for this object. Unlike the icon property, there are no aspect ratio or display size limitations assumed.
   */
  image?: (Image | Link)[];
  /**
   * Indicates one or more entities for which this object is considered a response.
   */
  inReplyTo?: (ActivityPubObject | Link)[];
  /**
   * Indicates one or more physical or logical locations associated with the object.
   */
  location?: (ActivityPubObject | Link)[];
  /**
   * Identifies an entity that provides a preview of this object.
   */
  preview?: (ActivityPubObject | Link)[];
  /**
   * The date and time at which the object was published
   */
  published?: string;
  /**
   * Identifies a Collection containing objects considered to be responses to this object.
   */
  replies?: Collection;
  /**
   * The date and time describing the actual or expected starting time of the object. When used with an Activity object, for instance, the startTime property specifies the moment the activity began or is scheduled to begin.
   */
  startTime?: string;
  /**
   * A natural language summarization of the object encoded as HTML. Multiple language tagged summaries MAY be provided.
   */
  summary?: (string | string)[];
  /**
   * One or more "tags" that have been associated with an objects. A tag can be any kind of Object. The key difference between attachment and tag is that the former implies association by inclusion, while the latter implies associated by reference.
   */
  tag?: (ActivityPubObject | Link)[];
  /**
   * The date and time at which the object was updated
   */
  updated?: string;
  /**
   * Identifies one or more links to representations of the object
   */
  url?: (string | Link)[];
  /**
   * Identifies an entity considered to be part of the public primary audience of an Object
   */
  to?: (ActivityPubObject | Link)[];
  /**
   * Identifies an Object that is part of the private primary audience of this Object.
   */
  bto?: (ActivityPubObject | Link)[];
  /**
   * Identifies an Object that is part of the public secondary audience of this Object.
   */
  cc?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more Objects that are part of the private secondary audience of this Object.
   */
  bcc?: (ActivityPubObject | Link)[];
  /**
   * When used on a Link, identifies the MIME media type of the referenced resource. When used on an Object, identifies the MIME media type of the value of the content property. If not specified, the content property is assumed to contain text/html content.
   */
  mediaType?: string;
  /**
   * When the object describes a time-bound resource, such as an audio or video, a meeting, etc, the duration property indicates the object's approximate duration. The value MUST be expressed as an xsd:duration as defined by [ xmlschema11-2], section 3.3.6 (e.g. a period of 5 seconds is represented as "PT5S").
   */
  duration?: string;
  /**
   * Describes one or more entities that either performed or are expected to perform the activity. Any single activity can have multiple actors. The actor MAY be specified using an indirect Link.
   */
  actor?: (ActivityPubObject | Link)[];
  /**
   * When used within an Activity, describes the direct object of the activity. For instance, in the activity "John added a movie to his wishlist", the object of the activity is the movie added. When used within a Relationship describes the entity to which the subject is related.
   */
  object?: (ActivityPubObject | Link)[];
  /**
   * Describes the indirect object, or target, of the activity. The precise meaning of the target is largely dependent on the type of action being described but will often be the object of the English preposition "to". For instance, in the activity "John added a movie to his wishlist", the target of the activity is John's wishlist. An activity can have more than one target.
   */
  target?: (ActivityPubObject | Link)[];
  /**
   * Describes the result of the activity. For instance, if a particular action results in the creation of a new resource, the result property can be used to describe that new resource.
   */
  result?: (ActivityPubObject | Link)[];
  /**
   * Describes an indirect object of the activity from which the activity is directed. The precise meaning of the origin is the object of the English preposition "from". For instance, in the activity "John moved an item to List B from List A", the origin of the activity is "List A".
   */
  origin?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more objects used (or to be used) in the completion of an Activity.
   */
  instrument?: (ActivityPubObject | Link)[];
}

/**
 * Remove Type
 */
export interface Remove {
  "@id"?: string;
  "@context"?: ContextDefinition;
  /**
   * Describes an object of any kind. The Object type serves as the base type for most of the other kinds of objects defined in the Activity Vocabulary, including other Core types such as Activity, IntransitiveActivity, Collection and OrderedCollection. | An Activity is a subtype of Object that describes some form of action that may happen, is currently happening, or has already happened. The Activity type itself serves as an abstract base type for all types of activities. It is important to note that the Activity type itself does not carry any specific semantics about the kind of action being taken. | Indicates that the actor is removing the object. If specified, the origin indicates the context from which the object is being removed.
   */
  type: (
    | {
        "@id": "Object";
      }
    | {
        "@id": "Activity";
      }
    | {
        "@id": "Remove";
      }
  )[];
  /**
   * Identifies a resource attached or related to an object that potentially requires special handling. The intent is to provide a model that is at least semantically similar to attachments in email.
   */
  attachment?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more entities to which this object is attributed. The attributed entities might not be Actors. For instance, an object might be attributed to the completion of another activity.
   */
  attributedTo?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more entities that represent the total population of entities for which the object can considered to be relevant.
   */
  audience?: (ActivityPubObject | Link)[];
  /**
   * The content or textual representation of the Object encoded as a JSON string. By default, the value of content is HTML. The mediaType property can be used in the object to indicate a different content type. The content MAY be expressed using multiple language-tagged values.
   */
  content?: (string | string)[];
  /**
   * Identifies the context within which the object exists or an activity was performed. The notion of "context" used is intentionally vague. The intended function is to serve as a means of grouping objects and activities that share a common originating context or purpose. An example could be all activities relating to a common project or event.
   */
  context?: (ActivityPubObject | Link)[];
  /**
   * A simple, human-readable, plain-text name for the object. HTML markup MUST NOT be included. The name MAY be expressed using multiple language-tagged values.
   */
  name?: (string | string)[];
  /**
   * The date and time describing the actual or expected ending time of the object. When used with an Activity object, for instance, the endTime property specifies the moment the activity concluded or is expected to conclude.
   */
  endTime?: string;
  /**
   * Identifies the entity (e.g. an application) that generated the object.
   */
  generator?: (ActivityPubObject | Link)[];
  /**
   * Indicates an entity that describes an icon for this object. The image should have an aspect ratio of one (horizontal) to one (vertical) and should be suitable for presentation at a small size.
   */
  icon?: (Image | Link)[];
  /**
   * Indicates an entity that describes an image for this object. Unlike the icon property, there are no aspect ratio or display size limitations assumed.
   */
  image?: (Image | Link)[];
  /**
   * Indicates one or more entities for which this object is considered a response.
   */
  inReplyTo?: (ActivityPubObject | Link)[];
  /**
   * Indicates one or more physical or logical locations associated with the object.
   */
  location?: (ActivityPubObject | Link)[];
  /**
   * Identifies an entity that provides a preview of this object.
   */
  preview?: (ActivityPubObject | Link)[];
  /**
   * The date and time at which the object was published
   */
  published?: string;
  /**
   * Identifies a Collection containing objects considered to be responses to this object.
   */
  replies?: Collection;
  /**
   * The date and time describing the actual or expected starting time of the object. When used with an Activity object, for instance, the startTime property specifies the moment the activity began or is scheduled to begin.
   */
  startTime?: string;
  /**
   * A natural language summarization of the object encoded as HTML. Multiple language tagged summaries MAY be provided.
   */
  summary?: (string | string)[];
  /**
   * One or more "tags" that have been associated with an objects. A tag can be any kind of Object. The key difference between attachment and tag is that the former implies association by inclusion, while the latter implies associated by reference.
   */
  tag?: (ActivityPubObject | Link)[];
  /**
   * The date and time at which the object was updated
   */
  updated?: string;
  /**
   * Identifies one or more links to representations of the object
   */
  url?: (string | Link)[];
  /**
   * Identifies an entity considered to be part of the public primary audience of an Object
   */
  to?: (ActivityPubObject | Link)[];
  /**
   * Identifies an Object that is part of the private primary audience of this Object.
   */
  bto?: (ActivityPubObject | Link)[];
  /**
   * Identifies an Object that is part of the public secondary audience of this Object.
   */
  cc?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more Objects that are part of the private secondary audience of this Object.
   */
  bcc?: (ActivityPubObject | Link)[];
  /**
   * When used on a Link, identifies the MIME media type of the referenced resource. When used on an Object, identifies the MIME media type of the value of the content property. If not specified, the content property is assumed to contain text/html content.
   */
  mediaType?: string;
  /**
   * When the object describes a time-bound resource, such as an audio or video, a meeting, etc, the duration property indicates the object's approximate duration. The value MUST be expressed as an xsd:duration as defined by [ xmlschema11-2], section 3.3.6 (e.g. a period of 5 seconds is represented as "PT5S").
   */
  duration?: string;
  /**
   * Describes one or more entities that either performed or are expected to perform the activity. Any single activity can have multiple actors. The actor MAY be specified using an indirect Link.
   */
  actor?: (ActivityPubObject | Link)[];
  /**
   * When used within an Activity, describes the direct object of the activity. For instance, in the activity "John added a movie to his wishlist", the object of the activity is the movie added. When used within a Relationship describes the entity to which the subject is related.
   */
  object?: (ActivityPubObject | Link)[];
  /**
   * Describes the indirect object, or target, of the activity. The precise meaning of the target is largely dependent on the type of action being described but will often be the object of the English preposition "to". For instance, in the activity "John added a movie to his wishlist", the target of the activity is John's wishlist. An activity can have more than one target.
   */
  target?: (ActivityPubObject | Link)[];
  /**
   * Describes the result of the activity. For instance, if a particular action results in the creation of a new resource, the result property can be used to describe that new resource.
   */
  result?: (ActivityPubObject | Link)[];
  /**
   * Describes an indirect object of the activity from which the activity is directed. The precise meaning of the origin is the object of the English preposition "from". For instance, in the activity "John moved an item to List B from List A", the origin of the activity is "List A".
   */
  origin?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more objects used (or to be used) in the completion of an Activity.
   */
  instrument?: (ActivityPubObject | Link)[];
}

/**
 * Undo Type
 */
export interface Undo {
  "@id"?: string;
  "@context"?: ContextDefinition;
  /**
   * Describes an object of any kind. The Object type serves as the base type for most of the other kinds of objects defined in the Activity Vocabulary, including other Core types such as Activity, IntransitiveActivity, Collection and OrderedCollection. | An Activity is a subtype of Object that describes some form of action that may happen, is currently happening, or has already happened. The Activity type itself serves as an abstract base type for all types of activities. It is important to note that the Activity type itself does not carry any specific semantics about the kind of action being taken. |  Indicates that the actor is undoing the object. In most cases, the object will be an Activity describing some previously performed action (for instance, a person may have previously "liked" an article but, for whatever reason, might choose to undo that like at some later point in time). The target and origin typically have no defined meaning.
   */
  type: (
    | {
        "@id": "Object";
      }
    | {
        "@id": "Activity";
      }
    | {
        "@id": "Undo";
      }
  )[];
  /**
   * Identifies a resource attached or related to an object that potentially requires special handling. The intent is to provide a model that is at least semantically similar to attachments in email.
   */
  attachment?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more entities to which this object is attributed. The attributed entities might not be Actors. For instance, an object might be attributed to the completion of another activity.
   */
  attributedTo?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more entities that represent the total population of entities for which the object can considered to be relevant.
   */
  audience?: (ActivityPubObject | Link)[];
  /**
   * The content or textual representation of the Object encoded as a JSON string. By default, the value of content is HTML. The mediaType property can be used in the object to indicate a different content type. The content MAY be expressed using multiple language-tagged values.
   */
  content?: (string | string)[];
  /**
   * Identifies the context within which the object exists or an activity was performed. The notion of "context" used is intentionally vague. The intended function is to serve as a means of grouping objects and activities that share a common originating context or purpose. An example could be all activities relating to a common project or event.
   */
  context?: (ActivityPubObject | Link)[];
  /**
   * A simple, human-readable, plain-text name for the object. HTML markup MUST NOT be included. The name MAY be expressed using multiple language-tagged values.
   */
  name?: (string | string)[];
  /**
   * The date and time describing the actual or expected ending time of the object. When used with an Activity object, for instance, the endTime property specifies the moment the activity concluded or is expected to conclude.
   */
  endTime?: string;
  /**
   * Identifies the entity (e.g. an application) that generated the object.
   */
  generator?: (ActivityPubObject | Link)[];
  /**
   * Indicates an entity that describes an icon for this object. The image should have an aspect ratio of one (horizontal) to one (vertical) and should be suitable for presentation at a small size.
   */
  icon?: (Image | Link)[];
  /**
   * Indicates an entity that describes an image for this object. Unlike the icon property, there are no aspect ratio or display size limitations assumed.
   */
  image?: (Image | Link)[];
  /**
   * Indicates one or more entities for which this object is considered a response.
   */
  inReplyTo?: (ActivityPubObject | Link)[];
  /**
   * Indicates one or more physical or logical locations associated with the object.
   */
  location?: (ActivityPubObject | Link)[];
  /**
   * Identifies an entity that provides a preview of this object.
   */
  preview?: (ActivityPubObject | Link)[];
  /**
   * The date and time at which the object was published
   */
  published?: string;
  /**
   * Identifies a Collection containing objects considered to be responses to this object.
   */
  replies?: Collection;
  /**
   * The date and time describing the actual or expected starting time of the object. When used with an Activity object, for instance, the startTime property specifies the moment the activity began or is scheduled to begin.
   */
  startTime?: string;
  /**
   * A natural language summarization of the object encoded as HTML. Multiple language tagged summaries MAY be provided.
   */
  summary?: (string | string)[];
  /**
   * One or more "tags" that have been associated with an objects. A tag can be any kind of Object. The key difference between attachment and tag is that the former implies association by inclusion, while the latter implies associated by reference.
   */
  tag?: (ActivityPubObject | Link)[];
  /**
   * The date and time at which the object was updated
   */
  updated?: string;
  /**
   * Identifies one or more links to representations of the object
   */
  url?: (string | Link)[];
  /**
   * Identifies an entity considered to be part of the public primary audience of an Object
   */
  to?: (ActivityPubObject | Link)[];
  /**
   * Identifies an Object that is part of the private primary audience of this Object.
   */
  bto?: (ActivityPubObject | Link)[];
  /**
   * Identifies an Object that is part of the public secondary audience of this Object.
   */
  cc?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more Objects that are part of the private secondary audience of this Object.
   */
  bcc?: (ActivityPubObject | Link)[];
  /**
   * When used on a Link, identifies the MIME media type of the referenced resource. When used on an Object, identifies the MIME media type of the value of the content property. If not specified, the content property is assumed to contain text/html content.
   */
  mediaType?: string;
  /**
   * When the object describes a time-bound resource, such as an audio or video, a meeting, etc, the duration property indicates the object's approximate duration. The value MUST be expressed as an xsd:duration as defined by [ xmlschema11-2], section 3.3.6 (e.g. a period of 5 seconds is represented as "PT5S").
   */
  duration?: string;
  /**
   * Describes one or more entities that either performed or are expected to perform the activity. Any single activity can have multiple actors. The actor MAY be specified using an indirect Link.
   */
  actor?: (ActivityPubObject | Link)[];
  /**
   * When used within an Activity, describes the direct object of the activity. For instance, in the activity "John added a movie to his wishlist", the object of the activity is the movie added. When used within a Relationship describes the entity to which the subject is related.
   */
  object?: (ActivityPubObject | Link)[];
  /**
   * Describes the indirect object, or target, of the activity. The precise meaning of the target is largely dependent on the type of action being described but will often be the object of the English preposition "to". For instance, in the activity "John added a movie to his wishlist", the target of the activity is John's wishlist. An activity can have more than one target.
   */
  target?: (ActivityPubObject | Link)[];
  /**
   * Describes the result of the activity. For instance, if a particular action results in the creation of a new resource, the result property can be used to describe that new resource.
   */
  result?: (ActivityPubObject | Link)[];
  /**
   * Describes an indirect object of the activity from which the activity is directed. The precise meaning of the origin is the object of the English preposition "from". For instance, in the activity "John moved an item to List B from List A", the origin of the activity is "List A".
   */
  origin?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more objects used (or to be used) in the completion of an Activity.
   */
  instrument?: (ActivityPubObject | Link)[];
}

/**
 * Update Type
 */
export interface Update {
  "@id"?: string;
  "@context"?: ContextDefinition;
  /**
   * Describes an object of any kind. The Object type serves as the base type for most of the other kinds of objects defined in the Activity Vocabulary, including other Core types such as Activity, IntransitiveActivity, Collection and OrderedCollection. | An Activity is a subtype of Object that describes some form of action that may happen, is currently happening, or has already happened. The Activity type itself serves as an abstract base type for all types of activities. It is important to note that the Activity type itself does not carry any specific semantics about the kind of action being taken. | Indicates that the actor has updated the object. Note, however, that this vocabulary does not define a mechanism for describing the actual set of modifications made to object. The target and origin typically have no defined meaning.
   */
  type: (
    | {
        "@id": "Object";
      }
    | {
        "@id": "Activity";
      }
    | {
        "@id": "Update";
      }
  )[];
  /**
   * Identifies a resource attached or related to an object that potentially requires special handling. The intent is to provide a model that is at least semantically similar to attachments in email.
   */
  attachment?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more entities to which this object is attributed. The attributed entities might not be Actors. For instance, an object might be attributed to the completion of another activity.
   */
  attributedTo?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more entities that represent the total population of entities for which the object can considered to be relevant.
   */
  audience?: (ActivityPubObject | Link)[];
  /**
   * The content or textual representation of the Object encoded as a JSON string. By default, the value of content is HTML. The mediaType property can be used in the object to indicate a different content type. The content MAY be expressed using multiple language-tagged values.
   */
  content?: (string | string)[];
  /**
   * Identifies the context within which the object exists or an activity was performed. The notion of "context" used is intentionally vague. The intended function is to serve as a means of grouping objects and activities that share a common originating context or purpose. An example could be all activities relating to a common project or event.
   */
  context?: (ActivityPubObject | Link)[];
  /**
   * A simple, human-readable, plain-text name for the object. HTML markup MUST NOT be included. The name MAY be expressed using multiple language-tagged values.
   */
  name?: (string | string)[];
  /**
   * The date and time describing the actual or expected ending time of the object. When used with an Activity object, for instance, the endTime property specifies the moment the activity concluded or is expected to conclude.
   */
  endTime?: string;
  /**
   * Identifies the entity (e.g. an application) that generated the object.
   */
  generator?: (ActivityPubObject | Link)[];
  /**
   * Indicates an entity that describes an icon for this object. The image should have an aspect ratio of one (horizontal) to one (vertical) and should be suitable for presentation at a small size.
   */
  icon?: (Image | Link)[];
  /**
   * Indicates an entity that describes an image for this object. Unlike the icon property, there are no aspect ratio or display size limitations assumed.
   */
  image?: (Image | Link)[];
  /**
   * Indicates one or more entities for which this object is considered a response.
   */
  inReplyTo?: (ActivityPubObject | Link)[];
  /**
   * Indicates one or more physical or logical locations associated with the object.
   */
  location?: (ActivityPubObject | Link)[];
  /**
   * Identifies an entity that provides a preview of this object.
   */
  preview?: (ActivityPubObject | Link)[];
  /**
   * The date and time at which the object was published
   */
  published?: string;
  /**
   * Identifies a Collection containing objects considered to be responses to this object.
   */
  replies?: Collection;
  /**
   * The date and time describing the actual or expected starting time of the object. When used with an Activity object, for instance, the startTime property specifies the moment the activity began or is scheduled to begin.
   */
  startTime?: string;
  /**
   * A natural language summarization of the object encoded as HTML. Multiple language tagged summaries MAY be provided.
   */
  summary?: (string | string)[];
  /**
   * One or more "tags" that have been associated with an objects. A tag can be any kind of Object. The key difference between attachment and tag is that the former implies association by inclusion, while the latter implies associated by reference.
   */
  tag?: (ActivityPubObject | Link)[];
  /**
   * The date and time at which the object was updated
   */
  updated?: string;
  /**
   * Identifies one or more links to representations of the object
   */
  url?: (string | Link)[];
  /**
   * Identifies an entity considered to be part of the public primary audience of an Object
   */
  to?: (ActivityPubObject | Link)[];
  /**
   * Identifies an Object that is part of the private primary audience of this Object.
   */
  bto?: (ActivityPubObject | Link)[];
  /**
   * Identifies an Object that is part of the public secondary audience of this Object.
   */
  cc?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more Objects that are part of the private secondary audience of this Object.
   */
  bcc?: (ActivityPubObject | Link)[];
  /**
   * When used on a Link, identifies the MIME media type of the referenced resource. When used on an Object, identifies the MIME media type of the value of the content property. If not specified, the content property is assumed to contain text/html content.
   */
  mediaType?: string;
  /**
   * When the object describes a time-bound resource, such as an audio or video, a meeting, etc, the duration property indicates the object's approximate duration. The value MUST be expressed as an xsd:duration as defined by [ xmlschema11-2], section 3.3.6 (e.g. a period of 5 seconds is represented as "PT5S").
   */
  duration?: string;
  /**
   * Describes one or more entities that either performed or are expected to perform the activity. Any single activity can have multiple actors. The actor MAY be specified using an indirect Link.
   */
  actor?: (ActivityPubObject | Link)[];
  /**
   * When used within an Activity, describes the direct object of the activity. For instance, in the activity "John added a movie to his wishlist", the object of the activity is the movie added. When used within a Relationship describes the entity to which the subject is related.
   */
  object?: (ActivityPubObject | Link)[];
  /**
   * Describes the indirect object, or target, of the activity. The precise meaning of the target is largely dependent on the type of action being described but will often be the object of the English preposition "to". For instance, in the activity "John added a movie to his wishlist", the target of the activity is John's wishlist. An activity can have more than one target.
   */
  target?: (ActivityPubObject | Link)[];
  /**
   * Describes the result of the activity. For instance, if a particular action results in the creation of a new resource, the result property can be used to describe that new resource.
   */
  result?: (ActivityPubObject | Link)[];
  /**
   * Describes an indirect object of the activity from which the activity is directed. The precise meaning of the origin is the object of the English preposition "from". For instance, in the activity "John moved an item to List B from List A", the origin of the activity is "List A".
   */
  origin?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more objects used (or to be used) in the completion of an Activity.
   */
  instrument?: (ActivityPubObject | Link)[];
}

/**
 * View Type
 */
export interface View {
  "@id"?: string;
  "@context"?: ContextDefinition;
  /**
   * Describes an object of any kind. The Object type serves as the base type for most of the other kinds of objects defined in the Activity Vocabulary, including other Core types such as Activity, IntransitiveActivity, Collection and OrderedCollection. | An Activity is a subtype of Object that describes some form of action that may happen, is currently happening, or has already happened. The Activity type itself serves as an abstract base type for all types of activities. It is important to note that the Activity type itself does not carry any specific semantics about the kind of action being taken. | Indicates that the actor has viewed the object.
   */
  type: (
    | {
        "@id": "Object";
      }
    | {
        "@id": "Activity";
      }
    | {
        "@id": "View";
      }
  )[];
  /**
   * Identifies a resource attached or related to an object that potentially requires special handling. The intent is to provide a model that is at least semantically similar to attachments in email.
   */
  attachment?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more entities to which this object is attributed. The attributed entities might not be Actors. For instance, an object might be attributed to the completion of another activity.
   */
  attributedTo?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more entities that represent the total population of entities for which the object can considered to be relevant.
   */
  audience?: (ActivityPubObject | Link)[];
  /**
   * The content or textual representation of the Object encoded as a JSON string. By default, the value of content is HTML. The mediaType property can be used in the object to indicate a different content type. The content MAY be expressed using multiple language-tagged values.
   */
  content?: (string | string)[];
  /**
   * Identifies the context within which the object exists or an activity was performed. The notion of "context" used is intentionally vague. The intended function is to serve as a means of grouping objects and activities that share a common originating context or purpose. An example could be all activities relating to a common project or event.
   */
  context?: (ActivityPubObject | Link)[];
  /**
   * A simple, human-readable, plain-text name for the object. HTML markup MUST NOT be included. The name MAY be expressed using multiple language-tagged values.
   */
  name?: (string | string)[];
  /**
   * The date and time describing the actual or expected ending time of the object. When used with an Activity object, for instance, the endTime property specifies the moment the activity concluded or is expected to conclude.
   */
  endTime?: string;
  /**
   * Identifies the entity (e.g. an application) that generated the object.
   */
  generator?: (ActivityPubObject | Link)[];
  /**
   * Indicates an entity that describes an icon for this object. The image should have an aspect ratio of one (horizontal) to one (vertical) and should be suitable for presentation at a small size.
   */
  icon?: (Image | Link)[];
  /**
   * Indicates an entity that describes an image for this object. Unlike the icon property, there are no aspect ratio or display size limitations assumed.
   */
  image?: (Image | Link)[];
  /**
   * Indicates one or more entities for which this object is considered a response.
   */
  inReplyTo?: (ActivityPubObject | Link)[];
  /**
   * Indicates one or more physical or logical locations associated with the object.
   */
  location?: (ActivityPubObject | Link)[];
  /**
   * Identifies an entity that provides a preview of this object.
   */
  preview?: (ActivityPubObject | Link)[];
  /**
   * The date and time at which the object was published
   */
  published?: string;
  /**
   * Identifies a Collection containing objects considered to be responses to this object.
   */
  replies?: Collection;
  /**
   * The date and time describing the actual or expected starting time of the object. When used with an Activity object, for instance, the startTime property specifies the moment the activity began or is scheduled to begin.
   */
  startTime?: string;
  /**
   * A natural language summarization of the object encoded as HTML. Multiple language tagged summaries MAY be provided.
   */
  summary?: (string | string)[];
  /**
   * One or more "tags" that have been associated with an objects. A tag can be any kind of Object. The key difference between attachment and tag is that the former implies association by inclusion, while the latter implies associated by reference.
   */
  tag?: (ActivityPubObject | Link)[];
  /**
   * The date and time at which the object was updated
   */
  updated?: string;
  /**
   * Identifies one or more links to representations of the object
   */
  url?: (string | Link)[];
  /**
   * Identifies an entity considered to be part of the public primary audience of an Object
   */
  to?: (ActivityPubObject | Link)[];
  /**
   * Identifies an Object that is part of the private primary audience of this Object.
   */
  bto?: (ActivityPubObject | Link)[];
  /**
   * Identifies an Object that is part of the public secondary audience of this Object.
   */
  cc?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more Objects that are part of the private secondary audience of this Object.
   */
  bcc?: (ActivityPubObject | Link)[];
  /**
   * When used on a Link, identifies the MIME media type of the referenced resource. When used on an Object, identifies the MIME media type of the value of the content property. If not specified, the content property is assumed to contain text/html content.
   */
  mediaType?: string;
  /**
   * When the object describes a time-bound resource, such as an audio or video, a meeting, etc, the duration property indicates the object's approximate duration. The value MUST be expressed as an xsd:duration as defined by [ xmlschema11-2], section 3.3.6 (e.g. a period of 5 seconds is represented as "PT5S").
   */
  duration?: string;
  /**
   * Describes one or more entities that either performed or are expected to perform the activity. Any single activity can have multiple actors. The actor MAY be specified using an indirect Link.
   */
  actor?: (ActivityPubObject | Link)[];
  /**
   * When used within an Activity, describes the direct object of the activity. For instance, in the activity "John added a movie to his wishlist", the object of the activity is the movie added. When used within a Relationship describes the entity to which the subject is related.
   */
  object?: (ActivityPubObject | Link)[];
  /**
   * Describes the indirect object, or target, of the activity. The precise meaning of the target is largely dependent on the type of action being described but will often be the object of the English preposition "to". For instance, in the activity "John added a movie to his wishlist", the target of the activity is John's wishlist. An activity can have more than one target.
   */
  target?: (ActivityPubObject | Link)[];
  /**
   * Describes the result of the activity. For instance, if a particular action results in the creation of a new resource, the result property can be used to describe that new resource.
   */
  result?: (ActivityPubObject | Link)[];
  /**
   * Describes an indirect object of the activity from which the activity is directed. The precise meaning of the origin is the object of the English preposition "from". For instance, in the activity "John moved an item to List B from List A", the origin of the activity is "List A".
   */
  origin?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more objects used (or to be used) in the completion of an Activity.
   */
  instrument?: (ActivityPubObject | Link)[];
}

/**
 * Listen Type
 */
export interface Listen {
  "@id"?: string;
  "@context"?: ContextDefinition;
  /**
   * Describes an object of any kind. The Object type serves as the base type for most of the other kinds of objects defined in the Activity Vocabulary, including other Core types such as Activity, IntransitiveActivity, Collection and OrderedCollection. | An Activity is a subtype of Object that describes some form of action that may happen, is currently happening, or has already happened. The Activity type itself serves as an abstract base type for all types of activities. It is important to note that the Activity type itself does not carry any specific semantics about the kind of action being taken. | Indicates that the actor has listened to the object.
   */
  type: (
    | {
        "@id": "Object";
      }
    | {
        "@id": "Activity";
      }
    | {
        "@id": "Listen";
      }
  )[];
  /**
   * Identifies a resource attached or related to an object that potentially requires special handling. The intent is to provide a model that is at least semantically similar to attachments in email.
   */
  attachment?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more entities to which this object is attributed. The attributed entities might not be Actors. For instance, an object might be attributed to the completion of another activity.
   */
  attributedTo?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more entities that represent the total population of entities for which the object can considered to be relevant.
   */
  audience?: (ActivityPubObject | Link)[];
  /**
   * The content or textual representation of the Object encoded as a JSON string. By default, the value of content is HTML. The mediaType property can be used in the object to indicate a different content type. The content MAY be expressed using multiple language-tagged values.
   */
  content?: (string | string)[];
  /**
   * Identifies the context within which the object exists or an activity was performed. The notion of "context" used is intentionally vague. The intended function is to serve as a means of grouping objects and activities that share a common originating context or purpose. An example could be all activities relating to a common project or event.
   */
  context?: (ActivityPubObject | Link)[];
  /**
   * A simple, human-readable, plain-text name for the object. HTML markup MUST NOT be included. The name MAY be expressed using multiple language-tagged values.
   */
  name?: (string | string)[];
  /**
   * The date and time describing the actual or expected ending time of the object. When used with an Activity object, for instance, the endTime property specifies the moment the activity concluded or is expected to conclude.
   */
  endTime?: string;
  /**
   * Identifies the entity (e.g. an application) that generated the object.
   */
  generator?: (ActivityPubObject | Link)[];
  /**
   * Indicates an entity that describes an icon for this object. The image should have an aspect ratio of one (horizontal) to one (vertical) and should be suitable for presentation at a small size.
   */
  icon?: (Image | Link)[];
  /**
   * Indicates an entity that describes an image for this object. Unlike the icon property, there are no aspect ratio or display size limitations assumed.
   */
  image?: (Image | Link)[];
  /**
   * Indicates one or more entities for which this object is considered a response.
   */
  inReplyTo?: (ActivityPubObject | Link)[];
  /**
   * Indicates one or more physical or logical locations associated with the object.
   */
  location?: (ActivityPubObject | Link)[];
  /**
   * Identifies an entity that provides a preview of this object.
   */
  preview?: (ActivityPubObject | Link)[];
  /**
   * The date and time at which the object was published
   */
  published?: string;
  /**
   * Identifies a Collection containing objects considered to be responses to this object.
   */
  replies?: Collection;
  /**
   * The date and time describing the actual or expected starting time of the object. When used with an Activity object, for instance, the startTime property specifies the moment the activity began or is scheduled to begin.
   */
  startTime?: string;
  /**
   * A natural language summarization of the object encoded as HTML. Multiple language tagged summaries MAY be provided.
   */
  summary?: (string | string)[];
  /**
   * One or more "tags" that have been associated with an objects. A tag can be any kind of Object. The key difference between attachment and tag is that the former implies association by inclusion, while the latter implies associated by reference.
   */
  tag?: (ActivityPubObject | Link)[];
  /**
   * The date and time at which the object was updated
   */
  updated?: string;
  /**
   * Identifies one or more links to representations of the object
   */
  url?: (string | Link)[];
  /**
   * Identifies an entity considered to be part of the public primary audience of an Object
   */
  to?: (ActivityPubObject | Link)[];
  /**
   * Identifies an Object that is part of the private primary audience of this Object.
   */
  bto?: (ActivityPubObject | Link)[];
  /**
   * Identifies an Object that is part of the public secondary audience of this Object.
   */
  cc?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more Objects that are part of the private secondary audience of this Object.
   */
  bcc?: (ActivityPubObject | Link)[];
  /**
   * When used on a Link, identifies the MIME media type of the referenced resource. When used on an Object, identifies the MIME media type of the value of the content property. If not specified, the content property is assumed to contain text/html content.
   */
  mediaType?: string;
  /**
   * When the object describes a time-bound resource, such as an audio or video, a meeting, etc, the duration property indicates the object's approximate duration. The value MUST be expressed as an xsd:duration as defined by [ xmlschema11-2], section 3.3.6 (e.g. a period of 5 seconds is represented as "PT5S").
   */
  duration?: string;
  /**
   * Describes one or more entities that either performed or are expected to perform the activity. Any single activity can have multiple actors. The actor MAY be specified using an indirect Link.
   */
  actor?: (ActivityPubObject | Link)[];
  /**
   * When used within an Activity, describes the direct object of the activity. For instance, in the activity "John added a movie to his wishlist", the object of the activity is the movie added. When used within a Relationship describes the entity to which the subject is related.
   */
  object?: (ActivityPubObject | Link)[];
  /**
   * Describes the indirect object, or target, of the activity. The precise meaning of the target is largely dependent on the type of action being described but will often be the object of the English preposition "to". For instance, in the activity "John added a movie to his wishlist", the target of the activity is John's wishlist. An activity can have more than one target.
   */
  target?: (ActivityPubObject | Link)[];
  /**
   * Describes the result of the activity. For instance, if a particular action results in the creation of a new resource, the result property can be used to describe that new resource.
   */
  result?: (ActivityPubObject | Link)[];
  /**
   * Describes an indirect object of the activity from which the activity is directed. The precise meaning of the origin is the object of the English preposition "from". For instance, in the activity "John moved an item to List B from List A", the origin of the activity is "List A".
   */
  origin?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more objects used (or to be used) in the completion of an Activity.
   */
  instrument?: (ActivityPubObject | Link)[];
}

/**
 * Read Type
 */
export interface Read {
  "@id"?: string;
  "@context"?: ContextDefinition;
  /**
   * Describes an object of any kind. The Object type serves as the base type for most of the other kinds of objects defined in the Activity Vocabulary, including other Core types such as Activity, IntransitiveActivity, Collection and OrderedCollection. | An Activity is a subtype of Object that describes some form of action that may happen, is currently happening, or has already happened. The Activity type itself serves as an abstract base type for all types of activities. It is important to note that the Activity type itself does not carry any specific semantics about the kind of action being taken. | Indicates that the actor has read the object.
   */
  type: (
    | {
        "@id": "Object";
      }
    | {
        "@id": "Activity";
      }
    | {
        "@id": "Read";
      }
  )[];
  /**
   * Identifies a resource attached or related to an object that potentially requires special handling. The intent is to provide a model that is at least semantically similar to attachments in email.
   */
  attachment?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more entities to which this object is attributed. The attributed entities might not be Actors. For instance, an object might be attributed to the completion of another activity.
   */
  attributedTo?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more entities that represent the total population of entities for which the object can considered to be relevant.
   */
  audience?: (ActivityPubObject | Link)[];
  /**
   * The content or textual representation of the Object encoded as a JSON string. By default, the value of content is HTML. The mediaType property can be used in the object to indicate a different content type. The content MAY be expressed using multiple language-tagged values.
   */
  content?: (string | string)[];
  /**
   * Identifies the context within which the object exists or an activity was performed. The notion of "context" used is intentionally vague. The intended function is to serve as a means of grouping objects and activities that share a common originating context or purpose. An example could be all activities relating to a common project or event.
   */
  context?: (ActivityPubObject | Link)[];
  /**
   * A simple, human-readable, plain-text name for the object. HTML markup MUST NOT be included. The name MAY be expressed using multiple language-tagged values.
   */
  name?: (string | string)[];
  /**
   * The date and time describing the actual or expected ending time of the object. When used with an Activity object, for instance, the endTime property specifies the moment the activity concluded or is expected to conclude.
   */
  endTime?: string;
  /**
   * Identifies the entity (e.g. an application) that generated the object.
   */
  generator?: (ActivityPubObject | Link)[];
  /**
   * Indicates an entity that describes an icon for this object. The image should have an aspect ratio of one (horizontal) to one (vertical) and should be suitable for presentation at a small size.
   */
  icon?: (Image | Link)[];
  /**
   * Indicates an entity that describes an image for this object. Unlike the icon property, there are no aspect ratio or display size limitations assumed.
   */
  image?: (Image | Link)[];
  /**
   * Indicates one or more entities for which this object is considered a response.
   */
  inReplyTo?: (ActivityPubObject | Link)[];
  /**
   * Indicates one or more physical or logical locations associated with the object.
   */
  location?: (ActivityPubObject | Link)[];
  /**
   * Identifies an entity that provides a preview of this object.
   */
  preview?: (ActivityPubObject | Link)[];
  /**
   * The date and time at which the object was published
   */
  published?: string;
  /**
   * Identifies a Collection containing objects considered to be responses to this object.
   */
  replies?: Collection;
  /**
   * The date and time describing the actual or expected starting time of the object. When used with an Activity object, for instance, the startTime property specifies the moment the activity began or is scheduled to begin.
   */
  startTime?: string;
  /**
   * A natural language summarization of the object encoded as HTML. Multiple language tagged summaries MAY be provided.
   */
  summary?: (string | string)[];
  /**
   * One or more "tags" that have been associated with an objects. A tag can be any kind of Object. The key difference between attachment and tag is that the former implies association by inclusion, while the latter implies associated by reference.
   */
  tag?: (ActivityPubObject | Link)[];
  /**
   * The date and time at which the object was updated
   */
  updated?: string;
  /**
   * Identifies one or more links to representations of the object
   */
  url?: (string | Link)[];
  /**
   * Identifies an entity considered to be part of the public primary audience of an Object
   */
  to?: (ActivityPubObject | Link)[];
  /**
   * Identifies an Object that is part of the private primary audience of this Object.
   */
  bto?: (ActivityPubObject | Link)[];
  /**
   * Identifies an Object that is part of the public secondary audience of this Object.
   */
  cc?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more Objects that are part of the private secondary audience of this Object.
   */
  bcc?: (ActivityPubObject | Link)[];
  /**
   * When used on a Link, identifies the MIME media type of the referenced resource. When used on an Object, identifies the MIME media type of the value of the content property. If not specified, the content property is assumed to contain text/html content.
   */
  mediaType?: string;
  /**
   * When the object describes a time-bound resource, such as an audio or video, a meeting, etc, the duration property indicates the object's approximate duration. The value MUST be expressed as an xsd:duration as defined by [ xmlschema11-2], section 3.3.6 (e.g. a period of 5 seconds is represented as "PT5S").
   */
  duration?: string;
  /**
   * Describes one or more entities that either performed or are expected to perform the activity. Any single activity can have multiple actors. The actor MAY be specified using an indirect Link.
   */
  actor?: (ActivityPubObject | Link)[];
  /**
   * When used within an Activity, describes the direct object of the activity. For instance, in the activity "John added a movie to his wishlist", the object of the activity is the movie added. When used within a Relationship describes the entity to which the subject is related.
   */
  object?: (ActivityPubObject | Link)[];
  /**
   * Describes the indirect object, or target, of the activity. The precise meaning of the target is largely dependent on the type of action being described but will often be the object of the English preposition "to". For instance, in the activity "John added a movie to his wishlist", the target of the activity is John's wishlist. An activity can have more than one target.
   */
  target?: (ActivityPubObject | Link)[];
  /**
   * Describes the result of the activity. For instance, if a particular action results in the creation of a new resource, the result property can be used to describe that new resource.
   */
  result?: (ActivityPubObject | Link)[];
  /**
   * Describes an indirect object of the activity from which the activity is directed. The precise meaning of the origin is the object of the English preposition "from". For instance, in the activity "John moved an item to List B from List A", the origin of the activity is "List A".
   */
  origin?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more objects used (or to be used) in the completion of an Activity.
   */
  instrument?: (ActivityPubObject | Link)[];
}

/**
 * Move Type
 */
export interface Move {
  "@id"?: string;
  "@context"?: ContextDefinition;
  /**
   * Describes an object of any kind. The Object type serves as the base type for most of the other kinds of objects defined in the Activity Vocabulary, including other Core types such as Activity, IntransitiveActivity, Collection and OrderedCollection. | An Activity is a subtype of Object that describes some form of action that may happen, is currently happening, or has already happened. The Activity type itself serves as an abstract base type for all types of activities. It is important to note that the Activity type itself does not carry any specific semantics about the kind of action being taken. | Indicates that the actor has moved object from origin to target. If the origin or target are not specified, either can be determined by context.
   */
  type: (
    | {
        "@id": "Object";
      }
    | {
        "@id": "Activity";
      }
    | {
        "@id": "Move";
      }
  )[];
  /**
   * Identifies a resource attached or related to an object that potentially requires special handling. The intent is to provide a model that is at least semantically similar to attachments in email.
   */
  attachment?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more entities to which this object is attributed. The attributed entities might not be Actors. For instance, an object might be attributed to the completion of another activity.
   */
  attributedTo?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more entities that represent the total population of entities for which the object can considered to be relevant.
   */
  audience?: (ActivityPubObject | Link)[];
  /**
   * The content or textual representation of the Object encoded as a JSON string. By default, the value of content is HTML. The mediaType property can be used in the object to indicate a different content type. The content MAY be expressed using multiple language-tagged values.
   */
  content?: (string | string)[];
  /**
   * Identifies the context within which the object exists or an activity was performed. The notion of "context" used is intentionally vague. The intended function is to serve as a means of grouping objects and activities that share a common originating context or purpose. An example could be all activities relating to a common project or event.
   */
  context?: (ActivityPubObject | Link)[];
  /**
   * A simple, human-readable, plain-text name for the object. HTML markup MUST NOT be included. The name MAY be expressed using multiple language-tagged values.
   */
  name?: (string | string)[];
  /**
   * The date and time describing the actual or expected ending time of the object. When used with an Activity object, for instance, the endTime property specifies the moment the activity concluded or is expected to conclude.
   */
  endTime?: string;
  /**
   * Identifies the entity (e.g. an application) that generated the object.
   */
  generator?: (ActivityPubObject | Link)[];
  /**
   * Indicates an entity that describes an icon for this object. The image should have an aspect ratio of one (horizontal) to one (vertical) and should be suitable for presentation at a small size.
   */
  icon?: (Image | Link)[];
  /**
   * Indicates an entity that describes an image for this object. Unlike the icon property, there are no aspect ratio or display size limitations assumed.
   */
  image?: (Image | Link)[];
  /**
   * Indicates one or more entities for which this object is considered a response.
   */
  inReplyTo?: (ActivityPubObject | Link)[];
  /**
   * Indicates one or more physical or logical locations associated with the object.
   */
  location?: (ActivityPubObject | Link)[];
  /**
   * Identifies an entity that provides a preview of this object.
   */
  preview?: (ActivityPubObject | Link)[];
  /**
   * The date and time at which the object was published
   */
  published?: string;
  /**
   * Identifies a Collection containing objects considered to be responses to this object.
   */
  replies?: Collection;
  /**
   * The date and time describing the actual or expected starting time of the object. When used with an Activity object, for instance, the startTime property specifies the moment the activity began or is scheduled to begin.
   */
  startTime?: string;
  /**
   * A natural language summarization of the object encoded as HTML. Multiple language tagged summaries MAY be provided.
   */
  summary?: (string | string)[];
  /**
   * One or more "tags" that have been associated with an objects. A tag can be any kind of Object. The key difference between attachment and tag is that the former implies association by inclusion, while the latter implies associated by reference.
   */
  tag?: (ActivityPubObject | Link)[];
  /**
   * The date and time at which the object was updated
   */
  updated?: string;
  /**
   * Identifies one or more links to representations of the object
   */
  url?: (string | Link)[];
  /**
   * Identifies an entity considered to be part of the public primary audience of an Object
   */
  to?: (ActivityPubObject | Link)[];
  /**
   * Identifies an Object that is part of the private primary audience of this Object.
   */
  bto?: (ActivityPubObject | Link)[];
  /**
   * Identifies an Object that is part of the public secondary audience of this Object.
   */
  cc?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more Objects that are part of the private secondary audience of this Object.
   */
  bcc?: (ActivityPubObject | Link)[];
  /**
   * When used on a Link, identifies the MIME media type of the referenced resource. When used on an Object, identifies the MIME media type of the value of the content property. If not specified, the content property is assumed to contain text/html content.
   */
  mediaType?: string;
  /**
   * When the object describes a time-bound resource, such as an audio or video, a meeting, etc, the duration property indicates the object's approximate duration. The value MUST be expressed as an xsd:duration as defined by [ xmlschema11-2], section 3.3.6 (e.g. a period of 5 seconds is represented as "PT5S").
   */
  duration?: string;
  /**
   * Describes one or more entities that either performed or are expected to perform the activity. Any single activity can have multiple actors. The actor MAY be specified using an indirect Link.
   */
  actor?: (ActivityPubObject | Link)[];
  /**
   * When used within an Activity, describes the direct object of the activity. For instance, in the activity "John added a movie to his wishlist", the object of the activity is the movie added. When used within a Relationship describes the entity to which the subject is related.
   */
  object?: (ActivityPubObject | Link)[];
  /**
   * Describes the indirect object, or target, of the activity. The precise meaning of the target is largely dependent on the type of action being described but will often be the object of the English preposition "to". For instance, in the activity "John added a movie to his wishlist", the target of the activity is John's wishlist. An activity can have more than one target.
   */
  target?: (ActivityPubObject | Link)[];
  /**
   * Describes the result of the activity. For instance, if a particular action results in the creation of a new resource, the result property can be used to describe that new resource.
   */
  result?: (ActivityPubObject | Link)[];
  /**
   * Describes an indirect object of the activity from which the activity is directed. The precise meaning of the origin is the object of the English preposition "from". For instance, in the activity "John moved an item to List B from List A", the origin of the activity is "List A".
   */
  origin?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more objects used (or to be used) in the completion of an Activity.
   */
  instrument?: (ActivityPubObject | Link)[];
}

/**
 * Travel Type
 */
export interface Travel {
  "@id"?: string;
  "@context"?: ContextDefinition;
  /**
   * Describes an object of any kind. The Object type serves as the base type for most of the other kinds of objects defined in the Activity Vocabulary, including other Core types such as Activity, IntransitiveActivity, Collection and OrderedCollection. | An Activity is a subtype of Object that describes some form of action that may happen, is currently happening, or has already happened. The Activity type itself serves as an abstract base type for all types of activities. It is important to note that the Activity type itself does not carry any specific semantics about the kind of action being taken. | Instances of IntransitiveActivity are a subtype of Activity representing intransitive actions. The object property is therefore inappropriate for these activities. | Indicates that the actor is traveling to target from origin. Travel is an IntransitiveObject whose actor specifies the direct object. If the target or origin are not specified, either can be determined by context.
   */
  type: (
    | {
        "@id": "Object";
      }
    | {
        "@id": "Activity";
      }
    | {
        "@id": "IntransitiveActivity";
      }
    | {
        "@id": "Travel";
      }
  )[];
  /**
   * Identifies a resource attached or related to an object that potentially requires special handling. The intent is to provide a model that is at least semantically similar to attachments in email.
   */
  attachment?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more entities to which this object is attributed. The attributed entities might not be Actors. For instance, an object might be attributed to the completion of another activity.
   */
  attributedTo?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more entities that represent the total population of entities for which the object can considered to be relevant.
   */
  audience?: (ActivityPubObject | Link)[];
  /**
   * The content or textual representation of the Object encoded as a JSON string. By default, the value of content is HTML. The mediaType property can be used in the object to indicate a different content type. The content MAY be expressed using multiple language-tagged values.
   */
  content?: (string | string)[];
  /**
   * Identifies the context within which the object exists or an activity was performed. The notion of "context" used is intentionally vague. The intended function is to serve as a means of grouping objects and activities that share a common originating context or purpose. An example could be all activities relating to a common project or event.
   */
  context?: (ActivityPubObject | Link)[];
  /**
   * A simple, human-readable, plain-text name for the object. HTML markup MUST NOT be included. The name MAY be expressed using multiple language-tagged values.
   */
  name?: (string | string)[];
  /**
   * The date and time describing the actual or expected ending time of the object. When used with an Activity object, for instance, the endTime property specifies the moment the activity concluded or is expected to conclude.
   */
  endTime?: string;
  /**
   * Identifies the entity (e.g. an application) that generated the object.
   */
  generator?: (ActivityPubObject | Link)[];
  /**
   * Indicates an entity that describes an icon for this object. The image should have an aspect ratio of one (horizontal) to one (vertical) and should be suitable for presentation at a small size.
   */
  icon?: (Image | Link)[];
  /**
   * Indicates an entity that describes an image for this object. Unlike the icon property, there are no aspect ratio or display size limitations assumed.
   */
  image?: (Image | Link)[];
  /**
   * Indicates one or more entities for which this object is considered a response.
   */
  inReplyTo?: (ActivityPubObject | Link)[];
  /**
   * Indicates one or more physical or logical locations associated with the object.
   */
  location?: (ActivityPubObject | Link)[];
  /**
   * Identifies an entity that provides a preview of this object.
   */
  preview?: (ActivityPubObject | Link)[];
  /**
   * The date and time at which the object was published
   */
  published?: string;
  /**
   * Identifies a Collection containing objects considered to be responses to this object.
   */
  replies?: Collection;
  /**
   * The date and time describing the actual or expected starting time of the object. When used with an Activity object, for instance, the startTime property specifies the moment the activity began or is scheduled to begin.
   */
  startTime?: string;
  /**
   * A natural language summarization of the object encoded as HTML. Multiple language tagged summaries MAY be provided.
   */
  summary?: (string | string)[];
  /**
   * One or more "tags" that have been associated with an objects. A tag can be any kind of Object. The key difference between attachment and tag is that the former implies association by inclusion, while the latter implies associated by reference.
   */
  tag?: (ActivityPubObject | Link)[];
  /**
   * The date and time at which the object was updated
   */
  updated?: string;
  /**
   * Identifies one or more links to representations of the object
   */
  url?: (string | Link)[];
  /**
   * Identifies an entity considered to be part of the public primary audience of an Object
   */
  to?: (ActivityPubObject | Link)[];
  /**
   * Identifies an Object that is part of the private primary audience of this Object.
   */
  bto?: (ActivityPubObject | Link)[];
  /**
   * Identifies an Object that is part of the public secondary audience of this Object.
   */
  cc?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more Objects that are part of the private secondary audience of this Object.
   */
  bcc?: (ActivityPubObject | Link)[];
  /**
   * When used on a Link, identifies the MIME media type of the referenced resource. When used on an Object, identifies the MIME media type of the value of the content property. If not specified, the content property is assumed to contain text/html content.
   */
  mediaType?: string;
  /**
   * When the object describes a time-bound resource, such as an audio or video, a meeting, etc, the duration property indicates the object's approximate duration. The value MUST be expressed as an xsd:duration as defined by [ xmlschema11-2], section 3.3.6 (e.g. a period of 5 seconds is represented as "PT5S").
   */
  duration?: string;
  /**
   * Describes one or more entities that either performed or are expected to perform the activity. Any single activity can have multiple actors. The actor MAY be specified using an indirect Link.
   */
  actor?: (ActivityPubObject | Link)[];
  /**
   * When used within an Activity, describes the direct object of the activity. For instance, in the activity "John added a movie to his wishlist", the object of the activity is the movie added. When used within a Relationship describes the entity to which the subject is related.
   */
  object?: (ActivityPubObject | Link)[];
  /**
   * Describes the indirect object, or target, of the activity. The precise meaning of the target is largely dependent on the type of action being described but will often be the object of the English preposition "to". For instance, in the activity "John added a movie to his wishlist", the target of the activity is John's wishlist. An activity can have more than one target.
   */
  target?: (ActivityPubObject | Link)[];
  /**
   * Describes the result of the activity. For instance, if a particular action results in the creation of a new resource, the result property can be used to describe that new resource.
   */
  result?: (ActivityPubObject | Link)[];
  /**
   * Describes an indirect object of the activity from which the activity is directed. The precise meaning of the origin is the object of the English preposition "from". For instance, in the activity "John moved an item to List B from List A", the origin of the activity is "List A".
   */
  origin?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more objects used (or to be used) in the completion of an Activity.
   */
  instrument?: (ActivityPubObject | Link)[];
}

/**
 * Announce Type
 */
export interface Announce {
  "@id"?: string;
  "@context"?: ContextDefinition;
  /**
   * Describes an object of any kind. The Object type serves as the base type for most of the other kinds of objects defined in the Activity Vocabulary, including other Core types such as Activity, IntransitiveActivity, Collection and OrderedCollection. | An Activity is a subtype of Object that describes some form of action that may happen, is currently happening, or has already happened. The Activity type itself serves as an abstract base type for all types of activities. It is important to note that the Activity type itself does not carry any specific semantics about the kind of action being taken. | Indicates that the actor is calling the target's attention the object. The origin typically has no defined meaning.
   */
  type: (
    | {
        "@id": "Object";
      }
    | {
        "@id": "Activity";
      }
    | {
        "@id": "Announce";
      }
  )[];
  /**
   * Identifies a resource attached or related to an object that potentially requires special handling. The intent is to provide a model that is at least semantically similar to attachments in email.
   */
  attachment?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more entities to which this object is attributed. The attributed entities might not be Actors. For instance, an object might be attributed to the completion of another activity.
   */
  attributedTo?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more entities that represent the total population of entities for which the object can considered to be relevant.
   */
  audience?: (ActivityPubObject | Link)[];
  /**
   * The content or textual representation of the Object encoded as a JSON string. By default, the value of content is HTML. The mediaType property can be used in the object to indicate a different content type. The content MAY be expressed using multiple language-tagged values.
   */
  content?: (string | string)[];
  /**
   * Identifies the context within which the object exists or an activity was performed. The notion of "context" used is intentionally vague. The intended function is to serve as a means of grouping objects and activities that share a common originating context or purpose. An example could be all activities relating to a common project or event.
   */
  context?: (ActivityPubObject | Link)[];
  /**
   * A simple, human-readable, plain-text name for the object. HTML markup MUST NOT be included. The name MAY be expressed using multiple language-tagged values.
   */
  name?: (string | string)[];
  /**
   * The date and time describing the actual or expected ending time of the object. When used with an Activity object, for instance, the endTime property specifies the moment the activity concluded or is expected to conclude.
   */
  endTime?: string;
  /**
   * Identifies the entity (e.g. an application) that generated the object.
   */
  generator?: (ActivityPubObject | Link)[];
  /**
   * Indicates an entity that describes an icon for this object. The image should have an aspect ratio of one (horizontal) to one (vertical) and should be suitable for presentation at a small size.
   */
  icon?: (Image | Link)[];
  /**
   * Indicates an entity that describes an image for this object. Unlike the icon property, there are no aspect ratio or display size limitations assumed.
   */
  image?: (Image | Link)[];
  /**
   * Indicates one or more entities for which this object is considered a response.
   */
  inReplyTo?: (ActivityPubObject | Link)[];
  /**
   * Indicates one or more physical or logical locations associated with the object.
   */
  location?: (ActivityPubObject | Link)[];
  /**
   * Identifies an entity that provides a preview of this object.
   */
  preview?: (ActivityPubObject | Link)[];
  /**
   * The date and time at which the object was published
   */
  published?: string;
  /**
   * Identifies a Collection containing objects considered to be responses to this object.
   */
  replies?: Collection;
  /**
   * The date and time describing the actual or expected starting time of the object. When used with an Activity object, for instance, the startTime property specifies the moment the activity began or is scheduled to begin.
   */
  startTime?: string;
  /**
   * A natural language summarization of the object encoded as HTML. Multiple language tagged summaries MAY be provided.
   */
  summary?: (string | string)[];
  /**
   * One or more "tags" that have been associated with an objects. A tag can be any kind of Object. The key difference between attachment and tag is that the former implies association by inclusion, while the latter implies associated by reference.
   */
  tag?: (ActivityPubObject | Link)[];
  /**
   * The date and time at which the object was updated
   */
  updated?: string;
  /**
   * Identifies one or more links to representations of the object
   */
  url?: (string | Link)[];
  /**
   * Identifies an entity considered to be part of the public primary audience of an Object
   */
  to?: (ActivityPubObject | Link)[];
  /**
   * Identifies an Object that is part of the private primary audience of this Object.
   */
  bto?: (ActivityPubObject | Link)[];
  /**
   * Identifies an Object that is part of the public secondary audience of this Object.
   */
  cc?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more Objects that are part of the private secondary audience of this Object.
   */
  bcc?: (ActivityPubObject | Link)[];
  /**
   * When used on a Link, identifies the MIME media type of the referenced resource. When used on an Object, identifies the MIME media type of the value of the content property. If not specified, the content property is assumed to contain text/html content.
   */
  mediaType?: string;
  /**
   * When the object describes a time-bound resource, such as an audio or video, a meeting, etc, the duration property indicates the object's approximate duration. The value MUST be expressed as an xsd:duration as defined by [ xmlschema11-2], section 3.3.6 (e.g. a period of 5 seconds is represented as "PT5S").
   */
  duration?: string;
  /**
   * Describes one or more entities that either performed or are expected to perform the activity. Any single activity can have multiple actors. The actor MAY be specified using an indirect Link.
   */
  actor?: (ActivityPubObject | Link)[];
  /**
   * When used within an Activity, describes the direct object of the activity. For instance, in the activity "John added a movie to his wishlist", the object of the activity is the movie added. When used within a Relationship describes the entity to which the subject is related.
   */
  object?: (ActivityPubObject | Link)[];
  /**
   * Describes the indirect object, or target, of the activity. The precise meaning of the target is largely dependent on the type of action being described but will often be the object of the English preposition "to". For instance, in the activity "John added a movie to his wishlist", the target of the activity is John's wishlist. An activity can have more than one target.
   */
  target?: (ActivityPubObject | Link)[];
  /**
   * Describes the result of the activity. For instance, if a particular action results in the creation of a new resource, the result property can be used to describe that new resource.
   */
  result?: (ActivityPubObject | Link)[];
  /**
   * Describes an indirect object of the activity from which the activity is directed. The precise meaning of the origin is the object of the English preposition "from". For instance, in the activity "John moved an item to List B from List A", the origin of the activity is "List A".
   */
  origin?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more objects used (or to be used) in the completion of an Activity.
   */
  instrument?: (ActivityPubObject | Link)[];
}

/**
 * Block Type
 */
export interface Block {
  "@id"?: string;
  "@context"?: ContextDefinition;
  /**
   * Describes an object of any kind. The Object type serves as the base type for most of the other kinds of objects defined in the Activity Vocabulary, including other Core types such as Activity, IntransitiveActivity, Collection and OrderedCollection. | An Activity is a subtype of Object that describes some form of action that may happen, is currently happening, or has already happened. The Activity type itself serves as an abstract base type for all types of activities. It is important to note that the Activity type itself does not carry any specific semantics about the kind of action being taken. | Indicates that the actor is ignoring the object. The target and origin typically have no defined meaning. | Indicates that the actor is blocking the object. Blocking is a stronger form of Ignore. The typical use is to support social systems that allow one user to block activities or content of other users. The target and origin typically have no defined meaning.
   */
  type: (
    | {
        "@id": "Object";
      }
    | {
        "@id": "Activity";
      }
    | {
        "@id": "Ignore";
      }
    | {
        "@id": "Block";
      }
  )[];
  /**
   * Identifies a resource attached or related to an object that potentially requires special handling. The intent is to provide a model that is at least semantically similar to attachments in email.
   */
  attachment?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more entities to which this object is attributed. The attributed entities might not be Actors. For instance, an object might be attributed to the completion of another activity.
   */
  attributedTo?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more entities that represent the total population of entities for which the object can considered to be relevant.
   */
  audience?: (ActivityPubObject | Link)[];
  /**
   * The content or textual representation of the Object encoded as a JSON string. By default, the value of content is HTML. The mediaType property can be used in the object to indicate a different content type. The content MAY be expressed using multiple language-tagged values.
   */
  content?: (string | string)[];
  /**
   * Identifies the context within which the object exists or an activity was performed. The notion of "context" used is intentionally vague. The intended function is to serve as a means of grouping objects and activities that share a common originating context or purpose. An example could be all activities relating to a common project or event.
   */
  context?: (ActivityPubObject | Link)[];
  /**
   * A simple, human-readable, plain-text name for the object. HTML markup MUST NOT be included. The name MAY be expressed using multiple language-tagged values.
   */
  name?: (string | string)[];
  /**
   * The date and time describing the actual or expected ending time of the object. When used with an Activity object, for instance, the endTime property specifies the moment the activity concluded or is expected to conclude.
   */
  endTime?: string;
  /**
   * Identifies the entity (e.g. an application) that generated the object.
   */
  generator?: (ActivityPubObject | Link)[];
  /**
   * Indicates an entity that describes an icon for this object. The image should have an aspect ratio of one (horizontal) to one (vertical) and should be suitable for presentation at a small size.
   */
  icon?: (Image | Link)[];
  /**
   * Indicates an entity that describes an image for this object. Unlike the icon property, there are no aspect ratio or display size limitations assumed.
   */
  image?: (Image | Link)[];
  /**
   * Indicates one or more entities for which this object is considered a response.
   */
  inReplyTo?: (ActivityPubObject | Link)[];
  /**
   * Indicates one or more physical or logical locations associated with the object.
   */
  location?: (ActivityPubObject | Link)[];
  /**
   * Identifies an entity that provides a preview of this object.
   */
  preview?: (ActivityPubObject | Link)[];
  /**
   * The date and time at which the object was published
   */
  published?: string;
  /**
   * Identifies a Collection containing objects considered to be responses to this object.
   */
  replies?: Collection;
  /**
   * The date and time describing the actual or expected starting time of the object. When used with an Activity object, for instance, the startTime property specifies the moment the activity began or is scheduled to begin.
   */
  startTime?: string;
  /**
   * A natural language summarization of the object encoded as HTML. Multiple language tagged summaries MAY be provided.
   */
  summary?: (string | string)[];
  /**
   * One or more "tags" that have been associated with an objects. A tag can be any kind of Object. The key difference between attachment and tag is that the former implies association by inclusion, while the latter implies associated by reference.
   */
  tag?: (ActivityPubObject | Link)[];
  /**
   * The date and time at which the object was updated
   */
  updated?: string;
  /**
   * Identifies one or more links to representations of the object
   */
  url?: (string | Link)[];
  /**
   * Identifies an entity considered to be part of the public primary audience of an Object
   */
  to?: (ActivityPubObject | Link)[];
  /**
   * Identifies an Object that is part of the private primary audience of this Object.
   */
  bto?: (ActivityPubObject | Link)[];
  /**
   * Identifies an Object that is part of the public secondary audience of this Object.
   */
  cc?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more Objects that are part of the private secondary audience of this Object.
   */
  bcc?: (ActivityPubObject | Link)[];
  /**
   * When used on a Link, identifies the MIME media type of the referenced resource. When used on an Object, identifies the MIME media type of the value of the content property. If not specified, the content property is assumed to contain text/html content.
   */
  mediaType?: string;
  /**
   * When the object describes a time-bound resource, such as an audio or video, a meeting, etc, the duration property indicates the object's approximate duration. The value MUST be expressed as an xsd:duration as defined by [ xmlschema11-2], section 3.3.6 (e.g. a period of 5 seconds is represented as "PT5S").
   */
  duration?: string;
  /**
   * Describes one or more entities that either performed or are expected to perform the activity. Any single activity can have multiple actors. The actor MAY be specified using an indirect Link.
   */
  actor?: (ActivityPubObject | Link)[];
  /**
   * When used within an Activity, describes the direct object of the activity. For instance, in the activity "John added a movie to his wishlist", the object of the activity is the movie added. When used within a Relationship describes the entity to which the subject is related.
   */
  object?: (ActivityPubObject | Link)[];
  /**
   * Describes the indirect object, or target, of the activity. The precise meaning of the target is largely dependent on the type of action being described but will often be the object of the English preposition "to". For instance, in the activity "John added a movie to his wishlist", the target of the activity is John's wishlist. An activity can have more than one target.
   */
  target?: (ActivityPubObject | Link)[];
  /**
   * Describes the result of the activity. For instance, if a particular action results in the creation of a new resource, the result property can be used to describe that new resource.
   */
  result?: (ActivityPubObject | Link)[];
  /**
   * Describes an indirect object of the activity from which the activity is directed. The precise meaning of the origin is the object of the English preposition "from". For instance, in the activity "John moved an item to List B from List A", the origin of the activity is "List A".
   */
  origin?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more objects used (or to be used) in the completion of an Activity.
   */
  instrument?: (ActivityPubObject | Link)[];
}

/**
 * Flag Type
 */
export interface Flag {
  "@id"?: string;
  "@context"?: ContextDefinition;
  /**
   * Describes an object of any kind. The Object type serves as the base type for most of the other kinds of objects defined in the Activity Vocabulary, including other Core types such as Activity, IntransitiveActivity, Collection and OrderedCollection. | An Activity is a subtype of Object that describes some form of action that may happen, is currently happening, or has already happened. The Activity type itself serves as an abstract base type for all types of activities. It is important to note that the Activity type itself does not carry any specific semantics about the kind of action being taken. | Indicates that the actor is "flagging" the object. Flagging is defined in the sense common to many social platforms as reporting content as being inappropriate for any number of reasons.
   */
  type: (
    | {
        "@id": "Object";
      }
    | {
        "@id": "Activity";
      }
    | {
        "@id": "Flag";
      }
  )[];
  /**
   * Identifies a resource attached or related to an object that potentially requires special handling. The intent is to provide a model that is at least semantically similar to attachments in email.
   */
  attachment?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more entities to which this object is attributed. The attributed entities might not be Actors. For instance, an object might be attributed to the completion of another activity.
   */
  attributedTo?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more entities that represent the total population of entities for which the object can considered to be relevant.
   */
  audience?: (ActivityPubObject | Link)[];
  /**
   * The content or textual representation of the Object encoded as a JSON string. By default, the value of content is HTML. The mediaType property can be used in the object to indicate a different content type. The content MAY be expressed using multiple language-tagged values.
   */
  content?: (string | string)[];
  /**
   * Identifies the context within which the object exists or an activity was performed. The notion of "context" used is intentionally vague. The intended function is to serve as a means of grouping objects and activities that share a common originating context or purpose. An example could be all activities relating to a common project or event.
   */
  context?: (ActivityPubObject | Link)[];
  /**
   * A simple, human-readable, plain-text name for the object. HTML markup MUST NOT be included. The name MAY be expressed using multiple language-tagged values.
   */
  name?: (string | string)[];
  /**
   * The date and time describing the actual or expected ending time of the object. When used with an Activity object, for instance, the endTime property specifies the moment the activity concluded or is expected to conclude.
   */
  endTime?: string;
  /**
   * Identifies the entity (e.g. an application) that generated the object.
   */
  generator?: (ActivityPubObject | Link)[];
  /**
   * Indicates an entity that describes an icon for this object. The image should have an aspect ratio of one (horizontal) to one (vertical) and should be suitable for presentation at a small size.
   */
  icon?: (Image | Link)[];
  /**
   * Indicates an entity that describes an image for this object. Unlike the icon property, there are no aspect ratio or display size limitations assumed.
   */
  image?: (Image | Link)[];
  /**
   * Indicates one or more entities for which this object is considered a response.
   */
  inReplyTo?: (ActivityPubObject | Link)[];
  /**
   * Indicates one or more physical or logical locations associated with the object.
   */
  location?: (ActivityPubObject | Link)[];
  /**
   * Identifies an entity that provides a preview of this object.
   */
  preview?: (ActivityPubObject | Link)[];
  /**
   * The date and time at which the object was published
   */
  published?: string;
  /**
   * Identifies a Collection containing objects considered to be responses to this object.
   */
  replies?: Collection;
  /**
   * The date and time describing the actual or expected starting time of the object. When used with an Activity object, for instance, the startTime property specifies the moment the activity began or is scheduled to begin.
   */
  startTime?: string;
  /**
   * A natural language summarization of the object encoded as HTML. Multiple language tagged summaries MAY be provided.
   */
  summary?: (string | string)[];
  /**
   * One or more "tags" that have been associated with an objects. A tag can be any kind of Object. The key difference between attachment and tag is that the former implies association by inclusion, while the latter implies associated by reference.
   */
  tag?: (ActivityPubObject | Link)[];
  /**
   * The date and time at which the object was updated
   */
  updated?: string;
  /**
   * Identifies one or more links to representations of the object
   */
  url?: (string | Link)[];
  /**
   * Identifies an entity considered to be part of the public primary audience of an Object
   */
  to?: (ActivityPubObject | Link)[];
  /**
   * Identifies an Object that is part of the private primary audience of this Object.
   */
  bto?: (ActivityPubObject | Link)[];
  /**
   * Identifies an Object that is part of the public secondary audience of this Object.
   */
  cc?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more Objects that are part of the private secondary audience of this Object.
   */
  bcc?: (ActivityPubObject | Link)[];
  /**
   * When used on a Link, identifies the MIME media type of the referenced resource. When used on an Object, identifies the MIME media type of the value of the content property. If not specified, the content property is assumed to contain text/html content.
   */
  mediaType?: string;
  /**
   * When the object describes a time-bound resource, such as an audio or video, a meeting, etc, the duration property indicates the object's approximate duration. The value MUST be expressed as an xsd:duration as defined by [ xmlschema11-2], section 3.3.6 (e.g. a period of 5 seconds is represented as "PT5S").
   */
  duration?: string;
  /**
   * Describes one or more entities that either performed or are expected to perform the activity. Any single activity can have multiple actors. The actor MAY be specified using an indirect Link.
   */
  actor?: (ActivityPubObject | Link)[];
  /**
   * When used within an Activity, describes the direct object of the activity. For instance, in the activity "John added a movie to his wishlist", the object of the activity is the movie added. When used within a Relationship describes the entity to which the subject is related.
   */
  object?: (ActivityPubObject | Link)[];
  /**
   * Describes the indirect object, or target, of the activity. The precise meaning of the target is largely dependent on the type of action being described but will often be the object of the English preposition "to". For instance, in the activity "John added a movie to his wishlist", the target of the activity is John's wishlist. An activity can have more than one target.
   */
  target?: (ActivityPubObject | Link)[];
  /**
   * Describes the result of the activity. For instance, if a particular action results in the creation of a new resource, the result property can be used to describe that new resource.
   */
  result?: (ActivityPubObject | Link)[];
  /**
   * Describes an indirect object of the activity from which the activity is directed. The precise meaning of the origin is the object of the English preposition "from". For instance, in the activity "John moved an item to List B from List A", the origin of the activity is "List A".
   */
  origin?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more objects used (or to be used) in the completion of an Activity.
   */
  instrument?: (ActivityPubObject | Link)[];
}

/**
 * Dislike Type
 */
export interface Dislike {
  "@id"?: string;
  "@context"?: ContextDefinition;
  /**
   * Describes an object of any kind. The Object type serves as the base type for most of the other kinds of objects defined in the Activity Vocabulary, including other Core types such as Activity, IntransitiveActivity, Collection and OrderedCollection. | An Activity is a subtype of Object that describes some form of action that may happen, is currently happening, or has already happened. The Activity type itself serves as an abstract base type for all types of activities. It is important to note that the Activity type itself does not carry any specific semantics about the kind of action being taken. | Indicates that the actor dislikes the object.
   */
  type: (
    | {
        "@id": "Object";
      }
    | {
        "@id": "Activity";
      }
    | {
        "@id": "Dislike";
      }
  )[];
  /**
   * Identifies a resource attached or related to an object that potentially requires special handling. The intent is to provide a model that is at least semantically similar to attachments in email.
   */
  attachment?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more entities to which this object is attributed. The attributed entities might not be Actors. For instance, an object might be attributed to the completion of another activity.
   */
  attributedTo?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more entities that represent the total population of entities for which the object can considered to be relevant.
   */
  audience?: (ActivityPubObject | Link)[];
  /**
   * The content or textual representation of the Object encoded as a JSON string. By default, the value of content is HTML. The mediaType property can be used in the object to indicate a different content type. The content MAY be expressed using multiple language-tagged values.
   */
  content?: (string | string)[];
  /**
   * Identifies the context within which the object exists or an activity was performed. The notion of "context" used is intentionally vague. The intended function is to serve as a means of grouping objects and activities that share a common originating context or purpose. An example could be all activities relating to a common project or event.
   */
  context?: (ActivityPubObject | Link)[];
  /**
   * A simple, human-readable, plain-text name for the object. HTML markup MUST NOT be included. The name MAY be expressed using multiple language-tagged values.
   */
  name?: (string | string)[];
  /**
   * The date and time describing the actual or expected ending time of the object. When used with an Activity object, for instance, the endTime property specifies the moment the activity concluded or is expected to conclude.
   */
  endTime?: string;
  /**
   * Identifies the entity (e.g. an application) that generated the object.
   */
  generator?: (ActivityPubObject | Link)[];
  /**
   * Indicates an entity that describes an icon for this object. The image should have an aspect ratio of one (horizontal) to one (vertical) and should be suitable for presentation at a small size.
   */
  icon?: (Image | Link)[];
  /**
   * Indicates an entity that describes an image for this object. Unlike the icon property, there are no aspect ratio or display size limitations assumed.
   */
  image?: (Image | Link)[];
  /**
   * Indicates one or more entities for which this object is considered a response.
   */
  inReplyTo?: (ActivityPubObject | Link)[];
  /**
   * Indicates one or more physical or logical locations associated with the object.
   */
  location?: (ActivityPubObject | Link)[];
  /**
   * Identifies an entity that provides a preview of this object.
   */
  preview?: (ActivityPubObject | Link)[];
  /**
   * The date and time at which the object was published
   */
  published?: string;
  /**
   * Identifies a Collection containing objects considered to be responses to this object.
   */
  replies?: Collection;
  /**
   * The date and time describing the actual or expected starting time of the object. When used with an Activity object, for instance, the startTime property specifies the moment the activity began or is scheduled to begin.
   */
  startTime?: string;
  /**
   * A natural language summarization of the object encoded as HTML. Multiple language tagged summaries MAY be provided.
   */
  summary?: (string | string)[];
  /**
   * One or more "tags" that have been associated with an objects. A tag can be any kind of Object. The key difference between attachment and tag is that the former implies association by inclusion, while the latter implies associated by reference.
   */
  tag?: (ActivityPubObject | Link)[];
  /**
   * The date and time at which the object was updated
   */
  updated?: string;
  /**
   * Identifies one or more links to representations of the object
   */
  url?: (string | Link)[];
  /**
   * Identifies an entity considered to be part of the public primary audience of an Object
   */
  to?: (ActivityPubObject | Link)[];
  /**
   * Identifies an Object that is part of the private primary audience of this Object.
   */
  bto?: (ActivityPubObject | Link)[];
  /**
   * Identifies an Object that is part of the public secondary audience of this Object.
   */
  cc?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more Objects that are part of the private secondary audience of this Object.
   */
  bcc?: (ActivityPubObject | Link)[];
  /**
   * When used on a Link, identifies the MIME media type of the referenced resource. When used on an Object, identifies the MIME media type of the value of the content property. If not specified, the content property is assumed to contain text/html content.
   */
  mediaType?: string;
  /**
   * When the object describes a time-bound resource, such as an audio or video, a meeting, etc, the duration property indicates the object's approximate duration. The value MUST be expressed as an xsd:duration as defined by [ xmlschema11-2], section 3.3.6 (e.g. a period of 5 seconds is represented as "PT5S").
   */
  duration?: string;
  /**
   * Describes one or more entities that either performed or are expected to perform the activity. Any single activity can have multiple actors. The actor MAY be specified using an indirect Link.
   */
  actor?: (ActivityPubObject | Link)[];
  /**
   * When used within an Activity, describes the direct object of the activity. For instance, in the activity "John added a movie to his wishlist", the object of the activity is the movie added. When used within a Relationship describes the entity to which the subject is related.
   */
  object?: (ActivityPubObject | Link)[];
  /**
   * Describes the indirect object, or target, of the activity. The precise meaning of the target is largely dependent on the type of action being described but will often be the object of the English preposition "to". For instance, in the activity "John added a movie to his wishlist", the target of the activity is John's wishlist. An activity can have more than one target.
   */
  target?: (ActivityPubObject | Link)[];
  /**
   * Describes the result of the activity. For instance, if a particular action results in the creation of a new resource, the result property can be used to describe that new resource.
   */
  result?: (ActivityPubObject | Link)[];
  /**
   * Describes an indirect object of the activity from which the activity is directed. The precise meaning of the origin is the object of the English preposition "from". For instance, in the activity "John moved an item to List B from List A", the origin of the activity is "List A".
   */
  origin?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more objects used (or to be used) in the completion of an Activity.
   */
  instrument?: (ActivityPubObject | Link)[];
}

/**
 * Question Type
 */
export interface Question {
  "@id"?: string;
  "@context"?: ContextDefinition;
  /**
   * Describes an object of any kind. The Object type serves as the base type for most of the other kinds of objects defined in the Activity Vocabulary, including other Core types such as Activity, IntransitiveActivity, Collection and OrderedCollection. | An Activity is a subtype of Object that describes some form of action that may happen, is currently happening, or has already happened. The Activity type itself serves as an abstract base type for all types of activities. It is important to note that the Activity type itself does not carry any specific semantics about the kind of action being taken. | Instances of IntransitiveActivity are a subtype of Activity representing intransitive actions. The object property is therefore inappropriate for these activities. |  Represents a question being asked. Question objects are an extension of IntransitiveActivity. That is, the Question object is an Activity, but the direct object is the question itself and therefore it would not contain an object property. Either of the anyOf and oneOf properties MAY be used to express possible answers, but a Question object MUST NOT have both properties.
   */
  type: (
    | {
        "@id": "Object";
      }
    | {
        "@id": "Activity";
      }
    | {
        "@id": "IntransitiveActivity";
      }
    | {
        "@id": "Question";
      }
  )[];
  /**
   * Identifies a resource attached or related to an object that potentially requires special handling. The intent is to provide a model that is at least semantically similar to attachments in email.
   */
  attachment?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more entities to which this object is attributed. The attributed entities might not be Actors. For instance, an object might be attributed to the completion of another activity.
   */
  attributedTo?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more entities that represent the total population of entities for which the object can considered to be relevant.
   */
  audience?: (ActivityPubObject | Link)[];
  /**
   * The content or textual representation of the Object encoded as a JSON string. By default, the value of content is HTML. The mediaType property can be used in the object to indicate a different content type. The content MAY be expressed using multiple language-tagged values.
   */
  content?: (string | string)[];
  /**
   * Identifies the context within which the object exists or an activity was performed. The notion of "context" used is intentionally vague. The intended function is to serve as a means of grouping objects and activities that share a common originating context or purpose. An example could be all activities relating to a common project or event.
   */
  context?: (ActivityPubObject | Link)[];
  /**
   * A simple, human-readable, plain-text name for the object. HTML markup MUST NOT be included. The name MAY be expressed using multiple language-tagged values.
   */
  name?: (string | string)[];
  /**
   * The date and time describing the actual or expected ending time of the object. When used with an Activity object, for instance, the endTime property specifies the moment the activity concluded or is expected to conclude.
   */
  endTime?: string;
  /**
   * Identifies the entity (e.g. an application) that generated the object.
   */
  generator?: (ActivityPubObject | Link)[];
  /**
   * Indicates an entity that describes an icon for this object. The image should have an aspect ratio of one (horizontal) to one (vertical) and should be suitable for presentation at a small size.
   */
  icon?: (Image | Link)[];
  /**
   * Indicates an entity that describes an image for this object. Unlike the icon property, there are no aspect ratio or display size limitations assumed.
   */
  image?: (Image | Link)[];
  /**
   * Indicates one or more entities for which this object is considered a response.
   */
  inReplyTo?: (ActivityPubObject | Link)[];
  /**
   * Indicates one or more physical or logical locations associated with the object.
   */
  location?: (ActivityPubObject | Link)[];
  /**
   * Identifies an entity that provides a preview of this object.
   */
  preview?: (ActivityPubObject | Link)[];
  /**
   * The date and time at which the object was published
   */
  published?: string;
  /**
   * Identifies a Collection containing objects considered to be responses to this object.
   */
  replies?: Collection;
  /**
   * The date and time describing the actual or expected starting time of the object. When used with an Activity object, for instance, the startTime property specifies the moment the activity began or is scheduled to begin.
   */
  startTime?: string;
  /**
   * A natural language summarization of the object encoded as HTML. Multiple language tagged summaries MAY be provided.
   */
  summary?: (string | string)[];
  /**
   * One or more "tags" that have been associated with an objects. A tag can be any kind of Object. The key difference between attachment and tag is that the former implies association by inclusion, while the latter implies associated by reference.
   */
  tag?: (ActivityPubObject | Link)[];
  /**
   * The date and time at which the object was updated
   */
  updated?: string;
  /**
   * Identifies one or more links to representations of the object
   */
  url?: (string | Link)[];
  /**
   * Identifies an entity considered to be part of the public primary audience of an Object
   */
  to?: (ActivityPubObject | Link)[];
  /**
   * Identifies an Object that is part of the private primary audience of this Object.
   */
  bto?: (ActivityPubObject | Link)[];
  /**
   * Identifies an Object that is part of the public secondary audience of this Object.
   */
  cc?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more Objects that are part of the private secondary audience of this Object.
   */
  bcc?: (ActivityPubObject | Link)[];
  /**
   * When used on a Link, identifies the MIME media type of the referenced resource. When used on an Object, identifies the MIME media type of the value of the content property. If not specified, the content property is assumed to contain text/html content.
   */
  mediaType?: string;
  /**
   * When the object describes a time-bound resource, such as an audio or video, a meeting, etc, the duration property indicates the object's approximate duration. The value MUST be expressed as an xsd:duration as defined by [ xmlschema11-2], section 3.3.6 (e.g. a period of 5 seconds is represented as "PT5S").
   */
  duration?: string;
  /**
   * Describes one or more entities that either performed or are expected to perform the activity. Any single activity can have multiple actors. The actor MAY be specified using an indirect Link.
   */
  actor?: (ActivityPubObject | Link)[];
  /**
   * When used within an Activity, describes the direct object of the activity. For instance, in the activity "John added a movie to his wishlist", the object of the activity is the movie added. When used within a Relationship describes the entity to which the subject is related.
   */
  object?: (ActivityPubObject | Link)[];
  /**
   * Describes the indirect object, or target, of the activity. The precise meaning of the target is largely dependent on the type of action being described but will often be the object of the English preposition "to". For instance, in the activity "John added a movie to his wishlist", the target of the activity is John's wishlist. An activity can have more than one target.
   */
  target?: (ActivityPubObject | Link)[];
  /**
   * Describes the result of the activity. For instance, if a particular action results in the creation of a new resource, the result property can be used to describe that new resource.
   */
  result?: (ActivityPubObject | Link)[];
  /**
   * Describes an indirect object of the activity from which the activity is directed. The precise meaning of the origin is the object of the English preposition "from". For instance, in the activity "John moved an item to List B from List A", the origin of the activity is "List A".
   */
  origin?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more objects used (or to be used) in the completion of an Activity.
   */
  instrument?: (ActivityPubObject | Link)[];
  /**
   * Indicates that a question has been closed, and answers are no longer accepted.
   */
  closed?: (ActivityPubObject | Link | string | boolean)[];
}

/**
 * Actor Type
 */
export interface Actor {
  "@id"?: string;
  "@context"?: ContextDefinition;
  /**
   * Describes an object of any kind. The Object type serves as the base type for most of the other kinds of objects defined in the Activity Vocabulary, including other Core types such as Activity, IntransitiveActivity, Collection and OrderedCollection.
   */
  type: {
    "@id": "Object";
  };
  /**
   * Identifies a resource attached or related to an object that potentially requires special handling. The intent is to provide a model that is at least semantically similar to attachments in email.
   */
  attachment?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more entities to which this object is attributed. The attributed entities might not be Actors. For instance, an object might be attributed to the completion of another activity.
   */
  attributedTo?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more entities that represent the total population of entities for which the object can considered to be relevant.
   */
  audience?: (ActivityPubObject | Link)[];
  /**
   * The content or textual representation of the Object encoded as a JSON string. By default, the value of content is HTML. The mediaType property can be used in the object to indicate a different content type. The content MAY be expressed using multiple language-tagged values.
   */
  content?: (string | string)[];
  /**
   * Identifies the context within which the object exists or an activity was performed. The notion of "context" used is intentionally vague. The intended function is to serve as a means of grouping objects and activities that share a common originating context or purpose. An example could be all activities relating to a common project or event.
   */
  context?: (ActivityPubObject | Link)[];
  /**
   * A simple, human-readable, plain-text name for the object. HTML markup MUST NOT be included. The name MAY be expressed using multiple language-tagged values.
   */
  name?: (string | string)[];
  /**
   * The date and time describing the actual or expected ending time of the object. When used with an Activity object, for instance, the endTime property specifies the moment the activity concluded or is expected to conclude.
   */
  endTime?: string;
  /**
   * Identifies the entity (e.g. an application) that generated the object.
   */
  generator?: (ActivityPubObject | Link)[];
  /**
   * Indicates an entity that describes an icon for this object. The image should have an aspect ratio of one (horizontal) to one (vertical) and should be suitable for presentation at a small size.
   */
  icon?: (Image | Link)[];
  /**
   * Indicates an entity that describes an image for this object. Unlike the icon property, there are no aspect ratio or display size limitations assumed.
   */
  image?: (Image | Link)[];
  /**
   * Indicates one or more entities for which this object is considered a response.
   */
  inReplyTo?: (ActivityPubObject | Link)[];
  /**
   * Indicates one or more physical or logical locations associated with the object.
   */
  location?: (ActivityPubObject | Link)[];
  /**
   * Identifies an entity that provides a preview of this object.
   */
  preview?: (ActivityPubObject | Link)[];
  /**
   * The date and time at which the object was published
   */
  published?: string;
  /**
   * Identifies a Collection containing objects considered to be responses to this object.
   */
  replies?: Collection;
  /**
   * The date and time describing the actual or expected starting time of the object. When used with an Activity object, for instance, the startTime property specifies the moment the activity began or is scheduled to begin.
   */
  startTime?: string;
  /**
   * A natural language summarization of the object encoded as HTML. Multiple language tagged summaries MAY be provided.
   */
  summary?: (string | string)[];
  /**
   * One or more "tags" that have been associated with an objects. A tag can be any kind of Object. The key difference between attachment and tag is that the former implies association by inclusion, while the latter implies associated by reference.
   */
  tag?: (ActivityPubObject | Link)[];
  /**
   * The date and time at which the object was updated
   */
  updated?: string;
  /**
   * Identifies one or more links to representations of the object
   */
  url?: (string | Link)[];
  /**
   * Identifies an entity considered to be part of the public primary audience of an Object
   */
  to?: (ActivityPubObject | Link)[];
  /**
   * Identifies an Object that is part of the private primary audience of this Object.
   */
  bto?: (ActivityPubObject | Link)[];
  /**
   * Identifies an Object that is part of the public secondary audience of this Object.
   */
  cc?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more Objects that are part of the private secondary audience of this Object.
   */
  bcc?: (ActivityPubObject | Link)[];
  /**
   * When used on a Link, identifies the MIME media type of the referenced resource. When used on an Object, identifies the MIME media type of the value of the content property. If not specified, the content property is assumed to contain text/html content.
   */
  mediaType?: string;
  /**
   * When the object describes a time-bound resource, such as an audio or video, a meeting, etc, the duration property indicates the object's approximate duration. The value MUST be expressed as an xsd:duration as defined by [ xmlschema11-2], section 3.3.6 (e.g. a period of 5 seconds is represented as "PT5S").
   */
  duration?: string;
  /**
   * A reference to an [ActivityStreams] OrderedCollection comprised of all the messages received by the actor.
   */
  inbox: OrderedCollection;
  /**
   * An [ActivityStreams] OrderedCollection comprised of all the messages produced by the actor.
   */
  outbox: OrderedCollection;
  /**
   * A link to an [ActivityStreams] collection of the actors that this actor is following
   */
  following?: Collection;
  /**
   * A link to an [ActivityStreams] collection of the actors that follow this actor.
   */
  followers?: Collection;
  /**
   * A link to an [ActivityStreams] collection of objects this actor has liked.
   */
  liked?: Collection;
  /**
   * A list of supplementary Collections which may be of interest.
   */
  streams?: Collection;
  /**
   * A short username which may be used to refer to the actor, with no uniqueness guarantees.
   */
  preferredUsername?: string;
}

/**
 * Application Type
 */
export interface Application {
  "@id"?: string;
  "@context"?: ContextDefinition;
  /**
   * Describes an object of any kind. The Object type serves as the base type for most of the other kinds of objects defined in the Activity Vocabulary, including other Core types such as Activity, IntransitiveActivity, Collection and OrderedCollection. | Describes a software application.
   */
  type: (
    | {
        "@id": "Object";
      }
    | {
        "@id": "Application";
      }
  )[];
  /**
   * Identifies a resource attached or related to an object that potentially requires special handling. The intent is to provide a model that is at least semantically similar to attachments in email.
   */
  attachment?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more entities to which this object is attributed. The attributed entities might not be Actors. For instance, an object might be attributed to the completion of another activity.
   */
  attributedTo?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more entities that represent the total population of entities for which the object can considered to be relevant.
   */
  audience?: (ActivityPubObject | Link)[];
  /**
   * The content or textual representation of the Object encoded as a JSON string. By default, the value of content is HTML. The mediaType property can be used in the object to indicate a different content type. The content MAY be expressed using multiple language-tagged values.
   */
  content?: (string | string)[];
  /**
   * Identifies the context within which the object exists or an activity was performed. The notion of "context" used is intentionally vague. The intended function is to serve as a means of grouping objects and activities that share a common originating context or purpose. An example could be all activities relating to a common project or event.
   */
  context?: (ActivityPubObject | Link)[];
  /**
   * A simple, human-readable, plain-text name for the object. HTML markup MUST NOT be included. The name MAY be expressed using multiple language-tagged values.
   */
  name?: (string | string)[];
  /**
   * The date and time describing the actual or expected ending time of the object. When used with an Activity object, for instance, the endTime property specifies the moment the activity concluded or is expected to conclude.
   */
  endTime?: string;
  /**
   * Identifies the entity (e.g. an application) that generated the object.
   */
  generator?: (ActivityPubObject | Link)[];
  /**
   * Indicates an entity that describes an icon for this object. The image should have an aspect ratio of one (horizontal) to one (vertical) and should be suitable for presentation at a small size.
   */
  icon?: (Image | Link)[];
  /**
   * Indicates an entity that describes an image for this object. Unlike the icon property, there are no aspect ratio or display size limitations assumed.
   */
  image?: (Image | Link)[];
  /**
   * Indicates one or more entities for which this object is considered a response.
   */
  inReplyTo?: (ActivityPubObject | Link)[];
  /**
   * Indicates one or more physical or logical locations associated with the object.
   */
  location?: (ActivityPubObject | Link)[];
  /**
   * Identifies an entity that provides a preview of this object.
   */
  preview?: (ActivityPubObject | Link)[];
  /**
   * The date and time at which the object was published
   */
  published?: string;
  /**
   * Identifies a Collection containing objects considered to be responses to this object.
   */
  replies?: Collection;
  /**
   * The date and time describing the actual or expected starting time of the object. When used with an Activity object, for instance, the startTime property specifies the moment the activity began or is scheduled to begin.
   */
  startTime?: string;
  /**
   * A natural language summarization of the object encoded as HTML. Multiple language tagged summaries MAY be provided.
   */
  summary?: (string | string)[];
  /**
   * One or more "tags" that have been associated with an objects. A tag can be any kind of Object. The key difference between attachment and tag is that the former implies association by inclusion, while the latter implies associated by reference.
   */
  tag?: (ActivityPubObject | Link)[];
  /**
   * The date and time at which the object was updated
   */
  updated?: string;
  /**
   * Identifies one or more links to representations of the object
   */
  url?: (string | Link)[];
  /**
   * Identifies an entity considered to be part of the public primary audience of an Object
   */
  to?: (ActivityPubObject | Link)[];
  /**
   * Identifies an Object that is part of the private primary audience of this Object.
   */
  bto?: (ActivityPubObject | Link)[];
  /**
   * Identifies an Object that is part of the public secondary audience of this Object.
   */
  cc?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more Objects that are part of the private secondary audience of this Object.
   */
  bcc?: (ActivityPubObject | Link)[];
  /**
   * When used on a Link, identifies the MIME media type of the referenced resource. When used on an Object, identifies the MIME media type of the value of the content property. If not specified, the content property is assumed to contain text/html content.
   */
  mediaType?: string;
  /**
   * When the object describes a time-bound resource, such as an audio or video, a meeting, etc, the duration property indicates the object's approximate duration. The value MUST be expressed as an xsd:duration as defined by [ xmlschema11-2], section 3.3.6 (e.g. a period of 5 seconds is represented as "PT5S").
   */
  duration?: string;
  /**
   * A reference to an [ActivityStreams] OrderedCollection comprised of all the messages received by the actor.
   */
  inbox: OrderedCollection;
  /**
   * An [ActivityStreams] OrderedCollection comprised of all the messages produced by the actor.
   */
  outbox: OrderedCollection;
  /**
   * A link to an [ActivityStreams] collection of the actors that this actor is following
   */
  following?: Collection;
  /**
   * A link to an [ActivityStreams] collection of the actors that follow this actor.
   */
  followers?: Collection;
  /**
   * A link to an [ActivityStreams] collection of objects this actor has liked.
   */
  liked?: Collection;
  /**
   * A list of supplementary Collections which may be of interest.
   */
  streams?: Collection;
  /**
   * A short username which may be used to refer to the actor, with no uniqueness guarantees.
   */
  preferredUsername?: string;
}

/**
 * Group Type
 */
export interface Group {
  "@id"?: string;
  "@context"?: ContextDefinition;
  /**
   * Describes an object of any kind. The Object type serves as the base type for most of the other kinds of objects defined in the Activity Vocabulary, including other Core types such as Activity, IntransitiveActivity, Collection and OrderedCollection. | Represents a formal or informal collective of Actors.
   */
  type: (
    | {
        "@id": "Object";
      }
    | {
        "@id": "Group";
      }
  )[];
  /**
   * Identifies a resource attached or related to an object that potentially requires special handling. The intent is to provide a model that is at least semantically similar to attachments in email.
   */
  attachment?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more entities to which this object is attributed. The attributed entities might not be Actors. For instance, an object might be attributed to the completion of another activity.
   */
  attributedTo?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more entities that represent the total population of entities for which the object can considered to be relevant.
   */
  audience?: (ActivityPubObject | Link)[];
  /**
   * The content or textual representation of the Object encoded as a JSON string. By default, the value of content is HTML. The mediaType property can be used in the object to indicate a different content type. The content MAY be expressed using multiple language-tagged values.
   */
  content?: (string | string)[];
  /**
   * Identifies the context within which the object exists or an activity was performed. The notion of "context" used is intentionally vague. The intended function is to serve as a means of grouping objects and activities that share a common originating context or purpose. An example could be all activities relating to a common project or event.
   */
  context?: (ActivityPubObject | Link)[];
  /**
   * A simple, human-readable, plain-text name for the object. HTML markup MUST NOT be included. The name MAY be expressed using multiple language-tagged values.
   */
  name?: (string | string)[];
  /**
   * The date and time describing the actual or expected ending time of the object. When used with an Activity object, for instance, the endTime property specifies the moment the activity concluded or is expected to conclude.
   */
  endTime?: string;
  /**
   * Identifies the entity (e.g. an application) that generated the object.
   */
  generator?: (ActivityPubObject | Link)[];
  /**
   * Indicates an entity that describes an icon for this object. The image should have an aspect ratio of one (horizontal) to one (vertical) and should be suitable for presentation at a small size.
   */
  icon?: (Image | Link)[];
  /**
   * Indicates an entity that describes an image for this object. Unlike the icon property, there are no aspect ratio or display size limitations assumed.
   */
  image?: (Image | Link)[];
  /**
   * Indicates one or more entities for which this object is considered a response.
   */
  inReplyTo?: (ActivityPubObject | Link)[];
  /**
   * Indicates one or more physical or logical locations associated with the object.
   */
  location?: (ActivityPubObject | Link)[];
  /**
   * Identifies an entity that provides a preview of this object.
   */
  preview?: (ActivityPubObject | Link)[];
  /**
   * The date and time at which the object was published
   */
  published?: string;
  /**
   * Identifies a Collection containing objects considered to be responses to this object.
   */
  replies?: Collection;
  /**
   * The date and time describing the actual or expected starting time of the object. When used with an Activity object, for instance, the startTime property specifies the moment the activity began or is scheduled to begin.
   */
  startTime?: string;
  /**
   * A natural language summarization of the object encoded as HTML. Multiple language tagged summaries MAY be provided.
   */
  summary?: (string | string)[];
  /**
   * One or more "tags" that have been associated with an objects. A tag can be any kind of Object. The key difference between attachment and tag is that the former implies association by inclusion, while the latter implies associated by reference.
   */
  tag?: (ActivityPubObject | Link)[];
  /**
   * The date and time at which the object was updated
   */
  updated?: string;
  /**
   * Identifies one or more links to representations of the object
   */
  url?: (string | Link)[];
  /**
   * Identifies an entity considered to be part of the public primary audience of an Object
   */
  to?: (ActivityPubObject | Link)[];
  /**
   * Identifies an Object that is part of the private primary audience of this Object.
   */
  bto?: (ActivityPubObject | Link)[];
  /**
   * Identifies an Object that is part of the public secondary audience of this Object.
   */
  cc?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more Objects that are part of the private secondary audience of this Object.
   */
  bcc?: (ActivityPubObject | Link)[];
  /**
   * When used on a Link, identifies the MIME media type of the referenced resource. When used on an Object, identifies the MIME media type of the value of the content property. If not specified, the content property is assumed to contain text/html content.
   */
  mediaType?: string;
  /**
   * When the object describes a time-bound resource, such as an audio or video, a meeting, etc, the duration property indicates the object's approximate duration. The value MUST be expressed as an xsd:duration as defined by [ xmlschema11-2], section 3.3.6 (e.g. a period of 5 seconds is represented as "PT5S").
   */
  duration?: string;
  /**
   * A reference to an [ActivityStreams] OrderedCollection comprised of all the messages received by the actor.
   */
  inbox: OrderedCollection;
  /**
   * An [ActivityStreams] OrderedCollection comprised of all the messages produced by the actor.
   */
  outbox: OrderedCollection;
  /**
   * A link to an [ActivityStreams] collection of the actors that this actor is following
   */
  following?: Collection;
  /**
   * A link to an [ActivityStreams] collection of the actors that follow this actor.
   */
  followers?: Collection;
  /**
   * A link to an [ActivityStreams] collection of objects this actor has liked.
   */
  liked?: Collection;
  /**
   * A list of supplementary Collections which may be of interest.
   */
  streams?: Collection;
  /**
   * A short username which may be used to refer to the actor, with no uniqueness guarantees.
   */
  preferredUsername?: string;
}

/**
 * Organization Type
 */
export interface Organization {
  "@id"?: string;
  "@context"?: ContextDefinition;
  /**
   * Describes an object of any kind. The Object type serves as the base type for most of the other kinds of objects defined in the Activity Vocabulary, including other Core types such as Activity, IntransitiveActivity, Collection and OrderedCollection. | Represents an organization.
   */
  type: (
    | {
        "@id": "Object";
      }
    | {
        "@id": "Organization";
      }
  )[];
  /**
   * Identifies a resource attached or related to an object that potentially requires special handling. The intent is to provide a model that is at least semantically similar to attachments in email.
   */
  attachment?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more entities to which this object is attributed. The attributed entities might not be Actors. For instance, an object might be attributed to the completion of another activity.
   */
  attributedTo?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more entities that represent the total population of entities for which the object can considered to be relevant.
   */
  audience?: (ActivityPubObject | Link)[];
  /**
   * The content or textual representation of the Object encoded as a JSON string. By default, the value of content is HTML. The mediaType property can be used in the object to indicate a different content type. The content MAY be expressed using multiple language-tagged values.
   */
  content?: (string | string)[];
  /**
   * Identifies the context within which the object exists or an activity was performed. The notion of "context" used is intentionally vague. The intended function is to serve as a means of grouping objects and activities that share a common originating context or purpose. An example could be all activities relating to a common project or event.
   */
  context?: (ActivityPubObject | Link)[];
  /**
   * A simple, human-readable, plain-text name for the object. HTML markup MUST NOT be included. The name MAY be expressed using multiple language-tagged values.
   */
  name?: (string | string)[];
  /**
   * The date and time describing the actual or expected ending time of the object. When used with an Activity object, for instance, the endTime property specifies the moment the activity concluded or is expected to conclude.
   */
  endTime?: string;
  /**
   * Identifies the entity (e.g. an application) that generated the object.
   */
  generator?: (ActivityPubObject | Link)[];
  /**
   * Indicates an entity that describes an icon for this object. The image should have an aspect ratio of one (horizontal) to one (vertical) and should be suitable for presentation at a small size.
   */
  icon?: (Image | Link)[];
  /**
   * Indicates an entity that describes an image for this object. Unlike the icon property, there are no aspect ratio or display size limitations assumed.
   */
  image?: (Image | Link)[];
  /**
   * Indicates one or more entities for which this object is considered a response.
   */
  inReplyTo?: (ActivityPubObject | Link)[];
  /**
   * Indicates one or more physical or logical locations associated with the object.
   */
  location?: (ActivityPubObject | Link)[];
  /**
   * Identifies an entity that provides a preview of this object.
   */
  preview?: (ActivityPubObject | Link)[];
  /**
   * The date and time at which the object was published
   */
  published?: string;
  /**
   * Identifies a Collection containing objects considered to be responses to this object.
   */
  replies?: Collection;
  /**
   * The date and time describing the actual or expected starting time of the object. When used with an Activity object, for instance, the startTime property specifies the moment the activity began or is scheduled to begin.
   */
  startTime?: string;
  /**
   * A natural language summarization of the object encoded as HTML. Multiple language tagged summaries MAY be provided.
   */
  summary?: (string | string)[];
  /**
   * One or more "tags" that have been associated with an objects. A tag can be any kind of Object. The key difference between attachment and tag is that the former implies association by inclusion, while the latter implies associated by reference.
   */
  tag?: (ActivityPubObject | Link)[];
  /**
   * The date and time at which the object was updated
   */
  updated?: string;
  /**
   * Identifies one or more links to representations of the object
   */
  url?: (string | Link)[];
  /**
   * Identifies an entity considered to be part of the public primary audience of an Object
   */
  to?: (ActivityPubObject | Link)[];
  /**
   * Identifies an Object that is part of the private primary audience of this Object.
   */
  bto?: (ActivityPubObject | Link)[];
  /**
   * Identifies an Object that is part of the public secondary audience of this Object.
   */
  cc?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more Objects that are part of the private secondary audience of this Object.
   */
  bcc?: (ActivityPubObject | Link)[];
  /**
   * When used on a Link, identifies the MIME media type of the referenced resource. When used on an Object, identifies the MIME media type of the value of the content property. If not specified, the content property is assumed to contain text/html content.
   */
  mediaType?: string;
  /**
   * When the object describes a time-bound resource, such as an audio or video, a meeting, etc, the duration property indicates the object's approximate duration. The value MUST be expressed as an xsd:duration as defined by [ xmlschema11-2], section 3.3.6 (e.g. a period of 5 seconds is represented as "PT5S").
   */
  duration?: string;
  /**
   * A reference to an [ActivityStreams] OrderedCollection comprised of all the messages received by the actor.
   */
  inbox: OrderedCollection;
  /**
   * An [ActivityStreams] OrderedCollection comprised of all the messages produced by the actor.
   */
  outbox: OrderedCollection;
  /**
   * A link to an [ActivityStreams] collection of the actors that this actor is following
   */
  following?: Collection;
  /**
   * A link to an [ActivityStreams] collection of the actors that follow this actor.
   */
  followers?: Collection;
  /**
   * A link to an [ActivityStreams] collection of objects this actor has liked.
   */
  liked?: Collection;
  /**
   * A list of supplementary Collections which may be of interest.
   */
  streams?: Collection;
  /**
   * A short username which may be used to refer to the actor, with no uniqueness guarantees.
   */
  preferredUsername?: string;
}

/**
 * Person Type
 */
export interface Person {
  "@id"?: string;
  "@context"?: ContextDefinition;
  /**
   * Describes an object of any kind. The Object type serves as the base type for most of the other kinds of objects defined in the Activity Vocabulary, including other Core types such as Activity, IntransitiveActivity, Collection and OrderedCollection. | Represents an individual person.
   */
  type: (
    | {
        "@id": "Object";
      }
    | {
        "@id": "Person";
      }
  )[];
  /**
   * Identifies a resource attached or related to an object that potentially requires special handling. The intent is to provide a model that is at least semantically similar to attachments in email.
   */
  attachment?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more entities to which this object is attributed. The attributed entities might not be Actors. For instance, an object might be attributed to the completion of another activity.
   */
  attributedTo?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more entities that represent the total population of entities for which the object can considered to be relevant.
   */
  audience?: (ActivityPubObject | Link)[];
  /**
   * The content or textual representation of the Object encoded as a JSON string. By default, the value of content is HTML. The mediaType property can be used in the object to indicate a different content type. The content MAY be expressed using multiple language-tagged values.
   */
  content?: (string | string)[];
  /**
   * Identifies the context within which the object exists or an activity was performed. The notion of "context" used is intentionally vague. The intended function is to serve as a means of grouping objects and activities that share a common originating context or purpose. An example could be all activities relating to a common project or event.
   */
  context?: (ActivityPubObject | Link)[];
  /**
   * A simple, human-readable, plain-text name for the object. HTML markup MUST NOT be included. The name MAY be expressed using multiple language-tagged values.
   */
  name?: (string | string)[];
  /**
   * The date and time describing the actual or expected ending time of the object. When used with an Activity object, for instance, the endTime property specifies the moment the activity concluded or is expected to conclude.
   */
  endTime?: string;
  /**
   * Identifies the entity (e.g. an application) that generated the object.
   */
  generator?: (ActivityPubObject | Link)[];
  /**
   * Indicates an entity that describes an icon for this object. The image should have an aspect ratio of one (horizontal) to one (vertical) and should be suitable for presentation at a small size.
   */
  icon?: (Image | Link)[];
  /**
   * Indicates an entity that describes an image for this object. Unlike the icon property, there are no aspect ratio or display size limitations assumed.
   */
  image?: (Image | Link)[];
  /**
   * Indicates one or more entities for which this object is considered a response.
   */
  inReplyTo?: (ActivityPubObject | Link)[];
  /**
   * Indicates one or more physical or logical locations associated with the object.
   */
  location?: (ActivityPubObject | Link)[];
  /**
   * Identifies an entity that provides a preview of this object.
   */
  preview?: (ActivityPubObject | Link)[];
  /**
   * The date and time at which the object was published
   */
  published?: string;
  /**
   * Identifies a Collection containing objects considered to be responses to this object.
   */
  replies?: Collection;
  /**
   * The date and time describing the actual or expected starting time of the object. When used with an Activity object, for instance, the startTime property specifies the moment the activity began or is scheduled to begin.
   */
  startTime?: string;
  /**
   * A natural language summarization of the object encoded as HTML. Multiple language tagged summaries MAY be provided.
   */
  summary?: (string | string)[];
  /**
   * One or more "tags" that have been associated with an objects. A tag can be any kind of Object. The key difference between attachment and tag is that the former implies association by inclusion, while the latter implies associated by reference.
   */
  tag?: (ActivityPubObject | Link)[];
  /**
   * The date and time at which the object was updated
   */
  updated?: string;
  /**
   * Identifies one or more links to representations of the object
   */
  url?: (string | Link)[];
  /**
   * Identifies an entity considered to be part of the public primary audience of an Object
   */
  to?: (ActivityPubObject | Link)[];
  /**
   * Identifies an Object that is part of the private primary audience of this Object.
   */
  bto?: (ActivityPubObject | Link)[];
  /**
   * Identifies an Object that is part of the public secondary audience of this Object.
   */
  cc?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more Objects that are part of the private secondary audience of this Object.
   */
  bcc?: (ActivityPubObject | Link)[];
  /**
   * When used on a Link, identifies the MIME media type of the referenced resource. When used on an Object, identifies the MIME media type of the value of the content property. If not specified, the content property is assumed to contain text/html content.
   */
  mediaType?: string;
  /**
   * When the object describes a time-bound resource, such as an audio or video, a meeting, etc, the duration property indicates the object's approximate duration. The value MUST be expressed as an xsd:duration as defined by [ xmlschema11-2], section 3.3.6 (e.g. a period of 5 seconds is represented as "PT5S").
   */
  duration?: string;
  /**
   * A reference to an [ActivityStreams] OrderedCollection comprised of all the messages received by the actor.
   */
  inbox: OrderedCollection;
  /**
   * An [ActivityStreams] OrderedCollection comprised of all the messages produced by the actor.
   */
  outbox: OrderedCollection;
  /**
   * A link to an [ActivityStreams] collection of the actors that this actor is following
   */
  following?: Collection;
  /**
   * A link to an [ActivityStreams] collection of the actors that follow this actor.
   */
  followers?: Collection;
  /**
   * A link to an [ActivityStreams] collection of objects this actor has liked.
   */
  liked?: Collection;
  /**
   * A list of supplementary Collections which may be of interest.
   */
  streams?: Collection;
  /**
   * A short username which may be used to refer to the actor, with no uniqueness guarantees.
   */
  preferredUsername?: string;
}

/**
 * Service Type
 */
export interface Service {
  "@id"?: string;
  "@context"?: ContextDefinition;
  /**
   * Describes an object of any kind. The Object type serves as the base type for most of the other kinds of objects defined in the Activity Vocabulary, including other Core types such as Activity, IntransitiveActivity, Collection and OrderedCollection. | Represents a service of any kind.
   */
  type: (
    | {
        "@id": "Object";
      }
    | {
        "@id": "Service";
      }
  )[];
  /**
   * Identifies a resource attached or related to an object that potentially requires special handling. The intent is to provide a model that is at least semantically similar to attachments in email.
   */
  attachment?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more entities to which this object is attributed. The attributed entities might not be Actors. For instance, an object might be attributed to the completion of another activity.
   */
  attributedTo?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more entities that represent the total population of entities for which the object can considered to be relevant.
   */
  audience?: (ActivityPubObject | Link)[];
  /**
   * The content or textual representation of the Object encoded as a JSON string. By default, the value of content is HTML. The mediaType property can be used in the object to indicate a different content type. The content MAY be expressed using multiple language-tagged values.
   */
  content?: (string | string)[];
  /**
   * Identifies the context within which the object exists or an activity was performed. The notion of "context" used is intentionally vague. The intended function is to serve as a means of grouping objects and activities that share a common originating context or purpose. An example could be all activities relating to a common project or event.
   */
  context?: (ActivityPubObject | Link)[];
  /**
   * A simple, human-readable, plain-text name for the object. HTML markup MUST NOT be included. The name MAY be expressed using multiple language-tagged values.
   */
  name?: (string | string)[];
  /**
   * The date and time describing the actual or expected ending time of the object. When used with an Activity object, for instance, the endTime property specifies the moment the activity concluded or is expected to conclude.
   */
  endTime?: string;
  /**
   * Identifies the entity (e.g. an application) that generated the object.
   */
  generator?: (ActivityPubObject | Link)[];
  /**
   * Indicates an entity that describes an icon for this object. The image should have an aspect ratio of one (horizontal) to one (vertical) and should be suitable for presentation at a small size.
   */
  icon?: (Image | Link)[];
  /**
   * Indicates an entity that describes an image for this object. Unlike the icon property, there are no aspect ratio or display size limitations assumed.
   */
  image?: (Image | Link)[];
  /**
   * Indicates one or more entities for which this object is considered a response.
   */
  inReplyTo?: (ActivityPubObject | Link)[];
  /**
   * Indicates one or more physical or logical locations associated with the object.
   */
  location?: (ActivityPubObject | Link)[];
  /**
   * Identifies an entity that provides a preview of this object.
   */
  preview?: (ActivityPubObject | Link)[];
  /**
   * The date and time at which the object was published
   */
  published?: string;
  /**
   * Identifies a Collection containing objects considered to be responses to this object.
   */
  replies?: Collection;
  /**
   * The date and time describing the actual or expected starting time of the object. When used with an Activity object, for instance, the startTime property specifies the moment the activity began or is scheduled to begin.
   */
  startTime?: string;
  /**
   * A natural language summarization of the object encoded as HTML. Multiple language tagged summaries MAY be provided.
   */
  summary?: (string | string)[];
  /**
   * One or more "tags" that have been associated with an objects. A tag can be any kind of Object. The key difference between attachment and tag is that the former implies association by inclusion, while the latter implies associated by reference.
   */
  tag?: (ActivityPubObject | Link)[];
  /**
   * The date and time at which the object was updated
   */
  updated?: string;
  /**
   * Identifies one or more links to representations of the object
   */
  url?: (string | Link)[];
  /**
   * Identifies an entity considered to be part of the public primary audience of an Object
   */
  to?: (ActivityPubObject | Link)[];
  /**
   * Identifies an Object that is part of the private primary audience of this Object.
   */
  bto?: (ActivityPubObject | Link)[];
  /**
   * Identifies an Object that is part of the public secondary audience of this Object.
   */
  cc?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more Objects that are part of the private secondary audience of this Object.
   */
  bcc?: (ActivityPubObject | Link)[];
  /**
   * When used on a Link, identifies the MIME media type of the referenced resource. When used on an Object, identifies the MIME media type of the value of the content property. If not specified, the content property is assumed to contain text/html content.
   */
  mediaType?: string;
  /**
   * When the object describes a time-bound resource, such as an audio or video, a meeting, etc, the duration property indicates the object's approximate duration. The value MUST be expressed as an xsd:duration as defined by [ xmlschema11-2], section 3.3.6 (e.g. a period of 5 seconds is represented as "PT5S").
   */
  duration?: string;
  /**
   * A reference to an [ActivityStreams] OrderedCollection comprised of all the messages received by the actor.
   */
  inbox: OrderedCollection;
  /**
   * An [ActivityStreams] OrderedCollection comprised of all the messages produced by the actor.
   */
  outbox: OrderedCollection;
  /**
   * A link to an [ActivityStreams] collection of the actors that this actor is following
   */
  following?: Collection;
  /**
   * A link to an [ActivityStreams] collection of the actors that follow this actor.
   */
  followers?: Collection;
  /**
   * A link to an [ActivityStreams] collection of objects this actor has liked.
   */
  liked?: Collection;
  /**
   * A list of supplementary Collections which may be of interest.
   */
  streams?: Collection;
  /**
   * A short username which may be used to refer to the actor, with no uniqueness guarantees.
   */
  preferredUsername?: string;
}

/**
 * Relationship Type
 */
export interface Relationship {
  "@id"?: string;
  "@context"?: ContextDefinition;
  /**
   * Describes an object of any kind. The Object type serves as the base type for most of the other kinds of objects defined in the Activity Vocabulary, including other Core types such as Activity, IntransitiveActivity, Collection and OrderedCollection. |  Describes a relationship between two individuals. The subject and object properties are used to identify the connected individuals. See 5.2 Representing Relationships Between Entities for additional information.
   */
  type: (
    | {
        "@id": "Object";
      }
    | {
        "@id": "Relationship";
      }
  )[];
  /**
   * Identifies a resource attached or related to an object that potentially requires special handling. The intent is to provide a model that is at least semantically similar to attachments in email.
   */
  attachment?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more entities to which this object is attributed. The attributed entities might not be Actors. For instance, an object might be attributed to the completion of another activity.
   */
  attributedTo?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more entities that represent the total population of entities for which the object can considered to be relevant.
   */
  audience?: (ActivityPubObject | Link)[];
  /**
   * The content or textual representation of the Object encoded as a JSON string. By default, the value of content is HTML. The mediaType property can be used in the object to indicate a different content type. The content MAY be expressed using multiple language-tagged values.
   */
  content?: (string | string)[];
  /**
   * Identifies the context within which the object exists or an activity was performed. The notion of "context" used is intentionally vague. The intended function is to serve as a means of grouping objects and activities that share a common originating context or purpose. An example could be all activities relating to a common project or event.
   */
  context?: (ActivityPubObject | Link)[];
  /**
   * A simple, human-readable, plain-text name for the object. HTML markup MUST NOT be included. The name MAY be expressed using multiple language-tagged values.
   */
  name?: (string | string)[];
  /**
   * The date and time describing the actual or expected ending time of the object. When used with an Activity object, for instance, the endTime property specifies the moment the activity concluded or is expected to conclude.
   */
  endTime?: string;
  /**
   * Identifies the entity (e.g. an application) that generated the object.
   */
  generator?: (ActivityPubObject | Link)[];
  /**
   * Indicates an entity that describes an icon for this object. The image should have an aspect ratio of one (horizontal) to one (vertical) and should be suitable for presentation at a small size.
   */
  icon?: (Image | Link)[];
  /**
   * Indicates an entity that describes an image for this object. Unlike the icon property, there are no aspect ratio or display size limitations assumed.
   */
  image?: (Image | Link)[];
  /**
   * Indicates one or more entities for which this object is considered a response.
   */
  inReplyTo?: (ActivityPubObject | Link)[];
  /**
   * Indicates one or more physical or logical locations associated with the object.
   */
  location?: (ActivityPubObject | Link)[];
  /**
   * Identifies an entity that provides a preview of this object.
   */
  preview?: (ActivityPubObject | Link)[];
  /**
   * The date and time at which the object was published
   */
  published?: string;
  /**
   * Identifies a Collection containing objects considered to be responses to this object.
   */
  replies?: Collection;
  /**
   * The date and time describing the actual or expected starting time of the object. When used with an Activity object, for instance, the startTime property specifies the moment the activity began or is scheduled to begin.
   */
  startTime?: string;
  /**
   * A natural language summarization of the object encoded as HTML. Multiple language tagged summaries MAY be provided.
   */
  summary?: (string | string)[];
  /**
   * One or more "tags" that have been associated with an objects. A tag can be any kind of Object. The key difference between attachment and tag is that the former implies association by inclusion, while the latter implies associated by reference.
   */
  tag?: (ActivityPubObject | Link)[];
  /**
   * The date and time at which the object was updated
   */
  updated?: string;
  /**
   * Identifies one or more links to representations of the object
   */
  url?: (string | Link)[];
  /**
   * Identifies an entity considered to be part of the public primary audience of an Object
   */
  to?: (ActivityPubObject | Link)[];
  /**
   * Identifies an Object that is part of the private primary audience of this Object.
   */
  bto?: (ActivityPubObject | Link)[];
  /**
   * Identifies an Object that is part of the public secondary audience of this Object.
   */
  cc?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more Objects that are part of the private secondary audience of this Object.
   */
  bcc?: (ActivityPubObject | Link)[];
  /**
   * When used on a Link, identifies the MIME media type of the referenced resource. When used on an Object, identifies the MIME media type of the value of the content property. If not specified, the content property is assumed to contain text/html content.
   */
  mediaType?: string;
  /**
   * When the object describes a time-bound resource, such as an audio or video, a meeting, etc, the duration property indicates the object's approximate duration. The value MUST be expressed as an xsd:duration as defined by [ xmlschema11-2], section 3.3.6 (e.g. a period of 5 seconds is represented as "PT5S").
   */
  duration?: string;
  /**
   * On a Relationship object, the relationship property identifies the kind of relationship that exists between subject and object.
   */
  relationship?: ActivityPubObject[];
}

/**
 * Article Type
 */
export interface Article {
  "@id"?: string;
  "@context"?: ContextDefinition;
  /**
   * Describes an object of any kind. The Object type serves as the base type for most of the other kinds of objects defined in the Activity Vocabulary, including other Core types such as Activity, IntransitiveActivity, Collection and OrderedCollection. | Represents any kind of multi-paragraph written work.
   */
  type: (
    | {
        "@id": "Object";
      }
    | {
        "@id": "Article";
      }
  )[];
  /**
   * Identifies a resource attached or related to an object that potentially requires special handling. The intent is to provide a model that is at least semantically similar to attachments in email.
   */
  attachment?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more entities to which this object is attributed. The attributed entities might not be Actors. For instance, an object might be attributed to the completion of another activity.
   */
  attributedTo?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more entities that represent the total population of entities for which the object can considered to be relevant.
   */
  audience?: (ActivityPubObject | Link)[];
  /**
   * The content or textual representation of the Object encoded as a JSON string. By default, the value of content is HTML. The mediaType property can be used in the object to indicate a different content type. The content MAY be expressed using multiple language-tagged values.
   */
  content?: (string | string)[];
  /**
   * Identifies the context within which the object exists or an activity was performed. The notion of "context" used is intentionally vague. The intended function is to serve as a means of grouping objects and activities that share a common originating context or purpose. An example could be all activities relating to a common project or event.
   */
  context?: (ActivityPubObject | Link)[];
  /**
   * A simple, human-readable, plain-text name for the object. HTML markup MUST NOT be included. The name MAY be expressed using multiple language-tagged values.
   */
  name?: (string | string)[];
  /**
   * The date and time describing the actual or expected ending time of the object. When used with an Activity object, for instance, the endTime property specifies the moment the activity concluded or is expected to conclude.
   */
  endTime?: string;
  /**
   * Identifies the entity (e.g. an application) that generated the object.
   */
  generator?: (ActivityPubObject | Link)[];
  /**
   * Indicates an entity that describes an icon for this object. The image should have an aspect ratio of one (horizontal) to one (vertical) and should be suitable for presentation at a small size.
   */
  icon?: (Image | Link)[];
  /**
   * Indicates an entity that describes an image for this object. Unlike the icon property, there are no aspect ratio or display size limitations assumed.
   */
  image?: (Image | Link)[];
  /**
   * Indicates one or more entities for which this object is considered a response.
   */
  inReplyTo?: (ActivityPubObject | Link)[];
  /**
   * Indicates one or more physical or logical locations associated with the object.
   */
  location?: (ActivityPubObject | Link)[];
  /**
   * Identifies an entity that provides a preview of this object.
   */
  preview?: (ActivityPubObject | Link)[];
  /**
   * The date and time at which the object was published
   */
  published?: string;
  /**
   * Identifies a Collection containing objects considered to be responses to this object.
   */
  replies?: Collection;
  /**
   * The date and time describing the actual or expected starting time of the object. When used with an Activity object, for instance, the startTime property specifies the moment the activity began or is scheduled to begin.
   */
  startTime?: string;
  /**
   * A natural language summarization of the object encoded as HTML. Multiple language tagged summaries MAY be provided.
   */
  summary?: (string | string)[];
  /**
   * One or more "tags" that have been associated with an objects. A tag can be any kind of Object. The key difference between attachment and tag is that the former implies association by inclusion, while the latter implies associated by reference.
   */
  tag?: (ActivityPubObject | Link)[];
  /**
   * The date and time at which the object was updated
   */
  updated?: string;
  /**
   * Identifies one or more links to representations of the object
   */
  url?: (string | Link)[];
  /**
   * Identifies an entity considered to be part of the public primary audience of an Object
   */
  to?: (ActivityPubObject | Link)[];
  /**
   * Identifies an Object that is part of the private primary audience of this Object.
   */
  bto?: (ActivityPubObject | Link)[];
  /**
   * Identifies an Object that is part of the public secondary audience of this Object.
   */
  cc?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more Objects that are part of the private secondary audience of this Object.
   */
  bcc?: (ActivityPubObject | Link)[];
  /**
   * When used on a Link, identifies the MIME media type of the referenced resource. When used on an Object, identifies the MIME media type of the value of the content property. If not specified, the content property is assumed to contain text/html content.
   */
  mediaType?: string;
  /**
   * When the object describes a time-bound resource, such as an audio or video, a meeting, etc, the duration property indicates the object's approximate duration. The value MUST be expressed as an xsd:duration as defined by [ xmlschema11-2], section 3.3.6 (e.g. a period of 5 seconds is represented as "PT5S").
   */
  duration?: string;
}

/**
 * Document Type
 */
export interface Document {
  "@id"?: string;
  "@context"?: ContextDefinition;
  /**
   * Describes an object of any kind. The Object type serves as the base type for most of the other kinds of objects defined in the Activity Vocabulary, including other Core types such as Activity, IntransitiveActivity, Collection and OrderedCollection. | Represents a document of any kind.
   */
  type: (
    | {
        "@id": "Object";
      }
    | {
        "@id": "Document";
      }
  )[];
  /**
   * Identifies a resource attached or related to an object that potentially requires special handling. The intent is to provide a model that is at least semantically similar to attachments in email.
   */
  attachment?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more entities to which this object is attributed. The attributed entities might not be Actors. For instance, an object might be attributed to the completion of another activity.
   */
  attributedTo?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more entities that represent the total population of entities for which the object can considered to be relevant.
   */
  audience?: (ActivityPubObject | Link)[];
  /**
   * The content or textual representation of the Object encoded as a JSON string. By default, the value of content is HTML. The mediaType property can be used in the object to indicate a different content type. The content MAY be expressed using multiple language-tagged values.
   */
  content?: (string | string)[];
  /**
   * Identifies the context within which the object exists or an activity was performed. The notion of "context" used is intentionally vague. The intended function is to serve as a means of grouping objects and activities that share a common originating context or purpose. An example could be all activities relating to a common project or event.
   */
  context?: (ActivityPubObject | Link)[];
  /**
   * A simple, human-readable, plain-text name for the object. HTML markup MUST NOT be included. The name MAY be expressed using multiple language-tagged values.
   */
  name?: (string | string)[];
  /**
   * The date and time describing the actual or expected ending time of the object. When used with an Activity object, for instance, the endTime property specifies the moment the activity concluded or is expected to conclude.
   */
  endTime?: string;
  /**
   * Identifies the entity (e.g. an application) that generated the object.
   */
  generator?: (ActivityPubObject | Link)[];
  /**
   * Indicates an entity that describes an icon for this object. The image should have an aspect ratio of one (horizontal) to one (vertical) and should be suitable for presentation at a small size.
   */
  icon?: (Image | Link)[];
  /**
   * Indicates an entity that describes an image for this object. Unlike the icon property, there are no aspect ratio or display size limitations assumed.
   */
  image?: (Image | Link)[];
  /**
   * Indicates one or more entities for which this object is considered a response.
   */
  inReplyTo?: (ActivityPubObject | Link)[];
  /**
   * Indicates one or more physical or logical locations associated with the object.
   */
  location?: (ActivityPubObject | Link)[];
  /**
   * Identifies an entity that provides a preview of this object.
   */
  preview?: (ActivityPubObject | Link)[];
  /**
   * The date and time at which the object was published
   */
  published?: string;
  /**
   * Identifies a Collection containing objects considered to be responses to this object.
   */
  replies?: Collection;
  /**
   * The date and time describing the actual or expected starting time of the object. When used with an Activity object, for instance, the startTime property specifies the moment the activity began or is scheduled to begin.
   */
  startTime?: string;
  /**
   * A natural language summarization of the object encoded as HTML. Multiple language tagged summaries MAY be provided.
   */
  summary?: (string | string)[];
  /**
   * One or more "tags" that have been associated with an objects. A tag can be any kind of Object. The key difference between attachment and tag is that the former implies association by inclusion, while the latter implies associated by reference.
   */
  tag?: (ActivityPubObject | Link)[];
  /**
   * The date and time at which the object was updated
   */
  updated?: string;
  /**
   * Identifies one or more links to representations of the object
   */
  url?: (string | Link)[];
  /**
   * Identifies an entity considered to be part of the public primary audience of an Object
   */
  to?: (ActivityPubObject | Link)[];
  /**
   * Identifies an Object that is part of the private primary audience of this Object.
   */
  bto?: (ActivityPubObject | Link)[];
  /**
   * Identifies an Object that is part of the public secondary audience of this Object.
   */
  cc?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more Objects that are part of the private secondary audience of this Object.
   */
  bcc?: (ActivityPubObject | Link)[];
  /**
   * When used on a Link, identifies the MIME media type of the referenced resource. When used on an Object, identifies the MIME media type of the value of the content property. If not specified, the content property is assumed to contain text/html content.
   */
  mediaType?: string;
  /**
   * When the object describes a time-bound resource, such as an audio or video, a meeting, etc, the duration property indicates the object's approximate duration. The value MUST be expressed as an xsd:duration as defined by [ xmlschema11-2], section 3.3.6 (e.g. a period of 5 seconds is represented as "PT5S").
   */
  duration?: string;
}

/**
 * Audio Type
 */
export interface Audio {
  "@id"?: string;
  "@context"?: ContextDefinition;
  /**
   * Describes an object of any kind. The Object type serves as the base type for most of the other kinds of objects defined in the Activity Vocabulary, including other Core types such as Activity, IntransitiveActivity, Collection and OrderedCollection. | Represents a document of any kind. | Represents an audio document of any kind.
   */
  type: (
    | {
        "@id": "Object";
      }
    | {
        "@id": "Document";
      }
    | {
        "@id": "Audio";
      }
  )[];
  /**
   * Identifies a resource attached or related to an object that potentially requires special handling. The intent is to provide a model that is at least semantically similar to attachments in email.
   */
  attachment?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more entities to which this object is attributed. The attributed entities might not be Actors. For instance, an object might be attributed to the completion of another activity.
   */
  attributedTo?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more entities that represent the total population of entities for which the object can considered to be relevant.
   */
  audience?: (ActivityPubObject | Link)[];
  /**
   * The content or textual representation of the Object encoded as a JSON string. By default, the value of content is HTML. The mediaType property can be used in the object to indicate a different content type. The content MAY be expressed using multiple language-tagged values.
   */
  content?: (string | string)[];
  /**
   * Identifies the context within which the object exists or an activity was performed. The notion of "context" used is intentionally vague. The intended function is to serve as a means of grouping objects and activities that share a common originating context or purpose. An example could be all activities relating to a common project or event.
   */
  context?: (ActivityPubObject | Link)[];
  /**
   * A simple, human-readable, plain-text name for the object. HTML markup MUST NOT be included. The name MAY be expressed using multiple language-tagged values.
   */
  name?: (string | string)[];
  /**
   * The date and time describing the actual or expected ending time of the object. When used with an Activity object, for instance, the endTime property specifies the moment the activity concluded or is expected to conclude.
   */
  endTime?: string;
  /**
   * Identifies the entity (e.g. an application) that generated the object.
   */
  generator?: (ActivityPubObject | Link)[];
  /**
   * Indicates an entity that describes an icon for this object. The image should have an aspect ratio of one (horizontal) to one (vertical) and should be suitable for presentation at a small size.
   */
  icon?: (Image | Link)[];
  /**
   * Indicates an entity that describes an image for this object. Unlike the icon property, there are no aspect ratio or display size limitations assumed.
   */
  image?: (Image | Link)[];
  /**
   * Indicates one or more entities for which this object is considered a response.
   */
  inReplyTo?: (ActivityPubObject | Link)[];
  /**
   * Indicates one or more physical or logical locations associated with the object.
   */
  location?: (ActivityPubObject | Link)[];
  /**
   * Identifies an entity that provides a preview of this object.
   */
  preview?: (ActivityPubObject | Link)[];
  /**
   * The date and time at which the object was published
   */
  published?: string;
  /**
   * Identifies a Collection containing objects considered to be responses to this object.
   */
  replies?: Collection;
  /**
   * The date and time describing the actual or expected starting time of the object. When used with an Activity object, for instance, the startTime property specifies the moment the activity began or is scheduled to begin.
   */
  startTime?: string;
  /**
   * A natural language summarization of the object encoded as HTML. Multiple language tagged summaries MAY be provided.
   */
  summary?: (string | string)[];
  /**
   * One or more "tags" that have been associated with an objects. A tag can be any kind of Object. The key difference between attachment and tag is that the former implies association by inclusion, while the latter implies associated by reference.
   */
  tag?: (ActivityPubObject | Link)[];
  /**
   * The date and time at which the object was updated
   */
  updated?: string;
  /**
   * Identifies one or more links to representations of the object
   */
  url?: (string | Link)[];
  /**
   * Identifies an entity considered to be part of the public primary audience of an Object
   */
  to?: (ActivityPubObject | Link)[];
  /**
   * Identifies an Object that is part of the private primary audience of this Object.
   */
  bto?: (ActivityPubObject | Link)[];
  /**
   * Identifies an Object that is part of the public secondary audience of this Object.
   */
  cc?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more Objects that are part of the private secondary audience of this Object.
   */
  bcc?: (ActivityPubObject | Link)[];
  /**
   * When used on a Link, identifies the MIME media type of the referenced resource. When used on an Object, identifies the MIME media type of the value of the content property. If not specified, the content property is assumed to contain text/html content.
   */
  mediaType?: string;
  /**
   * When the object describes a time-bound resource, such as an audio or video, a meeting, etc, the duration property indicates the object's approximate duration. The value MUST be expressed as an xsd:duration as defined by [ xmlschema11-2], section 3.3.6 (e.g. a period of 5 seconds is represented as "PT5S").
   */
  duration?: string;
}

/**
 * Image Type
 */
export interface Image {
  "@id"?: string;
  "@context"?: ContextDefinition;
  /**
   * Describes an object of any kind. The Object type serves as the base type for most of the other kinds of objects defined in the Activity Vocabulary, including other Core types such as Activity, IntransitiveActivity, Collection and OrderedCollection. | Represents a document of any kind. | An image document of any kind
   */
  type: (
    | {
        "@id": "Object";
      }
    | {
        "@id": "Document";
      }
    | {
        "@id": "Image";
      }
  )[];
  /**
   * Identifies a resource attached or related to an object that potentially requires special handling. The intent is to provide a model that is at least semantically similar to attachments in email.
   */
  attachment?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more entities to which this object is attributed. The attributed entities might not be Actors. For instance, an object might be attributed to the completion of another activity.
   */
  attributedTo?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more entities that represent the total population of entities for which the object can considered to be relevant.
   */
  audience?: (ActivityPubObject | Link)[];
  /**
   * The content or textual representation of the Object encoded as a JSON string. By default, the value of content is HTML. The mediaType property can be used in the object to indicate a different content type. The content MAY be expressed using multiple language-tagged values.
   */
  content?: (string | string)[];
  /**
   * Identifies the context within which the object exists or an activity was performed. The notion of "context" used is intentionally vague. The intended function is to serve as a means of grouping objects and activities that share a common originating context or purpose. An example could be all activities relating to a common project or event.
   */
  context?: (ActivityPubObject | Link)[];
  /**
   * A simple, human-readable, plain-text name for the object. HTML markup MUST NOT be included. The name MAY be expressed using multiple language-tagged values.
   */
  name?: (string | string)[];
  /**
   * The date and time describing the actual or expected ending time of the object. When used with an Activity object, for instance, the endTime property specifies the moment the activity concluded or is expected to conclude.
   */
  endTime?: string;
  /**
   * Identifies the entity (e.g. an application) that generated the object.
   */
  generator?: (ActivityPubObject | Link)[];
  /**
   * Indicates an entity that describes an icon for this object. The image should have an aspect ratio of one (horizontal) to one (vertical) and should be suitable for presentation at a small size.
   */
  icon?: (Image | Link)[];
  /**
   * Indicates an entity that describes an image for this object. Unlike the icon property, there are no aspect ratio or display size limitations assumed.
   */
  image?: (Image | Link)[];
  /**
   * Indicates one or more entities for which this object is considered a response.
   */
  inReplyTo?: (ActivityPubObject | Link)[];
  /**
   * Indicates one or more physical or logical locations associated with the object.
   */
  location?: (ActivityPubObject | Link)[];
  /**
   * Identifies an entity that provides a preview of this object.
   */
  preview?: (ActivityPubObject | Link)[];
  /**
   * The date and time at which the object was published
   */
  published?: string;
  /**
   * Identifies a Collection containing objects considered to be responses to this object.
   */
  replies?: Collection;
  /**
   * The date and time describing the actual or expected starting time of the object. When used with an Activity object, for instance, the startTime property specifies the moment the activity began or is scheduled to begin.
   */
  startTime?: string;
  /**
   * A natural language summarization of the object encoded as HTML. Multiple language tagged summaries MAY be provided.
   */
  summary?: (string | string)[];
  /**
   * One or more "tags" that have been associated with an objects. A tag can be any kind of Object. The key difference between attachment and tag is that the former implies association by inclusion, while the latter implies associated by reference.
   */
  tag?: (ActivityPubObject | Link)[];
  /**
   * The date and time at which the object was updated
   */
  updated?: string;
  /**
   * Identifies one or more links to representations of the object
   */
  url?: (string | Link)[];
  /**
   * Identifies an entity considered to be part of the public primary audience of an Object
   */
  to?: (ActivityPubObject | Link)[];
  /**
   * Identifies an Object that is part of the private primary audience of this Object.
   */
  bto?: (ActivityPubObject | Link)[];
  /**
   * Identifies an Object that is part of the public secondary audience of this Object.
   */
  cc?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more Objects that are part of the private secondary audience of this Object.
   */
  bcc?: (ActivityPubObject | Link)[];
  /**
   * When used on a Link, identifies the MIME media type of the referenced resource. When used on an Object, identifies the MIME media type of the value of the content property. If not specified, the content property is assumed to contain text/html content.
   */
  mediaType?: string;
  /**
   * When the object describes a time-bound resource, such as an audio or video, a meeting, etc, the duration property indicates the object's approximate duration. The value MUST be expressed as an xsd:duration as defined by [ xmlschema11-2], section 3.3.6 (e.g. a period of 5 seconds is represented as "PT5S").
   */
  duration?: string;
}

/**
 * Video Type
 */
export interface Video {
  "@id"?: string;
  "@context"?: ContextDefinition;
  /**
   * Describes an object of any kind. The Object type serves as the base type for most of the other kinds of objects defined in the Activity Vocabulary, including other Core types such as Activity, IntransitiveActivity, Collection and OrderedCollection. | Represents a document of any kind. | Represents a video document of any kind.
   */
  type: (
    | {
        "@id": "Object";
      }
    | {
        "@id": "Document";
      }
    | {
        "@id": "Video";
      }
  )[];
  /**
   * Identifies a resource attached or related to an object that potentially requires special handling. The intent is to provide a model that is at least semantically similar to attachments in email.
   */
  attachment?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more entities to which this object is attributed. The attributed entities might not be Actors. For instance, an object might be attributed to the completion of another activity.
   */
  attributedTo?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more entities that represent the total population of entities for which the object can considered to be relevant.
   */
  audience?: (ActivityPubObject | Link)[];
  /**
   * The content or textual representation of the Object encoded as a JSON string. By default, the value of content is HTML. The mediaType property can be used in the object to indicate a different content type. The content MAY be expressed using multiple language-tagged values.
   */
  content?: (string | string)[];
  /**
   * Identifies the context within which the object exists or an activity was performed. The notion of "context" used is intentionally vague. The intended function is to serve as a means of grouping objects and activities that share a common originating context or purpose. An example could be all activities relating to a common project or event.
   */
  context?: (ActivityPubObject | Link)[];
  /**
   * A simple, human-readable, plain-text name for the object. HTML markup MUST NOT be included. The name MAY be expressed using multiple language-tagged values.
   */
  name?: (string | string)[];
  /**
   * The date and time describing the actual or expected ending time of the object. When used with an Activity object, for instance, the endTime property specifies the moment the activity concluded or is expected to conclude.
   */
  endTime?: string;
  /**
   * Identifies the entity (e.g. an application) that generated the object.
   */
  generator?: (ActivityPubObject | Link)[];
  /**
   * Indicates an entity that describes an icon for this object. The image should have an aspect ratio of one (horizontal) to one (vertical) and should be suitable for presentation at a small size.
   */
  icon?: (Image | Link)[];
  /**
   * Indicates an entity that describes an image for this object. Unlike the icon property, there are no aspect ratio or display size limitations assumed.
   */
  image?: (Image | Link)[];
  /**
   * Indicates one or more entities for which this object is considered a response.
   */
  inReplyTo?: (ActivityPubObject | Link)[];
  /**
   * Indicates one or more physical or logical locations associated with the object.
   */
  location?: (ActivityPubObject | Link)[];
  /**
   * Identifies an entity that provides a preview of this object.
   */
  preview?: (ActivityPubObject | Link)[];
  /**
   * The date and time at which the object was published
   */
  published?: string;
  /**
   * Identifies a Collection containing objects considered to be responses to this object.
   */
  replies?: Collection;
  /**
   * The date and time describing the actual or expected starting time of the object. When used with an Activity object, for instance, the startTime property specifies the moment the activity began or is scheduled to begin.
   */
  startTime?: string;
  /**
   * A natural language summarization of the object encoded as HTML. Multiple language tagged summaries MAY be provided.
   */
  summary?: (string | string)[];
  /**
   * One or more "tags" that have been associated with an objects. A tag can be any kind of Object. The key difference between attachment and tag is that the former implies association by inclusion, while the latter implies associated by reference.
   */
  tag?: (ActivityPubObject | Link)[];
  /**
   * The date and time at which the object was updated
   */
  updated?: string;
  /**
   * Identifies one or more links to representations of the object
   */
  url?: (string | Link)[];
  /**
   * Identifies an entity considered to be part of the public primary audience of an Object
   */
  to?: (ActivityPubObject | Link)[];
  /**
   * Identifies an Object that is part of the private primary audience of this Object.
   */
  bto?: (ActivityPubObject | Link)[];
  /**
   * Identifies an Object that is part of the public secondary audience of this Object.
   */
  cc?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more Objects that are part of the private secondary audience of this Object.
   */
  bcc?: (ActivityPubObject | Link)[];
  /**
   * When used on a Link, identifies the MIME media type of the referenced resource. When used on an Object, identifies the MIME media type of the value of the content property. If not specified, the content property is assumed to contain text/html content.
   */
  mediaType?: string;
  /**
   * When the object describes a time-bound resource, such as an audio or video, a meeting, etc, the duration property indicates the object's approximate duration. The value MUST be expressed as an xsd:duration as defined by [ xmlschema11-2], section 3.3.6 (e.g. a period of 5 seconds is represented as "PT5S").
   */
  duration?: string;
}

/**
 * Note Type
 */
export interface Note {
  "@id"?: string;
  "@context"?: ContextDefinition;
  /**
   * Describes an object of any kind. The Object type serves as the base type for most of the other kinds of objects defined in the Activity Vocabulary, including other Core types such as Activity, IntransitiveActivity, Collection and OrderedCollection. | Represents a short written work typically less than a single paragraph in length.
   */
  type: (
    | {
        "@id": "Object";
      }
    | {
        "@id": "Note";
      }
  )[];
  /**
   * Identifies a resource attached or related to an object that potentially requires special handling. The intent is to provide a model that is at least semantically similar to attachments in email.
   */
  attachment?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more entities to which this object is attributed. The attributed entities might not be Actors. For instance, an object might be attributed to the completion of another activity.
   */
  attributedTo?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more entities that represent the total population of entities for which the object can considered to be relevant.
   */
  audience?: (ActivityPubObject | Link)[];
  /**
   * The content or textual representation of the Object encoded as a JSON string. By default, the value of content is HTML. The mediaType property can be used in the object to indicate a different content type. The content MAY be expressed using multiple language-tagged values.
   */
  content?: (string | string)[];
  /**
   * Identifies the context within which the object exists or an activity was performed. The notion of "context" used is intentionally vague. The intended function is to serve as a means of grouping objects and activities that share a common originating context or purpose. An example could be all activities relating to a common project or event.
   */
  context?: (ActivityPubObject | Link)[];
  /**
   * A simple, human-readable, plain-text name for the object. HTML markup MUST NOT be included. The name MAY be expressed using multiple language-tagged values.
   */
  name?: (string | string)[];
  /**
   * The date and time describing the actual or expected ending time of the object. When used with an Activity object, for instance, the endTime property specifies the moment the activity concluded or is expected to conclude.
   */
  endTime?: string;
  /**
   * Identifies the entity (e.g. an application) that generated the object.
   */
  generator?: (ActivityPubObject | Link)[];
  /**
   * Indicates an entity that describes an icon for this object. The image should have an aspect ratio of one (horizontal) to one (vertical) and should be suitable for presentation at a small size.
   */
  icon?: (Image | Link)[];
  /**
   * Indicates an entity that describes an image for this object. Unlike the icon property, there are no aspect ratio or display size limitations assumed.
   */
  image?: (Image | Link)[];
  /**
   * Indicates one or more entities for which this object is considered a response.
   */
  inReplyTo?: (ActivityPubObject | Link)[];
  /**
   * Indicates one or more physical or logical locations associated with the object.
   */
  location?: (ActivityPubObject | Link)[];
  /**
   * Identifies an entity that provides a preview of this object.
   */
  preview?: (ActivityPubObject | Link)[];
  /**
   * The date and time at which the object was published
   */
  published?: string;
  /**
   * Identifies a Collection containing objects considered to be responses to this object.
   */
  replies?: Collection;
  /**
   * The date and time describing the actual or expected starting time of the object. When used with an Activity object, for instance, the startTime property specifies the moment the activity began or is scheduled to begin.
   */
  startTime?: string;
  /**
   * A natural language summarization of the object encoded as HTML. Multiple language tagged summaries MAY be provided.
   */
  summary?: (string | string)[];
  /**
   * One or more "tags" that have been associated with an objects. A tag can be any kind of Object. The key difference between attachment and tag is that the former implies association by inclusion, while the latter implies associated by reference.
   */
  tag?: (ActivityPubObject | Link)[];
  /**
   * The date and time at which the object was updated
   */
  updated?: string;
  /**
   * Identifies one or more links to representations of the object
   */
  url?: (string | Link)[];
  /**
   * Identifies an entity considered to be part of the public primary audience of an Object
   */
  to?: (ActivityPubObject | Link)[];
  /**
   * Identifies an Object that is part of the private primary audience of this Object.
   */
  bto?: (ActivityPubObject | Link)[];
  /**
   * Identifies an Object that is part of the public secondary audience of this Object.
   */
  cc?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more Objects that are part of the private secondary audience of this Object.
   */
  bcc?: (ActivityPubObject | Link)[];
  /**
   * When used on a Link, identifies the MIME media type of the referenced resource. When used on an Object, identifies the MIME media type of the value of the content property. If not specified, the content property is assumed to contain text/html content.
   */
  mediaType?: string;
  /**
   * When the object describes a time-bound resource, such as an audio or video, a meeting, etc, the duration property indicates the object's approximate duration. The value MUST be expressed as an xsd:duration as defined by [ xmlschema11-2], section 3.3.6 (e.g. a period of 5 seconds is represented as "PT5S").
   */
  duration?: string;
}

/**
 * Page Type
 */
export interface Page {
  "@id"?: string;
  "@context"?: ContextDefinition;
  /**
   * Describes an object of any kind. The Object type serves as the base type for most of the other kinds of objects defined in the Activity Vocabulary, including other Core types such as Activity, IntransitiveActivity, Collection and OrderedCollection. | Represents a document of any kind. | Represents a Web Page.
   */
  type: (
    | {
        "@id": "Object";
      }
    | {
        "@id": "Document";
      }
    | {
        "@id": "Page";
      }
  )[];
  /**
   * Identifies a resource attached or related to an object that potentially requires special handling. The intent is to provide a model that is at least semantically similar to attachments in email.
   */
  attachment?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more entities to which this object is attributed. The attributed entities might not be Actors. For instance, an object might be attributed to the completion of another activity.
   */
  attributedTo?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more entities that represent the total population of entities for which the object can considered to be relevant.
   */
  audience?: (ActivityPubObject | Link)[];
  /**
   * The content or textual representation of the Object encoded as a JSON string. By default, the value of content is HTML. The mediaType property can be used in the object to indicate a different content type. The content MAY be expressed using multiple language-tagged values.
   */
  content?: (string | string)[];
  /**
   * Identifies the context within which the object exists or an activity was performed. The notion of "context" used is intentionally vague. The intended function is to serve as a means of grouping objects and activities that share a common originating context or purpose. An example could be all activities relating to a common project or event.
   */
  context?: (ActivityPubObject | Link)[];
  /**
   * A simple, human-readable, plain-text name for the object. HTML markup MUST NOT be included. The name MAY be expressed using multiple language-tagged values.
   */
  name?: (string | string)[];
  /**
   * The date and time describing the actual or expected ending time of the object. When used with an Activity object, for instance, the endTime property specifies the moment the activity concluded or is expected to conclude.
   */
  endTime?: string;
  /**
   * Identifies the entity (e.g. an application) that generated the object.
   */
  generator?: (ActivityPubObject | Link)[];
  /**
   * Indicates an entity that describes an icon for this object. The image should have an aspect ratio of one (horizontal) to one (vertical) and should be suitable for presentation at a small size.
   */
  icon?: (Image | Link)[];
  /**
   * Indicates an entity that describes an image for this object. Unlike the icon property, there are no aspect ratio or display size limitations assumed.
   */
  image?: (Image | Link)[];
  /**
   * Indicates one or more entities for which this object is considered a response.
   */
  inReplyTo?: (ActivityPubObject | Link)[];
  /**
   * Indicates one or more physical or logical locations associated with the object.
   */
  location?: (ActivityPubObject | Link)[];
  /**
   * Identifies an entity that provides a preview of this object.
   */
  preview?: (ActivityPubObject | Link)[];
  /**
   * The date and time at which the object was published
   */
  published?: string;
  /**
   * Identifies a Collection containing objects considered to be responses to this object.
   */
  replies?: Collection;
  /**
   * The date and time describing the actual or expected starting time of the object. When used with an Activity object, for instance, the startTime property specifies the moment the activity began or is scheduled to begin.
   */
  startTime?: string;
  /**
   * A natural language summarization of the object encoded as HTML. Multiple language tagged summaries MAY be provided.
   */
  summary?: (string | string)[];
  /**
   * One or more "tags" that have been associated with an objects. A tag can be any kind of Object. The key difference between attachment and tag is that the former implies association by inclusion, while the latter implies associated by reference.
   */
  tag?: (ActivityPubObject | Link)[];
  /**
   * The date and time at which the object was updated
   */
  updated?: string;
  /**
   * Identifies one or more links to representations of the object
   */
  url?: (string | Link)[];
  /**
   * Identifies an entity considered to be part of the public primary audience of an Object
   */
  to?: (ActivityPubObject | Link)[];
  /**
   * Identifies an Object that is part of the private primary audience of this Object.
   */
  bto?: (ActivityPubObject | Link)[];
  /**
   * Identifies an Object that is part of the public secondary audience of this Object.
   */
  cc?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more Objects that are part of the private secondary audience of this Object.
   */
  bcc?: (ActivityPubObject | Link)[];
  /**
   * When used on a Link, identifies the MIME media type of the referenced resource. When used on an Object, identifies the MIME media type of the value of the content property. If not specified, the content property is assumed to contain text/html content.
   */
  mediaType?: string;
  /**
   * When the object describes a time-bound resource, such as an audio or video, a meeting, etc, the duration property indicates the object's approximate duration. The value MUST be expressed as an xsd:duration as defined by [ xmlschema11-2], section 3.3.6 (e.g. a period of 5 seconds is represented as "PT5S").
   */
  duration?: string;
}

/**
 * Event Type
 */
export interface Event {
  "@id"?: string;
  "@context"?: ContextDefinition;
  /**
   * Describes an object of any kind. The Object type serves as the base type for most of the other kinds of objects defined in the Activity Vocabulary, including other Core types such as Activity, IntransitiveActivity, Collection and OrderedCollection. | Represents any kind of event.
   */
  type: (
    | {
        "@id": "Object";
      }
    | {
        "@id": "Event";
      }
  )[];
  /**
   * Identifies a resource attached or related to an object that potentially requires special handling. The intent is to provide a model that is at least semantically similar to attachments in email.
   */
  attachment?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more entities to which this object is attributed. The attributed entities might not be Actors. For instance, an object might be attributed to the completion of another activity.
   */
  attributedTo?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more entities that represent the total population of entities for which the object can considered to be relevant.
   */
  audience?: (ActivityPubObject | Link)[];
  /**
   * The content or textual representation of the Object encoded as a JSON string. By default, the value of content is HTML. The mediaType property can be used in the object to indicate a different content type. The content MAY be expressed using multiple language-tagged values.
   */
  content?: (string | string)[];
  /**
   * Identifies the context within which the object exists or an activity was performed. The notion of "context" used is intentionally vague. The intended function is to serve as a means of grouping objects and activities that share a common originating context or purpose. An example could be all activities relating to a common project or event.
   */
  context?: (ActivityPubObject | Link)[];
  /**
   * A simple, human-readable, plain-text name for the object. HTML markup MUST NOT be included. The name MAY be expressed using multiple language-tagged values.
   */
  name?: (string | string)[];
  /**
   * The date and time describing the actual or expected ending time of the object. When used with an Activity object, for instance, the endTime property specifies the moment the activity concluded or is expected to conclude.
   */
  endTime?: string;
  /**
   * Identifies the entity (e.g. an application) that generated the object.
   */
  generator?: (ActivityPubObject | Link)[];
  /**
   * Indicates an entity that describes an icon for this object. The image should have an aspect ratio of one (horizontal) to one (vertical) and should be suitable for presentation at a small size.
   */
  icon?: (Image | Link)[];
  /**
   * Indicates an entity that describes an image for this object. Unlike the icon property, there are no aspect ratio or display size limitations assumed.
   */
  image?: (Image | Link)[];
  /**
   * Indicates one or more entities for which this object is considered a response.
   */
  inReplyTo?: (ActivityPubObject | Link)[];
  /**
   * Indicates one or more physical or logical locations associated with the object.
   */
  location?: (ActivityPubObject | Link)[];
  /**
   * Identifies an entity that provides a preview of this object.
   */
  preview?: (ActivityPubObject | Link)[];
  /**
   * The date and time at which the object was published
   */
  published?: string;
  /**
   * Identifies a Collection containing objects considered to be responses to this object.
   */
  replies?: Collection;
  /**
   * The date and time describing the actual or expected starting time of the object. When used with an Activity object, for instance, the startTime property specifies the moment the activity began or is scheduled to begin.
   */
  startTime?: string;
  /**
   * A natural language summarization of the object encoded as HTML. Multiple language tagged summaries MAY be provided.
   */
  summary?: (string | string)[];
  /**
   * One or more "tags" that have been associated with an objects. A tag can be any kind of Object. The key difference between attachment and tag is that the former implies association by inclusion, while the latter implies associated by reference.
   */
  tag?: (ActivityPubObject | Link)[];
  /**
   * The date and time at which the object was updated
   */
  updated?: string;
  /**
   * Identifies one or more links to representations of the object
   */
  url?: (string | Link)[];
  /**
   * Identifies an entity considered to be part of the public primary audience of an Object
   */
  to?: (ActivityPubObject | Link)[];
  /**
   * Identifies an Object that is part of the private primary audience of this Object.
   */
  bto?: (ActivityPubObject | Link)[];
  /**
   * Identifies an Object that is part of the public secondary audience of this Object.
   */
  cc?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more Objects that are part of the private secondary audience of this Object.
   */
  bcc?: (ActivityPubObject | Link)[];
  /**
   * When used on a Link, identifies the MIME media type of the referenced resource. When used on an Object, identifies the MIME media type of the value of the content property. If not specified, the content property is assumed to contain text/html content.
   */
  mediaType?: string;
  /**
   * When the object describes a time-bound resource, such as an audio or video, a meeting, etc, the duration property indicates the object's approximate duration. The value MUST be expressed as an xsd:duration as defined by [ xmlschema11-2], section 3.3.6 (e.g. a period of 5 seconds is represented as "PT5S").
   */
  duration?: string;
}

/**
 * Place Type
 */
export interface Place {
  "@id"?: string;
  "@context"?: ContextDefinition;
  /**
   * Describes an object of any kind. The Object type serves as the base type for most of the other kinds of objects defined in the Activity Vocabulary, including other Core types such as Activity, IntransitiveActivity, Collection and OrderedCollection. | Represents a logical or physical location. See 5.3 Representing Places for additional information.
   */
  type: (
    | {
        "@id": "Object";
      }
    | {
        "@id": "Place";
      }
  )[];
  /**
   * Identifies a resource attached or related to an object that potentially requires special handling. The intent is to provide a model that is at least semantically similar to attachments in email.
   */
  attachment?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more entities to which this object is attributed. The attributed entities might not be Actors. For instance, an object might be attributed to the completion of another activity.
   */
  attributedTo?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more entities that represent the total population of entities for which the object can considered to be relevant.
   */
  audience?: (ActivityPubObject | Link)[];
  /**
   * The content or textual representation of the Object encoded as a JSON string. By default, the value of content is HTML. The mediaType property can be used in the object to indicate a different content type. The content MAY be expressed using multiple language-tagged values.
   */
  content?: (string | string)[];
  /**
   * Identifies the context within which the object exists or an activity was performed. The notion of "context" used is intentionally vague. The intended function is to serve as a means of grouping objects and activities that share a common originating context or purpose. An example could be all activities relating to a common project or event.
   */
  context?: (ActivityPubObject | Link)[];
  /**
   * A simple, human-readable, plain-text name for the object. HTML markup MUST NOT be included. The name MAY be expressed using multiple language-tagged values.
   */
  name?: (string | string)[];
  /**
   * The date and time describing the actual or expected ending time of the object. When used with an Activity object, for instance, the endTime property specifies the moment the activity concluded or is expected to conclude.
   */
  endTime?: string;
  /**
   * Identifies the entity (e.g. an application) that generated the object.
   */
  generator?: (ActivityPubObject | Link)[];
  /**
   * Indicates an entity that describes an icon for this object. The image should have an aspect ratio of one (horizontal) to one (vertical) and should be suitable for presentation at a small size.
   */
  icon?: (Image | Link)[];
  /**
   * Indicates an entity that describes an image for this object. Unlike the icon property, there are no aspect ratio or display size limitations assumed.
   */
  image?: (Image | Link)[];
  /**
   * Indicates one or more entities for which this object is considered a response.
   */
  inReplyTo?: (ActivityPubObject | Link)[];
  /**
   * Indicates one or more physical or logical locations associated with the object.
   */
  location?: (ActivityPubObject | Link)[];
  /**
   * Identifies an entity that provides a preview of this object.
   */
  preview?: (ActivityPubObject | Link)[];
  /**
   * The date and time at which the object was published
   */
  published?: string;
  /**
   * Identifies a Collection containing objects considered to be responses to this object.
   */
  replies?: Collection;
  /**
   * The date and time describing the actual or expected starting time of the object. When used with an Activity object, for instance, the startTime property specifies the moment the activity began or is scheduled to begin.
   */
  startTime?: string;
  /**
   * A natural language summarization of the object encoded as HTML. Multiple language tagged summaries MAY be provided.
   */
  summary?: (string | string)[];
  /**
   * One or more "tags" that have been associated with an objects. A tag can be any kind of Object. The key difference between attachment and tag is that the former implies association by inclusion, while the latter implies associated by reference.
   */
  tag?: (ActivityPubObject | Link)[];
  /**
   * The date and time at which the object was updated
   */
  updated?: string;
  /**
   * Identifies one or more links to representations of the object
   */
  url?: (string | Link)[];
  /**
   * Identifies an entity considered to be part of the public primary audience of an Object
   */
  to?: (ActivityPubObject | Link)[];
  /**
   * Identifies an Object that is part of the private primary audience of this Object.
   */
  bto?: (ActivityPubObject | Link)[];
  /**
   * Identifies an Object that is part of the public secondary audience of this Object.
   */
  cc?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more Objects that are part of the private secondary audience of this Object.
   */
  bcc?: (ActivityPubObject | Link)[];
  /**
   * When used on a Link, identifies the MIME media type of the referenced resource. When used on an Object, identifies the MIME media type of the value of the content property. If not specified, the content property is assumed to contain text/html content.
   */
  mediaType?: string;
  /**
   * When the object describes a time-bound resource, such as an audio or video, a meeting, etc, the duration property indicates the object's approximate duration. The value MUST be expressed as an xsd:duration as defined by [ xmlschema11-2], section 3.3.6 (e.g. a period of 5 seconds is represented as "PT5S").
   */
  duration?: string;
  /**
   * Indicates the accuracy of position coordinates on a Place objects. Expressed in properties of percentage. e.g. "94.0" means "94.0% accurate".
   */
  accuracy?: string;
  /**
   * Indicates the altitude of a place. The measurement units is indicated using the units property. If units is not specified, the default is assumed to be "m" indicating meters.
   */
  altitude?: string;
  /**
   * The latitude of a place | The longitude of a place
   */
  latitude?: (string | string)[];
  /**
   * The radius from the given latitude and longitude for a Place. The units is expressed by the units property. If units is not specified, the default is assumed to be "m" indicating "meters".
   */
  radius?: string;
}

/**
 * Mention Type
 */
export interface Mention {
  "@id"?: string;
  "@context"?: ContextDefinition;
  /**
   * A Link is an indirect, qualified reference to a resource identified by a URL. The fundamental model for links is established by [ RFC5988]. Many of the properties defined by the Activity Vocabulary allow values that are either instances of Object or Link. When a Link is used, it establishes a qualified relation connecting the subject (the containing object) to the resource identified by the href. Properties of the Link are properties of the reference as opposed to properties of the resource. | A specialized Link that represents an @mention.
   */
  type: (
    | {
        "@id": "Link";
      }
    | {
        "@id": "Mention";
      }
  )[];
  /**
   * The target resource pointed to by a Link.
   */
  href?: string;
  /**
   * A link relation associated with a Link. The value MUST conform to both the [HTML5] and [RFC5988] "link relation" definitions. In the [HTML5], any string not containing the "space" U+0020, "tab" (U+0009), "LF" (U+000A), "FF" (U+000C), "CR" (U+000D) or "," (U+002C) characters can be used as a valid link relation.
   */
  rel?: string[];
  /**
   * When used on a Link, identifies the MIME media type of the referenced resource. When used on an Object, identifies the MIME media type of the value of the content property. If not specified, the content property is assumed to contain text/html content.
   */
  mediaType?: string;
  /**
   * A simple, human-readable, plain-text name for the object. HTML markup MUST NOT be included. The name MAY be expressed using multiple language-tagged values.
   */
  name?: (string | string)[];
  /**
   * Hints as to the language used by the target resource. Value MUST be a [BCP47] Language-Tag.
   */
  hreflang?: string;
  /**
   * On a Link, specifies a hint as to the rendering height in device-independent pixels of the linked resource.
   */
  height?: number;
  /**
   * On a Link, specifies a hint as to the rendering width in device-independent pixels of the linked resource.
   */
  width?: number;
  /**
   * Identifies an entity that provides a preview of this object.
   */
  preview?: (ActivityPubObject | Link)[];
}

/**
 * Profile Type
 */
export interface Profile {
  "@id"?: string;
  "@context"?: ContextDefinition;
  /**
   * Describes an object of any kind. The Object type serves as the base type for most of the other kinds of objects defined in the Activity Vocabulary, including other Core types such as Activity, IntransitiveActivity, Collection and OrderedCollection. | A Profile is a content object that describes another Object, typically used to describe Actor Type objects. The describes property is used to reference the object being described by the profile.
   */
  type: (
    | {
        "@id": "Object";
      }
    | {
        "@id": "Profile";
      }
  )[];
  /**
   * Identifies a resource attached or related to an object that potentially requires special handling. The intent is to provide a model that is at least semantically similar to attachments in email.
   */
  attachment?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more entities to which this object is attributed. The attributed entities might not be Actors. For instance, an object might be attributed to the completion of another activity.
   */
  attributedTo?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more entities that represent the total population of entities for which the object can considered to be relevant.
   */
  audience?: (ActivityPubObject | Link)[];
  /**
   * The content or textual representation of the Object encoded as a JSON string. By default, the value of content is HTML. The mediaType property can be used in the object to indicate a different content type. The content MAY be expressed using multiple language-tagged values.
   */
  content?: (string | string)[];
  /**
   * Identifies the context within which the object exists or an activity was performed. The notion of "context" used is intentionally vague. The intended function is to serve as a means of grouping objects and activities that share a common originating context or purpose. An example could be all activities relating to a common project or event.
   */
  context?: (ActivityPubObject | Link)[];
  /**
   * A simple, human-readable, plain-text name for the object. HTML markup MUST NOT be included. The name MAY be expressed using multiple language-tagged values.
   */
  name?: (string | string)[];
  /**
   * The date and time describing the actual or expected ending time of the object. When used with an Activity object, for instance, the endTime property specifies the moment the activity concluded or is expected to conclude.
   */
  endTime?: string;
  /**
   * Identifies the entity (e.g. an application) that generated the object.
   */
  generator?: (ActivityPubObject | Link)[];
  /**
   * Indicates an entity that describes an icon for this object. The image should have an aspect ratio of one (horizontal) to one (vertical) and should be suitable for presentation at a small size.
   */
  icon?: (Image | Link)[];
  /**
   * Indicates an entity that describes an image for this object. Unlike the icon property, there are no aspect ratio or display size limitations assumed.
   */
  image?: (Image | Link)[];
  /**
   * Indicates one or more entities for which this object is considered a response.
   */
  inReplyTo?: (ActivityPubObject | Link)[];
  /**
   * Indicates one or more physical or logical locations associated with the object.
   */
  location?: (ActivityPubObject | Link)[];
  /**
   * Identifies an entity that provides a preview of this object.
   */
  preview?: (ActivityPubObject | Link)[];
  /**
   * The date and time at which the object was published
   */
  published?: string;
  /**
   * Identifies a Collection containing objects considered to be responses to this object.
   */
  replies?: Collection;
  /**
   * The date and time describing the actual or expected starting time of the object. When used with an Activity object, for instance, the startTime property specifies the moment the activity began or is scheduled to begin.
   */
  startTime?: string;
  /**
   * A natural language summarization of the object encoded as HTML. Multiple language tagged summaries MAY be provided.
   */
  summary?: (string | string)[];
  /**
   * One or more "tags" that have been associated with an objects. A tag can be any kind of Object. The key difference between attachment and tag is that the former implies association by inclusion, while the latter implies associated by reference.
   */
  tag?: (ActivityPubObject | Link)[];
  /**
   * The date and time at which the object was updated
   */
  updated?: string;
  /**
   * Identifies one or more links to representations of the object
   */
  url?: (string | Link)[];
  /**
   * Identifies an entity considered to be part of the public primary audience of an Object
   */
  to?: (ActivityPubObject | Link)[];
  /**
   * Identifies an Object that is part of the private primary audience of this Object.
   */
  bto?: (ActivityPubObject | Link)[];
  /**
   * Identifies an Object that is part of the public secondary audience of this Object.
   */
  cc?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more Objects that are part of the private secondary audience of this Object.
   */
  bcc?: (ActivityPubObject | Link)[];
  /**
   * When used on a Link, identifies the MIME media type of the referenced resource. When used on an Object, identifies the MIME media type of the value of the content property. If not specified, the content property is assumed to contain text/html content.
   */
  mediaType?: string;
  /**
   * When the object describes a time-bound resource, such as an audio or video, a meeting, etc, the duration property indicates the object's approximate duration. The value MUST be expressed as an xsd:duration as defined by [ xmlschema11-2], section 3.3.6 (e.g. a period of 5 seconds is represented as "PT5S").
   */
  duration?: string;
  /**
   * On a Profile object, the describes property identifies the object described by the Profile.
   */
  describes?: ActivityPubObject;
}

/**
 * Tombstone Type
 */
export interface Tombstone {
  "@id"?: string;
  "@context"?: ContextDefinition;
  /**
   * Describes an object of any kind. The Object type serves as the base type for most of the other kinds of objects defined in the Activity Vocabulary, including other Core types such as Activity, IntransitiveActivity, Collection and OrderedCollection. | A Tombstone represents a content object that has been deleted. It can be used in Collections to signify that there used to be an object at this position, but it has been deleted.
   */
  type: (
    | {
        "@id": "Object";
      }
    | {
        "@id": "Tombstone";
      }
  )[];
  /**
   * Identifies a resource attached or related to an object that potentially requires special handling. The intent is to provide a model that is at least semantically similar to attachments in email.
   */
  attachment?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more entities to which this object is attributed. The attributed entities might not be Actors. For instance, an object might be attributed to the completion of another activity.
   */
  attributedTo?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more entities that represent the total population of entities for which the object can considered to be relevant.
   */
  audience?: (ActivityPubObject | Link)[];
  /**
   * The content or textual representation of the Object encoded as a JSON string. By default, the value of content is HTML. The mediaType property can be used in the object to indicate a different content type. The content MAY be expressed using multiple language-tagged values.
   */
  content?: (string | string)[];
  /**
   * Identifies the context within which the object exists or an activity was performed. The notion of "context" used is intentionally vague. The intended function is to serve as a means of grouping objects and activities that share a common originating context or purpose. An example could be all activities relating to a common project or event.
   */
  context?: (ActivityPubObject | Link)[];
  /**
   * A simple, human-readable, plain-text name for the object. HTML markup MUST NOT be included. The name MAY be expressed using multiple language-tagged values.
   */
  name?: (string | string)[];
  /**
   * The date and time describing the actual or expected ending time of the object. When used with an Activity object, for instance, the endTime property specifies the moment the activity concluded or is expected to conclude.
   */
  endTime?: string;
  /**
   * Identifies the entity (e.g. an application) that generated the object.
   */
  generator?: (ActivityPubObject | Link)[];
  /**
   * Indicates an entity that describes an icon for this object. The image should have an aspect ratio of one (horizontal) to one (vertical) and should be suitable for presentation at a small size.
   */
  icon?: (Image | Link)[];
  /**
   * Indicates an entity that describes an image for this object. Unlike the icon property, there are no aspect ratio or display size limitations assumed.
   */
  image?: (Image | Link)[];
  /**
   * Indicates one or more entities for which this object is considered a response.
   */
  inReplyTo?: (ActivityPubObject | Link)[];
  /**
   * Indicates one or more physical or logical locations associated with the object.
   */
  location?: (ActivityPubObject | Link)[];
  /**
   * Identifies an entity that provides a preview of this object.
   */
  preview?: (ActivityPubObject | Link)[];
  /**
   * The date and time at which the object was published
   */
  published?: string;
  /**
   * Identifies a Collection containing objects considered to be responses to this object.
   */
  replies?: Collection;
  /**
   * The date and time describing the actual or expected starting time of the object. When used with an Activity object, for instance, the startTime property specifies the moment the activity began or is scheduled to begin.
   */
  startTime?: string;
  /**
   * A natural language summarization of the object encoded as HTML. Multiple language tagged summaries MAY be provided.
   */
  summary?: (string | string)[];
  /**
   * One or more "tags" that have been associated with an objects. A tag can be any kind of Object. The key difference between attachment and tag is that the former implies association by inclusion, while the latter implies associated by reference.
   */
  tag?: (ActivityPubObject | Link)[];
  /**
   * The date and time at which the object was updated
   */
  updated?: string;
  /**
   * Identifies one or more links to representations of the object
   */
  url?: (string | Link)[];
  /**
   * Identifies an entity considered to be part of the public primary audience of an Object
   */
  to?: (ActivityPubObject | Link)[];
  /**
   * Identifies an Object that is part of the private primary audience of this Object.
   */
  bto?: (ActivityPubObject | Link)[];
  /**
   * Identifies an Object that is part of the public secondary audience of this Object.
   */
  cc?: (ActivityPubObject | Link)[];
  /**
   * Identifies one or more Objects that are part of the private secondary audience of this Object.
   */
  bcc?: (ActivityPubObject | Link)[];
  /**
   * When used on a Link, identifies the MIME media type of the referenced resource. When used on an Object, identifies the MIME media type of the value of the content property. If not specified, the content property is assumed to contain text/html content.
   */
  mediaType?: string;
  /**
   * When the object describes a time-bound resource, such as an audio or video, a meeting, etc, the duration property indicates the object's approximate duration. The value MUST be expressed as an xsd:duration as defined by [ xmlschema11-2], section 3.3.6 (e.g. a period of 5 seconds is represented as "PT5S").
   */
  duration?: string;
  /**
   * On a Tombstone object, the formerType property identifies the type of the object that was deleted.
   */
  formerType?: ActivityPubObject[];
  /**
   * On a Tombstone object, the deleted property is a timestamp for when the object was deleted.
   */
  deleted?: string;
}
