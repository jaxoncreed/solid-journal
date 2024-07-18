import {
  ChangeEvent,
  FunctionComponent,
  useCallback,
  useMemo,
  useRef,
  useState,
} from "react";
import { MenuButton } from "../../common/MenuButton";
import { Editor } from "@tiptap/react";
import {
  CloudServerOutlined,
  CloudUploadOutlined,
  LinkOutlined,
  PictureOutlined,
} from "@ant-design/icons";
import { Dropdown, Input, MenuProps, Modal } from "antd";
import { useAppConfig } from "../../../../shared/providers/AppConfigProvider";
import { useResource } from "@ldo/solid-react";
import { Container, LeafUri } from "@ldo/solid";
import { uid } from "uid";
import { displayError } from "../../../../actions/displayError";
import { ImageLibraraySelector } from "./ImageLibrarySelector";

interface ImageButtonProps {
  editor: Editor;
}

export const ImageButton: FunctionComponent<ImageButtonProps> = ({
  editor,
}) => {
  const { mediaUri } = useAppConfig();
  const mediaContainer = useResource(mediaUri, {
    suppressInitialRead: true,
  }) as Container;

  const [isLoading, setIsLoading] = useState(false);

  const onInsertImage = useCallback(
    (imageUri: string) => {
      editor.chain().focus().setImage({ src: imageUri }).run();
    },
    [editor]
  );

  /**
   * From File
   */
  const hiddenFileInput = useRef<HTMLInputElement>(null);
  const onUpload = useCallback(() => {
    hiddenFileInput.current?.click();
  }, []);
  const onUploadSelected = useCallback(
    async (e: ChangeEvent<HTMLInputElement>) => {
      const fileUploaded = e.target.files?.[0];
      if (!fileUploaded) return;
      setIsLoading(true);
      const result = await mediaContainer.uploadChildAndOverwrite(
        `${uid()}-${fileUploaded.name}` as LeafUri,
        fileUploaded,
        fileUploaded.type
      );
      setIsLoading(false);
      if (result.isError) {
        displayError(result);
        return;
      }
      onInsertImage(result.resource.uri);
    },
    [onInsertImage, mediaContainer]
  );

  /**
   * From Media Library
   */
  const [isLibraryModalOpen, setIsLibraryModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | undefined>();
  const onSelectedFromLibrary = useCallback(() => {
    if (!selectedImage) return;
    onInsertImage(selectedImage);
  }, [selectedImage, onInsertImage]);

  /**
   * From Link
   */
  const [isLinkModalOpen, setIsLinkModalOpen] = useState(false);
  const [modalLink, setModalLink] = useState("");

  const dropdownMenuItems = useMemo((): MenuProps["items"] => {
    return [
      {
        label: "From File",
        icon: <CloudUploadOutlined />,
        key: "file",
        onClick: onUpload,
      },
      {
        label: "From Pod's Media Library",
        icon: <CloudServerOutlined />,
        key: "library",
        onClick: () => setIsLibraryModalOpen(true),
      },
      {
        label: "From Link",
        icon: <LinkOutlined />,
        key: "link",
        onClick: () => setIsLinkModalOpen(true),
      },
    ];
  }, [onUpload]);

  return (
    <>
      <Dropdown menu={{ items: dropdownMenuItems }} arrow trigger={["click"]}>
        <MenuButton
          icon={<PictureOutlined />}
          tooltip="Insert Image"
          loading={isLoading}
        />
      </Dropdown>
      <input
        type="file"
        onChange={onUploadSelected}
        ref={hiddenFileInput}
        accept="image/*"
        style={{ display: "none" }}
      />
      <Modal
        title="Link to your image"
        open={isLinkModalOpen}
        onOk={() => {
          onInsertImage(modalLink);
          setModalLink("");
          setIsLibraryModalOpen(false);
        }}
        onCancel={() => {
          setModalLink("");
          setIsLinkModalOpen(false);
        }}>
        <Input
          placeholder={"https://example.com/image.jpg"}
          value={modalLink}
          onChange={(e) => setModalLink(e.target.value)}
        />
      </Modal>
      <Modal
        title="Select an image"
        centered
        open={isLibraryModalOpen}
        onOk={() => {
          onSelectedFromLibrary();
          setSelectedImage(undefined);
          setIsLibraryModalOpen(false);
        }}
        onCancel={() => {
          setSelectedImage(undefined);
          setIsLibraryModalOpen(false);
        }}>
        {/* Conditionally render the component so that the media page isn't always fetched */}
        {isLibraryModalOpen && (
          <ImageLibraraySelector
            onSelect={(uri) => setSelectedImage(uri)}
            selectedValue={selectedImage}
          />
        )}
      </Modal>
    </>
  );
};
