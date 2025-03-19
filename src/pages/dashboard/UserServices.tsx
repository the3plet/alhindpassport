import ServiceCard from "@/components/ServiceCard";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Service } from "@/types";

const UserServices = () => {
  const services: Service[] = [
    {
      id: "1",
      name: "Passport Renewal",
      description:
        "Renew your expired or soon-to-expire passport with our efficient service.",
      fees: 145,
      processingTime: "7-10 business days",
    },
    {
      id: "2",
      name: "Visa Application",
      description:
        "Apply for various types of visas including tourist, business, and student visas.",
      fees: 160,
      processingTime: "10-15 business days",
    },
    {
      id: "3",
      name: "OCI Card",
      description:
        "Apply for Overseas Citizen of India (OCI) card or get your existing card renewed.",
      fees: 275,
      processingTime: "15-20 business days",
    },
    {
      id: "4",
      name: "Miscellaneous Consular Services",
      description:
        "Obtain a Police Clearance Certificate (PCC) for visa or immigration purposes.",
      fees: 75,
      processingTime: "5-7 business days",
    },
    {
      id: "5",
      name: "Attestation",
      description: "Get your documents attested for use in foreign countries.",
      fees: 50,
      processingTime: "3-5 business days",
    },
  ];
  return (
    <section id="services" className="pt-4 pl-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>Dashboard</BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Services</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-4 py-10">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserServices;
