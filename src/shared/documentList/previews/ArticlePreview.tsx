import { Flex, Typography } from "antd";
import { FunctionComponent } from "react";
import { ViewProps } from "../../../views/ViewProps";
import { useSubject } from "@ldo/solid-react";
import { ArticleShapeType } from "../../../.ldo/activityPub.shapeTypes";
import { Article, Image } from "../../../.ldo/activityPub.typings";

export const ArticlePreview: FunctionComponent<ViewProps<Article>> = ({
  subject,
}) => {
  const article = useSubject(ArticleShapeType, subject?.["@id"]);
  if (!article) return <></>;

  // TODO: Handle bad cast
  const potentialImage = article.image?.[0];
  const articleImageUrl = potentialImage
    ? ((potentialImage as Image).url?.[0] as string)
    : undefined;
  const articleName = article.name?.[0];
  const articleSummary = article.summary?.[0];

  return (
    <Flex>
      {articleImageUrl && (
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
          src={articleImageUrl}
          alt={""}
        />
      )}
      <div>
        {articleName && (
          <Typography.Title level={2} style={{ marginTop: 0 }} ellipsis>
            {articleName}
          </Typography.Title>
        )}
        {articleSummary && (
          <Typography.Paragraph ellipsis={{ rows: 2 }}>
            {articleSummary}
          </Typography.Paragraph>
        )}
      </div>
    </Flex>
  );
};
