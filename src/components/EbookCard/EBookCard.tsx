import { IEbookHeaderData } from "../../shared/interfaces";
import classes from "./EbookCard.module.scss";
import {
  combineClasses,
  transformImagePaths,
  transformPath,
} from "../../utils/utils";
import LinkTo from "../LinkTo";
import Avatar from "../Misc/Avatar";

interface IProp {
  content: IEbookHeaderData;
  path: string;
}

const EbookCard = ({ content, path }: IProp) => {
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
                href={"/ebooks?author=" + content.author.name}
                passHref
                className={combineClasses(
                  classes.author_name,
                  "text-[14px] md:text-[16px] my-0 font-medium"
                )}
              >
                {content.author.name}
              </LinkTo>
            </div>
          </div>
          <LinkTo href={"ebooks?=category=" + content.category}>
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
            {content.description}
          </p>
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
          <img
            src={transformImagePaths(content.thumbnail)}
            alt={content.title}
            className="max-h-80 h-full w-full object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default EbookCard;
