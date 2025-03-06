import { SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router";
import { SidebarDashboard } from "@/components/dashboard/SidebarDashboard";

const DashboardLayout = () => {
  return (
    <SidebarProvider>
      <SidebarDashboard />
      <main className="w-full h-full">
        {/* <SidebarTrigger /> */}
        <Outlet />
      </main>
    </SidebarProvider>
  );
};

export default DashboardLayout;
