"use client";

import { useOthersConnectionIds } from "@/liveblocks.config";
import { memo } from "react";

import React from "react";
import { Cursor } from "./cursor";

const Cursors = () => {
  const ids = useOthersConnectionIds();

  return (
    <>
      {ids.map((connectionId) => (
        <Cursor key={connectionId} connectionId={connectionId} />
      ))}
    </>
  );
};

export const CursorsPresence = memo(() => {
  return (
    <div>
      {/* TODO: Draft pencil */}
      <Cursors />
    </div>
  );
});

CursorsPresence.displayName = "";
