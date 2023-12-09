import { IAuthor } from "../../shared/interfaces";
import { combineClasses, transformImagePaths } from "../../utils/utils";

/**
 * 
 * @param param0 author, class name
 * @returns  an avatar component which displays the author's profile picture or name
 */
const Avatar = ({
  author,
  className,
}: {
  author?: any[];
  className?: string;
}) => {
  return (
    <div
      className={combineClasses(
        `flex items-center justify-center shadow-xl rounded-full overflow-hidden bg-blue-500 shrink-0`,
        className,
      )}
    >
      {author.profilePicPath ? (
        <img
          src={transformImagePaths(author.profilePicPath)}
          alt={author.name}
          width="100%"
        />
      ) : (
        <p className="text-center font-medium text-white">{author.name}</p>
      )}
    </div>
  );
};

export default Avatar;
