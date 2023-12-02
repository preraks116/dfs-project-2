import { LogoType, NavbarType } from "../src/shared/enums";
import { iNavSetup, iSEO } from "../src/shared/interfaces";

// This can your company name / your name etc for SEO purposes
export const WEBSITE_NAME: string = "Histopathology E-Book";
export const WEBSITE_URL: string =
  "https://nextjs-simple-blog-template.web.app/";

/**
 * This is the main navigation setup.
 * This includes the main navbar and the side drawer.
 */
export const PRIMARY_NAV: iNavSetup = {
  type: NavbarType.DEFAULT,
  // max logo image height 40px
  // you can add logo light version if using image
  // logo: {
  //     type: LogoType.IMAGE,
  //     logo: '/images/logo.png',
  //     logoLight: '/images/logo-light.png'
  // },
  logo: {
    type: LogoType.TEXT,
    logo: "HistoPathBook",
  },
  // navLinks are the main navbar links that apper on top of every page
  navLinks: [
    {
      label: "Github",
      path: "https://github.com/jayghevariya/Digital-Pathology-eBook_Pops-and-Pills",
      newTab: true,
    },
  ],
  // sideNavLinks are the links which appear when you open the side menu after clicking the burger menu icon.
  sideNavLinks: [
    {
      label: "Github",
      path: "https://github.com/jayghevariya/Digital-Pathology-eBook_Pops-and-Pills",
      newTab: true,
    },
  ],
};

export const DEFAULT_SEO: iSEO = {
  title: "HistoPathBook",
  description: "A simple ebook using NextJS and Typescript.",
  keywords:
    "Ebook, next js, next js ebook, typescript, nextjs typescript, react js ebook",
  url: WEBSITE_URL,
  author: `pops&pills`,
  ogImage: "/public/images/og-image.jpg",
};
