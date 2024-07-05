import { useSubject } from "@ldo/solid-react";
import { FunctionComponent, useMemo } from "react";
import { PotentialObjectShapeType } from "../.ldo/potentialDocument.shapeTypes";
import {
  PotentialSubject,
  PotentialObject,
} from "../.ldo/potentialDocument.typings";
import { VIEW_CATALOGUE } from "./ViewCatalogue";
import { UnknownView } from "./unknownView/UnknownView";

interface SubjectRouterProps {
  uri: string;
}

export const SubjectRouter: FunctionComponent<SubjectRouterProps> = ({
  uri,
}) => {
  const resourceSubject = useSubject(PotentialObjectShapeType, uri);
  const mainComponent = useMemo(() => {
    let potentialMainSubject: PotentialObject | PotentialSubject =
      resourceSubject;
    if (resourceSubject.primaryTopic) {
      potentialMainSubject = resourceSubject.primaryTopic;
    }
    const Component = VIEW_CATALOGUE[potentialMainSubject?.type?.["@id"] || ""];
    if (!Component) {
      return <UnknownView />;
    }
    return <Component subject={potentialMainSubject} />;
  }, [resourceSubject]);
  return <>{mainComponent}</>;
};
