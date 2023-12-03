import Navbar from "../components/Navbar";
import PageCentered from "./PageCentered";
import PageWithSidebar from "./PageWithSidebar";
import HomeLayout from "./HomeLayout";

interface IPageLayout {
  children: any;
  pagewithsidebar?: boolean;
  pagecentered?: boolean;
  home?: boolean;
}

/**
 * 
 * @param param0 children components to render
 * @param pagewithsidebar boolean to render a page with a sidebar
 * @param pagecentered boolean to render a page with a centered article
 * @param home boolean to render a home page
 * @returns a page with a sidebar, a page with a centered article, or a home page
 */
const PageLayout = ({
  children,
  pagewithsidebar = false,
  pagecentered = false,
  home = false,
}: IPageLayout) => {
  return (
    <>
      <Navbar />
      {pagewithsidebar ? (
        <PageWithSidebar>{children}</PageWithSidebar>
      ) : pagecentered ? (
        <PageCentered>{children}</PageCentered>
      ) : home ? (
        <HomeLayout>{children}</HomeLayout>
      ) : (
        <HomeLayout>{children}</HomeLayout>
      )}
    </>
  );
};

export default PageLayout;
