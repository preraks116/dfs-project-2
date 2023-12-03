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
