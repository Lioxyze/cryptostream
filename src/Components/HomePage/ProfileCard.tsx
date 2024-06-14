import { InformationUserProps } from "@/Utils/types";
import React from "react";

const ProfileCard = ({ profile }: { profile: InformationUserProps }) => {
  return (
    <div className="flex items-center space-x-4 bg-gray-800 p-2 rounded-lg">
      <div className="flex-shrink-0">
        <img
          className="h-10 w-10 rounded-full"
          src="https://via.placeholder.com/150"
          alt="Profile"
        />
      </div>
      <div>
        <div className="text-white font-bold">{profile.pseudo}</div>
        <div className="text-gray-400 text-sm">${profile.dollarAvailables}</div>
      </div>
    </div>
  );
};

export default ProfileCard;
