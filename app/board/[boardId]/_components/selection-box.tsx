"use client";

import { Side, XYWH } from "@/types/canvas";
import React, { memo } from "react";

interface SelectionBoxProps {
  onResizeHandlePointerDown: (corner: Side, initialBounds: XYWH) => void;
}

export const SelectionBox = memo(
  ({ onResizeHandlePointerDown }: SelectionBoxProps) => {
    return <div>SelectionBox</div>;
  }
);

SelectionBox.displayName = "SelectionBox";
