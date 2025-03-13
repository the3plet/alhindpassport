import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarCheck, Clock } from "lucide-react";
import FeedbackPopup from "@/components/dashboard/FeedbackPopup";
import CancellationPopup from "@/components/dashboard/CancellationPopup";
import { useNavigate } from "react-router";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import QrReceipt from "@/components/dashboard/BarcodeReceipt";
import { QRCodeSVG } from "qrcode.react";

const appointments = {
  upcoming: [
    {
      id: 1,
      applicationNumber: "PAS12345",
      title: "Passport Service",
      date: "2025-03-10",
      time: "10:00 AM",
      status: "Confirmed",
    },
    {
      id: 2,
      applicationNumber: "VISA67890",
      title: "Visa Service",
      date: "2025-03-12",
      time: "02:00 PM",
      status: "Pending",
    },
    {
      id: 3,
      applicationNumber: "PAS67891",
      title: "Passport Service",
      date: "2025-03-15",
      time: "09:00 AM",
      status: "Confirmed",
    },
  ],
  previous: [
    {
      id: 5,
      applicationNumber: "PAS54321",
      title: "Passport Service",
      date: "2025-02-28",
      time: "11:30 AM",
      status: "Completed",
    },
    {
      id: 6,
      applicationNumber: "VISA09876",
      title: "Miscellaneous Consular Services",
      date: "2025-02-25",
      time: "03:00 PM",
      status: "Canceled",
    },
  ],
};

export default function UserAppointment() {
  const navigate = useNavigate();
  return (
    <div className="mt-4 ml-4 ">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>Dashboard</BreadcrumbItem>

          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Appointments</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="pl-2"></div>
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6 ">
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-500" /> Open Applications
              </CardTitle>
            </CardHeader>
            <CardContent>
              {appointments.upcoming.map((appt) => (
                <div
                  key={appt.id}
                  className="flex justify-between items-center p-3 border-b last:border-none"
                >
                  <div>
                    <p className="font-semibold">{appt.title}</p>
                    <Badge
                      className={`rounded-full bg-white px-2 py-0.5 text-xs border ${
                        appt.status === "Confirmed"
                          ? "border-green-500 text-green-500"
                          : "border-yellow-500 text-yellow-500"
                      }`}
                    >
                      {appt.status}
                    </Badge>
                    <p className="text-sm text-gray-500">
                      Application No: {appt.applicationNumber}
                    </p>
                    <p className="text-sm text-gray-500">
                      {appt.date} at {appt.time}
                    </p>
                  </div>
                  <div>
                    <QRCodeSVG value={appt.applicationNumber} size={70}/>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <QrReceipt />
                    {/* <Badge className="cursor-pointer w-full" variant="outline">Track Appointment</Badge> */}
                    <Badge
                      className="cursor-pointer w-full hover:underline"
                      variant="outline"
                      onClick={() => navigate("/dashboard/reshedule")}
                    >
                      Reschedule Appointment
                    </Badge>
                    <CancellationPopup />
                  </div>
                 
                </div>
              ))}
            </CardContent>
          </Card>
        </section>

        <section>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CalendarCheck className="w-5 h-5 text-green-500" />
                Closed Applications
              </CardTitle>
            </CardHeader>
            <CardContent>
              {appointments.previous.map((appt) => (
                <div
                  key={appt.id}
                  className="flex justify-between items-center p-3 border-b last:border-none"
                >
                  <div>
                    <p className="font-semibold">{appt.title}</p>
                    <Badge
                      className={`rounded-full bg-white px-2 py-0.5 text-xs border ${
                        appt.status === "Completed"
                          ? "border-gray-500 text-gray-500"
                          : "border-red-500 text-red-500"
                      }`}
                    >
                      {appt.status}
                    </Badge>
                    <p className="text-sm text-gray-500">
                      Application No: {appt.applicationNumber}
                    </p>
                    <p className="text-sm text-gray-500">
                      {appt.date} at {appt.time}
                    </p>
                  </div>
                  <div>
                    <QRCodeSVG value={appt.applicationNumber} size={70}/>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <QrReceipt />
                    <FeedbackPopup applicationNo={appt.applicationNumber} />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
