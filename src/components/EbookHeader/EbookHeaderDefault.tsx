import Link from "next/link";
import { IEbookHeaderData } from "../../shared/interfaces";
import { combineClasses } from "../../utils/utils";
import Avatar from "../Misc/Avatar";
import classes from "./EbookHeader.module.scss";

interface IProps {
  headerData: IEbookHeaderData;
}
const EbookHeaderDefault = ({ headerData }: IProps) => {
  return (
    <div className="mb-[30px]">
      <div className="mb-[10px] flex items-center mt-[15px]">
        <Avatar
          author={headerData.author}
          className="w-[60px] h-[60px] mr-3 text-xl"
        />
        <div>
          <div className="flex text-[16px] md:text-[20px] items-center">
            <p
              className={combineClasses(
                classes.article_header_author_name,
                "font-medium my-0"
              )}
            >
              {headerData.author.name}
            </p>
            {headerData.category && (
              <>
                <p className="px-2 dark:text-gray-400 text-gray-500 my-0">in</p>
                <p className="font-medium my-0">
                  <Link
                    href={"/ebooks?category=" + headerData.category}
                    passHref={true}
                  >
                    {headerData.category}
                  </Link>
                </p>
              </>
            )}
          </div>
          <p className="text-xs dark:text-gray-400 text-gray-500 my-0 mt-1">
            {headerData.date}
          </p>
        </div>
      </div>
      <h1 className="text-2xl md:text-4xl font-semibold mt-[20px] mb-[5px]">
        {headerData.title}
      </h1>
    </div>
  );
};

export default EbookHeaderDefault;
