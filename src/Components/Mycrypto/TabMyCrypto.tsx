import { UserMyAssetsProps } from "@/Utils/types";
import Image from "next/image";
import React from "react";

export const CardUserMyAssets = ({
  userMyassets,
}: {
  userMyassets: UserMyAssetsProps;
}) => {
  return (
    <div className="bg-white p-3 w-full">
      <div className="w-full bg-white rounded-3xl border shadow-lg p-6">
        <div className="mb-6">
          <p className="text-sm text-gray-400">
            <span className="font-semibold">FirstName :</span>{" "}
            {userMyassets?.firstName}
          </p>
          <p className="text-sm text-gray-400">
            <span className="font-semibold">LastName :</span>{" "}
            {userMyassets?.lastName}
          </p>
          <p className="text-sm text-gray-400">
            <span className="font-semibold">Pseudo :</span>{" "}
            {userMyassets?.pseudo}
          </p>
          <p className="text-sm text-gray-400">
            <span className="font-semibold">Age :</span> {userMyassets?.age} ans
          </p>
          <p className="text-sm text-gray-400">
            <span className="font-semibold">Balance :</span>{" "}
            {userMyassets?.dollarAvailables} $
          </p>
        </div>

        <div>
          <h1 className="text-black">My Crypto : </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {userMyassets &&
            userMyassets.UserHasCrypto.map((crypto, index) => (
              <div key={index} className="bg-gray-100 rounded-lg p-6 w-full">
                <div className="relative h-64 w-full mb-4">
                  <Image
                    src={crypto.Crypto.image}
                    alt={`Picture of ${crypto.Crypto.name}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <h2 className="text-xl font-bold text-black mb-2">
                  {crypto.Crypto.name}
                </h2>
                <div className="text-lg text-gray-700 mb-1"></div>
                <div className="text-lg text-gray-700 mb-1">
                  Value:{" "}
                  <span className="font-semibold">{crypto.Crypto.value}</span>
                </div>
                <div className="text-lg text-gray-700 mb-1">
                  ID: <span className="font-semibold">{crypto.Crypto.id}</span>
                </div>
                <div className="text-lg text-gray-700">
                  Amount: <span className="font-semibold">{crypto.amount}</span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
