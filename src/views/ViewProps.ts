import { Leaf } from "@ldo/solid";
import { PotentialSubject } from "../.ldo/potentialDocument.typings";

export interface ViewProps {
  subject?: PotentialSubject;
  resource?: Leaf;
  hasWriteAccess?: boolean;
}
