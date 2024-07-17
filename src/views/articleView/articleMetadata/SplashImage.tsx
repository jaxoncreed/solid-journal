import { FileImageOutlined } from "@ant-design/icons";
import { Image, Upload } from "antd";
import { UploadChangeParam } from "antd/es/upload";
import { FunctionComponent } from "react";

interface SplashImageProps {
  onNewImage: (changeParam: UploadChangeParam) => void;
  imageUri?: string;
  isEditing: boolean;
}

export const SplashImage: FunctionComponent<SplashImageProps> = ({
  isEditing,
  imageUri,
  onNewImage,
}) => {
  if (isEditing) {
    return (
      <Upload.Dragger accept="image/*" onChange={onNewImage}>
        {imageUri ? (
          <Image src={imageUri} />
        ) : (
          <>
            <p className="ant-upload-drag-icon">
              <FileImageOutlined />
            </p>
            <p className="ant-upload-text">
              Click or drag an image file to this area to upload a splash image
            </p>
          </>
        )}
      </Upload.Dragger>
    );
  }
  return imageUri ? <Image src={imageUri} /> : <></>;
};
