import { Select } from "@radix-ui/react-select";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Calendar } from "lucide-react";
import { Button } from "./ui/button";


const RegistrationDialog = () => {
   
        
    
  return (
    <Dialog>
      
      <DialogTrigger className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-500 flex items-center justify-center gap-2">
        <Calendar size={20} />
        Schedule Appointment
      </DialogTrigger>

      <DialogContent className="w-full max-w-3xl p-6">
        <DialogTitle className="font-semibold text-xl">
          Appointment Request Form
        </DialogTitle>
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
                <SelectItem value="1">Colombo</SelectItem>
                <SelectItem value="2">Kandy</SelectItem>
                <SelectItem value="2">Jaffna</SelectItem>
                <SelectItem value="2">Hambantota</SelectItem>
                <SelectItem value="2">Batticaloa</SelectItem>
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
      </DialogContent>
    </Dialog>
  );
};

export default RegistrationDialog;
