import { SORTED_ARTICLES_BY_DATE } from "../../../BLOG_CONSTANTS/_CASES_LIST";
import { ICase } from "../../shared/interfaces";
import CaseCard from "../ArticleCards/ArticleCard";
import FeaturedArticle from "../ArticleCards/FeaturedArticle";
import Seperator from "../Seperator";
import Text from "../Text";

const FeaturedArticleSection = () => {
  const featureArticles = SORTED_ARTICLES_BY_DATE.filter(
    (article: ICase) => article.featureArticle === true
  );
  return featureArticles.length ? (
    <>
      <Text
        subtitle
        className="mb-5 md:!text-4xl text-3xl w-full px-3 !font-medium"
      >
        Featured Articles
      </Text>
      <hr className="border-1 mb-5 w-[98%] mx-auto" />

      {featureArticles.map((each, i) => (
        <CaseCard preview={each.preview} path={each.path} key={each.path + i} />
      ))}

      <Seperator />
    </>
  ) : null;
};

export default FeaturedArticleSection;
