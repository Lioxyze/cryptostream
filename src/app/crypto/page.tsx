"use client";
import Footer from "@/Components/HomePage/Footer";
import Navbar from "@/Components/HomePage/NavBar";
import MarketPage from "@/Components/AdminPage/MarketPage";
import MarketPageContainer from "@/Components/AdminPage/MarketPage";
import { AllCrypto } from "@/Service/crypto";
import { CryptoProps } from "@/Utils/types";
import { useEffect, useState } from "react";
import MarketPageMain from "@/Components/Crypto/CryptoMain";
import CryptoPageMain from "@/Components/Crypto/CryptoMain";

export default function Home() {
  const [cryptoList, setCryptoList] = useState<CryptoProps[]>();
  const [isReloadNeeded, setIsReloadNeeded] = useState(false);

  useEffect(() => {
    AllCrypto().then((res) => {
      setCryptoList(res.data);
      console.log(res.data);
    });
  }, [isReloadNeeded]);
  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div>
        <CryptoPageMain />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
