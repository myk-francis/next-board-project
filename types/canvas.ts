export type Color = {
  r: number;
  g: number;
  b: number;
};

export type Camera = {
  x: number;
  y: number;
};

export enum LayerType {
  Reactangle,
  Ellipse,
  Text,
  Path,
  Note,
}

export type ReactangleLayer = {
  type: LayerType.Reactangle;
  x: number;
  y: number;
  width: number;
  height: number;
  fill: Color;
  value?: string;
};
export type EllipseLayer = {
  type: LayerType.Ellipse;
  x: number;
  y: number;
  width: number;
  height: number;
  fill: Color;
  value?: string;
};
export type PathLayer = {
  type: LayerType.Path;
  x: number;
  y: number;
  width: number;
  height: number;
  fill: Color;
  value?: string;
};
export type TextLayer = {
  type: LayerType.Text;
  x: number;
  y: number;
  width: number;
  height: number;
  fill: Color;
  value?: string;
};
export type NoteLayer = {
  type: LayerType.Note;
  x: number;
  y: number;
  width: number;
  height: number;
  fill: Color;
  value?: string;
};

export type CanvasState =
  | {
      mode: CanvasMode.None;
    }
  | {
      mode: CanvasMode.SelectionNet;
    }
  | {
      mode: CanvasMode.Pressing;
    }
  | {
      mode: CanvasMode.Translating;
    }
  | {
      mode: CanvasMode.Inserting;
    }
  | {
      mode: CanvasMode.Resizing;
    }
  | {
      mode: CanvasMode.Pencil;
      // x: number;
      // y: number;
      // width: number;
      // height: number;
    };

export enum CanvasMode {
  None,
  Pressing,
  SelectionNet,
  Translating,
  Inserting,
  Resizing,
  Pencil,
}
