import React from "react";
import Navbar from "./components/Navbar";
import ServiceCard from "./components/ServiceCard";
import ServicesCarousel from "./components/ServicesCarousel";
import { Service } from "./types";
import {
  AlertTriangle,
  FileText,
  HelpCircle,
  MapPin,
  Phone,
  Users,
} from "lucide-react";
import Home from "./pages/Home";
import { Outlet } from "react-router";
import { Toaster } from "./components/ui/sonner";
import Footer from "./components/Footer";



function App() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    <Toaster/>
    </>
  );
}

export default App;
