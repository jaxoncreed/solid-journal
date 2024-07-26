import { Flex, Typography } from "antd";
import { FunctionComponent, useMemo } from "react";
import { ViewProps } from "../../../views/ViewProps";

export const ImagePreview: FunctionComponent<ViewProps<unknown>> = ({
  resource,
}) => {
  const blobUrl = useMemo(() => {
    console.log(resource?.isBinary());
    if (resource && resource.isBinary()) {
      return URL.createObjectURL(resource.getBlob()!);
    }
    return undefined;
  }, [resource]);

  console.log(blobUrl);

  const resourceName = useMemo(() => {
    if (resource?.uri) {
      const split = resource.uri.split("/");
      return split[split.length - 1];
    }
    return undefined;
  }, [resource?.uri]);

  return (
    <Flex>
      {blobUrl && (
        <img
          style={{
            marginTop: -24,
            marginBottom: -24,
            marginLeft: -24,
            marginRight: 16,
            height: 150,
            width: 200,
            objectFit: "cover",
          }}
          src={blobUrl}
          alt={""}
        />
      )}
      <div>
        <Typography.Paragraph ellipsis={{ rows: 2 }}>
          {resourceName}
        </Typography.Paragraph>
      </div>
    </Flex>
  );
};
