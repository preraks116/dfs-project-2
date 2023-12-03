import { ListType } from "../../shared/enums";
import { combineClasses } from "../../utils/utils";
import classes from "./List.module.scss";

/**
 *  @description renders a list component
 * @param param0 children components to render
 * @returns  a list component
 */
const List = ({
  children,
  type = ListType.disc,
  className,
}: {
  children?: any;
  type?: ListType;
  className?: string;
}) => {
  return (
    <ul className={combineClasses(classes.list, type, "pl-[30px]", className)}>
      {children}
    </ul>
  );
};

export default List;
