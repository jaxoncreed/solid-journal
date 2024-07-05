import { useLdo } from "@ldo/solid-react";
import { Leaf, Container } from "@ldo/solid";
import { FunctionComponent, useMemo, useState } from "react";
import { displayError } from "../actions/displayError";
import useAsyncEffect from "use-async-effect";
import { ContainerView } from "./containerView/ContainerView";
import { SubjectRouter } from "./SubjectRouter";

export const ViewRouter: FunctionComponent = () => {
  const currentLoaction = useMemo(() => {
    if (process.env.REACT_APP_POD_PROTOCOL && process.env.REACT_APP_POD_HOST) {
      const hrefUrl = new URL(window.location.href);
      hrefUrl.protocol = process.env.REACT_APP_POD_PROTOCOL;
      hrefUrl.host = process.env.REACT_APP_POD_HOST;
      return hrefUrl.toString();
    }
    return window.location.href;
  }, []);
  const { getResource } = useLdo();
  const [mainResource, setMainResource] = useState<
    Leaf | Container | undefined
  >(undefined);

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
        return;
      }
      const indexChildReadResult = await indexChild.read();
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

  if (!mainResource) {
    return <></>;
  }

  if (mainResource?.type === "container") {
    return <ContainerView conatiner={mainResource} />;
  }

  return <SubjectRouter uri={mainResource.uri} />;
};
