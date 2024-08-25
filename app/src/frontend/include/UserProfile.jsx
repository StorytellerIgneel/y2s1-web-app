function UserProfile({profile}) {
  return (
    <a href="">
      <div className="flex items-center space-x-5 p-3">
        <p className="hidden text-xs font-bold text-gray-600 md:block" href="">
          {/* TODO: Make this dynamic */}
          {profile.name}
        </p>
        <div className="flex space-x-2">
          <img
            className="h-8 w-8 rounded-full border border-gray-100 shadow-sm sm:h-10 sm:w-10"
            src={profile.picture}
            alt="user image"
          />
        </div>
      </div>
    </a>
  );
}

export default UserProfile;
