"use client";
import React from "react";
import { NewButton } from "./new-button";

export const Sidebar = () => {
  return (
    <div className="fixed left-0 z-[1] bg-blue-950 h-full w-[60px] flex flex-col p-3 gap-y-4 text-white">
      <NewButton />
    </div>
  );
};
