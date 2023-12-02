import { iEbook } from "../src/shared/interfaces";
import { AUTHORS } from "./_AUTHORS_LIST";

export const EBOOKS_LIST: iEbook[] = [
  {
    path: "/pages/blog/ebook-1-cancerous-insights",
    header: {
      title: "Cancerous Insights",
      date: "Mar-22-2022",
      author: AUTHORS.WILLIAM,
      description: "A book about cancer",
      category: "eBook-1",
    },
  },
  {
    path: "/pages/blog/ebook-2-cancer-chronicles",
    header: {
      title: "Cancer Chronicles",
      date: "Mar-22-2022",
      author: AUTHORS.ALEX,
      description: "A book about cancer",
      category: "eBook-2",
    },
  },
];

export const SORTED_EBOOKS_BY_DATE = EBOOKS_LIST.sort((a, b) =>
  new Date(a.header.date) > new Date(b.header.date) ? -1 : 1,
);
