import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export const Participants = () => {
  return (
    <div className="h-12 absolute top-2 right-2 bg-white rounded-md px-3 flex items-center shadow-md">
      List of users
    </div>
  );
};

Participants.Skeleton = function ParticipantsSkeleton() {
  return (
    <div className="h-12 w-[100px] absolute top-2 right-2 bg-white rounded-md px-3 flex items-center shadow-md">
      <Skeleton className="h-full w-full bg-muted-400" />
    </div>
  );
};
