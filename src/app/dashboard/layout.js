import DashboardSidebar from "@/layout/DashboardSidebar";
import React from "react";

function DashboardLayout({ children }) {
  return <DashboardSidebar>{children}</DashboardSidebar>;
}

export default DashboardLayout;
