import { NavbarType, THEMES } from "../../shared/enums";
import SimpleNavbar from "./SimpleNavbar";
import CenteredNavbar from "./Centered";
import { useEffect, useState } from "react";
import {
  addBodyNoScroll,
  combineClasses,
  getDeviceType,
  removeBodyNoScroll,
} from "../../utils/utils";
import NavSidebar from "./NavSideBar";
import Search from "../Search";
import { PRIMARY_NAV } from "../../../constants/_APP_SETUP";
import { useTheme } from "next-themes";
import classes from "./Navbar.module.scss";
import SocialShareModal from "../SocialShare/SocialShareModal";

/**
 * @description renders the navbar component inside which centredNavbar
 * @returns a navbar component
 */
const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [isMobile, setIsMobile] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [openShareModal, setOpenShareModal] = useState(false);

  useEffect(() => {
    showSearch
      ? addBodyNoScroll()
      : () => {
          return;
        };
    return () => {
      removeBodyNoScroll();
    };
  }, [showSearch]);

  const changeTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const [scrolled, setScrolled] = useState(false);
  let lastScrollTop = 0;
  useEffect(() => {
    setIsMobile(getDeviceType() === "tablet" || getDeviceType() === "mobile");

    window.onscroll = () => {
      const st = window.pageYOffset || document.documentElement.scrollTop;
      const scrollYDistance = window.scrollY;
      if (scrollYDistance > 0 && st > lastScrollTop) {
        setScrolled(true);
      } else if (scrollYDistance > 50 && st < lastScrollTop) {
        setScrolled(false);
      }
      lastScrollTop = st <= 0 ? 0 : st;
    };

    return () => {
      setScrolled(false);
    };
  }, []);

  const openSearch = () => {
    setShowSearch(true);
  };

  const toggleSideMenu = () => {
    setOpenSidebar(!openSidebar);
  };

  return (
    <>
      <nav
        className={combineClasses(
          classes.navbar,
          "bg-white  dark:bg-slate-900 dark:text-white text-black"
        )}
      >
        {isMobile ? (
          <SimpleNavbar
            openSearch={openSearch}
            changeTheme={changeTheme}
            toggleSideMenu={toggleSideMenu}
            openSidebar={openSidebar}
            navSetup={PRIMARY_NAV}
          />
        ) : (
          (() => {
            switch (PRIMARY_NAV.type) {
              case NavbarType.DEFAULT:
                return (
                  <SimpleNavbar
                    openSearch={openSearch}
                    changeTheme={changeTheme}
                    toggleSideMenu={toggleSideMenu}
                    openSidebar={openSidebar}
                    navSetup={PRIMARY_NAV}
                  />
                );
              case NavbarType.CENTERED:
                return (
                  <CenteredNavbar
                    openSearch={openSearch}
                    changeTheme={changeTheme}
                    toggleSideMenu={toggleSideMenu}
                    openSidebar={openSidebar}
                    navSetup={PRIMARY_NAV}
                  />
                );
              default:
                return (
                  <SimpleNavbar
                    openSearch={openSearch}
                    changeTheme={changeTheme}
                    toggleSideMenu={toggleSideMenu}
                    openSidebar={openSidebar}
                    navSetup={PRIMARY_NAV}
                  />
                );
            }
          })()
        )}
      </nav>

      <NavSidebar
        openSidebar={openSidebar}
        closeNavSidebar={() => setOpenSidebar(false)}
        navSetup={PRIMARY_NAV}
        changeTheme={changeTheme}
      />
      {showSearch && <Search closeSearch={() => setShowSearch(false)} />}
    </>
  );
};

export default Navbar;
