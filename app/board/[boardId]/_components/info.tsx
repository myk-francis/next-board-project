"use client";
import React from "react";

export const Info = () => {
  return (
    <div className="h-12 absolute top-2 left-2 bg-white rounded-md px-1.5 flex items-center shadow-md">
      TODO: Information about board
    </div>
  );
};

export const InfoSkeleton = () => {
  return (
    <div className="h-12 w-[300px] absolute top-2 left-2 bg-white rounded-md px-1.5 flex items-center shadow-md"></div>
  );
};
