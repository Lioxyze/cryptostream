import React, { useEffect, useState } from "react";
import {
  CryptoProps,
  OfferProps,
  RoleListProps,
  UserSProps,
} from "@/Utils/types";
import styled from "styled-components";

import { CardContainer } from "../Cards/CardContainer";
import { AddOfferModal } from "./AddOfferModal";
import TabOffer from "./TabOffer";
import { AllOffer } from "@/Service/offers";
import { DeleteOfferProps } from "./DeleteOffer";

const OfferPageMain = () => {
  const [rolelist, setRolelist] = useState<RoleListProps[]>();
  const [isReloadNeeded, setIsReloadNeeded] = useState(false);
  const [cryptoList, setCryptoList] = useState<CryptoProps[]>();
  const [userlist, setUserlist] = useState<UserSProps[]>();
  const [offerList, setOfferList] = useState<OfferProps[]>();

  useEffect(() => {
    AllOffer().then((res) => {
      setOfferList(res.data);
      console.log(res.data);
    });
  }, [isReloadNeeded]);

  return (
    <div className="bg-[#111F2E]">
      <section className="bg-white py-20 lg:py-40">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <div className="max-w-6xl mx-auto px-4">
              <div className="text-center">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Offers to CryptoStream
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AddOfferModal setIsReloadNeeded={setIsReloadNeeded} />
      <div className="text-center m-5">
        <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight m-9 text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 drop-shadow-lg">
          All Offers :
        </h1>
      </div>
      <CardContainer>
        {offerList &&
          offerList.map((offer) => {
            return (
              <TabOffer offer={offer} setIsReloadNeeded={setIsReloadNeeded} />
            );
          })}
      </CardContainer>
      <section className=" py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow"></div>
            <div className="bg-white p-8 rounded-lg shadow"></div>
            <div className="bg-white p-8 rounded-lg shadow"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OfferPageMain;
