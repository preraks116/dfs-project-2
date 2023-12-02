import Navbar from "../../components/Navbar";
import Centered from "./BlogCentered";
import WithSidebar from "./BlogWithSidebar";
import HomeLayout from "./HomeLayout";

interface IBlogLayout {
  children: any;
  blogwithsidebar?: boolean;
  blogcentered?: boolean;
  home?: boolean;
}

const PageLayout = ({
  children,
  blogwithsidebar = false,
  blogcentered = false,
  home = false,
}: IBlogLayout) => {
  return (
    <>
      <Navbar />
      {blogwithsidebar ? (
        <WithSidebar>{children}</WithSidebar>
      ) : blogcentered ? (
        <Centered>{children}</Centered>
      ) : home ? (
        <HomeLayout>{children}</HomeLayout>
      ) : (
        <HomeLayout>{children}</HomeLayout>
      )}
    </>
  );
};

export default PageLayout;
