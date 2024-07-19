import { FunctionComponent } from "react";
import { PotentialSubject } from "../.ldo/potentialDocument.typings";
import { VIEW_CATALOGUE, ViewCatalogueRecord } from "./ViewCatalogue";
import { UnknownView } from "./unknownView/UnknownView";
import { Leaf } from "@ldo/solid";
import { useSubject } from "@ldo/solid-react";
import { LdoBase } from "@ldo/ldo";

interface SubjectRouterProps {
  mainSubject: PotentialSubject;
  resource?: Leaf;
  hasWriteAccess?: boolean;
}

export const SubjectRouter: FunctionComponent<SubjectRouterProps> = ({
  mainSubject,
  hasWriteAccess,
  resource,
}) => {
  const result: ViewCatalogueRecord<any> | undefined =
    VIEW_CATALOGUE[mainSubject?.type?.["@id"] || ""];

  if (!result || !mainSubject["@id"]) {
    return <UnknownView />;
  }
  return (
    <SubjectTracker
      subjectUri={mainSubject["@id"]}
      viewCatalogueRecord={result}
      resource={resource}
      hasWriteAccess={hasWriteAccess}
    />
  );
};

interface SubjectTrackerProps<Type extends LdoBase> {
  subjectUri: string;
  viewCatalogueRecord: ViewCatalogueRecord<Type>;
  resource?: Leaf;
  hasWriteAccess?: boolean;
}

const SubjectTracker: FunctionComponent<SubjectTrackerProps<any>> = ({
  subjectUri,
  viewCatalogueRecord,
  resource,
  hasWriteAccess,
}) => {
  const { Component, shapeType } = viewCatalogueRecord;

  const subject = useSubject(shapeType, subjectUri);

  return (
    <Component
      subject={subject}
      hasWriteAccess={hasWriteAccess}
      resource={resource}
    />
  );
};
