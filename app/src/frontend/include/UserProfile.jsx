function UserProfile() {
  return (
    <a href="">
      <div className="flex items-center space-x-5 p-3">
        <p className="hidden text-xs font-bold text-gray-600 md:block" href="">
          {/* TODO: Make this dynamic */}
          Username
        </p>
        <div className="flex space-x-2">
          {/* TODO: Make this dynamic */}
          <img
            className="h-8 w-8 rounded-full border border-gray-100 shadow-sm sm:h-10 sm:w-10"
            src="https://preview.redd.it/dr-ratio-alhaitham-chibi-swap-edit-feel-free-to-use-credits-v0-ppqauow026cc1.png?width=496&format=png&auto=webp&s=f60177f2d5cc0dcc5cb568709f32050ddb1abea2"
            alt="user image"
          />
        </div>
      </div>
    </a>
  );
}

export default UserProfile;
