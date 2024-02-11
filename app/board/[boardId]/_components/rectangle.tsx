import { colorToCssColor } from "@/lib/utils";
import { RectangleLayer } from "@/types/canvas";
import React from "react";

interface RectangleProps {
  id: string;
  layer: RectangleLayer;
  onPointerDown: (e: React.PointerEvent, layerId: string) => void;
  selectionColor?: string;
}

export const Rectangle = ({
  id,
  layer,
  onPointerDown,
  selectionColor,
}: RectangleProps) => {
  const { x, y, width, height, type, fill } = layer;

  return (
    <rect
      className="drop-shadow-md"
      onPointerDown={(e) => onPointerDown(e, id)}
      style={{ transform: `translate(${x}px, ${y}px)` }}
      width={width}
      height={height}
      x={0}
      y={0}
      fill={fill ? colorToCssColor(fill) : "#CCC"}
      strokeWidth={1}
      stroke={selectionColor || "transparent"}
    />
  );
};
