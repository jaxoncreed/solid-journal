import { Container, SolidLdoDataset } from "@ldo/solid";
import { creatorFunction } from "../creatorFunction";
import { displayError } from "../../actions/displayError";
import { ArticleShapeType } from "../../.ldo/activityPub.shapeTypes";
import { PotentialObjectShapeType } from "../../.ldo/potentialDocument.shapeTypes";

export const articleCreator: creatorFunction = async (
  childName: string,
  parentContaineer: Container,
  dataset: SolidLdoDataset,
  webId: string
): Promise<string> => {
  const createArticleContainerResult =
    await parentContaineer.createChildAndOverwrite(
      childName.endsWith("/") ? childName : `${childName}/`
    );
  if (createArticleContainerResult.isError) {
    displayError(createArticleContainerResult);
    throw createArticleContainerResult;
  }
  const articleContainer = createArticleContainerResult.resource as Container;

  const [createHtmlFileResult, createTtlResult, articleContainerWacResult] =
    await Promise.all([
      articleContainer.uploadChildAndOverwrite(
        "content.html",
        new Blob(),
        "text/html"
      ),
      articleContainer.createChildAndOverwrite("index.ttl"),
      articleContainer.setWac({
        public: { read: true, write: false, append: false, control: false },
        authenticated: {
          read: true,
          write: false,
          append: false,
          control: false,
        },
        agent: {
          [webId]: { read: true, write: true, append: true, control: true },
        },
      }),
    ]);
  if (createHtmlFileResult.isError) {
    displayError(createHtmlFileResult);
    throw createHtmlFileResult;
  }
  const htmlFile = createHtmlFileResult.resource;
  if (createTtlResult.isError) {
    displayError(createTtlResult);
    throw createTtlResult;
  }
  const indexFile = createTtlResult.resource;
  if (articleContainerWacResult.isError) {
    displayError(articleContainerWacResult);
    throw articleContainerWacResult;
  }

  const transaction = dataset.startTransaction();

  const root = transaction
    .usingType(PotentialObjectShapeType)
    .write(indexFile.uri)
    .fromSubject(indexFile.uri);

  const article = transaction
    .usingType(ArticleShapeType)
    .write(indexFile.uri)
    .fromSubject(`${indexFile.uri}#article`);

  root.primaryTopic = article as { "@id": string };

  article.type = [{ "@id": "Article" }];
  article.name = [""];
  article.summary = [""];
  article.url = [htmlFile.uri];

  const commitResult = await transaction.commitToPod();
  if (commitResult.isError) {
    displayError(commitResult);
    throw commitResult;
  }

  return article["@id"] as string;
};
