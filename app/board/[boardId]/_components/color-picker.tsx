"use client";

import { Color } from "@/types/canvas";

interface ColorPickerProps {
  onChange: (color: Color) => void;
}

interface ColorButtonProps {
  color: Color;
  onClick: () => void;
}

const ColorButton = ({ color, onClick }: ColorButtonProps) => {
  return <div>Color Button!</div>;
};

export const ColorPicker = ({ onChange }: ColorPickerProps) => {
  return <div>Color Picker!</div>;
};
