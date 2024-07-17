import { FunctionComponent, useMemo } from "react";
import { PotentialSubject } from "../.ldo/potentialDocument.typings";
import { VIEW_CATALOGUE } from "./ViewCatalogue";
import { UnknownView } from "./unknownView/UnknownView";
import { Leaf } from "@ldo/solid";

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
  const mainComponent = useMemo(() => {
    const Component = VIEW_CATALOGUE[mainSubject?.type?.["@id"] || ""];
    if (!Component) {
      return <UnknownView />;
    }
    return (
      <Component
        subject={mainSubject}
        hasWriteAccess={hasWriteAccess}
        resource={resource}
      />
    );
  }, [mainSubject, hasWriteAccess, resource]);

  return <>{mainComponent}</>;
};
