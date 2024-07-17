import {
  DeleteOutlined,
  FileImageOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { Button, Image, Upload } from "antd";
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
      <Upload accept="image/*" onChange={onNewImage}>
        <div style={{ position: "relative" }}>
          {imageUri ? (
            <>
              <Image
                src={imageUri}
                preview={{
                  visible: false,
                  mask: (
                    <p>
                      <UploadOutlined /> Replace Image
                    </p>
                  ),
                }}
              />
              <Button
                shape="circle"
                icon={<DeleteOutlined />}
                style={{ position: "absolute", top: 8, right: 8 }}
                onClick={(e) => {
                  e.stopPropagation();
                  console.log("Delete");
                }}
              />
            </>
          ) : (
            <>
              <p className="ant-upload-drag-icon">
                <FileImageOutlined />
              </p>
              <p className="ant-upload-text">
                Click or drag an image file to this area to upload a splash
                image
              </p>
            </>
          )}
        </div>
      </Upload>
    );
  }
  return imageUri ? <Image src={imageUri} /> : <></>;
};
