import React, { useEffect, useState } from "react";
import Tabcrypto from "./Tabcrypto";
import { AllCrypto } from "@/Service/crypto";
import { CryptoProps, InformationUserProps } from "@/Utils/types";
import styled from "styled-components";
import ProfileCard from "./ProfileCard";

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px; // Ajustez l'espacement entre les éléments selon vos besoins
  padding: 16px; // Ajustez le padding selon vos besoins
`;

const Main = () => {
  const [cryptoList, setCryptoList] = useState<CryptoProps[]>();
  const [isReloadNeeded, setIsReloadNeeded] = useState(false);
  const [unformationUserList, setInformationUser] =
    useState<InformationUserProps[]>();

  useEffect(() => {
    AllCrypto().then((res) => {
      setCryptoList(res.data);
      console.log(res.data);
    });
  }, [isReloadNeeded]);

  return (
    <div className="bg-[#111F2E]">
      <section className="bg-white py-20 lg:py-40">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Welcome to CryptoStream
            </h1>
            <p className="mt-4 text-lg lg:text-xl text-gray-600">
              Your trusted platform for trading and investing in
              crypto-currencies
            </p>

            <a
              href="#"
              className="mt-8 inline-block bg-blue-600 text-white text-lg font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-blue-700 transition ease-in duration-150"
            >
              Start Now
            </a>
          </div>
          <div className="flex justify-center mt-8 mb-8">
            <iframe
              width="853"
              height="480"
              src="https://www.youtube.com/embed/VeiH5pMPiUg"
              title="Andrew Tate - On My Own (Music Video)"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </section>

      <CardContainer>
        {cryptoList &&
          cryptoList.map((crypto) => {
            return <Tabcrypto crypto={crypto} />;
          })}
      </CardContainer>

      <CardContainer>
        {unformationUserList &&
          unformationUserList.map((profile) => {
            return <ProfileCard profile={profile} />;
          })}
      </CardContainer>

      <section className=" py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Security
              </h2>
              <p className="text-gray-600">
                We use the latest technology to guarantee the security security
                of your transactions and data.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Reliability
              </h2>
              <p className="text-gray-600">
                With millions of users worldwide, CryptoStream is a trusted a
                trusted platform.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Support 24/7
              </h2>
              <p className="text-gray-600">
                Our team is available 24/7 to help you with all your questions
                and concerns.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
