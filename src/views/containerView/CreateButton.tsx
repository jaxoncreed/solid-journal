import { PlusOutlined } from "@ant-design/icons";
import { Button, Dropdown, Input, MenuProps, Modal } from "antd";
import { FunctionComponent, useCallback, useMemo, useState } from "react";
import { CREATOR_CATALOGUE, Creator } from "../CreatorCatalogue";
import { Container } from "@ldo/solid";
import { useLdo, useSolidAuth } from "@ldo/solid-react";
import { useNavigate } from "react-router-dom";

interface CreateButtonProps {
  container: Container;
}

export const CreateButton: FunctionComponent<CreateButtonProps> = ({
  container,
}) => {
  const { dataset } = useLdo();
  const { session } = useSolidAuth();
  const [selectedCatalogueItem, setSelectedCatalogueItem] = useState<
    undefined | Creator
  >();
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const menuItems: MenuProps["items"] = useMemo(
    () =>
      CREATOR_CATALOGUE.map((item) => ({
        label: item.name,
        icon: item.icon,
        key: item.key,
        onClick: () => {
          setSelectedCatalogueItem(item);
          setName("");
          setModalOpen(true);
        },
      })),
    []
  );

  const onCreate = useCallback(async () => {
    if (!selectedCatalogueItem) return;
    setIsLoading(true);
    try {
      const articleUri = await selectedCatalogueItem.creatorFunction(
        name,
        container,
        dataset,
        session.webId!
      );
      const uriObj = new URL(articleUri);
      navigate(`${uriObj.pathname}${uriObj.hash}`);
    } catch (err) {
      /* Do nothing */
    }
    setIsLoading(false);
  }, [
    name,
    selectedCatalogueItem,
    container,
    dataset,
    session.webId,
    navigate,
  ]);

  return (
    <>
      <Dropdown
        menu={{ items: menuItems }}
        placement="bottomLeft"
        arrow
        trigger={["click"]}>
        <Button
          icon={<PlusOutlined />}
          type="primary"
          size="large"
          loading={isLoading}>
          Create
        </Button>
      </Dropdown>
      <Modal
        title={`Name your new ${selectedCatalogueItem?.name}`}
        open={modalOpen}
        onOk={onCreate}
        onCancel={() => setModalOpen(false)}>
        <Input
          placeholder="my-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Modal>
    </>
  );
};
