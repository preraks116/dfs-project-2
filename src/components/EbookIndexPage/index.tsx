import EbookCard from "../EbookCard/EBookCard";
import { SORTED_EBOOKS_BY_DATE } from "../../../constants/_EBOOKS_LIST";
import { useRouter } from "next/router";
import { combineClasses } from "../../utils/utils";
import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";
import { IEbook } from "../../shared/interfaces";
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";

/**
 * 
 * @param param0 ebooks per page
 * @returns  an ebook index page
 */
const EbookIndexPage = ({ ebooksPerPage = 6 }: { ebooksPerPage?: number }) => {
  const router = useRouter();
  const { category, author } = router.query;
  const categoryEbooks = SORTED_EBOOKS_BY_DATE.filter(
    (each) => each.preview.category === category
  );
  const authorEbooks = SORTED_EBOOKS_BY_DATE.filter(
    (each) => each.preview.author.name === author
  );

  const [EBOOKS, setEBOOKS] = useState(SORTED_EBOOKS_BY_DATE);

  useEffect(() => {
    setEBOOKS(
      category ? categoryEbooks : author ? authorEbooks : SORTED_EBOOKS_BY_DATE
    );
  }, [category, author]);

  const [currentItems, setCurrentItems] = useState(EBOOKS);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + ebooksPerPage;
    setCurrentItems(EBOOKS.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(EBOOKS.length / ebooksPerPage));
  }, [itemOffset, ebooksPerPage, EBOOKS]);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * ebooksPerPage) % EBOOKS.length;
    setItemOffset(newOffset);
  };

  return (
    <div
      className={combineClasses(
        "container mt-10 md:pt-0 px-0 md:px-3",
        category ? "pt-10" : "pt-14"
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
          ? (currentItems as any).map((each: IEbook, i: any) => (
              <EbookCard content={each.preview} path={each.path} key={i} />
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
