"use client";
import Footer from "@/Components/HomePage/Footer";
import Main from "@/Components/HomePage/Main";
import Navbar from "@/Components/HomePage/NavBar";
import { AllCrypto } from "@/Service/crypto";
import { CryptoProps } from "@/Utils/types";
import { useEffect, useState } from "react";

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
        <Main />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
