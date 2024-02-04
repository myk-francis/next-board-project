"use client";

import { UserButton } from "@clerk/nextjs";
import React from "react";
import { SearchInput } from "./search-input";

export const NavBar = () => {
  return (
    <div className="flex items-center gap-x-4 p-5">
      <div className="hidden lg:flex lg:flex-1">
        {/* TODO: Add search */}
        <SearchInput />
      </div>
      <UserButton />
    </div>
  );
};
