import { ShapeType } from "@ldo/ldo";
import { activityPubSchema } from "./activityPub.schema";
import { activityPubContext } from "./activityPub.context";
import {
  ActivityPubObject,
  Link,
  Activity,
  InstransitiveActivity,
  Collection,
  OrderedCollection,
  CollectionPage,
  OrderedCollectionPage,
  Accept,
  TentativeAccept,
  Add,
  Arrive,
  Create,
  Delete,
  Follow,
  Ignore,
  Join,
  Leave,
  Like,
  Offer,
  Invite,
  Reject,
  TentativeReject,
  Remove,
  Undo,
  Update,
  View,
  Listen,
  Read,
  Move,
  Travel,
  Announce,
  Block,
  Flag,
  Dislike,
  Question,
  Actor,
  Application,
  Group,
  Organization,
  Person,
  Service,
  Relationship,
  Article,
  Document,
  Audio,
  Image,
  Video,
  Note,
  Page,
  Event,
  Place,
  Mention,
  Profile,
  Tombstone,
} from "./activityPub.typings";

/**
 * =============================================================================
 * LDO ShapeTypes activityPub
 * =============================================================================
 */

/**
 * ActivityPubObject ShapeType
 */
export const ActivityPubObjectShapeType: ShapeType<ActivityPubObject> = {
  schema: activityPubSchema,
  shape: "https://shaperepo.com/schemas/activitystreams#ActivityPubObject",
  context: activityPubContext,
};

/**
 * Link ShapeType
 */
export const LinkShapeType: ShapeType<Link> = {
  schema: activityPubSchema,
  shape: "https://shaperepo.com/schemas/activitystreams#Link",
  context: activityPubContext,
};

/**
 * Activity ShapeType
 */
export const ActivityShapeType: ShapeType<Activity> = {
  schema: activityPubSchema,
  shape: "https://shaperepo.com/schemas/activitystreams#Activity",
  context: activityPubContext,
};

/**
 * InstransitiveActivity ShapeType
 */
export const InstransitiveActivityShapeType: ShapeType<InstransitiveActivity> =
  {
    schema: activityPubSchema,
    shape:
      "https://shaperepo.com/schemas/activitystreams#InstransitiveActivity",
    context: activityPubContext,
  };

/**
 * Collection ShapeType
 */
export const CollectionShapeType: ShapeType<Collection> = {
  schema: activityPubSchema,
  shape: "https://shaperepo.com/schemas/activitystreams#Collection",
  context: activityPubContext,
};

/**
 * OrderedCollection ShapeType
 */
export const OrderedCollectionShapeType: ShapeType<OrderedCollection> = {
  schema: activityPubSchema,
  shape: "https://shaperepo.com/schemas/activitystreams#OrderedCollection",
  context: activityPubContext,
};

/**
 * CollectionPage ShapeType
 */
export const CollectionPageShapeType: ShapeType<CollectionPage> = {
  schema: activityPubSchema,
  shape: "https://shaperepo.com/schemas/activitystreams#CollectionPage",
  context: activityPubContext,
};

/**
 * OrderedCollectionPage ShapeType
 */
export const OrderedCollectionPageShapeType: ShapeType<OrderedCollectionPage> =
  {
    schema: activityPubSchema,
    shape:
      "https://shaperepo.com/schemas/activitystreams#OrderedCollectionPage",
    context: activityPubContext,
  };

/**
 * Accept ShapeType
 */
export const AcceptShapeType: ShapeType<Accept> = {
  schema: activityPubSchema,
  shape: "https://shaperepo.com/schemas/activitystreams#Accept",
  context: activityPubContext,
};

/**
 * TentativeAccept ShapeType
 */
export const TentativeAcceptShapeType: ShapeType<TentativeAccept> = {
  schema: activityPubSchema,
  shape: "https://shaperepo.com/schemas/activitystreams#TentativeAccept",
  context: activityPubContext,
};

/**
 * Add ShapeType
 */
export const AddShapeType: ShapeType<Add> = {
  schema: activityPubSchema,
  shape: "https://shaperepo.com/schemas/activitystreams#Add",
  context: activityPubContext,
};

/**
 * Arrive ShapeType
 */
export const ArriveShapeType: ShapeType<Arrive> = {
  schema: activityPubSchema,
  shape: "https://shaperepo.com/schemas/activitystreams#Arrive",
  context: activityPubContext,
};

/**
 * Create ShapeType
 */
export const CreateShapeType: ShapeType<Create> = {
  schema: activityPubSchema,
  shape: "https://shaperepo.com/schemas/activitystreams#Create",
  context: activityPubContext,
};

/**
 * Delete ShapeType
 */
export const DeleteShapeType: ShapeType<Delete> = {
  schema: activityPubSchema,
  shape: "https://shaperepo.com/schemas/activitystreams#Delete",
  context: activityPubContext,
};

/**
 * Follow ShapeType
 */
export const FollowShapeType: ShapeType<Follow> = {
  schema: activityPubSchema,
  shape: "https://shaperepo.com/schemas/activitystreams#Follow",
  context: activityPubContext,
};

/**
 * Ignore ShapeType
 */
export const IgnoreShapeType: ShapeType<Ignore> = {
  schema: activityPubSchema,
  shape: "https://shaperepo.com/schemas/activitystreams#Ignore",
  context: activityPubContext,
};

/**
 * Join ShapeType
 */
export const JoinShapeType: ShapeType<Join> = {
  schema: activityPubSchema,
  shape: "https://shaperepo.com/schemas/activitystreams#Join",
  context: activityPubContext,
};

/**
 * Leave ShapeType
 */
export const LeaveShapeType: ShapeType<Leave> = {
  schema: activityPubSchema,
  shape: "https://shaperepo.com/schemas/activitystreams#Leave",
  context: activityPubContext,
};

/**
 * Like ShapeType
 */
export const LikeShapeType: ShapeType<Like> = {
  schema: activityPubSchema,
  shape: "https://shaperepo.com/schemas/activitystreams#Like",
  context: activityPubContext,
};

/**
 * Offer ShapeType
 */
export const OfferShapeType: ShapeType<Offer> = {
  schema: activityPubSchema,
  shape: "https://shaperepo.com/schemas/activitystreams#Offer",
  context: activityPubContext,
};

/**
 * Invite ShapeType
 */
export const InviteShapeType: ShapeType<Invite> = {
  schema: activityPubSchema,
  shape: "https://shaperepo.com/schemas/activitystreams#Invite",
  context: activityPubContext,
};

/**
 * Reject ShapeType
 */
export const RejectShapeType: ShapeType<Reject> = {
  schema: activityPubSchema,
  shape: "https://shaperepo.com/schemas/activitystreams#Reject",
  context: activityPubContext,
};

/**
 * TentativeReject ShapeType
 */
export const TentativeRejectShapeType: ShapeType<TentativeReject> = {
  schema: activityPubSchema,
  shape: "https://shaperepo.com/schemas/activitystreams#TentativeReject",
  context: activityPubContext,
};

/**
 * Remove ShapeType
 */
export const RemoveShapeType: ShapeType<Remove> = {
  schema: activityPubSchema,
  shape: "https://shaperepo.com/schemas/activitystreams#Remove",
  context: activityPubContext,
};

/**
 * Undo ShapeType
 */
export const UndoShapeType: ShapeType<Undo> = {
  schema: activityPubSchema,
  shape: "https://shaperepo.com/schemas/activitystreams#Undo",
  context: activityPubContext,
};

/**
 * Update ShapeType
 */
export const UpdateShapeType: ShapeType<Update> = {
  schema: activityPubSchema,
  shape: "https://shaperepo.com/schemas/activitystreams#Update",
  context: activityPubContext,
};

/**
 * View ShapeType
 */
export const ViewShapeType: ShapeType<View> = {
  schema: activityPubSchema,
  shape: "https://shaperepo.com/schemas/activitystreams#View",
  context: activityPubContext,
};

/**
 * Listen ShapeType
 */
export const ListenShapeType: ShapeType<Listen> = {
  schema: activityPubSchema,
  shape: "https://shaperepo.com/schemas/activitystreams#Listen",
  context: activityPubContext,
};

/**
 * Read ShapeType
 */
export const ReadShapeType: ShapeType<Read> = {
  schema: activityPubSchema,
  shape: "https://shaperepo.com/schemas/activitystreams#Read",
  context: activityPubContext,
};

/**
 * Move ShapeType
 */
export const MoveShapeType: ShapeType<Move> = {
  schema: activityPubSchema,
  shape: "https://shaperepo.com/schemas/activitystreams#Move",
  context: activityPubContext,
};

/**
 * Travel ShapeType
 */
export const TravelShapeType: ShapeType<Travel> = {
  schema: activityPubSchema,
  shape: "https://shaperepo.com/schemas/activitystreams#Travel",
  context: activityPubContext,
};

/**
 * Announce ShapeType
 */
export const AnnounceShapeType: ShapeType<Announce> = {
  schema: activityPubSchema,
  shape: "https://shaperepo.com/schemas/activitystreams#Announce",
  context: activityPubContext,
};

/**
 * Block ShapeType
 */
export const BlockShapeType: ShapeType<Block> = {
  schema: activityPubSchema,
  shape: "https://shaperepo.com/schemas/activitystreams#Block",
  context: activityPubContext,
};

/**
 * Flag ShapeType
 */
export const FlagShapeType: ShapeType<Flag> = {
  schema: activityPubSchema,
  shape: "https://shaperepo.com/schemas/activitystreams#Flag",
  context: activityPubContext,
};

/**
 * Dislike ShapeType
 */
export const DislikeShapeType: ShapeType<Dislike> = {
  schema: activityPubSchema,
  shape: "https://shaperepo.com/schemas/activitystreams#Dislike",
  context: activityPubContext,
};

/**
 * Question ShapeType
 */
export const QuestionShapeType: ShapeType<Question> = {
  schema: activityPubSchema,
  shape: "https://shaperepo.com/schemas/activitystreams#Question",
  context: activityPubContext,
};

/**
 * Actor ShapeType
 */
export const ActorShapeType: ShapeType<Actor> = {
  schema: activityPubSchema,
  shape: "https://shaperepo.com/schemas/activitystreams#Actor",
  context: activityPubContext,
};

/**
 * Application ShapeType
 */
export const ApplicationShapeType: ShapeType<Application> = {
  schema: activityPubSchema,
  shape: "https://shaperepo.com/schemas/activitystreams#Application",
  context: activityPubContext,
};

/**
 * Group ShapeType
 */
export const GroupShapeType: ShapeType<Group> = {
  schema: activityPubSchema,
  shape: "https://shaperepo.com/schemas/activitystreams#Group",
  context: activityPubContext,
};

/**
 * Organization ShapeType
 */
export const OrganizationShapeType: ShapeType<Organization> = {
  schema: activityPubSchema,
  shape: "https://shaperepo.com/schemas/activitystreams#Organization",
  context: activityPubContext,
};

/**
 * Person ShapeType
 */
export const PersonShapeType: ShapeType<Person> = {
  schema: activityPubSchema,
  shape: "https://shaperepo.com/schemas/activitystreams#Person",
  context: activityPubContext,
};

/**
 * Service ShapeType
 */
export const ServiceShapeType: ShapeType<Service> = {
  schema: activityPubSchema,
  shape: "https://shaperepo.com/schemas/activitystreams#Service",
  context: activityPubContext,
};

/**
 * Relationship ShapeType
 */
export const RelationshipShapeType: ShapeType<Relationship> = {
  schema: activityPubSchema,
  shape: "https://shaperepo.com/schemas/activitystreams#Relationship",
  context: activityPubContext,
};

/**
 * Article ShapeType
 */
export const ArticleShapeType: ShapeType<Article> = {
  schema: activityPubSchema,
  shape: "https://shaperepo.com/schemas/activitystreams#Article",
  context: activityPubContext,
};

/**
 * Document ShapeType
 */
export const DocumentShapeType: ShapeType<Document> = {
  schema: activityPubSchema,
  shape: "https://shaperepo.com/schemas/activitystreams#Document",
  context: activityPubContext,
};

/**
 * Audio ShapeType
 */
export const AudioShapeType: ShapeType<Audio> = {
  schema: activityPubSchema,
  shape: "https://shaperepo.com/schemas/activitystreams#Audio",
  context: activityPubContext,
};

/**
 * Image ShapeType
 */
export const ImageShapeType: ShapeType<Image> = {
  schema: activityPubSchema,
  shape: "https://shaperepo.com/schemas/activitystreams#Image",
  context: activityPubContext,
};

/**
 * Video ShapeType
 */
export const VideoShapeType: ShapeType<Video> = {
  schema: activityPubSchema,
  shape: "https://shaperepo.com/schemas/activitystreams#Video",
  context: activityPubContext,
};

/**
 * Note ShapeType
 */
export const NoteShapeType: ShapeType<Note> = {
  schema: activityPubSchema,
  shape: "https://shaperepo.com/schemas/activitystreams#Note",
  context: activityPubContext,
};

/**
 * Page ShapeType
 */
export const PageShapeType: ShapeType<Page> = {
  schema: activityPubSchema,
  shape: "https://shaperepo.com/schemas/activitystreams#Page",
  context: activityPubContext,
};

/**
 * Event ShapeType
 */
export const EventShapeType: ShapeType<Event> = {
  schema: activityPubSchema,
  shape: "https://shaperepo.com/schemas/activitystreams#Event",
  context: activityPubContext,
};

/**
 * Place ShapeType
 */
export const PlaceShapeType: ShapeType<Place> = {
  schema: activityPubSchema,
  shape: "https://shaperepo.com/schemas/activitystreams#Place",
  context: activityPubContext,
};

/**
 * Mention ShapeType
 */
export const MentionShapeType: ShapeType<Mention> = {
  schema: activityPubSchema,
  shape: "https://shaperepo.com/schemas/activitystreams#Mention",
  context: activityPubContext,
};

/**
 * Profile ShapeType
 */
export const ProfileShapeType: ShapeType<Profile> = {
  schema: activityPubSchema,
  shape: "https://shaperepo.com/schemas/activitystreams#Profile",
  context: activityPubContext,
};

/**
 * Tombstone ShapeType
 */
export const TombstoneShapeType: ShapeType<Tombstone> = {
  schema: activityPubSchema,
  shape: "https://shaperepo.com/schemas/activitystreams#Tombstone",
  context: activityPubContext,
};
