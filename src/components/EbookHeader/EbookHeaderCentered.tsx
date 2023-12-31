import Link from "next/link";
import { IEbookHeaderData } from "../../shared/interfaces";
import { combineClasses } from "../../utils/utils";
import CardTags from "../Misc/CardTags";
import classes from "./EbookHeader.module.scss";

interface IProps {
  headerData: IEbookHeaderData;
}
const EbookHeaderCentered = ({ headerData }: IProps) => {
  return (
    <div className="mb-[30px]">
      <h1
        className={combineClasses(
          classes.articleTitle,
          "text-center text-2xl md:text-4xl font-medium mt-[20px] mb-[5px]",
        )}
      >
        {headerData.title}
      </h1>
      <div
        className={combineClasses(
          "mb-[10px] mt-[15px] text-[14px] font-medium",
          classes.centered_article_header_author,
        )}
      >
        <p className={"my-0 mx-[30px] font-medium"}>
          {headerData.author.name}
          {headerData.category && (
            <>
              <span className="px-1 font-light">in</span>
              <Link
                href={"/ebooks?category=" + headerData.category}
                passHref={true}
              >
                {headerData.category}
              </Link>
            </>
          )}
        </p>

        <p className="my-0">{headerData.date}</p>
      </div>
    </div>
  );
};

export default EbookHeaderCentered;
