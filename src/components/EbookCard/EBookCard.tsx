import { iEbookHeaderData } from "../../shared/interfaces";
import classes from "./ArticleCard.module.scss";
import { combineClasses, transformPath } from "../../utils/utils";
import LinkTo from "../LinkTo";
import ArticleCardCategory from "../Misc/ArticleCardCategory";

interface IProp {
  ebook: iEbookHeaderData;
  path: string;
}

const EBookCard = ({ ebook, path }: IProp) => {
  return (
    <>
      <div
        className={combineClasses(
          classes.featured_article,
          "md:border-l-[5px] border-b-[5px] md:border-b-0 border-blue-500 dark:bg-slate-800 dark:text-white dark:drop-shadow-lg cursor-pointer",
        )}
      >
        <div
          className={
            "w-full md:w-[55%] lg:px-[50px] px-[15px] lg:py-[40px] py-[20px]"
          }
        >
          <LinkTo href={"/blog/?category=" + ebook.category} passHref>
            <h1
              className={combineClasses(
                classes.featured_article__title,
                "text-[24px] font-bold mt-0 mb-[10px]",
              )}
            >
              {ebook.title}
            </h1>
          </LinkTo>
          <p
            className={combineClasses(
              classes.featured_article__intro,
              "text-[14px] font-regular mt-0 mb-[10px]",
            )}
          >
            {ebook.description.slice(0, 150)} ...
          </p>
          <p
            className={combineClasses(
              classes.featured_article__date,
              "font-normal text-xs pt-3 mb-0",
            )}
          >
            {ebook.date}
          </p>
        </div>
      </div>
    </>
  );
};

export default EBookCard;
