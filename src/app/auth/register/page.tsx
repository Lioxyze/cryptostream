"use client";
import { RegisterForm } from "@/Components/Forms/RegisterForm";
import React, { useState } from "react";

const page = () => {
  return (
    <div>
      <RegisterForm setIsReloadNeeded={undefined} handleClose={undefined} />
    </div>
  );
};

export default page;
