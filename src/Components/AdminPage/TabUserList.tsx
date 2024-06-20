import { UserSProps } from "@/Utils/types";
import React from "react";
import Image from "next/image";

export const TabUserList = ({ user }: { user: UserSProps }) => {
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
        <div className="text-white font-bold">{user.pseudo}</div>
        <div className="text-gray-400 text-sm">${user.firstName}</div>
        <div className="text-white font-bold">{user.lastName}</div>
        <div className="text-gray-400 text-sm">${user.dollarAvailables}</div>
        <div className="text-white font-bold">
          {Array.isArray(user.UserHasCrypto)
            ? user.UserHasCrypto.join(", ")
            : JSON.stringify(user.UserHasCrypto)}
        </div>
        <div>
          <button className="mx-auto my-4 w-48 bg-indigo-600 text-white rounded-md border border-indigo-500 flex items-center justify-center h-10 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            Edit
          </button>
          <button className="mx-auto my-4 w-48 bg-red-600 text-white rounded-md border border-indigo-500 flex items-center justify-center h-10 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TabUserList;
