import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { BarChart, ClipboardList } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Bar, Pie, PieChart, BarChart as ReBarChart, XAxis, YAxis, Tooltip, Legend, CartesianGrid, Bar as ReBar } from "recharts";
import { Link } from "react-router";

const locationData = [
    { name: "Colombo", count: 4 },
    { name: "Kandy", count: 1 }
  ];
  
  const serviceData = [
    { name: "Passport", value: 4 },
    { name: "Attestation", value: 1 }
  ];

const appointments = [
  { id: 1, applicationNo: "C060325-0001", fullName: "John Smith", service: "Passport", appointmentDate: "15-02-2025", status: "In progress", location: "Colombo", fee: 200 },
  { id: 2, applicationNo: "C060325-0002", fullName: "Aisha Khan", service: "Passport", appointmentDate: "09-03-2025", status: "scheduled", location: "Colombo", fee: 200 },
  { id: 3, applicationNo: "C060325-0003", fullName: "David Lee", service: "Passport", appointmentDate: "10-03-2025", status: "scheduled", location: "Colombo", fee: 200 },
  { id: 4, applicationNo: "C060325-0004", fullName: "Fathima Ali", service: "Passport", appointmentDate: "11-03-2025", status: "scheduled", location: "Colombo", fee: 200 },
  { id: 5, applicationNo: "C060325-0005", fullName: "Michael Brown", service: "Passport", appointmentDate: "12-03-2025", status: "scheduled", location: "Colombo", fee: 200 },
  { id: 6, applicationNo: "C060325-0006", fullName: "Sarah Jones", service: "Attestation", appointmentDate: "13-03-2025", status: "scheduled", location: "Colombo", fee: 150 },
  { id: 7, applicationNo: "C060325-0007", fullName: "Raj Patel", service: "Passport", appointmentDate: "14-03-2025", status: "scheduled", location: "Colombo", fee: 200 },
  { id: 8, applicationNo: "K060325-0001", fullName: "Anil Kumar", service: "Passport", appointmentDate: "15-03-2025", status: "scheduled", location: "Kandy", fee: 200 },
  { id: 9, applicationNo: "K060325-0002", fullName: "Sajesh Keloth", service: "Passport", appointmentDate: "16-03-2025", status: "scheduled", location: "Kandy", fee: 200 },
  { id: 10, applicationNo: "K060325-0003", fullName: "Anil Dev", service: "Passport", appointmentDate: "17-03-2025", status: "scheduled", location: "Kandy", fee: 200 },
  { id: 11, applicationNo: "K060325-0004", fullName: "Shanil Mon", service: "OCI", appointmentDate: "18-03-2025", status: "scheduled", location: "Kandy", fee: 150 },
  { id: 12, applicationNo: "K060325-0005", fullName: "Jeena Vijay", service: "Passport", appointmentDate: "19-03-2025", status: "scheduled", location: "Kandy", fee: 200 },
  { id: 13, applicationNo: "K060325-0006", fullName: "Ajith Kishore", service: "Passport", appointmentDate: "20-03-2025", status: "scheduled", location: "Kandy", fee: 200 }
];

const itemsPerPage = 5;

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = appointments.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(appointments.length / itemsPerPage);

  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-neutral-900 text-neutral-100 p-5">
        <h2 className="text-xl font-semibold mb-6">Admin Panel</h2>
        
        <nav>
          <button className="flex items-center gap-2 p-2 w-full text-left hover:bg-neutral-700 rounded" onClick={() => setActiveTab("dashboard")}>
            <BarChart className="w-5 h-5" /> Dashboard
          </button>
          <button className="flex items-center gap-2 p-2 w-full text-left hover:bg-neutral-700 rounded mt-2" onClick={() => setActiveTab("appointments")}>
            <ClipboardList className="w-5 h-5" /> Appointments
          </button>

        </nav>
        <Link to='/' >
        <Button className="cursor-pointer hover:border m-2">Logout</Button>
        </Link>
      </aside>
      <main className="flex-1 p-6  text-neutral-800" >
      {activeTab === "dashboard" && (
          <>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <Card className="bg-gray-300 text-black">
                <CardHeader>
                  <CardTitle>Total Appointments</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">{appointments.length}</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-300 text-black">
                <CardHeader>
                  <CardTitle>Revenue Generated</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">${appointments.reduce((acc, appt) => acc + appt.fee, 0)}</p>
                </CardContent>
              </Card>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-gray-300 text-black p-4">
                <CardHeader>
                  <CardTitle>Appointments Per Location</CardTitle>
                </CardHeader>
                <CardContent>
                  <ReBarChart width={400} height={250} data={locationData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <ReBar dataKey="count" fill="#8884d8" />
                  </ReBarChart>
                </CardContent>
              </Card>
              <Card className="bg-gray-300 text-black p-4">
                <CardHeader>
                  <CardTitle>Services Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <PieChart width={400} height={250}>
                    <Pie dataKey="value" data={serviceData} cx="50%" cy="50%" outerRadius={80} fill="#82ca9d" label />
                  </PieChart>
                </CardContent>
              </Card>
            </div>
          </>
        )}
        {activeTab === "appointments" && (
          <Card className=" text-neutral-100">
            <CardHeader>
              <CardTitle className="text-black">Appointments</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Application No</TableHead>
                    <TableHead>Full Name</TableHead>
                    <TableHead>Service</TableHead>
                    <TableHead>Appointment Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Fee Collected ($)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {currentItems.map((appt) => (
                    <TableRow key={appt.id} className=" text-neutral-600">
                      <TableCell>{appt.applicationNo}</TableCell>
                      <TableCell>{appt.fullName}</TableCell>
                      <TableCell>{appt.service}</TableCell>
                      <TableCell>{appt.appointmentDate}</TableCell>
                      <TableCell>
                        <Badge className={appt.status === "In progress" ? "border-neutral-500 text-neutral-800 bg-white" : "border-neutral-400 text-neutral-800 bg-white"}>{appt.status}</Badge>
                      </TableCell>
                      <TableCell>{appt.location}</TableCell>
                      <TableCell>{appt.fee}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <div className="flex justify-between mt-4">
                <Button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>
                  Previous
                </Button>
                <span className="text-black">Page {currentPage} of {totalPages}</span>
                <Button disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)}>
                  Next
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  );
}
