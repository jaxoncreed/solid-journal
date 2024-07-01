import { FunctionComponent } from "react";
import { ViewProps } from "../ViewProps";
import { ArticleMetadata } from "./articleMetadata/ArticleMetadata";
import { ArticleContent } from "./articleContent/ArticleContent";
import { Affix } from "antd";
import { PublishMenu } from "./PublishMenu";

export const ArticleView: FunctionComponent<ViewProps> = () => {
  return (
    <>
      <Affix offsetTop={0}>
        <PublishMenu />
      </Affix>
      <ArticleMetadata />
      <ArticleContent />
    </>
  );
};
