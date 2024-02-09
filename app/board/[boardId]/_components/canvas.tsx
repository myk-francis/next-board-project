"use client";

import React, { useState } from "react";
import { Info } from "./info";
import { Participants } from "./participants";
import { ToolBar } from "./toolbar";
import { CanvasMode, CanvasState } from "@/types/canvas";

interface CanvasProps {
  boardId: string;
}

export const Canvas = ({ boardId }: CanvasProps) => {
  const [canvasState, setCanvasState] = useState<CanvasState>({
    mode: CanvasMode.None,
  });

  return (
    <main className="h-full w-full bg-neutral-100 touch-none">
      <Info boardId={boardId} />
      <Participants />
      <ToolBar
        canvasState={canvasState}
        setCanvasState={setCanvasState}
        canUndo={false}
        canRedo={false}
        onUndo={() => {}}
        onRedo={() => {}}
      />
    </main>
  );
};
