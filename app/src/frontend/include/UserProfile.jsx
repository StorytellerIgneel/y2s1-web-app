import { FaUserCircle } from "react-icons/fa";

function UserProfileRight({ profile }) {
  return (
    <a href="">
      <div className="flex items-center space-x-5">
        <p className="hidden text-xs font-bold text-gray-600 md:block" href="">
          {profile?.name || "Guest"}
        </p>
        <div className="flex space-x-2">
          {profile ? (
            <img
              className="h-8 w-8 rounded-full border border-gray-100 shadow-sm sm:h-10 sm:w-10"
              src="../../../images/test-data/the-last-of-us-part-i.jpg"
              alt="user image"
            />
          ) : (
            <FaUserCircle fill="gray" className="size-8"/>
          )}
        </div>
      </div>
    </a>
  );
}

export function UserProfileLeft({ profile }) {
  return (
      <div className="flex items-center space-x-5">
        
        <div className="flex space-x-2">
          {profile ? (
            <img
              className="h-8 w-8 rounded-full border border-gray-100 shadow-sm sm:h-10 sm:w-10"
              src="../../../images/test-data/the-last-of-us-part-i.jpg"
              alt="user image"
            />
          ) : (
            <FaUserCircle fill="gray" className="size-8"/>
          )}
        </div>
        <p className="hidden text-xs font-bold text-gray-600 md:block" href="">
          {profile?.name || "Guest"}
        </p>
      </div>
  );
}



export default UserProfileRight;
