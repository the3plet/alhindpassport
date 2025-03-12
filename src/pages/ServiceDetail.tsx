import React from "react";
import api from "../../data.json";
import { useParams } from "react-router";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
        <Tabs  defaultValue={allservices?.details[0].title} className="flex flex-row shadow-lg rounded-xl">
          <TabsList className="flex flex-col h-full">
            {allservices?.details.map((ser) => (
              <TabsTrigger key={ser.title} value={ser.title} className="flex justify-start pl-4 w-full py-4">
                {ser.title}
              </TabsTrigger>
            ))}
          </TabsList>
          {allservices?.details.map((ser)=>(
            <TabsContent key={ser.title} value={ser.title}>{ser.description}</TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default ServiceDetail;
