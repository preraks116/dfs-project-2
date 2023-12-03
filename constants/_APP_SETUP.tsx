import { LogoType, NavbarType } from "../src/shared/enums";
import { INavSetup } from "../src/shared/interfaces";
/**
 * @description Website name and url
 */
export const WEBSITE_NAME: string = "Histopathology eBook";
export const WEBSITE_URL: string =
  "https://nextjs-simple-blog-template.web.app/";

export const PRIMARY_NAV: INavSetup = {
  type: NavbarType.DEFAULT,
  logo: {
    type: LogoType.TEXT,
    logo: "HistoPathBook",
  },
  navLinks: [
    {
      label: "Github",
      path: "https://github.com/jayghevariya/Digital-Pathology-eBook_Pops-and-Pills",
      newTab: true,
    },
  ],
  sideNavLinks: [
    {
      label: "Github",
      path: "https://github.com/jayghevariya/Digital-Pathology-eBook_Pops-and-Pills",
      newTab: true,
    },
  ],
};
