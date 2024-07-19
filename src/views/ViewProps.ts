import { Leaf } from "@ldo/solid";

export interface ViewProps<Type> {
  subject?: Type;
  resource?: Leaf;
  hasWriteAccess?: boolean;
}
