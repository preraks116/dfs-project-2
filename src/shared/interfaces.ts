import { LogoType, NavbarType } from "./enums";

/**
 * @description Type description for author
 * @export interface
 * @interface IAuthor
 */
export interface IAuthor {
  profilePic?: string;
  name: string;
  designation?: string;
  bio?: string;
  social?: INavSocials[];
}


/**
 * @description Type description for case header data
 * @export interface
 * @interface ICaseHeaderData
 */
export interface ICaseHeaderData {
  author: IAuthor;
  date: string;
  title: string;
  tags: string;
  thumbnail: string;
  description: string;
  category: string;
}

/**
 * @description Type description for case
 * @export interface
 * @interface ICase
 */
export interface ICase {
  path: string;
  preview: ICaseHeaderData;
}

/**
 * @description Type description for ebook header data
 * @export interface
 * @interface IEbookHeaderData
 */
export interface IEbookHeaderData {
  title: string;
  date: string;
  author: IAuthor;
  thumbnail: string;
  description: string;
  category: string;
}
/**
 * @description Type description for ebook
 * @export interface
 * @interface IEbook
 */
export interface IEbook {
  path: string;
  preview: IEbookHeaderData;
}
/**
 * @description Type description for blog header data
 * @export interface
 * @interface IBlogHeaderData
 */
export interface INavbar {
  openSearch: () => void;
  toggleSideMenu: () => void;
  changeTheme?: () => void;
  openSidebar: boolean;
  navSetup: INavSetup;
}
/**
 * @description Type description for blog header data
 * @export interface
 * @interface IBlogHeaderData
 */
export interface INavSetup {
  type: NavbarType;
  navLinks: INavLink[];
  sideNavLinks: INavLink[];
  logo: INavLogo;
}
/**
 * @description Type description for blog header data
 * @export interface
 * @interface IBlogHeaderData
 */
export interface INavLogo {
  type: LogoType;
  logo: string;
  logoLight?: string;
}
/**
 * @description Type description for blog header data
 * @export interface
 * @interface IBlogHeaderData
 */
export interface INavLink {
  label: string;
  path: string;
  type?: string;
  newTab?: boolean;
}
/**
 * @description Type description for blog header data
 * @export interface
 * @interface IBlogHeaderData
 */
export interface INavSocials {
  link: string;
  icon: any;
}
