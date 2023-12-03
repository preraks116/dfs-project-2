import { useEffect, useState } from "react";
import { THEMES } from "../../shared/enums";
import {
  addBodyNoScroll,
  combineClasses,
  getCategories,
  removeBodyNoScroll,
} from "../../utils/utils";
import classes from "./Navbar.module.scss";
import { Text, LinkTo } from "../../components";
import { useTheme } from "next-themes";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { MdOutlineClose } from "react-icons/md";
import NavCatergoryDD from "../Misc/NavCategoryDD";
import { INavLink, INavSetup, INavSocials } from "../../shared/interfaces";

interface IProps {
  openSidebar: boolean;
  closeNavSidebar: () => void;
  navSetup: INavSetup;
  changeTheme: () => void;
}
/**
 * 
 * @param param0 open sidebar, close sidebar, nav setup, change theme
 * @returns  a nav sidebar component
 */
const NavSidebar = ({
  openSidebar = false,
  closeNavSidebar,
  navSetup,
  changeTheme,
}: IProps) => {
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    openSidebar ? addBodyNoScroll() : removeBodyNoScroll();

    return () => {
      removeBodyNoScroll();
    };
  }, [openSidebar]);

  const env = process.env.NODE_ENV;
  const [openDD, setOpenDD] = useState(false);

  return (
    <>
      {openSidebar ? (
        <div className="backdrop" onClick={closeNavSidebar}></div>
      ) : null}

      <aside
        className={combineClasses(
          classes.nav_sidebar_wrapper,
          openSidebar && classes.open,
          "dark:bg-slate-900 dark:text-white bg-white text-black"
        )}
      >
        <div
          className="flex items-center justify-between pb-3"
          onClick={closeNavSidebar}
        >
          <p className="">Menu</p>
          <div>
            <MdOutlineClose className="text-slate-800 dark:text-white text-[25px]" />
          </div>
        </div>
        <hr />
        <div className="my-15">
          {navSetup.sideNavLinks.map((each: INavLink, i: any) =>
            each.type !== "dropdown" ? (
              !each.newTab ? (
                <LinkTo
                  href={each.path}
                  key={i}
                  passHref
                  className="text-[16px] block my-3"
                >
                  {each.label}
                </LinkTo>
              ) : (
                <a
                  href={each.path}
                  key={each.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[16px] block my-3 flex-wrap"
                >
                  {each.label}
                </a>
              )
            ) : (
              <NavCatergoryDD
                key={i}
                label={each.label}
                openDD={openDD}
                setOpenDD={() => setOpenDD(!openDD)}
              />
            )
          )}
        </div>
        <hr />
        <div className="mt-5 mb-4">
          <p className="mb-2 font-light">
            Switch To {theme === THEMES.LIGHT ? "Dark" : "Light"} Theme :
          </p>
          <button
            name="theme-switch"
            aria-label="theme-switch"
            className={combineClasses(
              classes.theme_switch,
              "dark:text-white text-black"
            )}
            onClick={() => changeTheme()}
          >
            {theme === THEMES.DARK ? (
              <BsFillSunFill className="text-2xl" />
            ) : (
              <BsFillMoonFill className="text-lg" />
            )}
          </button>
        </div>
        <hr />
        <div className="my-5">
          <p className="text-sm font-light dark:text-gray-400 text-gray-500 mb-1">
            Pops&Pills © 2023
          </p>
        </div>
      </aside>
    </>
  );
};

export default NavSidebar;
