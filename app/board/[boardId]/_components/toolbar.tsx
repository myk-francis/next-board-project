import React from "react";
import { ToolButton } from "./tool-button";
import {
  Circle,
  MousePointer2,
  Pencil,
  Square,
  StickyNote,
  Type,
} from "lucide-react";

export const ToolBar = () => {
  return (
    <div className="absolute top-[50%] -translate-y-[50%] left-2 flex flex-col gap-y-4">
      <div className="bg-white rounded-md p-1.5 flex flex-col gap-y-1 items-center shadow-md">
        <ToolButton
          label="Select"
          icon={MousePointer2}
          onClick={() => {}}
          isActive={false}
        />
        <ToolButton
          label="Text"
          icon={Type}
          onClick={() => {}}
          isActive={false}
        />
        <ToolButton
          label="Sticky note"
          icon={StickyNote}
          onClick={() => {}}
          isActive={false}
        />
        <ToolButton
          label="Rectangle"
          icon={Square}
          onClick={() => {}}
          isActive={false}
        />
        <ToolButton
          label="Ellipse"
          icon={Circle}
          onClick={() => {}}
          isActive={false}
        />
        <ToolButton
          label="Pen"
          icon={Pencil}
          onClick={() => {}}
          isActive={false}
        />
      </div>
      <div className="bg-white rounded-md p-1.5 flex flex-col items-center shadow-md">
        <div>Undo</div>
        <div>Redo</div>
      </div>
    </div>
  );
};

export function ToolBarSkeleton() {
  return (
    <div className="absolute top-[50%] -translate-y-[50%] left-2 flex flex-col gap-y-4 bg-white h-[360px] w-[52px] shadow-md rounded-md"></div>
  );
}
