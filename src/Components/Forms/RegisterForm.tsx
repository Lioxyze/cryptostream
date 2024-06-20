"use client";
import { registerr } from "@/Service/auth";
import { AuthProps, AuthUpdateProps } from "@/Utils/types";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { ErrorMessage } from "@hookform/error-message";
import { schema } from "../Validations/ValidationForm";

type RegisterProps = {
  registerProps?: AuthProps;
  setIsReloadNeeded: any;
  handleClose: any;
};

export const RegisterForm = ({
  setIsReloadNeeded,
  handleClose,
}: RegisterProps) => {
  const [error, setError] = useState("");
  const { push } = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<AuthUpdateProps>({
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<AuthUpdateProps> = (data) =>
    registerr(data)
      .then((res) => {
        push("/");
      })
      .catch((e) => console.log(e));

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-white">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign up to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
                {...register("email", {
                  required: "This is required",
                  maxLength: { value: 40, message: "Email Too big  " },
                  minLength: { value: 1, message: "Email Too low " },
                })}
              />
              {errors?.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="firstname"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                First Name
              </label>
              <div className="mt-2">
                <input
                  id="firstname"
                  type="firstname"
                  autoComplete="firstname"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
                  {...register("firstName", {
                    required: "This is required",
                    maxLength: { value: 10, message: "Firstname Too big  " },
                    minLength: { value: 2, message: "Firstname Too low " },
                  })}
                />
                {errors?.firstName && (
                  <p className="text-red-500">{errors.firstName.message}</p>
                )}
              </div>
            </div>
            <div>
              <label
                htmlFor="lastname"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Last Name
              </label>
              <div className="mt-2">
                <input
                  id="lastname"
                  type="lastname"
                  autoComplete="lastname"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
                  {...register("lastName", {
                    required: "This is required",
                    maxLength: { value: 10, message: "LastName Too big  " },
                    minLength: { value: 2, message: "LastName Too low " },
                  })}
                />
                {errors?.lastName && (
                  <p className="text-red-500">{errors.lastName.message}</p>
                )}
              </div>
            </div>
            <div>
              <label
                htmlFor="age"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Age
              </label>
              <div className="mt-2">
                <input
                  id="age"
                  type="age"
                  autoComplete="age"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
                  {...register("age", {
                    required: "This is required",
                    maxLength: { value: 10, message: "Age Too big  " },
                    minLength: { value: 2, message: "Age Too low " },
                  })}
                />
                {errors?.age && (
                  <p className="text-red-500">{errors.age.message}</p>
                )}
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="pseudo"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Pseudo
              </label>
            </div>
            <div className="mt-2">
              <input
                id="pseudo"
                type="pseudo"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
                {...register("pseudo", {
                  required: "This is required",
                  maxLength: { value: 20, message: "Pseudo Too big  " },
                  minLength: { value: 2, message: "Pseudo Too low " },
                })}
              />
              {errors?.pseudo && (
                <p className="text-red-500">{errors.pseudo.message}</p>
              )}
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="city"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                City
              </label>
            </div>
            <div className="mt-2">
              <input
                id="city"
                type="city"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
                {...register("city", {
                  required: "This is required",
                  maxLength: { value: 20, message: "City Too big  " },
                  minLength: { value: 2, message: "City Too low " },
                })}
              />
              {errors?.city && (
                <p className="text-red-500">{errors.city.message}</p>
              )}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                type="password"
                autoComplete="current-password"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
                {...register("password", {
                  required: "This is required",
                  maxLength: { value: 25, message: "Password Too big  " },
                  minLength: { value: 2, message: "Password Too low " },
                })}
              />
              {errors?.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Confirm Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="confirmPassword"
                type="password"
                autoComplete="current-password"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
                {...register("confirmPassword", {
                  required: "This is required",
                  maxLength: {
                    value: 20,
                    message: "ConfirmPassword Too big  ",
                  },
                  minLength: { value: 2, message: "ConfirmPassword Too low " },
                })}
              />
              {errors?.confirmPassword && (
                <p className="text-red-500">{errors.confirmPassword.message}</p>
              )}
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="promocode"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Promo Code
              </label>
            </div>
            <div className="mt-2">
              <input
                id="promocode"
                autoComplete="current-password"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
                {...register("promoCode", {
                  required: "This is required",
                  maxLength: { value: 10, message: "PROMOCODE Too big  " },
                  minLength: { value: 2, message: "PROMOCODE Too low " },
                })}
              />
              {errors?.promoCode && (
                <p className="text-red-500">{errors.promoCode.message}</p>
              )}
            </div>
          </div>

          <div>
            <p className="text-red-600 text-italic">{error}</p>
            <input
              type="submit"
              className="my-8 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              value="Sign up"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
