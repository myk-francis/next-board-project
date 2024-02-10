"use client";

import React, { useCallback, useState } from "react";
import { Info } from "./info";
import { Participants } from "./participants";
import { ToolBar } from "./toolbar";
import {
  Camera,
  CanvasMode,
  CanvasState,
  Color,
  LayerType,
  Point,
} from "@/types/canvas";
import {
  useHistory,
  useCanRedo,
  useCanUndo,
  useMutation,
  useStorage,
} from "@/liveblocks.config";
import { CursorsPresence } from "./cursors-presence";
import { pointerEventToCanvasPoint } from "@/lib/utils";

const MAX_LAYERS = 200;

interface CanvasProps {
  boardId: string;
}

export const Canvas = ({ boardId }: CanvasProps) => {
  const layerIds = useStorage((root) => root.layerIds);

  const [canvasState, setCanvasState] = useState<CanvasState>({
    mode: CanvasMode.None,
  });

  const [camera, setCamera] = useState<Camera>({
    x: 0,
    y: 0,
  });
  const [lastUsedColor, setLastUsedColor] = useState<Color>({
    r: 0,
    g: 0,
    b: 0,
  });

  const history = useHistory();
  const canUndo = useCanUndo();
  const canRedo = useCanRedo();

  const insertLayer = useMutation(
    (
      { storage, setMyPresence },
      layerType:
        | LayerType.Ellipse
        | LayerType.Text
        | LayerType.Rectangle
        | LayerType.Note,
      position: Point
    ) => {
      // e.preventDefault();
      // setMyPresence({
      //   cursor: current,
      // });
    },
    []
  );

  const onWheel = useCallback((e: React.WheelEvent) => {
    // e.preventDefault();
    setCamera((c) => ({
      x: c.x - e.deltaX,
      y: c.y - e.deltaY,
    }));
  }, []);

  const onPointerMove = useMutation(
    ({ setMyPresence }, e: React.PointerEvent) => {
      // e.preventDefault();

      const current = pointerEventToCanvasPoint(e, camera);

      setMyPresence({
        cursor: current,
      });
    },
    []
  );

  const onPointerLeave = useMutation(
    ({ setMyPresence }, e: React.PointerEvent) => {
      // e.preventDefault();

      setMyPresence({
        cursor: null,
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
        onPointerLeave={onPointerLeave}
        className="h-[100vh] w-[100vw]"
      >
        <g style={{ transform: `translate(${camera.x}px, ${camera.y}px)` }}>
          <CursorsPresence />
        </g>
      </svg>
    </main>
  );
};
