import { Container, Leaf } from "@ldo/solid";
import { useLdo, useSubject } from "@ldo/solid-react";
import { useMemo, useState } from "react";
import useAsyncEffect from "use-async-effect";
import { displayError } from "../../actions/displayError";
import { PotentialObjectShapeType } from "../../.ldo/potentialDocument.shapeTypes";
import {
  PotentialObject,
  PotentialSubject,
} from "../../.ldo/potentialDocument.typings";

export function useResolveMainResource(
  uri: string
): [
  mainResource: Leaf | Container | undefined,
  currentLocation: string,
  isSubIndex: boolean | undefined,
] {
  const currentLoaction = useMemo(() => {
    if (process.env.REACT_APP_POD_PROTOCOL && process.env.REACT_APP_POD_HOST) {
      const hrefUrl = new URL(uri);
      hrefUrl.protocol = process.env.REACT_APP_POD_PROTOCOL;
      hrefUrl.host = process.env.REACT_APP_POD_HOST;
      return hrefUrl.toString();
    }
    return uri;
  }, [uri]);
  const { getResource } = useLdo();
  const [mainResource, setMainResource] = useState<
    Leaf | Container | undefined
  >(undefined);
  const [isSubIndex, setIsSubindex] = useState<boolean | undefined>(undefined);

  useAsyncEffect(async () => {
    // Get the Current Resource
    const currentResource = getResource(currentLoaction);
    const currentResourceReadResult = await currentResource.read();
    if (currentResourceReadResult.isError) {
      displayError(currentResourceReadResult);
      return;
    }

    // If it is a container
    if (currentResource.type === "container") {
      // Check to see if it has an index
      const indexChild = currentResource
        .children()
        .find((child) => child.uri.endsWith("index.ttl")) as Leaf;
      if (!indexChild) {
        // If there is no index document, return the container
        setMainResource(currentResource);
        setIsSubindex(false);
        return;
      }
      const indexChildReadResult = await indexChild.read();
      if (indexChildReadResult.isError) {
        displayError(indexChildReadResult);
        return;
      }
      setMainResource(indexChild);
      setIsSubindex(true);
      return;
    }
    setIsSubindex(false);
    setMainResource(currentResource);
    // Get the subject of the main resource
  }, [currentLoaction, getResource]);

  return [mainResource, currentLoaction, isSubIndex];
}

export function useResolveSubject(
  uri: string
): Container | PotentialSubject | undefined {
  const [mainResource, currentLocation, isSubIndex] =
    useResolveMainResource(uri);
  const potentialSubjectUri = !mainResource
    ? undefined
    : isSubIndex
      ? mainResource?.uri
      : currentLocation;
  const resourceSubject = useSubject(
    PotentialObjectShapeType,
    potentialSubjectUri
  );

  return useMemo(() => {
    if (mainResource?.type === "container") return mainResource;
    if (!resourceSubject) return undefined;
    let potentialMainSubject: PotentialObject | PotentialSubject =
      resourceSubject;
    if (resourceSubject.primaryTopic) {
      potentialMainSubject = resourceSubject.primaryTopic;
    }
    return potentialMainSubject;
  }, [resourceSubject, mainResource]);
}
