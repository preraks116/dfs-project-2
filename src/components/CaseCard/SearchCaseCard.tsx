import LinkTo from "../LinkTo";
import { combineClasses } from "../../utils/utils";
import CardCategories from "../Misc/CardCategories";
import CardTags from "../Misc/CardTags";
import Avatar from "../Misc/Avatar";
import classes from "./CaseCard.module.scss";
import { ICaseHeaderData } from "../../shared/interfaces";

interface IProp {
  content: ICaseHeaderData;
  path: string;
}

const SerachCaseCard = ({ content, path }: IProp) => (
  <div className="w-full lg:w-1/3 md:w-1/2 px-3 mb-10">
    <LinkTo href={path} passHref={true}>
      <div
        className={combineClasses(
          classes.article_card,
          "px-[15px] py-[10px] border-b-[5px] border-blue-600 dark:bg-slate-800 dark:text-white bg-white text-black drop-shadow-lg",
        )}
      >
        <p
          className={combineClasses(
            classes.article_card__date,
            "font-medium text-xs mt-3 mb-2",
          )}
        >
          {content.date}
        </p>
        <LinkTo href={path} passHref={true}>
          <h1
            className={combineClasses(
              classes.article_card__title,
              "text-[22px] font-bold my-0",
            )}
          >
            {content.title}
          </h1>
        </LinkTo>
        <CardTags tags={content.tags} />
        <div className={"flex items-center mt-3"}>
          <div className="flex items-center">
            <Avatar
              author={content.author}
              className="w-[40px] h-[40px] mr-3 text-xl"
            />
            <LinkTo
              href={"/ebooks?author=" + content.author.name}
              passHref
              className={combineClasses(
                classes.author_name,
                "text-sm font-medium",
              )}
            >
              {content.author.name}
            </LinkTo>
            {/* <p className={combineClasses(classes.author_name, 'text-sm font-medium')}>
              {article.author.name}
            </p> */}
          </div>
          <CardCategories category={content.category} />
        </div>
      </div>
    </LinkTo>
  </div>
);
export default SerachCaseCard;
