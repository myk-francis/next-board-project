"use client";

import React from "react";
import { Info } from "./info";
import { Participants } from "./participants";
import { ToolBar } from "./toolbar";

interface CanvasProps {
  boardId: string;
}

export const Canvas = ({ boardId }: CanvasProps) => {
  return (
    <main className="h-full w-full bg-neutral-100 touch-none">
      <Info />
      <Participants />
      <ToolBar />
    </main>
  );
};
