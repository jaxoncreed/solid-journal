import { FunctionComponent } from "react";
import { ContainerView } from "./containerView/ContainerView";
import { SubjectRouter } from "./SubjectRouter";
import { useResolveSubject } from "../shared/hooks/useResolveSubject";
import { useLocation } from "react-router-dom";

export const ViewRouter: FunctionComponent = () => {
  // Needed to trigger reload
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const location = useLocation();
  const { subject, resource, hasWriteAccess } = useResolveSubject(
    window.location.href
  );

  if (resource?.type === "container") {
    return (
      <ContainerView container={resource} hasWriteAccess={hasWriteAccess} />
    );
  }

  if (!subject) {
    return <></>;
  }

  return (
    <SubjectRouter
      mainSubject={subject}
      hasWriteAccess={hasWriteAccess}
      resource={resource}
    />
  );
};
