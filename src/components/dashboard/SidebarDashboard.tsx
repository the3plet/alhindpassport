import {
    Bell,
    ChevronDown,
    GalleryThumbnails,
    Home,
    IndianRupee,
    LayoutDashboard,
    LogOut,
    Settings2,
    UserCircle2,
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
      title: "Home",
      url: "/admin/dashboard",
      icon: Home,
      edit: [
        {
          title: "Appointments",
          url: "",
          icon: LayoutDashboard,
        },
      ], // no sub-items for this one
    },
    // {
    //   title: "Pages",
    //   url: "/admin/edit",
    //   icon: Settings2,
    //   edit: [
    //     {
    //       title: "Banner",
    //       url: "/admin/edit/banner", // specific URL for Banner
    //       icon: GalleryThumbnails,
    //     },
    //     {
    //       title: "Currency",
    //       url: "/admin/edit/currency", // specific URL for Currency
    //       icon: IndianRupee,
    //     },
    //     {
    //       title: "Notification",
    //       url: "/admin/edit/notification", // specific URL for Notification
    //       icon: Bell,
    //     },
    //   ],
    // },
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
                  <SidebarMenuButton>
                    <LogOut />{" "}
                    <button
                      className="w-full flex justify-start"
                      onClick={()=>window.location.replace('/')}
                    >
                      Logout
                    </button>
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
              </DropdownMenu>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
    );
  }
  