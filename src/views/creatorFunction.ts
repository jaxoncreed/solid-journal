import { Container, SolidLdoDataset } from "@ldo/solid";

export type creatorFunction = (
  childName: string,
  parentContaineer: Container,
  dataset: SolidLdoDataset,
  webId: string
) => Promise<string>;
