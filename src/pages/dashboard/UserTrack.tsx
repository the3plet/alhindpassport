import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Search, CheckCircle, AlertCircle } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function UserTrack() {
  const [trackingDetails, setTrackingDetails] = useState(null);

  const handleTrack = () => {
    setTrackingDetails({
      status: "Approved",
      reference: "XYZ12345",
      message: "Your application has been approved!",
    });
  };

  return (
    <div className="bg-gray-100">
      <div className="p-2">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>Dashboard</BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Tracking</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
        <Card className="w-full max-w-md bg-white shadow-xl p-6 rounded-lg border border-gray-200">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-center">
              Track Your Application
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Application Type
                </label>
                <Select>
                  <SelectTrigger className="mt-1 w-full">
                    <SelectValue placeholder="Select Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="passport">Passport</SelectItem>
                    <SelectItem value="visa">Visa</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Reference Number
                </label>
                <Input type="text" placeholder="Enter Reference Number" />
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    className="w-full mt-2  text-white flex items-center justify-center gap-2 hover:bg-gray-800"
                    onClick={handleTrack}
                  >
                    <Search className="w-4 h-4" /> Track Application
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-white p-6 rounded-xl shadow-2xl max-w-md">
                  <Card className="border border-gray-200 shadow-lg p-4 rounded-xl bg-white">
                    <CardHeader className="text-center">
                      {trackingDetails?.status === "Approved" ? (
                        <CheckCircle className="w-12 h-12 text-green-500 mx-auto" />
                      ) : (
                        <AlertCircle className="w-12 h-12 text-red-500 mx-auto" />
                      )}
                      <CardTitle className="text-lg font-semibold mt-2">
                        {trackingDetails?.status}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-gray-600 font-medium">
                        Reference: {trackingDetails?.reference}
                      </p>
                      <p className="mt-2 text-gray-500">
                        {trackingDetails?.message}
                      </p>
                    </CardContent>
                  </Card>
                </DialogContent>
              </Dialog>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
