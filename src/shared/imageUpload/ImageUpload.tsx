import {
  ChangeEvent,
  FunctionComponent,
  ReactNode,
  useCallback,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  CloudServerOutlined,
  CloudUploadOutlined,
  LinkOutlined,
} from "@ant-design/icons";
import { Input, MenuProps, Modal } from "antd";
import { useAppConfig } from "../providers/AppConfigProvider";
import { useResource } from "@ldo/solid-react";
import { Container, LeafUri } from "@ldo/solid";
import { uid } from "uid";
import { displayError } from "../../actions/displayError";
import { ImageLibraraySelector } from "./ImageLibrarySelector";

interface ImageUploadProps {
  onComplete: (uri: string) => void;
  renderMenu: (items: MenuProps["items"]) => ReactNode;
  onLoadingChange: (isLoading: boolean) => void;
}

export const ImageUpload: FunctionComponent<ImageUploadProps> = ({
  onComplete,
  renderMenu,
  onLoadingChange,
}) => {
  const { mediaUri } = useAppConfig();
  const mediaContainer = useResource(mediaUri, {
    suppressInitialRead: true,
  }) as Container;

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
      onLoadingChange(true);
      const result = await mediaContainer.uploadChildAndOverwrite(
        `${uid()}-${fileUploaded.name}` as LeafUri,
        fileUploaded,
        fileUploaded.type
      );
      onLoadingChange(false);
      if (result.isError) {
        displayError(result);
        return;
      }
      onComplete(result.resource.uri);
    },
    [onComplete, mediaContainer, onLoadingChange]
  );

  /**
   * From Media Library
   */
  const [isLibraryModalOpen, setIsLibraryModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | undefined>();
  const onSelectedFromLibrary = useCallback(() => {
    if (!selectedImage) return;
    onComplete(selectedImage);
  }, [selectedImage, onComplete]);

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
      {renderMenu(dropdownMenuItems)}
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
          onComplete(modalLink);
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
            onSelect={setSelectedImage}
            selectedValue={selectedImage}
          />
        )}
      </Modal>
    </>
  );
};
