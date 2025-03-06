import { Card, CardContent } from "@/components/ui/card";
import { 
    Globe, FileText, ShieldCheck, FileWarning, Package, PenTool, AtSign, 
    Users, CreditCard, Mail, FilePlus, CheckCircle, AlertCircle, MapPin, 
    Lock, Headphones, BadgeCheck, Bus, 
  } from "lucide-react";

export default function Faq() {

 const passportServices = [
        { title: "Services Available", icon: Globe },
        { title: "Application Form", icon: FileText },
        { title: "Police Verification", icon: ShieldCheck },
        { title: "Lost/Damaged Passports", icon: FileWarning },
        { title: "Miscellaneous", icon: Package },
        { title: "Surrender Certificate", icon: PenTool },
        { title: "ePassport", icon: AtSign },
        { title: "Special Cases Of Minors Requiring Passports", icon: Users },
        { title: "Fee Payment", icon: CreditCard },
        { title: "Postal Dispatch and Tracking", icon: Mail },
        { title: "Tatkaal Passports", icon: FilePlus },
        { title: "LoC Permit", icon: CheckCircle },
        { title: "Appeal", icon: AlertCircle },
        { title: "Where to apply?", icon: MapPin },
        { title: "Password Management", icon: Lock },
        { title: "Call Centre", icon: Headphones },
        { title: "Identity Certificate", icon: BadgeCheck },
        { title: "Passport Seva Camp", icon: Bus },
        { title: "Alias Name", icon: Bus },
      ];
  return (
    <div className="grid grid-cols-3 gap-4 p-14">
      {passportServices.map((service) => (
        <Card key={service.title} className="p-4 flex items-center gap-0 cursor-pointer hover:shadow-lg">
          <service.icon className="w-6 h-6 text-primary flex justify-center items-center" />
          <CardContent className="flex justify-center items-center text-lg">{service.title}</CardContent>
        </Card>
      ))}
    </div>
  );
}
