import LinkTo from "../LinkTo";

const CardCategories = ({ category }: { category?: string }) => {
  return (
    <>
      {category && (
        <>
          <p className="text-[14px] md:text-[16px] px-2 font-normal">in</p>
          <p className={"font-medium text-[14px] md:text-[16px]"}>
            <LinkTo href={"/ebooks?category=" + category}>{category}</LinkTo>
          </p>
        </>
      )}
    </>
  );
};

export default CardCategories;
