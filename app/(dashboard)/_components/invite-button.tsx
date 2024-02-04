import React from "react";
import { Plus } from "lucide-react";
import { OrganizationProfile } from "@clerk/nextjs";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

function InviteButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"outline"} className="h-4 w-4 mr-2">
          <Plus className="text-white" />
          Invite members
        </Button>
      </DialogTrigger>
      <DialogContent className="p-0 bg-transparent border-none max-w-[480px]">
        <OrganizationProfile />
      </DialogContent>
    </Dialog>
  );
}

export default InviteButton;
