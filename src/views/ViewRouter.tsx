import { FunctionComponent } from "react";
import { ContainerView } from "./containerView/ContainerView";
import { SubjectRouter } from "./SubjectRouter";
import { useResolveSubject } from "../shared/hooks/useResolveSubject";
import { useLocation } from "react-router-dom";

export const ViewRouter: FunctionComponent = () => {
  // Needed to trigger reload
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const location = useLocation();
  const mainSubject = useResolveSubject(window.location.href);

  if (!mainSubject) {
    return <></>;
  }

  if (mainSubject?.type === "container") {
    return <ContainerView conatiner={mainSubject} />;
  }

  return <SubjectRouter mainSubject={mainSubject} />;
};
