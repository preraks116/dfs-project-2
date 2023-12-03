import CaseIndexPage from "../../src/components/CaseIndexPage";

/**
 * @description renders all case study pages
 * @returns a case study page
 */
const AllCases = () => {
  return <CaseIndexPage casesPerPage={6} />;
};

export default AllCases;
