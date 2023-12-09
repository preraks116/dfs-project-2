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
const EbookIndexPage = ({ ebooksPerPage = 6, ebooks = [] }: { ebooksPerPage?: number, ebooks? : any[] }) => {
  const router = useRouter();
  // console.log(ebooks);
  // const { category, author } = router.query;
  // const categoryEbooks = ebooks.filter(
  //   (each) => each.categoryID === category,
  // );
  // const authorEbooks = ebooks.filter(
  //   (each) => each.authorID === author,
  // );

  const [EBOOKS, setEBOOKS] = useState(ebooks);

  // useEffect(() => {
  //   setEBOOKS(
  //     category ? categoryEbooks : author ? authorEbooks : ebooks,
  //   );
  // }, [category, author]);

  const [currentItems, setCurrentItems] = useState(EBOOKS);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  // console.log(currentItems)
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
        "pt-14",
      )}
    >
      {/* <h1
          className="px-2 mb-[30px] text-[45px] font-bold"
          style={{ textTransform: "capitalize" }}
        >
          <hr className="mt-[10px]" />
        </h1> */}

      <div className="flex flex-wrap">
        {currentItems
          ? (currentItems as any).map((each: any[], i: any) => (
              <EbookCard content={each} key={i} />
            ))
          : null}
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

export default EbookIndexPage;
