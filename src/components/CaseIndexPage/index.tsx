import CaseCard from "../CaseCard/CaseCard";
import { SORTED_CASES_BY_DATE } from "../../../constants/_CASES_LIST";
import { useRouter } from "next/router";
import { combineClasses } from "../../utils/utils";
import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";
import { ICase } from "../../shared/interfaces";
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";

/**
 *  @description renders a case index page
 * @param param0 cases per page
 * @returns  a case index page
 */
const CaseIndexPage = ({ casesPerPage = 6 }: { casesPerPage?: number }) => {
  const router = useRouter();
  const { category, author } = router.query;
  const categoryCases = SORTED_CASES_BY_DATE.filter(
    (each) => each.preview.category === category,
  );
  const authorCases = SORTED_CASES_BY_DATE.filter(
    (each) => each.preview.author.name === author,
  );

  const [CASES, setCASES] = useState(SORTED_CASES_BY_DATE);

  useEffect(() => {
    setCASES(
      category ? categoryCases : author ? authorCases : SORTED_CASES_BY_DATE,
    );
  }, [category, author]);

  const [currentItems, setCurrentItems] = useState(CASES);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + casesPerPage;
    setCurrentItems(CASES.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(CASES.length / casesPerPage));
  }, [itemOffset, casesPerPage, CASES]);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * casesPerPage) % CASES.length;
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
          ? (currentItems as any).map((each: ICase, i: any) => (
              <CaseCard content={each.preview} path={each.path} key={i} />
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

export default CaseIndexPage;
