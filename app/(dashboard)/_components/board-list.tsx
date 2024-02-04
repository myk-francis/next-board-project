"use client";

import React from "react";

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
    return <div>Try searching for something else</div>;
  }

  if (!data?.length && query?.favorites) {
    return <div>No favorites</div>;
  }

  if (!data?.length) {
    return <div>No boards found</div>;
  }

  return <div>{JSON.stringify(query)}</div>;
};
