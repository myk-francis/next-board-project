"use client";

interface BoardListProps {
  orgId: string;
  query: {
    search?: string;
    favorites?: string;
  };
}

import React from "react";

export const BoardList = ({ orgId, query }: BoardListProps) => {
  return <div>{JSON.stringify(query)}</div>;
};
