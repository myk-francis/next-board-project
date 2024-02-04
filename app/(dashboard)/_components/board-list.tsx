"use client";

import React from "react";
import { EmptySearch } from "./empty-search";
import { EmptyFavorites } from "./empty-favorites";

interface BoardListProps {
  orgId: string;
  query: {
    search?: string;
    favorites?: string;
  };
}

export const BoardList = ({ orgId, query }: BoardListProps) => {
  const data: any = []; //TODO: Change to API call

  if (!data?.length && query?.search) {
    return <EmptySearch />;
  }

  if (!data?.length && query?.favorites) {
    return <EmptyFavorites />;
  }

  if (!data?.length) {
    return <div>No boards found</div>;
  }

  return <div>{JSON.stringify(query)}</div>;
};
