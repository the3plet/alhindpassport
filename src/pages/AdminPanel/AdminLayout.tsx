import { SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router";
import { SidebarDashboard } from "@/components/dashboard/SidebarDashboard";
import { SidebarAdmin } from "@/components/admin/SidebarAdmin";

const AdminLayout = () => {
  return (
    <SidebarProvider>
      <SidebarAdmin/>
      <main className="w-full h-full">
        {/* <SidebarTrigger /> */}
        <Outlet />
      </main>
    </SidebarProvider>
  );
};

export default AdminLayout;
