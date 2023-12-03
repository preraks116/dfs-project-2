import { LogoType, NavbarType } from "./enums";

export interface IAuthor {
  profilePic?: string;
  name: string;
  designation?: string;
  bio?: string;
  social?: INavSocials[];
}

export interface ICaseHeaderData {
  author: IAuthor;
  date: string;
  title: string;
  tags: string;
  thumbnail: string;
  description: string;
  category: string;
}

export interface ICase {
  path: string;
  preview: ICaseHeaderData;
}

export interface IEbookHeaderData {
  title: string;
  date: string;
  author: IAuthor;
  thumbnail: string;
  description: string;
  category: string;
}

export interface IEbook {
  path: string;
  preview: IEbookHeaderData;
}

export interface INavbar {
  openSearch: () => void;
  toggleSideMenu: () => void;
  changeTheme?: () => void;
  openSidebar: boolean;
  navSetup: INavSetup;
}

export interface INavSetup {
  type: NavbarType;
  navLinks: INavLink[];
  sideNavLinks: INavLink[];
  logo: INavLogo;
}

export interface INavLogo {
  type: LogoType;
  logo: string;
  logoLight?: string;
}

export interface INavLink {
  label: string;
  path: string;
  type?: string;
  newTab?: boolean;
}

export interface INavSocials {
  link: string;
  icon: any;
}
