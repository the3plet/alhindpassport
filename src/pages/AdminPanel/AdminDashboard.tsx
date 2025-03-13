import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bar, Pie, PieChart, BarChart as ReBarChart, XAxis, YAxis, Tooltip, Legend, CartesianGrid, Bar as ReBar } from "recharts";


const locationData = [
  { name: "Passport", count: 4 },
  { name: "Visa", count: 2 },
  { name: "OSI", count: 4 },
  { name: " Consular ", count: 3 }
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

type Props = {}

const AdminDashboard = (props: Props) => {

    return (
      <div className="p-4">
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
                  <CardTitle>Appointment Pending</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">5/13</p>
                </CardContent>
              </Card>
            </div>
            <div className="grid grid-cols-2 gap-4">
                          <Card className="bg-gray-300 text-black p-4">
                            <CardHeader>
                              <CardTitle>Appointments Per Service</CardTitle>
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
      </div>
    );
  
}

export default AdminDashboard