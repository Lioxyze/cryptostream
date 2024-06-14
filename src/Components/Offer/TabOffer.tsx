import { OfferProps } from "@/Utils/types";
import React from "react";
import Image from "next/image";
import { buyOffer } from "@/Service/offers";
import OfferPageMain from "./OfferMain";

export const TabOffer = ({
  offer,
  setIsReloadNeeded,
}: {
  offer: OfferProps;
  setIsReloadNeeded: any;
}) => {
  function handleCryptoBuyViaOffer(offerId: string) {
    buyOffer(offerId)
      .then((res) => {
        if (res.data) {
          if (res.status === 204) {
          }
          if (res.status === 201) setIsReloadNeeded(true);
        }
      })
      .catch((e) => {
        if (e) {
          console.log(e);
        }
      });
  }

  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-black dark:bg-gray-900 overflow-x-hidden"
      style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}
    >
      <div className="flex items-center bg-[#111418] p-4 pb-2 justify-between shadow-md">
        <h2 className="text-white text-xl font-bold leading-tight tracking-tight flex-1 text-center">
          Cryptocurrency Offer
        </h2>
      </div>
      <div className="p-4">
        <div
          className="bg-cover bg-center flex flex-col items-stretch justify-end rounded-xl pt-[132px] shadow-lg overflow-hidden"
          style={{
            backgroundImage:
              'linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%), url("https://www.societegenerale.com/sites/default/files/styles/rte_affichage_defaut_desktop/public/image/2021-12/20211202-blockchain-crypto-1920x533-1.jpg?itok=BS6UmsHg")',
          }}
        >
          <div className="flex w-full items-end justify-between gap-4 p-4 bg-gradient-to-t from-black via-transparent to-transparent">
            <div className="flex max-w-[440px] flex-1 flex-col gap-1">
              <p className="text-white tracking-wide text-3xl font-bold leading-tight max-w-[440px]">
                {offer?.Crypto?.name}
              </p>
            </div>
          </div>
        </div>
      </div>
      <h2 className="text-white text-lg font-bold leading-tight tracking-tight px-4 text-left pb-2 pt-4">
        Details
      </h2>
      <div className="p-4 grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-1 border-t border-gray-700 py-4 pr-2">
          <p className="text-gray-400 text-sm font-normal leading-normal">ID</p>
          <p className="text-white text-sm font-normal leading-normal">
            {offer?.id}
          </p>
        </div>
        <div className="flex flex-col gap-1 border-t border-gray-700 py-4 pl-2">
          <p className="text-gray-400 text-sm font-normal leading-normal">
            Name
          </p>
          <p className="text-white text-sm font-normal leading-normal">
            {offer?.Crypto?.name}
          </p>
        </div>
        <div className="flex flex-col gap-1 border-t border-gray-700 py-4 pr-2">
          <p className="text-gray-400 text-sm font-normal leading-normal">
            Value
          </p>
          <p className="text-white text-sm font-normal leading-normal">
            {offer?.Crypto?.value}
          </p>
          <p className="text-white text-base font-medium leading-normal">
            {offer?.User?.pseudo}
          </p>
        </div>
        <div className="flex flex-col gap-1 border-t border-gray-700 py-4 pl-2">
          <p className="text-gray-400 text-sm font-normal leading-normal">
            Image
          </p>
          <Image
            src={offer.Crypto?.image}
            width={500}
            height={100}
            alt={`Picture of ${offer.Crypto?.image}`}
            className="rounded-lg shadow-md"
          />
        </div>
        <div className="flex flex-col gap-1 border-t border-gray-700 py-4 pr-2">
          <p className="text-gray-400 text-sm font-normal leading-normal">
            Quantity
          </p>
          <p className="text-white text-sm font-normal leading-normal">
            {offer?.Crypto?.quantity}
          </p>
        </div>
        <div className="flex flex-col gap-1 border-t border-gray-700 py-4 pl-2">
          <p className="text-gray-400 text-sm font-normal leading-normal">
            Created At
          </p>
          <p className="text-white text-sm font-normal leading-normal">
            {offer?.created_at}
          </p>
        </div>
        <div className="flex flex-col gap-1 border-t border-gray-700 py-4 pr-2 col-span-2">
          <p className="text-gray-400 text-sm font-normal leading-normal">
            Updated At
          </p>
          <p className="text-white text-sm font-normal leading-normal">
            {offer?.updated_at}
          </p>
        </div>
      </div>
      <div className="flex px-4 py-3">
        <button
          className="bg-white text-center rounded-lg text-indigo-600 w-20 p-1 text-sm mt-1"
          onClick={() => {
            handleCryptoBuyViaOffer(offer?.id);
          }}
        >
          Buy
        </button>
      </div>
      <div className="h-5 bg-[#111418]"></div>
    </div>
  );
};

export default TabOffer;
