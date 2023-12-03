import CaseHeaderCentered from "./CaseHeaderCentered";
import CaseHeaderDefault from "./CaseHeaderDefault";
import { ICase } from "../../shared/interfaces";

interface ICaseHeader {
  centered?: boolean;
  CASE_DETAILS: ICase;
}

const CaseHeader = ({ centered = false, CASE_DETAILS }: ICaseHeader) => {
  return centered ? (
    <CaseHeaderCentered headerData={CASE_DETAILS.preview} />
  ) : (
    <CaseHeaderDefault headerData={CASE_DETAILS.preview} />
  );
};

export default CaseHeader;
