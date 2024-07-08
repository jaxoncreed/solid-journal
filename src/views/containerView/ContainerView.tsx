import { Container } from "@ldo/solid";
import { FunctionComponent } from "react";
import { DocumentList } from "../../shared/documentList/DocumentList";
import { CenteredArea } from "../../layout/CenteredArea";
import { Affix, Flex } from "antd";
import { useHasWriteAccess } from "../../shared/hooks/useHasWriteAccess";
import { CreateButton } from "./CreateButton";

interface ContainerViewProps {
  container: Container;
}

export const ContainerView: FunctionComponent<ContainerViewProps> = ({
  container,
}) => {
  const hasWriteAccess = useHasWriteAccess(container);

  return (
    <>
      {hasWriteAccess && (
        <Affix offsetTop={0}>
          <CenteredArea>
            <Flex justify="flex-end">
              <CreateButton container={container} />
            </Flex>
          </CenteredArea>
        </Affix>
      )}
      <DocumentList
        documentUris={container.children().map((child) => child.uri)}
      />
    </>
  );
};
