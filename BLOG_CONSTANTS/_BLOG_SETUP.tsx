import { LogoType, NavbarType } from "../src/shared/enums";
import { IAuthor, iNavSetup, iSEO } from "../src/shared/interfaces";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";

/**
 * EXAMPLE AUTHOR
 * 
 export const AUTHOR_NAME: IAuthor = {
    name: "Full Name",
    designation: "Work Designation",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    profilePic: "",
     social: [
        {
            icon: <AiFillGithub />,
            link: 'https://github.com/'
        },
        {
            icon: <AiFillLinkedin />,
            link: 'https://www.linkedin.com/'
        },
    ]
}
 */

export const MAYUR: IAuthor = {
  name: "Mayur Nalwala",
  designation: "Software Engineer",
  bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  profilePic: "",
  social: [
    {
      icon: <AiFillGithub />,
      link: "https://github.com/nmayur",
    },
    {
      icon: <AiFillLinkedin />,
      link: "https://www.linkedin.com/in/mayur-nalwala/",
    },
  ],
};

export const RUPALI: IAuthor = {
  name: "Rupali Yadav",
  designation: "IT Analyst",
  bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  profilePic: "",
  social: [
    {
      icon: <AiFillGithub />,
      link: "https://github.com/rupali-yadav",
    },
    {
      icon: <AiFillLinkedin />,
      link: "https://www.linkedin.com/in/rupali-yadav-087bb4112/",
    },
  ],
};

// This can your company name / your name etc for SEO purposes
export const WEBSITE_NAME: string = "Next Js Blog Template";
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
      // for categories don't add path and add type: dropdown and pass path empty
      label: "Blog",
      type: "dropdown",
      path: "",
    },
    {
      label: "About Us",
      path: "/about-us",
    },
    {
      label: "Github Repo",
      path: "https://github.com/jayghevariya/Digital-Pathology-eBook_Pops-and-Pills",
      newTab: true,
    },
  ],
  // sideNavLinks are the links which appear when you open the side menu after clicking the burger menu icon.
  sideNavLinks: [
    {
      // for categories dont add path and add type: dropdown
      label: "Blog",
      type: "dropdown",
      path: "",
    },
    {
      label: "About Us",
      path: "/about-us",
    },
    {
      label: "Github Repo",
      path: "https://github.com/webexpe13/blog-template-using-nextjs-typescript-tailwindcss",
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
