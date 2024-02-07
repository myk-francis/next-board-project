import React from "react";
import { Canvas } from "./_components/canvas";

interface BoardIdPageProps {
  params: {
    boardId: string;
  };
}

const BoardIdPage = ({ params: { boardId } }: BoardIdPageProps) => {
  return (
    <div>
      <Canvas />
    </div>
  );
};

export default BoardIdPage;
