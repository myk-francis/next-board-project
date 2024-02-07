import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export const Info = () => {
  return (
    <div className="h-12 absolute top-2 left-2 bg-white rounded-md px-1.5 flex items-center shadow-md">
      TODO: Information about board
    </div>
  );
};

Info.Skeleton = function InfoSkeleton() {
  return (
    <div className="h-12 w-[300px] absolute top-2 left-2 bg-white rounded-md px-1.5 flex items-center shadow-md">
      <Skeleton className="h-full w-full bg-muted-400" />
    </div>
  );
};
