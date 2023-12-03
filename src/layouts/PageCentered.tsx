import classes from "./layouts.module.scss";
import { combineClasses, getArticleDetails } from "../utils/utils";
import { SORTED_CASES_BY_DATE } from "../../constants/_CASES_LIST";
import Seperator from "../components/Seperator";
import CaseHeader from "../components/CaseHeader";
import MoreFromAuthor from "../components/Misc/MoreFromAuthor";

const PageCentered = ({ children }: any) => {
  const ITEM_DETAILS = getArticleDetails();
  const author = ITEM_DETAILS.preview.author;
  const relatedItems = SORTED_CASES_BY_DATE.filter(
    (each) => each.preview.author === author,
  );

  return (
    <section
      className={combineClasses(
        classes.centered_article_wrapper,
        "dark:bg-slate-900 dark:text-white",
      )}
    >
      <div className="container px-0 md:px-[15px] pt-[50px] pb-[50px]">
        <article
          className={combineClasses(
            classes.article_content,
            "pb-[30px] px-3 bg-white dark:bg-slate-800 dark:border-none dark:drop-shadow-lg dark:text-white pt-10 md:pt-0 mx-auto font-regular text-lg leading-relaxed",
          )}
        >
          <CaseHeader CASE_DETAILS={ITEM_DETAILS} centered />
          {children}
        </article>
        <Seperator />
        <div className={combineClasses(classes.author_and_more, "mx-auto")}>
          <MoreFromAuthor
            author={author}
            relatedArticles={relatedItems}
            articleGrid
          />
        </div>
      </div>
    </section>
  );
};

export default PageCentered;
