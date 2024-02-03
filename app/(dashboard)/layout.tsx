interface DashboardLayoutProps {
  children: React.ReactNode;
}

import React from "react";
import { Sidebar } from "./_components/sidebar";

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <main className="h-full">
      <Sidebar />
      <div className="h-full pl-[60px]">{children}</div>
    </main>
  );
};

export default DashboardLayout;
