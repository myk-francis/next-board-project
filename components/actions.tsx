"use client";
import React from "react";
import { DropdownMenuContentProps } from "@radix-ui/react-dropdown-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Link2, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { api } from "@/convex/_generated/api";

interface ActionsProps {
  children: React.ReactNode;
  side?: DropdownMenuContentProps["side"];
  sideOffset?: DropdownMenuContentProps["sideOffset"];
  id: string;
  title: string;
}

export const Actions = ({
  children,
  side,
  sideOffset,
  id,
  title,
}: ActionsProps) => {
  const { mutate, pending } = useApiMutation(api.board.remove);

  const onDelete = () => {
    mutate({ id })
      .then(() => {
        toast.success(`Board ${title} deleted`);
      })
      .catch((error) => {
        toast.error("Failed to delete board");
      });
  };

  const onCopyLink = () => {
    navigator.clipboard
      .writeText(`${window.location.origin}/board/${id}`)
      .then(() => {
        toast.success("Link copied");
      })
      .catch((error) => {
        toast.error("Failed to copy link");
      });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent
        onClick={(e) => e.stopPropagation()}
        className="w-60"
        side={side}
        sideOffset={sideOffset}
      >
        <DropdownMenuItem onClick={onCopyLink} className="cursor-pointer p-3 ">
          <Link2 className="h-4 w-4 mr-2" />
          Copy board link
        </DropdownMenuItem>
        <DropdownMenuItem onClick={onDelete} className="cursor-pointer p-3 ">
          <Trash2 className="h-4 w-4 mr-2" />
          Copy board link
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
