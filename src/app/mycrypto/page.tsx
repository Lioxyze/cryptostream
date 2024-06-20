"use client";
import { CardContainer } from "@/Components/Cards/CardContainer";
import { CardCrypto } from "@/Components/Cards/CardCrypto";
import Footer from "@/Components/HomePage/Footer";
import Navbar from "@/Components/HomePage/NavBar";
import { CardUserMyAssets } from "@/Components/Mycrypto/TabMyCrypto";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { UserMyAssetsProps } from "@/Utils/types"; // Importation de l'interface UserMyAssetsProps
import { getUserAssets } from "@/Service/user";

export default function Page() {
  const [userMyAssetsList, setUserMyAssetsList] = useState<UserMyAssetsProps>(); // Utilisation de UserMyAssetsProps
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isReloadNeeded, setIsReloadNeeded] = useState(true);

  const router = useRouter();

  useEffect(() => {
    getUserAssets().then((res) => {
      setUserMyAssetsList(res);
    });
  }, [isReloadNeeded]);

  return (
    <div>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
        <div className="bg-white">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight text-center">
            Crypto to CryptoStream
          </h1>
          {userMyAssetsList && (
            <CardUserMyAssets userMyassets={userMyAssetsList} />
          )}
        </div>
        {/* <div className="w-full h-[200px] border-2 border-white dark:text-white ">
            {isReloadNeeded && userMyAssetsList.map((asset) => <CardCrypto />)}
          </div> */}
      </main>
      <Footer />
    </div>
  );
}
