import { UserSProps } from "@/Utils/types";
import React from "react";
import Image from "next/image";

export const TabUserList = ({ user }: { user: UserSProps }) => {
  return (
    // <div className="card-content p-6">
    //   <div className="card-title text-2xl font-bold text-gray-900 mb-4">
    //     FirstName: {user.firstName}
    //   </div>
    //   <div className="card-title text-2xl font-bold text-gray-900 mb-4">
    //     LastName: {user.lastName}
    //   </div>
    //   <div className="card-title text-2xl font-bold text-gray-900 mb-4">
    //     Pseudo: {user.pseudo}
    //   </div>
    //   <div className="card-title text-2xl font-bold text-gray-900 mb-4">
    //     Dollars: {user.dollarAvailables}
    //   </div>
    //   <div className="card-title text-2xl font-bold text-gray-900 mb-4">
    //     {Array.isArray(user.UserHasCrypto)
    //       ? user.UserHasCrypto.join(", ")
    //       : JSON.stringify(user.UserHasCrypto)}
    //   </div>
    // </div>
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
      </div>
    </div>
  );
};

export default TabUserList;

{
  /* <div className="flex items-center space-x-4 bg-gray-800 p-2 rounded-lg">
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
    <div className="text-white font-bold">{user.lastname}</div>
    <div className="text-gray-400 text-sm">${user.dollarAvailables}</div>
    <div className="text-white font-bold">
      {Array.isArray(user.UserHasCrypto)
        ? user.UserHasCrypto.join(", ")
        : JSON.stringify(user.UserHasCrypto)}
    </div>
  </div>
</div>; */
}
