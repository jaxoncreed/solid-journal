import { FunctionComponent, useMemo } from "react";
import { PotentialSubject } from "../.ldo/potentialDocument.typings";
import { VIEW_CATALOGUE } from "./ViewCatalogue";
import { UnknownView } from "./unknownView/UnknownView";

interface SubjectRouterProps {
  mainSubject: PotentialSubject;
}

export const SubjectRouter: FunctionComponent<SubjectRouterProps> = ({
  mainSubject,
}) => {
  const mainComponent = useMemo(() => {
    const Component = VIEW_CATALOGUE[mainSubject?.type?.["@id"] || ""];
    if (!Component) {
      return <UnknownView />;
    }
    return <Component subject={mainSubject} />;
  }, [mainSubject]);

  return <>{mainComponent}</>;
};
