"use client";

import { useOther } from "@/liveblocks.config";
import { memo } from "react";

interface CursorProps {
  connectionId: number;
}

export const Cursor = memo(({ connectionId }: CursorProps) => {
  const info = useOther(connectionId, (user) => user?.info);

  return <div></div>;
});

Cursor.displayName = "Cursor";
