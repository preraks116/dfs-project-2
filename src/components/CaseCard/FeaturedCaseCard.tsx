import LinkTo from "../LinkTo";
import {
  combineClasses,
  transformImagePaths,
  transformPath,
} from "../../utils/utils";
import Avatar from "../Misc/Avatar";
import ArticleCardCategory from "../Misc/ArticleCardCategory";
import ArticleTags from "../Misc/ArticleTags";
import classes from "./CaseCard.module.scss";
import { ICaseHeaderData } from "../../shared/interfaces";

interface IProp {
  content: ICaseHeaderData;
  path: string;
}

const FeaturedCaseCard = ({ content, path }: IProp) => {
  return (
    <>
      <div
        className={combineClasses(
          classes.featured_article,
          "md:border-l-[5px] border-b-[5px] md:border-b-0 border-blue-500 dark:bg-slate-800 dark:text-white dark:drop-shadow-lg cursor-pointer"
        )}
      >
        <div
          className={
            "w-full md:w-[55%] lg:px-[50px] px-[15px] lg:py-[40px] py-[20px]"
          }
        >
          <div className={"mt-0 mb-[10px] flex items-center"}>
            <div className={"flex items-center"}>
              <Avatar
                author={content.author}
                className="w-[50px] h-[50px] mr-3 text-xl"
              />
              <LinkTo
                href={"/blog?author=" + content.author.name}
                passHref
                className={combineClasses(
                  classes.author_name,
                  "text-[14px] md:text-[16px] my-0 font-medium"
                )}
              >
                {content.author.name}
              </LinkTo>
              {/* <p className={combineClasses(classes.author_name, 'text-[14px] md:text-[16px] my-0 font-medium')}>
                                {article.author.name}
                            </p> */}
            </div>
            <ArticleCardCategory category={content.category} />
          </div>
          <LinkTo href={transformPath(path)} passHref>
            <h1
              className={combineClasses(
                classes.featured_article__title,
                "text-[24px] font-bold mt-0 mb-[10px]"
              )}
            >
              {content.title}
            </h1>
          </LinkTo>
          <p
            className={combineClasses(
              classes.featured_article__intro,
              "text-[14px] font-regular mt-0 mb-[10px]"
            )}
          >
            {content.shortIntro.slice(0, 150)} ...
          </p>
          <ArticleTags tags={content.tags} />
          <p
            className={combineClasses(
              classes.featured_article__date,
              "font-normal text-xs pt-3 mb-0"
            )}
          >
            {content.date}
          </p>
        </div>
        <div
          className={combineClasses(
            classes.featured_article__image,
            "rounded-sm overflow-hidden"
          )}
        >
          {/* style={{ background: `url(${transformImagePaths(article.thumbnail)})` }} */}
          <img
            src={transformImagePaths(content.thumbnail)}
            alt={content.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default FeaturedCaseCard;
