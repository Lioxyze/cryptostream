import React, { useEffect, useState } from "react";
import {
  CryptoProps,
  OfferProps,
  RoleListProps,
  UserSProps,
} from "@/Utils/types";
import styled from "styled-components";
import { AllRole } from "@/Service/role";
import TabRoleList from "./TabRoleList";
import { CardContainer } from "../Cards/CardContainer";
import Tabcrypto from "../HomePage/Tabcrypto";
import { AllCrypto } from "@/Service/crypto";
import { AllUser } from "@/Service/user";
import TabUserList from "./TabUserList";
import { UserContainer } from "./CardContainer";
import TabOffer from "../Offer/TabOffer";
import { AllOffer } from "@/Service/offers";

const MarketPageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px; // Ajustez l'espacement entre les éléments selon vos besoins
  padding: 16px; // Ajustez le padding selon vos besoins
`;

const MarketPage = () => {
  const [rolelist, setRolelist] = useState<RoleListProps[]>();
  const [isReloadNeeded, setIsReloadNeeded] = useState(false);
  const [cryptoList, setCryptoList] = useState<CryptoProps[]>();
  const [userlist, setUserlist] = useState<UserSProps[]>();
  const [offerList, setOfferList] = useState<OfferProps[]>();

  useEffect(() => {
    AllRole().then((res) => {
      setRolelist(res.data);
      console.log(res.data);
    });
  }, [isReloadNeeded]);

  useEffect(() => {
    AllCrypto().then((res) => {
      setCryptoList(res.data);
      console.log(res.data);
    });
  }, [isReloadNeeded]);

  useEffect(() => {
    AllUser().then((res) => {
      setUserlist(res.data);
      console.log(res.data);
    });
  }, [isReloadNeeded]);

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
          <div className="text-center"></div>
        </div>
      </section>

      <div className="text-center">
        <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
          All Role :
        </h1>
      </div>

      <CardContainer>
        {rolelist &&
          rolelist.map((rolelist) => {
            return <TabRoleList rolelist={rolelist} />;
          })}
      </CardContainer>

      <div className="text-center m-5">
        <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight m-9">
          All Crypto :
        </h1>
      </div>

      <CardContainer>
        {cryptoList &&
          cryptoList.map((crypto) => {
            return <Tabcrypto crypto={crypto} />;
          })}
      </CardContainer>

      <div className="text-center m-5">
        <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight m-9">
          All Offer :
        </h1>
      </div>

      <CardContainer>
        {offerList &&
          offerList.map((offer) => {
            return <TabOffer offer={offer.Crypto} />;
          })}
      </CardContainer>

      <div className="text-center m-5">
        <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight m-9">
          All User :
        </h1>
      </div>

      <CardContainer>
        {userlist &&
          userlist.map((user) => {
            return <TabUserList user={user} />;
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

export default MarketPage;
