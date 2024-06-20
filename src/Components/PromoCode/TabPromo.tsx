import React from "react";
import Image from "next/image";
import { PromoCodeProps } from "@/Utils/types";

export const Tabpromocode = ({ promocode }: { promocode: PromoCodeProps }) => {
  return (
    <div
      className="card bg-[#111418] shadow-xl rounded-xl overflow-hidden"
      style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}
    >
      <div className="w-full h-[200px] relative"></div>
      <div className="card-content p-6">
        <div className="card-title text-3xl font-bold text-white mb-2">
          {promocode.name}
        </div>
        <div className="card-info text-lg text-gray-400">
          Value:{" "}
          <span className="font-semibold text-gray-200">{promocode.value}</span>
        </div>
      </div>
    </div>
  );
};

export default Tabpromocode;
