import React from "react";
import { Canvas } from "./_components/canvas";
import { Room } from "@/components/room";

interface BoardIdPageProps {
  params: {
    boardId: string;
  };
}

const BoardIdPage = ({ params: { boardId } }: BoardIdPageProps) => {
  return (
    <Room roomId={boardId}>
      <Canvas boardId={boardId} />
    </Room>
  );
};

export default BoardIdPage;
