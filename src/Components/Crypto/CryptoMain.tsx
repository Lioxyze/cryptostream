"use client";
import React, { useEffect, useState } from "react";
import { CryptoProps, RoleListProps, UserSProps } from "@/Utils/types";
import styled from "styled-components";
import { AllRole } from "@/Service/role";
import { CardContainer } from "../Cards/CardContainer";
import Tabcrypto from "../HomePage/Tabcrypto";
import { AllCrypto } from "@/Service/crypto";
import { AllUser } from "@/Service/user";
import { AddPropsModal } from "./AddCryptoModal";
import { DeleteCryptoProps } from "./DeleteCrypto";

const MarketPageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  padding: 16px;
`;

const SearchBar = styled.input`
  width: 100%;
  max-width: 400px;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  margin-bottom: 16px;
`;

const CryptoPageMain = () => {
  const [rolelist, setRolelist] = useState<RoleListProps[]>();
  const [isReloadNeeded, setIsReloadNeeded] = useState(false);
  const [cryptoList, setCryptoList] = useState<CryptoProps[]>();
  const [userlist, setUserlist] = useState<UserSProps[]>();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    AllRole().then((res) => {
      setRolelist(res.data);
    });
  }, [isReloadNeeded]);

  useEffect(() => {
    AllCrypto().then((res) => {
      setCryptoList(res.data);
    });
  }, [isReloadNeeded]);

  useEffect(() => {
    AllUser().then((res) => {
      setUserlist(res.data);
    });
  }, [isReloadNeeded]);

  const filteredCryptoList = cryptoList?.filter((crypto) =>
    crypto.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-[#111F2E]">
      <section className="bg-white py-20 lg:py-40">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <div className="text-center">
              <div className="max-w-6xl mx-auto px-4">
                <div className="text-center">
                  <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                    Crypto to CryptoStream
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center m-5">
        <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight m-9 text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 drop-shadow-lg">
          All Crypto :
        </h1>
        <SearchBar
          type="text"
          placeholder="Search crypto..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ color: "black", backgroundColor: "white" }} // Test de couleur pour rendre le texte visible
        />
      </div>
      <CardContainer>
        {/* Affichage des cryptomonnaies filtrées */}
        {filteredCryptoList &&
          filteredCryptoList.map((crypto) => {
            return <Tabcrypto key={crypto.id} crypto={crypto} />;
          })}
      </CardContainer>
    </div>
  );
};

export default CryptoPageMain;
