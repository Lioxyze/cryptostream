import { CryptoProps } from "@/Utils/typesKevin";
import React from "react";
import Image from "next/image";
import { BuyCryptoModal } from "../Crypto/ByCryptoModal";

export const Tabcrypto = ({ crypto }: { crypto: CryptoProps }) => {
  return (
    <div
      className="card bg-[#111418] shadow-xl rounded-xl overflow-hidden"
      style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}
    >
      <div className="w-full h-[200px] relative">
        <Image
          src={crypto.image}
          alt={`Picture of ${crypto.name}`}
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
      </div>
      <div className="card-content p-6">
        <div className="card-title text-3xl font-bold text-white mb-2">
          {crypto.name}
        </div>
        <div className="card-info text-lg text-gray-400 mb-1">
          Quantity:{" "}
          <span className="font-semibold text-gray-200">{crypto.quantity}</span>
        </div>
        <div className="card-info text-lg text-gray-400">
          Value:{" "}
          <span className="font-semibold text-gray-200">{crypto.value}</span>
        </div>
        <BuyCryptoModal crypto={crypto} />
      </div>
    </div>
  );
};

export default Tabcrypto;
