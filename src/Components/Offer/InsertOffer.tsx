"use client";

import { OfferProps, UserProps } from "@/Utils/types";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { insertOffer } from "@/Service/offers";

type InsertOffersProps = {
  OffersProps?: OfferProps;
  setIsReloadNeeded: any;
  handleClose: any;
};

export const InsertOffersForm = ({
  OffersProps,
  setIsReloadNeeded,
  handleClose,
}: InsertOffersProps) => {
  const [usersList, setUsersList] = useState<UserProps[]>();
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<OfferProps>();

  const onSubmit: SubmitHandler<OfferProps> = (data) => {
    setServerError(null); // reset server error
    insertOffer(data)
      .then((res) => {
        setIsReloadNeeded(true);
        handleClose();
      })
      .catch((e) => setServerError(e.message));
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-white w-1/2 mx-auto">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Insert new Offers
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label
              htmlFor="quantity"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Amount Offers
            </label>
            <div className="mt-2">
              <input
                type="number"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
                {...register("amount", {
                  required: "Amount is required",
                })}
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="id_crypto"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Id crypto
            </label>
            <div className="mt-2">
              <input
                type="text"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
                {...register("id_crypto", {
                  required: "Crypto ID is required",
                })}
              />
            </div>
          </div>

          <div>
            <div>
              <input
                type="submit"
                className="my-8 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                value="Insert offer"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

//  "id": "91b6239c-b217-452b-9a50-0ab1869b98e7",
//  "name": "1BANANACOIN",

// "id": "91b6239c-b217-452b-9a50-0ab1869b98e7",
// "name": "1BANANA COIN",

// "id": "756d4d5e-b775-4a0d-a4ef-90592d97028f",
// "name": "7CCoin",
// "value": 84.03725570724008,

// "id": "2c7b4144-45b7-4988-9c48-25127a5c7ec9",
// "name": "ANANANANAS",

// "id": "a77af9dc-05b7-4913-a1df-5fd598513c33",
// "name": "A Snow Coin",

// "id": "726c24bd-d283-4586-a68c-4812310e979f",
// "name": "ASteCoin",

// "id": "263e74b8-c22b-4cac-9725-96dbc328ca5b",
// "name": "BHG",

// "id": "e34e8c09-f65b-4958-a03c-21dd1f58752d",
// "name": "Bitcoin",

// "id": "c2214eaa-5166-4441-aaf7-4a25803f2ea9",
// "name": "Bitcoinss",

// "id": "4e64ac60-dd42-4933-ad7a-44fc27a89fd8",
// "name": "Bros Coin",

// "id": "1ad235f7-92a9-4617-a37a-e901c60f0541",
// "name": "BTC",

// "id": "a2667e5f-78ed-4288-8ff2-db106dd9fb3d",
// "name": "BTCD",

// "id": "5ea1cf1a-7dc0-475f-8c9b-20dae1234ef2",
// "name": "CATCOIN",

// "id": "7de4340d-2105-492b-b947-893fa05543a0",
// "name": "Coin",

// "id": "07eaacad-fd14-4143-ab31-0361c372038a",
// "name": "coins",

// "id": "b961a78c-27b1-4306-a6a1-0a2cf7bf1ea4",
// "name": "coinsmoney",

// "id": "1cd28f99-002d-4a65-8ff0-faa829f559e3",
// "name": "CRY",

// "id": "bad22839-76b6-42c5-b864-a2fb1979b68a",
// "name": "CRYPTOBRAGUETTE",

// "id": "2274341d-19bf-4ba8-96d8-77e93678262e",
// "name": "crystal coin",

// "id": "f1512d7d-3dd4-46cb-839f-c5b97c7995cb",
// "name": "DOGE",

// "id": "64fec17d-6a1c-4236-a1f9-6be732d7d24b",
// "name": "ETH",

// "id": "43626a80-f216-4cbb-86f3-240fac17ba5f",
// "name": "k",

// "id": "aac4a8cf-5f7f-453a-837b-1c195c4a5d90",
// "name": "LioCoin",

// "id": "38d979c4-6992-40fd-846e-adfc5a2439ae",
// "name": "MINICRYPTO",

// "id": "fcd8696e-f1b6-4690-94be-5bf8e779deaa",
// "name": "NotSureAboutThat",

// "id": "fc1e4c7a-da54-4f86-aca8-105bea7bf0d9",
// "name": "PERRIER COIN",

// "id": "13b437df-1d21-4187-9f60-65449ae0294e",
// "name": "Plopi",

// "id": "816fc15f-46d6-449a-9744-8ffd7ec3f54d",
// "name": "racen",

// "id": "3f1fc0be-1fef-4884-b6d6-3ca6728777d0",
// "name": "SHITCOIN",

// "id": "6c0edc95-a968-4c2f-9169-33acfdc73575",
// "name": "SOL",

// "id": "1c237bcc-d2fa-4c4b-9a3a-f0efb4569e1e",
// "name": "Spectral",

// "id": "19980b6c-91e4-4d7d-9150-4d7d8f0d9b2f",
// "name": "SQL",

// "id": "9d5a6a84-e3d4-48e7-aa3e-fff53fb1a497",
// "name": "SuccessCoin",

// "id": "d55ec8f2-1387-435d-829f-bf17dcad0475",
// "name": "test",

// "id": "1bdfddb5-4326-4753-9e8d-18b9a3ea9bbf",
// "name": "testbitcoin",

// "id": "849eeb85-b50a-46a1-8144-897a13ba9b27",
// "name": "truc",
