import React from "react";
import api from "../../data.json";
import { useParams } from "react-router";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

type Props = {};

const ServiceDetail = (props: Props) => {
  const { id } = useParams();
  const allservices = api.services.find(
    (service) => service.name.toLowerCase() === id
  );
  console.log(allservices);

  return (
    <div className="">
      <div className="bg-gray-600 text-white p-6">
        <h1 className="text-2xl">Apply for a {allservices?.name}</h1>
        <p className="text-lg">Information about starting your application</p>
      </div>
      <div className="px-28 py-14">
        <Tabs
          defaultValue={allservices?.details[0].title}
          className="flex flex-row shadow-lg rounded-xl"
        >
          <TabsList className="flex flex-col h-full">
            {allservices?.details.map((ser) => (
              <TabsTrigger
                key={ser.title}
                value={ser.title}
                className="flex justify-start pl-4 w-full py-4"
              >
                {ser.title}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="Check List" className="">
            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="text-2xl font-bold mb-6">Document Checklist</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-green-600">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Proof of Identity</h4>
                    <p className="text-gray-600">
                      Aadhar Card, PAN Card, or Voter ID
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-green-600">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Proof of Address</h4>
                    <p className="text-gray-600">
                      Utility Bills, Bank Statement, or Rental Agreement
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-green-600">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Photographs</h4>
                    <p className="text-gray-600">
                      Recent passport size photographs (35mm x 45mm)
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </TabsContent>
          <TabsContent value="Schedule an Appointment" className="py-5 px-2">
          <form className="grid grid-cols-2 gap-6" >
          <div className="flex flex-col gap-1.5">
            <Label>Service Type</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Passport</SelectItem>
                <SelectItem value="2">Visa</SelectItem>
                <SelectItem value="2">OCI</SelectItem>
                <SelectItem value="2">Miscellaneous Consular Services</SelectItem>
                <SelectItem value="2">Attestation</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-1.5">
            <Label>Center Location</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                {api.locationList.map((loca, index) => (
                  <SelectItem value={loca} key={index}>
                    {loca}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-1.5">
            <Label>Appointment Date</Label>
            <Input type="date" className="w-full" />
          </div>

          <div className="flex flex-col gap-1.5">
            <Label>Appointment Slot</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1" disabled>
                  9AM
                </SelectItem>
                <SelectItem value="2">10AM</SelectItem>
                <SelectItem value="3">11AM</SelectItem>
                <SelectItem value="4">12PM</SelectItem>
                <SelectItem value="5" disabled>
                  2PM
                </SelectItem>
                <SelectItem value="6">3PM</SelectItem>
                <SelectItem value="7" disabled>
                  4PM
                </SelectItem>
                <SelectItem value="8">5PM</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-1.5">
            <Label>Given Name</Label>
            <Input
              type="text"
              className="w-full"
              placeholder="Enter given name"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <Label>Surname</Label>
            <Input type="text" className="w-full" placeholder="Enter surname" />
          </div>

          <div className="flex flex-col gap-1.5">
            <Label>Residential Contact Number</Label>
            <Input
              type="number"
              className="w-full"
              placeholder="Enter contact number"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <Label>Contact Number - India</Label>
            <Input
              type="number"
              className="w-full"
              placeholder="Enter India number"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <Label>Passport Number</Label>
            <Input
              type="text"
              className="w-full"
              placeholder="Enter passport number"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <Label>Application Email</Label>
            <Input type="email" className="w-full" placeholder="Enter email" />
          </div>

          <div className="col-span-2 flex flex-col gap-1.5">
            <Label>Service Description</Label>
            <Input
              type="text"
              className="w-full"
              placeholder="Describe the service"
            />
          </div>

          <div className="col-span-2 flex justify-center gap-1.5">
            <Button
              className="w-full bg-blue-600 hover:bg-blue-500 text-white py-2"
              type="submit"
            >
              Submit
            </Button>
          </div>
        </form>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ServiceDetail;
