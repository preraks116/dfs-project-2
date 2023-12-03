import classes from "./Navbar.module.scss";
import { useState } from "react";
import { combineClasses, transformImagePaths } from "../../utils/utils";
import { LogoType, THEMES } from "../../shared/enums";
import LinkTo from "../LinkTo";
import { useTheme } from "next-themes";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import NavCatergoryDD from "../Misc/NavCategoryDD";
import { INavLink, INavSocials, INavbar } from "../../shared/interfaces";
import { BsFillShareFill } from "react-icons/bs";

const CenteredNavbar = ({
  openSearch,
  toggleSideMenu,
  openSidebar = false,
  navSetup,
  onShareClick,
}: INavbar) => {
  const { navLinks, logo } = navSetup;

  const [openDD, setOpenDD] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <div className={"container"}>
      <div className="flex items-center justify-between px-3">
        <div className="flex" style={{ width: "120px" }}>
          <div
            className={combineClasses(
              classes.mobileBurgerToggle,
              "mr-3",
              openSidebar ? classes.mobileBurgerToggle__close : " ",
            )}
            onClick={() => toggleSideMenu()}
          >
            <AiOutlineMenu className="dark:text-white text-black text-2xl" />
          </div>
          <div
            className={combineClasses(classes.search_icon_wrapper)}
            onClick={() => openSearch()}
          >
            <button
              name="search"
              aria-label="search"
              className="dark:text-white text-black"
            >
              <AiOutlineSearch className="text-[24px]" />
            </button>
          </div>
          <div className="" onClick={() => onShareClick()}>
            <button name="share" aria-label="share page">
              <BsFillShareFill className="dark:text-white text-black text-[18px] mt-[7px] ml-3" />
            </button>
          </div>
        </div>

        <LinkTo href="/" passHref={true}>
          {logo ? (
            logo.type === LogoType.IMAGE ? (
              <img
                src={
                  theme === THEMES.DARK
                    ? transformImagePaths(logo.logoLight)
                    : transformImagePaths(logo.logo)
                }
                alt="WebExpe"
                className="cursor-pointer"
                width="100px"
              />
            ) : (
              <span className="text-[22px] font-semibold">{logo.logo}</span>
            )
          ) : (
            <span className="text-[22px] font-semibold">Logo</span>
          )}
        </LinkTo>
      </div>
      <div className="flex justify-center items-center font-regular text-[14px] d-sm-none mt-3">
        {navLinks.map((each: INavLink, i: any) =>
          each.type !== "dropdown" ? (
            !each.newTab ? (
              <LinkTo
                href={each.path}
                key={i}
                passHref={true}
                className="mx-2 font-normal"
              >
                {each.label}
              </LinkTo>
            ) : (
              <a
                href={each.path}
                key={each.path}
                target="_blank"
                rel="noopener noreferrer"
                className="block mx-2 flex-wrap font-normal	"
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
              floating
            />
          ),
        )}
      </div>
    </div>
  );
};

export default CenteredNavbar;
