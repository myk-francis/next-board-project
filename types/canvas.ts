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
