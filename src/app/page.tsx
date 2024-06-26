"use client";
import Footer from "@/Components/HomePage/Footer";
import Main from "@/Components/HomePage/Main";
import Navbar from "@/Components/HomePage/NavBar";
import { AllInformationUser } from "@/Service/auth";
import { AllCrypto } from "@/Service/crypto";
import { CryptoProps, InformationUserProps } from "@/Utils/types";
import { useEffect, useState } from "react";

export default function Home() {
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

  useEffect(() => {
    AllInformationUser().then((res) => {
      setInformationUser(res.data);
      console.log(res.data);
    });
  }, [isReloadNeeded]);
  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div>
        <Main />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
