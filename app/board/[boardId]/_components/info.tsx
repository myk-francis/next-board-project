"use client";
import { Hint } from "@/components/hint";
import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { cn } from "@/lib/utils";
import { useQuery } from "convex/react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface InfoProps {
  boardId: string;
}

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export const Info = ({ boardId }: InfoProps) => {
  const data = useQuery(api.board.getOne, { id: boardId as Id<"boards"> });

  if (!data) {
    return <InfoSkeleton />;
  }

  return (
    <div className="h-12 absolute top-2 left-2 bg-white rounded-md px-1.5 flex items-center shadow-md">
      <Hint label="Home" side="bottom" sideOffset={10}>
        <Button asChild variant={"board"} className="px-2">
          <Link href={`/`}>
            <Image src="/logo.svg" alt="Board Logo" height={40} width={40} />
            <span
              className={cn(
                "font-semibold text-xl ml-2 text-black",
                font.className
              )}
            >
              Board
            </span>
          </Link>
        </Button>
      </Hint>
    </div>
  );
};

export const InfoSkeleton = () => {
  return (
    <div className="h-12 w-[300px] absolute top-2 left-2 bg-white rounded-md px-1.5 flex items-center shadow-md"></div>
  );
};
