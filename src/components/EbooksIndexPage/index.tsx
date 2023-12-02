import ArticleCard from "../../components/ArticleCards/ArticleCard";
import { SORTED_ARTICLES_BY_DATE } from "../../../BLOG_CONSTANTS/_ARTICLES_LIST";
import { useRouter } from "next/router";
import { PageLayout } from "../../components";
import { combineClasses } from "../../utils/utils";
import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";
import { iArticle, iEbook } from "../../shared/interfaces";
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";
import {
  EBOOKS_LIST,
  SORTED_EBOOKS_BY_DATE,
} from "../../../BLOG_CONSTANTS/_EBOOKS_LIST";
import EBookCard from "../EbookCard/EBookCard";

const EbookIndexPage = ({ ebooksPerPage = 6 }: { ebooksPerPage?: number }) => {
  const router = useRouter();
  const { category, author } = router.query;
  const categoryArticles = SORTED_EBOOKS_BY_DATE.filter(
    (each) => each.header.category === category,
  );
  const authorArticles = SORTED_EBOOKS_BY_DATE.filter(
    (each) => each.header.author.name === author,
  );

  const [ARTICLES, setARTICLES] = useState(SORTED_EBOOKS_BY_DATE);

  useEffect(() => {
    setARTICLES(
      category
        ? categoryArticles
        : author
          ? authorArticles
          : SORTED_EBOOKS_BY_DATE,
    );
  }, [category, author]);

  const [currentItems, setCurrentItems] = useState(ARTICLES);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + ebooksPerPage;
    setCurrentItems(ARTICLES.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(ARTICLES.length / ebooksPerPage));
  }, [itemOffset, ebooksPerPage, ARTICLES]);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * ebooksPerPage) % ARTICLES.length;
    setItemOffset(newOffset);
  };

  return (
    <div
      className={combineClasses(
        "container mt-10 md:pt-0 px-0 md:px-3",
        category ? "pt-10" : "pt-14",
      )}
    >
      {category || author ? (
        <h1
          className="px-2 mb-[30px] text-[45px] font-bold"
          style={{ textTransform: "capitalize" }}
        >
          {category || author}
          <hr className="mt-[10px]" />
        </h1>
      ) : null}

      <div className="flex flex-wrap">
        {currentItems
          ? (currentItems as any).map((each: iEbook, i: any) => (
              <EBookCard ebook={each.header} path={each.path} key={i} />
            ))
          : null}
      </div>

      <ReactPaginate
        breakLabel="..."
        nextLabel={<AiFillCaretRight />}
        onPageChange={handlePageClick}
        pageRangeDisplayed={1}
        pageCount={pageCount}
        previousLabel={<AiFillCaretLeft />}
        containerClassName="pagination"
        activeClassName="active"
      />
    </div>
  );
};

export default EbookIndexPage;
