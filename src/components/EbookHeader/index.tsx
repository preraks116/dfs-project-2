import EbookHeaderCentered from "./EbookHeaderCentered";
import EbookHeaderDefault from "./EbookHeaderDefault";
import { ICase } from "../../shared/interfaces";

interface ICaseHeader {
  centered?: boolean;
  CASE_DETAILS: ICase;
}

const EbookHeader = ({ centered = false, CASE_DETAILS }: ICaseHeader) => {
  return centered ? (
    <EbookHeaderCentered headerData={CASE_DETAILS.preview} />
  ) : (
    <EbookHeaderDefault headerData={CASE_DETAILS.preview} />
  );
};

export default EbookHeader;
