import { THEMES } from "../shared/enums";
import { useRouter } from "next/router";
import { SORTED_CASES_BY_DATE } from "../../constants/_CASES_LIST";
import { ICase } from "../shared/interfaces";
import { CASES_LIST } from "../../constants/_CASES_LIST";

// env
const env = process.env.NODE_ENV;
export const IS_DEV_MODE = env === "development" ? true : false;

/**
 *
 * @param classes string
 * @returns string
 */
export const combineClasses = function (...classes: any): string {
  return classes.filter((item: any) => !!item).join(" ");
};

/**
 * Changes Dark / Light Theme
 */
export const changeTheme = (): void => {
  const lsTheme = localStorage.getItem("theme");
  localStorage.setItem(
    "theme",
    lsTheme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT,
  );

  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  location.reload();
};

/**
 * Returns Device Type tablet , mobile, desktop
 * @returns string
 */
export const getDeviceType = (): string => {
  const ua = typeof window !== "undefined" ? navigator.userAgent : "desktop";
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return "tablet";
  }
  if (
    /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
      ua,
    )
  ) {
    return "mobile";
  }
  return "desktop";
};

/**
 * Returns true if desktop
 * @returns boolean
 */
export const isDesktopDevice = (): boolean => {
  if (getDeviceType() === "desktop") {
    return true;
  } else {
    return false;
  }
};

/**
 * Returns true if mobile
 * @returns boolean
 */
export const isMobileDevice = (): boolean => {
  if (getDeviceType() === "mobile") {
    return true;
  } else {
    return false;
  }
};

/**
 * Add no scroll class to body when modal isopen
 */
export const addBodyNoScroll = (): void => {
  document.body.classList.add("no-scroll");
};

/**
 * Removes no scroll class to body when modal isopen
 */
export const removeBodyNoScroll = (): void => {
  document.body.classList.remove("no-scroll");
};

/**
 * Returns Article details from SORTED_ARTICLES_BY_DATE wrt the path
 * @returns iArticle
 */
export const getArticleDetails = (): ICase => {
  const router = useRouter();
  const articlePath = "/pages" + router.pathname + ".tsx";
  return (
    CASES_LIST.filter((each) => each.path.includes(articlePath))[0] ||
    SORTED_CASES_BY_DATE.filter((each) => each.path.includes(articlePath))[0]
  );
};

/**
 * Returns list of categories from SORTED_ARTICLES_BY_DATE
 * @returns string[]
 */
export const getCategories = (): string[] => {
  let categories: string[] = [];
  SORTED_CASES_BY_DATE.forEach((each) => {
    if (each.preview.category && !categories.includes(each.preview.category)) {
      categories.push(each.preview.category);
    }
  });
  return categories;
};

/**
 * Removes /pages from article path
 * @param path
 * @returns
 */
export const transformPath = (path = ""): string => {
  return path.replace("/pages", "").replace(".tsx", "");
};

/**
 * Removes /public from images path
 * @param path
 * @returns string
 */
export const transformImagePaths = (path = ""): string => {
  return path.replace("/public", "");
};
