import Image from "next/image";
import LinkTo from "../LinkTo";
import {
  combineClasses,
  transformImagePaths,
  transformPath,
} from "../../utils/utils";
import Avatar from "../Misc/Avatar";
import CardCategories from "../Misc/CardCategories";
import CardTags from "../Misc/CardTags";
import classes from "./CaseCard.module.scss";
import { ICaseHeaderData } from "../../shared/interfaces";

const formatDate = (rawDate: string) => {
  const date = new Date(rawDate);
  return date.toLocaleDateString("en-US");
};

interface IProp {
  content: any[];
}
/**
 * 
 * @param param0 content to render, path to link to
 * @returns  a case card component
 */
const CaseCard = ({ content }: any[]) => {
  console.log(content)
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
        href={transformPath()}
        passHref
        className={combineClasses(
          classes.case_card,
          "border-b-[5px] border-blue-500 dark:bg-slate-800 dark:text-white dark:drop-shadow-lg flex flex-col justify-between",
        )}
      >
        <div>
          <div className={"rounded-t-[4px] overflow-hidden h-[200px] relative"}>
            <Image
              src={transformImagePaths(content.thumbnailPath)}
              alt={content.title}
              layout="fill"
              quality={100}
              objectFit="cover"
              loader={imgLoader}
            />
          </div>

          <div className={"d-block px-[15px] py-0"}>
            <p className={"font-normal text-xs pt-3 mb-0 md:mb-3"}>
              {formatDate(content.date)}
            </p>
            <LinkTo href={transformPath()} passHref>
              <h1
                className={
                  "text-[22px] font-bold cursor-pointer tracking-wide hover:text-blue-600"
                }
              >
                {content.title}
              </h1>
            </LinkTo>
            <p
              className={combineClasses(
                classes.case_card__intro,
                "text-sm font-normal mt-2 md:mt-1",
              )}
            >
              {content.description.slice(0, 100)} ...
            </p>
            <CardTags tags={content.tags} />
          </div>
        </div>
        <div
          className={combineClasses(
            classes.case_card_footer,
            "mt-4 mb-3 flex items-center px-3",
          )}
        >
          <div className={"flex items-center"}>
            <Avatar
              author={content.author[0]}
              className="w-[40px] h-[40px] mr-3 text-xl"
            />
            <LinkTo
              href={"/ebooks?author=" + content.author[0].name}
              passHref
              className={combineClasses(
                classes.author_name,
                "text-sm font-medium",
              )}
            >
              {content.author[0].name}
            </LinkTo>
          </div>
          <CardCategories category={content.category} />
        </div>
      </LinkTo>
    </div>
  );
};

export default CaseCard;
