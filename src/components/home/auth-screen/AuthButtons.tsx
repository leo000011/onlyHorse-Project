"use client";
import { Button } from "@/components/ui/button";
import React from "react";

import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

const AuthButtons = () => {
  return (
    <div className="flex flex-col gap-3 flex-1 md:flex-row">
      <RegisterLink className="flex-1">
        <Button className="w-full" variant={"outline"}>
          Sign Up
        </Button>
      </RegisterLink>
      <LoginLink className="flex-1">
        <Button className="w-full">Login</Button>
      </LoginLink>
    </div>
  );
};

export default AuthButtons;
