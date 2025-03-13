import React from "react";
import api from "../../data.json";
import { useParams } from "react-router";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, ExternalLink, Phone, TicketIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import FeeCard from "@/components/FeeCard";
import { Card, CardContent } from "@/components/ui/card";

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
            <div className="p-2">
              <h3 className="flex justify-center py-4 rounded-sm rounded-b-none text-2xl font-bold mb-6 bg-gray-600 text-white">
                Document Checklist
              </h3>
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
            <h1 className="flex py-4 rounded-sm rounded-b-none justify-center items-center text-white text-2xl font-semibold bg-gray-600">
              Schedule Appointment Form
            </h1>
            <form className="grid grid-cols-2 gap-6 pt-2">
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
                    <SelectItem value="2">
                      Miscellaneous Consular Services
                    </SelectItem>
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
                <Input
                  type="text"
                  className="w-full"
                  placeholder="Enter surname"
                />
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
                <Input
                  type="email"
                  className="w-full"
                  placeholder="Enter email"
                />
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
          <TabsContent value="Step by Step Guide">
            <div>
              <div className="p-4 bg-gray-600 text-white font-semibold rounded-sm rounded-b-none">
                <p className="text-sm">Apply in person</p>
                <h2 className="text-2xl">Step by Step guide</h2>
              </div>
              <Accordion type="single" collapsible className="px-6">
                {api.application_steps.map((step) => (
                  <AccordionItem key={step.id} value={step.title}>
                    <AccordionTrigger className=" text-lg cursor-pointer ">
                      <div className="flex justify-start gap-2">
                        <p className="flex justify-center items-center bg-gray-200 rounded-full w-7">
                          {step.id}
                        </p>
                        <p>{step.title}</p>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="p-4 pt-0">
                      <div className="space-y-2">
                        <p>{step.description}</p>
                        <Button
                          variant={"outline"}
                          className="text-xs p-0 h-6 px-2 gap-1"
                        >
                          View More <ArrowRight size={30} />
                        </Button>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </TabsContent>
          <TabsContent value="Fee">
            <FeeCard />
          </TabsContent>
          <TabsContent value="Application Forms" >
            <h1 className="flex justify-center items-center bg-gray-600 text-white text-2xl font-semibold py-4 rounded-sm rounded-b-none">Application Forms</h1>
            <Card className="w-fit shadow-none border-none">
              <CardContent className="flex w-fit gap-3.5 px-4 ">
                <div className="flex justify-center items-center bg-gray-100 p-8 rounded-lg">
                  <TicketIcon />
                </div>
                <div className="flex flex-col items-start justify-center">
                  <h1 className="text-lg font-bold">
                    Lorem, ipsum dolor sit amet consectetur
                  </h1>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Perspiciatis quibusdam,
                    <br /> porro necessitatibus dolore impedit tenetur
                  </p>
                </div>
                <div className="flex items-center">
                  <Button className="h-6" variant={"outline"}>
                    Visit <ExternalLink/>
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card className="w-fit shadow-none border-none">
              <CardContent className="flex w-fit gap-3.5 px-4 ">
                <div className="flex justify-center items-center bg-gray-100 p-8 rounded-lg">
                  <TicketIcon />
                </div>
                <div className="flex flex-col items-start justify-center">
                  <h1 className="text-lg font-bold">
                    Lorem, ipsum dolor sit amet consectetur
                  </h1>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Perspiciatis quibusdam,
                    <br /> porro necessitatibus dolore impedit tenetur
                  </p>
                </div>
                <div className="flex items-center">
                  <Button className="h-6" variant={"outline"}>
                    Visit <ExternalLink/>
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card className="w-fit shadow-none border-none">
              <CardContent className="flex w-fit gap-3.5 px-4 ">
                <div className="flex justify-center items-center bg-gray-100 p-8 rounded-lg">
                  <TicketIcon />
                </div>
                <div className="flex flex-col items-start justify-center">
                  <h1 className="text-lg font-bold">
                    Lorem, ipsum dolor sit amet consectetur
                  </h1>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Perspiciatis quibusdam,
                    <br /> porro necessitatibus dolore impedit tenetur
                  </p>
                </div>
                <div className="flex items-center">
                  <Button className="h-6" variant={"outline"}>
                    Visit <ExternalLink/>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ServiceDetail;
