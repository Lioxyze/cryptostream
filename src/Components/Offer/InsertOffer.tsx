"use client";

import { OfferProps, UserProps } from "@/Utils/types";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ErrorMsg } from "../Error";
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
