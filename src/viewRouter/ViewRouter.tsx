import { useLdo, useResource } from "@ldo/solid-react";
import { Leaf, Resource } from "@ldo/solid";
import { FunctionComponent, useEffect, useMemo, useState } from "react";
import { displayError } from "../actions/displayError";

// Container
// Article
// Unknown

export const ViewRouter: FunctionComponent = () => {
  const currentLoaction = window.location.href;
  const { getResource } = useLdo();
  const [mainResource, setMainResource] = useState<Resource | undefined>(
    undefined
  );
  const currentSubject = useMemo(async () => {
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
        return;
      }
      const indexChildReadResult = await currentResource.read();
      if (indexChildReadResult.isError) {
        displayError(indexChildReadResult);
        return;
      }
      setMainResource(indexChild);
      return;
    }
    setMainResource(currentResource);
    // Get the subject of the main resource
  }, [currentLoaction, getResource]);

  useEffect(() => {
    // Get the current URI
    // Get the main "subject" of this!
    // If it's a container
    // See if there's an index.ttl
    // If it's a
  });

  return <></>;
};
