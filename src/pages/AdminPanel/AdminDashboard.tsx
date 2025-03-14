import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Bar,
  Pie,
  PieChart,
  BarChart as ReBarChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  Bar as ReBar,
} from "recharts";
import api from "../../../data.json";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const locationData = [
  { name: "Passport", count: 4 },
  { name: "Visa", count: 2 },
  { name: "OCI", count: 4 },
  { name: "Consular", count: 3 },
];

const serviceData = [
  { name: "Passport", value: 4 },
  { name: "Visa", value: 3 },
  { name: "OCI", value: 6 },
  { name: "Attestation", value: 1 },
];

type Props = {};

const AdminDashboard = (props: Props) => {
  return (
    <div className="p-6 py-3 bg-gray-50 min-h-screen">
      
      <div className="flex justify-end gap-4 pb-3">
        <Select defaultValue="today">
          <SelectTrigger className="w-1/5 bg-white">
            <SelectValue placeholder="Select Period" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="today">Today</SelectItem>
            <SelectItem value="week">This Week</SelectItem>
            <SelectItem value="1month">This Month</SelectItem>
            <SelectItem value="3month">Last 3 Month</SelectItem>
            <SelectItem value="6month">Last 6 Month</SelectItem>
            <SelectItem value="year">Last 1 Year</SelectItem>
          </SelectContent>
        </Select>
        <Select defaultValue="all">
          <SelectTrigger className="w-1/5 bg-white">
            <SelectValue placeholder="Select Location" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            {api.locationList.map((loc) => (
              
                <SelectItem value={loc}>{loc}</SelectItem>
              
            ))}
          </SelectContent>
        </Select>
      </div>
      {/* Dashboard Metrics Section */}
      <div className="mb-8">
        <Card className="shadow-lg border-none">
          <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-6">
            {Object.entries(api.dashboard_data).map(([category, data]) => (
              <div
                key={category}
                className="flex flex-col justify-between bg-white shadow-sm border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <h1 className="text-lg font-semibold text-gray-800 mb-4">
                  {category}
                </h1>
                <div className="flex flex-wrap gap-2">
                  {Object.values(data).map((service, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center bg-gray-50 p-3 rounded-lg shadow-xs hover:shadow-sm transition-shadow"
                    >
                      <p className="text-3xl font-bold text-blue-600">
                        {service.count}
                      </p>
                      <h2 className="text-sm text-gray-600 text-center">
                        {service.name}
                      </h2>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Appointments Per Service Chart */}
        <Card className="bg-white shadow-lg border-none">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-gray-800">
              Appointments Per Service
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ReBarChart width={400} height={250} data={locationData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
              <XAxis dataKey="name" stroke="#666" />
              <YAxis stroke="#666" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#fff",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                }}
              />
              <Legend />
              <ReBar dataKey="count" fill="#8884d8" radius={[4, 4, 0, 0]} />
            </ReBarChart>
          </CardContent>
        </Card>

        {/* Services Distribution Chart */}
        <Card className="bg-white shadow-lg border-none">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-gray-800">
              Services Distribution
            </CardTitle>
          </CardHeader>
          <CardContent>
            <PieChart width={400} height={250}>
              <Pie
                dataKey="value"
                data={serviceData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#82ca9d"
                label
                labelLine={false}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#fff",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                }}
              />
            </PieChart>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
