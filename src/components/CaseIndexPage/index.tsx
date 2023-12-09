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
const CaseIndexPage = ({ casesPerPage = 6, cases = [] }: { casesPerPage?: number, cases? : any[] }) => {
  const router = useRouter();
  
  const [CASES, setCASES] = useState(cases);
  const [currentItems, setCurrentItems] = useState(CASES);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    setCASES(cases); // Update CASES when cases prop changes
  }, [cases]);

  useEffect(() => {
    // Check for CASES and update state accordingly
    if (CASES.length > 0) {
      const endOffset = itemOffset + casesPerPage;
      setCurrentItems(CASES.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(CASES.length / casesPerPage));
    }
  }, [itemOffset, casesPerPage, CASES]);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * casesPerPage) % CASES.length;
    setItemOffset(newOffset);
  };

  return (
    <div
      className={combineClasses(
        "container mt-10 md:pt-0 px-0 md:px-3",
        "pt-14",
      )}
    >
      <div className="flex flex-wrap">
        {currentItems.map((each: any[], i: any) => (
          <CaseCard content={each} key={i} />
        ))}
      </div>

      {currentItems.length > 0 && <ReactPaginate
        breakLabel="..."
        nextLabel={<AiFillCaretRight />}
        onPageChange={handlePageClick}
        pageRangeDisplayed={1}
        pageCount={pageCount}
        previousLabel={<AiFillCaretLeft />}
        containerClassName="pagination"
        activeClassName="active"
      />}
    </div>
  );
};

export default CaseIndexPage;
