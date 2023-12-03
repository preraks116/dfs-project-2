import dynamic from "next/dynamic";

export const PageLayout = dynamic(() => import("../layouts"));
export const Text = dynamic(() => import("./Text"));
export const Image = dynamic(() => import("./CaseImage"));
export const Seperator = dynamic(() => import("./Seperator"));
export const List = dynamic(() => import("./List"));
export const LinkTo = dynamic(() => import("./LinkTo"));
export const Slider = dynamic(() => import("./Slider"));
