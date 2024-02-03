import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-y-4">
      <div>This screen if for authenticated users only</div>
      <div>
        <UserButton />
      </div>
    </div>
  );
}
