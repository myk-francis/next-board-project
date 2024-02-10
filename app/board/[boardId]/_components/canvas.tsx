"use client";

import React, { useCallback, useState } from "react";
import { Info } from "./info";
import { Participants } from "./participants";
import { ToolBar } from "./toolbar";
import { Camera, CanvasMode, CanvasState } from "@/types/canvas";
import {
  useHistory,
  useCanRedo,
  useCanUndo,
  useMutation,
} from "@/liveblocks.config";
import { CursorsPresence } from "./cursors-presence";
import { pointerEventToCanvasPoint } from "@/lib/utils";

interface CanvasProps {
  boardId: string;
}

export const Canvas = ({ boardId }: CanvasProps) => {
  const [canvasState, setCanvasState] = useState<CanvasState>({
    mode: CanvasMode.None,
  });

  const [camera, setCamera] = useState<Camera>({
    x: 0,
    y: 0,
  });

  const history = useHistory();
  const canUndo = useCanUndo();
  const canRedo = useCanRedo();

  const onWheel = useCallback((e: React.WheelEvent) => {
    // e.preventDefault();
    // if (e.ctrlKey) {
    //   setCamera((c) => ({
    //     x: c.x + e.deltaX,
    //     y: c.y + e.deltaY,
    //   }));
    // }

    setCamera((c) => ({
      x: c.x - e.deltaX,
      y: c.y - e.deltaY,
    }));
  }, []);

  const onPointerMove = useMutation(
    ({ setMyPresence }, e: React.PointerEvent) => {
      e.preventDefault();

      const current = pointerEventToCanvasPoint(e, camera);

      setMyPresence({
        cursor: current,
      });
    },
    []
  );

  return (
    <main className="h-full w-full bg-neutral-100 touch-none">
      <Info boardId={boardId} />
      <Participants />
      <ToolBar
        canvasState={canvasState}
        setCanvasState={setCanvasState}
        canUndo={canUndo}
        canRedo={canRedo}
        onUndo={history.undo}
        onRedo={history.redo}
      />
      <svg
        onWheel={onWheel}
        onPointerMove={onPointerMove}
        className="h-[100vh] w-[100vw]"
      >
        <g>
          <CursorsPresence />
        </g>
      </svg>
    </main>
  );
};
