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
    <div
      className="card bg-[#111827] shadow-xl rounded-xl overflow-hidden"
      style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}
    >
      <div className="w-full h-[200px] relative"></div>
      <div className="card-content p-6">
        <div className="card-title text-3xl font-bold text-white mb-2">
          {user.pseudo}
        </div>
        <div className="card-info text-lg text-gray-400 mb-1">
          firstName:{" "}
          <span className="font-semibold text-gray-200">{user.firstName}</span>
        </div>
        <div className="card-info text-lg text-gray-400">
          lastName:{" "}
          <span className="font-semibold text-gray-200"> {user.lastName}</span>
        </div>

        <div className="card-info text-lg text-gray-400">
          dollarAvailables:{" "}
          <span className="font-semibold text-gray-200">
            {" "}
            {user.dollarAvailables}
          </span>
        </div>
        <div className="card-info text-lg text-gray-400">
          UserHasCrypto:{" "}
          <span className="font-semibold text-gray-200">
            {" "}
            {Array.isArray(user.UserHasCrypto)
              ? user.UserHasCrypto.join(", ")
              : JSON.stringify(user.UserHasCrypto)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TabUserList;
