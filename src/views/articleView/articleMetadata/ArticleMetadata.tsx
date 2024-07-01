import { FunctionComponent } from "react";
import { Flex, Typography } from "antd";

export const ArticleMetadata: FunctionComponent = () => {
  return (
    <Flex justify="center">
      <Flex
        vertical
        style={{
          maxWidth: 680,
          flex: 1,
          padding: 8,
        }}>
        <Typography.Title editable level={1}>
          Work Title
        </Typography.Title>
        <Typography.Paragraph editable>
          This is an example of a description. I love that. Descriptions are the
          best.
        </Typography.Paragraph>
      </Flex>
    </Flex>
  );
};
