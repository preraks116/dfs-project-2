import { ICase } from "../src/shared/interfaces";
import { AUTHORS_LIST } from "./_AUTHORS_LIST";

/**
 * @description List of all cases
 */
export const CASES_LIST: ICase[] = [
  {
    path: "/pages/ebooks/1-cancercare-insights/BC001.tsx",
    preview: {
      author: AUTHORS_LIST.SARAH,
      date: "Nov-20-2022",
      title: "BC001: Case Study - Early Detection of Breast Cancer",
      tags: "cancer, diagnosis, breast cancer, early detection",
      thumbnail: "/public/histology/1.png",
      description:
        "A 83-year-old lady presented with a 14mm malignant lesion in the right breast.Early detection played a crucial role in her successful treatment.",
      category: "eBook-1",
    },
  },
  {
    path: "/pages/ebooks/1-cancercare-insights/ME002.tsx",
    preview: {
      author: AUTHORS_LIST.ALEX,
      date: "Dec-05-2022",
      title: "ME002: Case Study - Understanding Melanoma",
      tags: "cancer, research, diagnosis, melanoma",
      thumbnail: "/public/histology/2.png",
      description:
        "40-year-old patient diagnosed with melanoma. Explore the case study of the patient's journey through the diagnosis and research findings.",
      category: "eBook-1",
    },
  },
  {
    path: "/pages/ebooks/1-cancercare-insights/BC003.tsx",
    preview: {
      author: AUTHORS_LIST.EMMA,
      date: "Jan-01-2023",
      title: "BC003: Case Study - Navigating Breast Cancer Treatment",
      tags: "cancer, diagnosis, treatment, breast cancer, treatment options",
      thumbnail: "/public/histology/3.png",
      description:
        "50-year-old patient diagnosed with breast cancer. Explore the case study of the patient's journey through various treatment options, highlighting challenges and successes.",
      category: "eBook-1",
    },
  },
  {
    path: "/pages/ebooks/1-cancercare-insights/LU004.tsx",
    preview: {
      author: AUTHORS_LIST.WILLIAM,
      date: "Feb-15-2023",
      title: "LU004: Case Study - Living with Lung Cancer",
      tags: "cancer, coping strategies, lung cancer",
      thumbnail: "/public/histology/4.png",
      description:
        "55-year-old patient diagnosed with lung cancer shares insights into coping strategies and navigating life with a cancer diagnosis.",
      category: "eBook-1",
    },
  },
  {
    path: "/pages/ebooks/1-cancercare-insights/PR005.tsx",
    preview: {
      author: AUTHORS_LIST.WILLIAM,
      date: "Mar-03-2023",
      title: "PR005: Case Study - Prostate Cancer Awareness",
      tags: "cancer, awareness, prostate cancer",
      thumbnail: "/public/histology/5.png",
      description:
        "60-year-old patient diagnosed with prostate cancer advocates for awareness. Learn about the importance of early detection and spreading awareness.",
      category: "eBook-1",
    },
  },
  {
    path: "/pages/ebooks/1-cancercare-insights/LC006.tsx",
    preview: {
      author: AUTHORS_LIST.WILLIAM,
      date: "Mar-15-2023",
      title: "LC006: Case Study - Coping with Lung Cancer Diagnosis",
      tags: "cancer, coping strategies, lung cancer",
      thumbnail: "/public/histology/6.png",
      description:
        "65-year-old patient diagnosed with lung cancer and their loved ones navigate the emotional and practical aspects of coping with a recent diagnosis. Gain insights into effective coping strategies and emotional support.",
      category: "eBook-1",
    },
  },
  {
    path: "/pages/ebooks/2-cancer-chronicles/RE007.tsx",
    preview: {
      author: AUTHORS_LIST.SARAH,
      date: "Nov-20-2022",
      title: "RE007: Case Study - Understanding Renal Cell Carcinoma",
      tags: "cancer, research, diagnosis, renal cell carcinoma",
      thumbnail: "/public/histology/7.png",
      description:
        "50-year-old patient diagnosed with renal cell carcinoma. Gain insights into the research and diagnosis process of renal cell carcinoma.",
      category: "eBook-2",
    },
  },
  {
    path: "/pages/ebooks/2-cancer-chronicles/LC008.tsx",
    preview: {
      author: AUTHORS_LIST.ALEX,
      date: "Dec-05-2022",
      title: "LC008: Case Study - Coping with Lung Cancer Diagnosis",
      tags: "cancer, coping strategies, lung cancer",
      thumbnail: "/public/histology/8.png",
      description:
        "55-year-old patient diagnosed with lung cancer and their loved ones navigate the emotional and practical aspects of coping with a recent diagnosis. Gain insights into effective coping strategies and emotional support.",
      category: "eBook-2",
    },
  },
  {
    path: "/pages/ebooks/2-cancer-chronicles/PR009.tsx",
    preview: {
      author: AUTHORS_LIST.EMMA,
      date: "Jan-01-2023",
      title: "PR009: Case Study - Insights into Prostate Cancer",
      tags: "cancer, research, diagnosis, prostate cancer",
      thumbnail: "/public/histology/9.png",
      description:
        "60-year-old patient diagnosed with prostate cancer. Gain insights into the research and diagnosis process of prostate cancer.",
      category: "eBook-2",
    },
  },
  {
    path: "/pages/ebooks/2-cancer-chronicles/LU010.tsx",
    preview: {
      author: AUTHORS_LIST.WILLIAM,
      date: "Feb-15-2023",
      title: "LU010: Case Study - Living with Lung Cancer",
      tags: "cancer, coping strategies, lung cancer",
      thumbnail: "/public/histology/10.png",
      description:
        "65-year-old patient diagnosed with lung cancer shares insights into coping strategies and navigating life with a cancer diagnosis.",
      category: "eBook-2",
    },
  },
];

export const SORTED_CASES_BY_DATE = CASES_LIST.sort((a, b) =>
  new Date(a.preview.date) > new Date(b.preview.date) ? -1 : 1,
);
