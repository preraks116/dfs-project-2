import classes from "./layouts.module.scss";
import { combineClasses, getArticleDetails } from "../utils/utils";
import { SORTED_CASES_BY_DATE } from "../../constants/_CASES_LIST";
import CaseHeader from "../components/CaseHeader";
import MoreFromAuthor from "../components/Misc/MoreFromAuthor";

/**
 * @param param0 takes in children and ads
 * @description renders a page with a sidebar
 * @returns a page with a sidebar
 */
const PageWithSidebar = ({
  children,
  ads,
}: {
  children: any;
  ads?: string[];
}) => {
  const ARTICLE_DETAILS = getArticleDetails();
  const author = ARTICLE_DETAILS.preview.author;
  const relatedArticles = SORTED_CASES_BY_DATE.filter(
    (each) => each.preview.author === author
  );

  return (
    <>
      <section
        className={combineClasses(
          classes.withSidebar_article_wrapper,
          "dark:bg-slate-900 dark:text-white"
        )}
      >
        <div className="container px-0 md:px-[15px] lg:flex pb-[50px] pt-[50px]">
          <article
            className={combineClasses(
              classes.article_content,
              "pb-[20px] px-3 text-black bg-white dark:bg-slate-800 dark:border-none dark:drop-shadow-lg dark:text-white pt-10 md:pt-0 font-regular text-lg leading-relaxed"
            )}
          >
            <CaseHeader CASE_DETAILS={ARTICLE_DETAILS} />
            {children}
          </article>
          <div className={classes.article_sidebar_wrapper}>
            <MoreFromAuthor author={author} relatedArticles={relatedArticles} />
            {ads && ads.length ? (
              <div className="flex flex-wrap">
                {ads.map((each: string, i: any) => (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: `${each}`,
                    }}
                    key={i}
                  />
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </section>
    </>
  );
};

export default PageWithSidebar;
