import {
    Bell,
    BookPlus,
    ChevronDown,
    FileDown,
    GalleryThumbnails,
    Home,
    IndianRupee,
    LayoutDashboard,
    LogOut,
    Settings2,
    TimerReset,
    TowerControl,
    User2,
    UserCircle2,
    UserPlus,
    Workflow,
  } from "lucide-react";
  
  import {
    
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
  } from "@/components/ui/sidebar";
 
 
  import { useState } from "react";
  import { Link, redirect } from "react-router";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible";
import { DropdownMenu, DropdownMenuTrigger } from "../ui/dropdown-menu";
//   import { useAuthStore } from "@/zustand/store";
  
  // Menu items.
  const items = [
    {
      title: "User",
      url: "/admin/dashboard",
      icon: User2,
      edit: [
        
        {
          title: "Appointments",
          url: "/dashboard",
          icon: BookPlus,
        },
        {
          title: "Track Application",
          url: "/dashboard/track",
          icon: FileDown,
        },
        {
          title: "Reschedule Form",
          url: "/dashboard/reshedule",
          icon: TimerReset,
        },
        {
          title: "Services",
          url: "/dashboard/service",
          icon: Workflow,
        },
      ], // no sub-items for this one
    },
   
  ];
  export function SidebarDashboard() {
    const [selectedTab, setSelectedTab] = useState<string>("/admin/dashboard");
    const { open } = useSidebar();
    // const logout = useAuthStore((state) => state.logout);
    console.log(selectedTab, "Tab");
  
    return (
      <Sidebar collapsible="icon">
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel className="flex justify-start m-4 ml-1">
              <p className="text-white font-Poppins text-lg font-extrabold flex gap-1 items-center">
                <UserCircle2/>
                User Dashboard
              </p>
            </SidebarGroupLabel>
  
            <SidebarGroupContent>
              {/* Home item - not collapsible */}
              <SidebarMenu>
                {items.map((item) => (
                  // Edit item with collapsible sub-items
                  <Collapsible
                    key={item.title}
                    defaultOpen
                    className="group/collapsible"
                  >
                    <SidebarGroup>
                      <SidebarGroupLabel asChild>
                        <CollapsibleTrigger>
                          <div className="flex gap-1 items-center">
                            {item.icon && <item.icon size={18} />}
                            <h1 className="text-base text-white">{item.title}</h1>
                          </div>
                          <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                        </CollapsibleTrigger>
                      </SidebarGroupLabel>
                      <CollapsibleContent>
                        <SidebarGroupContent>
                          <SidebarMenu>
                            {item.edit.map((subItem) => (
                              <SidebarMenuItem
                                key={subItem.title}
                                onClick={() => setSelectedTab(subItem.url)}
                              >
                                <SidebarMenuButton
                                  asChild
                                  isActive={
                                    selectedTab === subItem.url ? true : false
                                  }
                                  className={`${open ? "ml-2" : ""}`}
                                >
                                  <Link to={subItem.url}>
                                    <subItem.icon />
                                    <span>{subItem.title}</span>
                                  </Link>
                                </SidebarMenuButton>
                              </SidebarMenuItem>
                            ))}
                          </SidebarMenu>
                        </SidebarGroupContent>
                      </CollapsibleContent>
                    </SidebarGroup>
                  </Collapsible>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
  
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div>

                  <SidebarMenuButton>
                    <Home />
                    <button
                      className="w-full flex justify-start"
                      onClick={()=>{window.location.replace('/')
                      
                      }}
                      >
                      Return to Home
                    </button>
                  </SidebarMenuButton>
                  <SidebarMenuButton>
                    <LogOut />
                    <button
                      className="w-full flex justify-start"
                      onClick={()=>{window.location.replace('/')
                        localStorage.removeItem("verified")
                      }}
                      >
                      Logout
                    </button>
                  </SidebarMenuButton>
                      </div>
                </DropdownMenuTrigger>
              </DropdownMenu>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
    );
  }
  