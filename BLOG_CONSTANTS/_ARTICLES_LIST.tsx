import { iArticle } from "../src/shared/interfaces";
import { AUTHORS } from "./_AUTHORS_LIST";

// main article list to display all atricles
/**
 * Example article object
 * 
 {
    path: '/pages/ebook-name/article-name.tsx',
    featureArticle: false,
    preview: {
        // the author object you created in _BLOG_SETUP file
        author: IAuthor,
        date: "March 03 2022",
        articleTitle: "How to setup this plog template",
        tags: "demo, blog setup",
        thumbnail: "/images/tutorials/demo-image.jpg",
        shortIntro: "These are the steps to setup your blog",
    },
    seo: {
        title: "These are the steps to setup your blog",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        keywords: "demo, blog setup",
        ogImage: "/images/tutorials/demo-image.jpg",
    }
}
 */

// clear this article list and add your own
export const ARTICLES_LIST: iArticle[] = [
  {
    path: "/pages/blog/ebook-1-cancercare-insights/article-BC001.tsx",
    featureArticle: false,
    preview: {
      author: AUTHORS.SARAH,
      date: "Nov-20-2022",
      articleTitle: "BC001: Case Study - Early Detection of Breast Cancer",
      tags: "cancer, diagnosis, breast cancer, early detection",
      thumbnail: "/public/images_histo/1.png",
      shortIntro:
        "A 83-year-old lady presented with a 14mm malignant lesion in the right breast.Early detection played a crucial role in her successful treatment.",
      category: "eBook-1",
    },
    seo: {
      title: "BC001: Case Study - Early Detection of Breast Cancer",
      description:
        "Explore a real-life case study where a 45-year-old patient presented with subtle breast changes, leading to early detection and successful treatment.",
      keywords: "breast cancer, early detection",
      ogImage: "/public/images_histo/1.png",
    },
  },
  {
    path: "/pages/blog/ebook-1-cancercare-insights/article-ME002.tsx",
    featureArticle: false,
    preview: {
      author: AUTHORS.ALEX,
      date: "Dec-05-2022",
      articleTitle: "ME002: Case Study - Understanding Melanoma",
      tags: "cancer, research, diagnosis, melanoma",
      thumbnail: "/public/images_histo/2.png",
      shortIntro:
        "40-year-old patient diagnosed with melanoma. Explore the case study of the patient's journey through the diagnosis and research findings.",
      category: "eBook-1",
    },
    seo: {
      title: "ME002: Case Study - Understanding Melanoma",
      description:
        "Delve into a case study featuring a patient's journey through the diagnosis and research findings of melanoma, a type of skin cancer.",
      keywords: "melanoma, cancer research, diagnosis",
      ogImage: "/public/images_histo/2.png",
    },
  },
  {
    path: "/pages/blog/ebook-1-cancercare-insights/article-BC003.tsx",
    featureArticle: false,
    preview: {
      author: AUTHORS.EMMA,
      date: "Jan-01-2023",
      articleTitle: "BC003: Case Study - Navigating Breast Cancer Treatment",
      tags: "cancer, diagnosis, treatment, breast cancer, treatment options",
      thumbnail: "/public/images_histo/3.png",
      shortIntro:
        "50-year-old patient diagnosed with breast cancer. Explore the case study of the patient's journey through various treatment options, highlighting challenges and successes.",
      category: "eBook-1",
    },
    seo: {
      title: "BC003: Case Study - Navigating Breast Cancer Treatment",
      description:
        "Delve into a case study featuring a patient's journey through various breast cancer treatment options, exploring the challenges and successes along the way.",
      keywords: "breast cancer treatment, treatment options",
      ogImage: "/public/images_histo/3.png",
    },
  },
  {
    path: "/pages/blog/ebook-1-cancercare-insights/article-LU004.tsx",
    featureArticle: false,
    preview: {
      author: AUTHORS.WILLIAM,
      date: "Feb-15-2023",
      articleTitle: "LU004: Case Study - Living with Lung Cancer",
      tags: "cancer, coping strategies, lung cancer",
      thumbnail: "/public/images_histo/4.png",
      shortIntro:
        "55-year-old patient diagnosed with lung cancer shares insights into coping strategies and navigating life with a cancer diagnosis.",
      category: "eBook-1",
    },
    seo: {
      title: "LU004: Case Study - Living with Lung Cancer",
      description:
        "Gain valuable insights into the life of a 55-year-old patient diagnosed with lung cancer, exploring coping strategies and emotional support.",
      keywords: "lung cancer, coping strategies",
      ogImage: "/public/images_histo/4.png",
    },
  },
  {
    path: "/pages/blog/ebook-1-cancercare-insights/article-PR005.tsx",
    featureArticle: false,
    preview: {
      author: AUTHORS.WILLIAM,
      date: "Mar-03-2023",
      articleTitle: "PR005: Case Study - Prostate Cancer Awareness",
      tags: "cancer, awareness, prostate cancer",
      thumbnail: "/public/images_histo/5.png",
      shortIntro:
        "60-year-old patient diagnosed with prostate cancer advocates for awareness. Learn about the importance of early detection and spreading awareness.",
      category: "eBook-1",
    },
    seo: {
      title: "PR005: Case Study - Prostate Cancer Awareness",
      description:
        "Join the advocacy journey of a 60-year-old patient diagnosed with prostate cancer, emphasizing the importance of early detection and spreading awareness.",
      keywords: "prostate cancer awareness",
      ogImage: "/public/images_histo/5.png",
    },
  },
  {
    path: "/pages/blog/ebook-1-cancercare-insights/article-LC006.tsx",
    featureArticle: false,
    preview: {
      author: AUTHORS.WILLIAM,
      date: "Mar-15-2023",
      articleTitle: "LC006: Case Study - Coping with Lung Cancer Diagnosis",
      tags: "cancer, coping strategies, lung cancer",
      thumbnail: "/public/images_histo/6.png",
      shortIntro:
        "65-year-old patient diagnosed with lung cancer and their loved ones navigate the emotional and practical aspects of coping with a recent diagnosis. Gain insights into effective coping strategies and emotional support.",
      category: "eBook-1",
    },
    seo: {
      title: "LC006: Case Study - Coping with Lung Cancer Diagnosis",
      description:
        "Follow the inspiring story of a patient and their loved ones as they navigate the emotional and practical aspects of coping with a lung cancer diagnosis.",
      keywords: "lung cancer, coping strategies",
      ogImage: "/public/images_histo/6.png",
    },
  },
  {
    path: "/pages/blog/ebook-2-cancer-chronicles/article-RE007.tsx",
    featureArticle: false,
    preview: {
      author: AUTHORS.SARAH,
      date: "Nov-20-2022",
      articleTitle: "RE007: Case Study - Understanding Renal Cell Carcinoma",
      tags: "cancer, research, diagnosis, renal cell carcinoma",
      thumbnail: "/public/images_histo/7.png",
      shortIntro:
        "50-year-old patient diagnosed with renal cell carcinoma. Gain insights into the research and diagnosis process of renal cell carcinoma.",
      category: "eBook-2",
    },
    seo: {
      title: "RE007: Case Study - Understanding Renal Cell Carcinoma",
      description:
        "Explore a case study providing insights into the research and diagnosis process of renal cell carcinoma in a 50-year-old patient.",
      keywords: "renal cell carcinoma, cancer research, diagnosis",
      ogImage: "/public/images_histo/7.png",
    },
  },
  {
    path: "/pages/blog/ebook-2-cancer-chronicles/article-LC008.tsx",
    featureArticle: false,
    preview: {
      author: AUTHORS.ALEX,
      date: "Dec-05-2022",
      articleTitle: "LC008: Case Study - Coping with Lung Cancer Diagnosis",
      tags: "cancer, coping strategies, lung cancer",
      thumbnail: "/public/images_histo/8.png",
      shortIntro:
        "55-year-old patient diagnosed with lung cancer and their loved ones navigate the emotional and practical aspects of coping with a recent diagnosis. Gain insights into effective coping strategies and emotional support.",
      category: "eBook-2",
    },
    seo: {
      title: "LC008: Case Study - Coping with Lung Cancer Diagnosis",
      description:
        "Follow the inspiring story of a patient and their loved ones as they navigate the emotional and practical aspects of coping with a lung cancer diagnosis.",
      keywords: "lung cancer, coping strategies",
      ogImage: "/public/images_histo/8.png",
    },
  },
  {
    path: "/pages/blog/ebook-2-cancer-chronicles/article-PR009.tsx",
    featureArticle: false,
    preview: {
      author: AUTHORS.EMMA,
      date: "Jan-01-2023",
      articleTitle: "PR009: Case Study - Insights into Prostate Cancer",
      tags: "cancer, research, diagnosis, prostate cancer",
      thumbnail: "/public/images_histo/9.png",
      shortIntro:
        "60-year-old patient diagnosed with prostate cancer. Gain insights into the research and diagnosis process of prostate cancer.",
      category: "eBook-2",
    },
    seo: {
      title: "PR009: Case Study - Insights into Prostate Cancer",
      description:
        "Discover a case study delving into the research and diagnosis aspects of prostate cancer in a 60-year-old patient.",
      keywords: "prostate cancer, cancer research, diagnosis",
      ogImage: "/public/images_histo/9.png",
    },
  },
  {
    path: "/pages/blog/ebook-2-cancer-chronicles/article-LU010.tsx",
    featureArticle: false,
    preview: {
      author: AUTHORS.WILLIAM,
      date: "Feb-15-2023",
      articleTitle: "LU010: Case Study - Living with Lung Cancer",
      tags: "cancer, coping strategies, lung cancer",
      thumbnail: "/public/images_histo/10.png",
      shortIntro:
        "65-year-old patient diagnosed with lung cancer shares insights into coping strategies and navigating life with a cancer diagnosis.",
      category: "eBook-2",
    },
    seo: {
      title: "LU010: Case Study - Living with Lung Cancer",
      description:
        "Gain valuable insights into the life of a 65-year-old patient diagnosed with lung cancer, exploring coping strategies and emotional support.",
      keywords: "lung cancer, coping strategies",
      ogImage: "/public/images_histo/10.png",
    },
  },
  // {
  //   path: "/pages/tutorial/how-to-setup-blog.tsx",
  //   featureArticle: true,
  //   preview: {
  //     author: AUTHORS.WILLIAM,
  //     date: "August 08 2022",
  //     articleTitle: "How to setup this blog template",
  //     tags: "demo, blog setup",
  //     thumbnail: "/public/imp_assets/tutorials/how-to-setup-blog.svg",
  //     shortIntro: "These are the steps to setup your blog",
  //     category: "tutorial",
  //   },
  //   seo: {
  //     title: "How to setup this blog template",
  //     description: "These are the steps to setup your blog",
  //     keywords: "demo, blog setup",
  //     ogImage: "/public/imp_assets/tutorials/how-to-setup-blog.svg",
  //     twitterHandle: "@mayur_nalwala",
  //     author: AUTHORS.WILLIAM.name,
  //   },
  // },
  // {
  //   path: "/pages/tutorial/how-to-write-your-first-article.tsx",
  //   featureArticle: true,
  //   preview: {
  //     author: AUTHORS.ALEX,
  //     date: "August 08 2022",
  //     articleTitle: "How to write your first article",
  //     tags: "demo, first article",
  //     thumbnail: "/public/imp_assets/tutorials/how-to-write-first-article.svg",
  //     shortIntro:
  //       "This a step by step guide on how to write your first article.",
  //     category: "tutorial",
  //   },
  //   seo: {
  //     keywords:
  //       "demo, centered, centered layout, blog page layout, blog page design with centered layout, writing first article, webexpe, webexpe.com",
  //     ogImage: "/public/imp_assets/tutorials/how-to-write-first-article.svg",
  //   },
  // },
  // {
  //   path: "/pages/tutorial/how-to-deploy-blog.tsx",
  //   featureArticle: true,
  //   preview: {
  //     author: AUTHORS.ALEX,
  //     date: "August 08 2022",
  //     articleTitle: "How to Export and deploy on firebase",
  //     tags: "demo, deploy blog",
  //     thumbnail: "/public/imp_assets/tutorials/how-to-deploy.svg",
  //     shortIntro:
  //       "In this article you will see how to export blog files and what folder to deploy on your hosting.",
  //     category: "tutorial",
  //   },
  //   seo: {
  //     ogImage: "/public/imp_assets/tutorials/how-to-deploy.svg",
  //   },
  // },
  // {
  //   path: "/pages/tutorial/home-layout.tsx",
  //   preview: {
  //     author: AUTHORS.ALEX,
  //     date: "August 14 2022",
  //     articleTitle: "Home Layout Example",
  //     tags: "demo, layout, home layout",
  //     thumbnail: "/public/imp_assets/tutorials/home-layouts.svg",
  //     shortIntro: "In this article we will see Default Home Layout example.",
  //     category: "layouts",
  //   },
  //   seo: {
  //     title: "Home Layout Example",
  //     description: "In this article we will see Default Home Layout example.",
  //     keywords:
  //       "next js, tailwind css, typescript, blog template, default layout, default home layout",
  //     ogImage: "/public/imp_assets/tutorials/home-layouts.svg",
  //     author: AUTHORS.ALEX.name,
  //   },
  // },
  // {
  //   path: "/pages/tutorial/blog-with-sidebar-layout.tsx",
  //   preview: {
  //     author: AUTHORS.WILLIAM,
  //     date: "August 14 2022",
  //     articleTitle: "Page Layout for a article with sidebar",
  //     tags: "demo, with sidebar, default layout",
  //     thumbnail: "/public/imp_assets/tutorials/blog-with-sidebar-layout.svg",
  //     shortIntro:
  //       "In this article we will see Page Layout for a blog with sidebar example.",
  //     category: "layouts",
  //   },
  //   seo: {
  //     keywords:
  //       "demo, with sidebar, blog page layout, blog page design with sidebar, webexpe, webexpe.com",
  //     ogImage: "/public/imp_assets/tutorials/blog-with-sidebar-layout.svg",
  //   },
  // },
  // {
  //   path: "/pages/tutorial/blog-with-centered-layout.tsx",
  //   preview: {
  //     author: AUTHORS.ALEX,
  //     date: "August 14 2022",
  //     articleTitle: "Page Layout for a article with centered layout",
  //     tags: "demo, centered, centered layout",
  //     thumbnail: "/public/imp_assets/tutorials/blog-with-centered-layout.svg",
  //     shortIntro:
  //       "This a demo article with centered layout and with demo of all the components.",
  //     category: "layouts",
  //   },
  //   seo: {
  //     keywords:
  //       "demo, centered, centered layout, blog page layout, blog page design with centered layout, webexpe, webexpe.com",
  //     ogImage: "/public/imp_assets/tutorials/blog-with-centered-layout.svg",
  //   },
  // },
  // {
  //   path: "/pages/tutorial/all-components.tsx",
  //   preview: {
  //     author: AUTHORS.ALEX,
  //     date: "August 08 2022",
  //     articleTitle: "All Components",
  //     tags: "demo, all components",
  //     thumbnail: "/public/imp_assets/tutorials/all-components.svg",
  //     shortIntro: "List of all usable components, its types and how to use it.",
  //     category: "tutorial",
  //   },
  //   seo: {
  //     keywords: "demo, all components, webexpe, webexpe.com",
  //     ogImage: "/public/imp_assets/tutorials/all-components.svg",
  //   },
  // },
  // {
  //   path: "/pages/tutorial/style-guide.tsx",
  //   preview: {
  //     author: AUTHORS.WILLIAM,
  //     date: "August 10 2022",
  //     articleTitle: "Style Guide",
  //     tags: "demo, all components, style guide, styling tutorial",
  //     thumbnail: "/public/imp_assets/tutorials/style-guide.svg",
  //     shortIntro: "Styling and theming tutorial.",
  //     category: "tutorial",
  //   },
  //   seo: {
  //     keywords:
  //       "demo, all components, style guide, styling, css, tailwind css, tailwind, webexpe, webexpe.com",
  //     ogImage: "/public/imp_assets/tutorials/style-guide.svg",
  //   },
  // },
  // {
  //   path: "/pages/tutorial/icons.tsx",
  //   preview: {
  //     author: AUTHORS.WILLIAM,
  //     date: "August 13 2022",
  //     articleTitle: "How to use icons",
  //     tags: "demo, all components, style guide, styling tutorial, icons, how to use icons in website",
  //     thumbnail: "/public/imp_assets/tutorials/how-to-use-icons.svg",
  //     shortIntro: "How to use icons in your blog website.",
  //     category: "tutorial",
  //   },
  //   seo: {
  //     keywords:
  //       "demo, all components, style guide, styling, css, tailwind css, tailwind, webexpe, webexpe.com, styling tutorial, icons, how to use icons in website",
  //     ogImage: "/public/imp_assets/tutorials/how-to-use-icons.svg",
  //   },
  // },
  // {
  //   path: "/pages/blog/your-first-article.tsx",
  //   preview: {
  //     author: AUTHORS.WILLIAM,
  //     date: "August 6 2022",
  //     articleTitle: "Your first article",
  //     shortIntro:
  //       "This is a demo file for your first article, you can copy structure of this file to create multile article.",
  //     tags: "demo, your first article",
  //     thumbnail: "/public/imp_assets/tutorials/how-to-write-first-article.svg",
  //     category: "tutorial",
  //   },
  //   seo: {
  //     keywords:
  //       "demo, all components, style guide, styling, css, tailwind css, tailwind, webexpe, webexpe.com, styling tutorial, icons, how to use icons in website",
  //     ogImage: "/public/imp_assets/tutorials/how-to-write-first-article.svg",
  //   },
  // },
];

export const SORTED_ARTICLES_BY_DATE = ARTICLES_LIST.sort((a, b) =>
  new Date(a.preview.date) > new Date(b.preview.date) ? -1 : 1,
);
