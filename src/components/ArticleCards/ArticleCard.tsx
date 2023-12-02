import LinkTo from "../LinkTo";
import { ICaseHeaderData } from "../../shared/interfaces";
import {
  combineClasses,
  transformImagePaths,
  transformPath,
} from "../../utils/utils";
import classes from "./ArticleCard.module.scss";
import Avatar from "../Misc/Avatar";
import ArticleCardCategory from "../Misc/ArticleCardCategory";
import ArticleTags from "../Misc/ArticleTags";
import Image from "next/image";

interface IProp {
  preview: ICaseHeaderData;
  path: string;
}

const CaseCard = ({ preview, path }: IProp) => {
  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";

  const imgLoader = ({ src, width, quality }: any) => {
    return `${origin}${src}?w=${width}&q=${quality || 75}`;
  };

  return (
    <div className={"w-full lg:w-1/3 md:w-1/2 md:px-[15px] px-2 mb-[30px]"}>
      <LinkTo
        href={transformPath(path)}
        passHref
        className={combineClasses(
          classes.article_card,
          "border-b-[5px] border-blue-500 dark:bg-slate-800 dark:text-white dark:drop-shadow-lg flex flex-col justify-between"
        )}
      >
        <div>
          <div className={"rounded-t-[4px] overflow-hidden h-[200px] relative"}>
            <Image
              src={transformImagePaths(preview.thumbnail)}
              alt={preview.title}
              layout="fill"
              quality={100}
              objectFit="cover"
              loader={imgLoader}
            />
          </div>

          <div className={"d-block px-[15px] py-0"}>
            <p className={"font-normal text-xs pt-3 mb-0 md:mb-3"}>
              {preview.date}
            </p>
            <LinkTo href={transformPath(path)} passHref>
              <h1
                className={
                  "text-[22px] font-bold cursor-pointer tracking-wide hover:text-blue-600"
                }
              >
                {preview.title}
              </h1>
            </LinkTo>
            <p
              className={combineClasses(
                classes.article_card__intro,
                "text-sm font-normal mt-2 md:mt-1"
              )}
            >
              {preview.shortIntro.slice(0, 100)} ...
            </p>
            <ArticleTags tags={preview.tags} />
          </div>
        </div>
        <div
          className={combineClasses(
            classes.article_card_footer,
            "mt-4 mb-3 flex items-center px-3"
          )}
        >
          <div className={"flex items-center"}>
            <Avatar
              author={preview.author}
              className="w-[40px] h-[40px] mr-3 text-xl"
            />
            <LinkTo
              href={"/blog?author=" + preview.author.name}
              passHref
              className={combineClasses(
                classes.author_name,
                "text-sm font-medium"
              )}
            >
              {preview.author.name}
            </LinkTo>
          </div>
          <ArticleCardCategory category={preview.category} />
        </div>
      </LinkTo>
    </div>
  );
};

export default CaseCard;
