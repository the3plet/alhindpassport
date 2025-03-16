import React, { useEffect, useState } from "react";
import {
  Menu,
  User,
  LogIn,
  X,
  Home,
  FileText,
  Calendar,
  Search,
  HelpCircle,
  User2Icon,
} from "lucide-react";
import { Link } from "react-router";
import LoginPop from "./LoginPop";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [verified, setVerified] = useState<string>("");

  useEffect(() => {
    setVerified(localStorage.getItem("verified") || "");
  }, []);
  return (
    <nav className="bg-white shadow-md fixed z-50 w-full ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="" className="flex">
             
              <h1 className=" w-xs text-lg font-bold text-blue-700"> Indian Consular Application Center</h1>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a
              href="/"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </a>
            <a
              href="/#services"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Services
            </a>
            <Link
              to="aboutus"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              About Us
            </Link>
            {verified === "true" ? (
              <Link
                to="/dashboard"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Appointments
              </Link>
            ) : null}
            {verified === "true" ? (
              <Link
                to="complaint"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Grievance
              </Link>
            ) : null}

            {verified === "true" ? (
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <div className="flex flex-col justify-center items-center">
                    <span className="hover:border-2 border-black rounded-2xl">
                      <User2Icon size={25} />
                    </span>
                    <p className="text-xs">
                      {localStorage.getItem("username")}
                    </p>
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <Link to={"/dashboard"}>
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                  </Link>
                  <DropdownMenuItem>Support</DropdownMenuItem>
                  <DropdownMenuItem>
                    <Button
                      variant={"link"}
                      className="p-2 h-[32px] pl-0"
                      onClick={() => {
                        localStorage.removeItem("verified");
                        window.location.reload();
                      }}
                    >
                      Logout
                    </Button>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <LoginPop />
            )}

            <Link to="/login">
              <button className="bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700 flex items-center gap-2">
                Admin
              </button>
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#home"
              className="text-gray-700 hover:bg-blue-50 block px-3 py-2 rounded-md text-base font-medium"
            >
              <div className="flex items-center gap-2">
                <Home size={18} />
                Home
              </div>
            </a>
            <a
              href="#services"
              className="text-gray-700 hover:bg-blue-50 block px-3 py-2 rounded-md text-base font-medium"
            >
              <div className="flex items-center gap-2">
                <FileText size={18} />
                Services
              </div>
            </a>
            <a
              href="#track"
              className="text-gray-700 hover:bg-blue-50 block px-3 py-2 rounded-md text-base font-medium"
            >
              <div className="flex items-center gap-2">
                <Search size={18} />
                Track Application
              </div>
            </a>
            {/* <a
              href="#appointments"
              className="text-gray-700 hover:bg-blue-50 block px-3 py-2 rounded-md text-base font-medium"
            >
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                Appointments
              </div>
            </a> */}
            <a
              href="#documents"
              className="text-gray-700 hover:bg-blue-50 block px-3 py-2 rounded-md text-base font-medium"
            >
              <div className="flex items-center gap-2">
                <FileText size={18} />
                Documents
              </div>
            </a>
            <a
              href="#help"
              className="text-gray-700 hover:bg-blue-50 block px-3 py-2 rounded-md text-base font-medium"
            >
              <div className="flex items-center gap-2">
                <HelpCircle size={18} />
                Help
              </div>
            </a>
            <div className="mt-4 space-y-2">
              <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 flex items-center justify-center gap-2">
                <LogIn size={18} />
                Login
              </button>
              <button className="w-full bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700 flex items-center justify-center gap-2">
                <User size={18} />
                Register
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
