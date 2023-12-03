import { IEbook } from "../src/shared/interfaces";
import { AUTHORS_LIST } from "./_AUTHORS_LIST";
/**
 * @description List of all ebooks
 */
export const EBOOKS_LIST: IEbook[] = [
  {
    path: "/pages/ebooks/ebook-1-cancerous-insights",
    preview: {
      title: "Cancerous Insights",
      date: "Mar-22-2022",
      author: AUTHORS_LIST.WILLIAM,
      thumbnail: "/public/histology/1.png",
      description: "A book about cancer",
      category: "eBook-1",
    },
  },
  {
    path: "/pages/ebooks/ebook-2-cancer-chronicles",
    preview: {
      title: "Cancer Chronicles",
      date: "Mar-22-2022",
      author: AUTHORS_LIST.ALEX,
      thumbnail: "/public/histology/7.png",
      description: "A book about cancer",
      category: "eBook-2",
    },
  },
];

export const SORTED_EBOOKS_BY_DATE = EBOOKS_LIST.sort((a, b) =>
  new Date(a.preview.date) > new Date(b.preview.date) ? -1 : 1,
);
