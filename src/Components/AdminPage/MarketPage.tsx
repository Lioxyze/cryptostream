import React, { useEffect, useState } from "react";
import {
  CryptoProps,
  InformationUserProps,
  OfferProps,
  PromoCodeProps,
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
import TabOffer from "../Offer/TabOffer";
import { AllOffer } from "@/Service/offers";
import ProfileCard from "../HomePage/ProfileCard";
import { AllInformationUser } from "@/Service/auth";
import { AddOfferModal } from "../Offer/AddOfferModal";
import { AddPropsModal } from "../Crypto/AddCryptoModal";
import { AllpromoCode } from "@/Service/PromoCode";
import Tabpromocode from "../PromoCode/TabPromo";
import { AddPromoCodeModal } from "../PromoCode/AddPromoModal";

const MarketPage = () => {
  const [rolelist, setRolelist] = useState<RoleListProps[]>([]);
  const [isReloadNeeded, setIsReloadNeeded] = useState(false);
  const [cryptoList, setCryptoList] = useState<CryptoProps[]>([]);
  const [userlist, setUserlist] = useState<UserSProps[]>([]);
  const [offerList, setOfferList] = useState<OfferProps[]>([]);
  const [profilelist, setProfilelist] = useState<InformationUserProps[]>([]);
  const [promocodelist, setPromocodelist] = useState<PromoCodeProps[]>();

  useEffect(() => {
    AllRole().then((res) => {
      setRolelist(Array.isArray(res.data) ? res.data : []);
      console.log(res.data);
    });
  }, [isReloadNeeded]);

  useEffect(() => {
    AllCrypto().then((res) => {
      setCryptoList(Array.isArray(res.data) ? res.data : []);
      console.log(res.data);
    });
  }, [isReloadNeeded]);

  useEffect(() => {
    AllUser().then((res) => {
      setUserlist(Array.isArray(res.data) ? res.data : []);
      console.log(res.data);
    });
  }, [isReloadNeeded]);

  useEffect(() => {
    AllOffer().then((res) => {
      setOfferList(Array.isArray(res.data) ? res.data : []);
      console.log(res.data);
    });
  }, [isReloadNeeded]);

  useEffect(() => {
    AllInformationUser().then((res) => {
      setProfilelist(Array.isArray(res.data) ? res.data : []);
      console.log(res.data);
    });
  }, [isReloadNeeded]);

  useEffect(() => {
    AllpromoCode().then((res) => {
      setPromocodelist(res.data);
      console.log(res.data);
    });
  }, [isReloadNeeded]);

  return (
    <div className="bg-[#111F2E]">
      <section className="bg-white py-20 lg:py-40">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <AddOfferModal setIsReloadNeeded={setIsReloadNeeded} />
            <AddPropsModal setIsReloadNeeded={setIsReloadNeeded} />
            <AddPromoCodeModal setIsReloadNeeded={setIsReloadNeeded} />
          </div>
        </div>
      </section>
      <div className="text-center">
        <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
          All Role:
        </h1>
      </div>
      <CardContainer>
        {rolelist.map((role) => (
          <TabRoleList key={role.id} rolelist={role} />
        ))}
      </CardContainer>
      <div className="text-center m-5">
        <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight m-9">
          All Crypto:
        </h1>
      </div>
      <CardContainer>
        {cryptoList.map((crypto) => (
          <Tabcrypto key={crypto.id} crypto={crypto} />
        ))}
      </CardContainer>
      <div className="text-center m-5">
        <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight m-9">
          All Offer:
        </h1>
      </div>
      <CardContainer>
        {offerList.map((offer) => (
          <TabOffer
            key={offer.id}
            offer={offer.Crypto}
            setIsReloadNeeded={setIsReloadNeeded}
          />
        ))}
      </CardContainer>
      <div className="text-center m-5">
        <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight m-9">
          All User:
        </h1>
      </div>
      <CardContainer>
        {userlist.map((user) => (
          <TabUserList key={user.id} user={user} />
        ))}
      </CardContainer>
      <CardContainer>
        {profilelist.map((profile) => (
          <ProfileCard key={profile.id} profile={profile} />
        ))}
      </CardContainer>

      <div className="text-center m-5">
        <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight m-9">
          All PromoCode:
        </h1>
      </div>

      <CardContainer>
        {promocodelist &&
          promocodelist.map((promocode) => {
            return <Tabpromocode promocode={promocode} />;
          })}
      </CardContainer>

      <section className="py-20">
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
