import { FaUserCircle } from "react-icons/fa";
import { useContext } from "react";
import UserContext from "../pages/LoginContext";

function UserProfileRight() {
  const { user } = useContext(UserContext);

  return (
      <div className="flex items-center space-x-5">
        <p className="hidden text-xs font-bold text-gray-600 md:block" href="">
          {user ? user.name : "Guest"}
        </p>
        <div className="flex space-x-2">
          {user ? (
            <img
              className="h-8 w-8 rounded-full border border-gray-100 shadow-sm sm:h-10 sm:w-10"
              src={user.picture}
              alt={user.name}
            />
          ) : (
            <FaUserCircle fill="gray" className="size-8" />
          )}
        </div>
      </div>
  );
}

export function UserProfileLeft() {
  const { user } = useContext(UserContext);
  return (
    <div className="flex items-center space-x-5">
      <div className="flex space-x-2">
        {user ? (
          <img
            className="h-8 w-8 rounded-full border border-gray-100 shadow-sm sm:h-10 sm:w-10"
            src={user.picture}
            alt={user.name}
          />
        ) : (
          <FaUserCircle fill="gray" className="size-8" />
        )}
      </div>
      <p className="hidden text-xs font-bold text-gray-600 md:block" href="">
        {user ? user.name : "Guest"}
      </p>
    </div>
  );
}

export default UserProfileRight;
