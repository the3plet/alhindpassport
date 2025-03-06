import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ComplaintForm() {
  const handleSubmit = () => {
      window.location.assign("/");
    alert("Complaint Submitted");
   
  };
  return (
    <div className="max-w-lg mx-auto p-6 bg-white border-2 shadow-md rounded-lg my-6">
      <h2 className="text-2xl font-bold mb-4">Complaint Form</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="space-y-1.5">
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Enter your name" />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="passport">Passport No.</Label>
          <Input id="passport" placeholder="Enter passport number" />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="mobile">Mobile No.</Label>
          <Input id="mobile" placeholder="Enter mobile number" type="tel" />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="email">Email ID</Label>
          <Input id="email" placeholder="Enter email address" type="email" />
        </div>
        <div className="space-y-1.5">
          <Label>Complaint Mode</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select Complaint Mode" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="online">Online</SelectItem>
              <SelectItem value="phone">Phone</SelectItem>
              <SelectItem value="in-person">In-Person</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-1.5">
          <Label>City/Emirate</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select City/Emirate" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="dubai">Dubai</SelectItem>
              <SelectItem value="abu-dhabi">Abu Dhabi</SelectItem>
              <SelectItem value="sharjah">Sharjah</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="comments">Comments/Feedback</Label>
          <Textarea
            id="comments"
            placeholder="Enter your comments or feedback"
          />
        </div>
        <div className="flex justify-end space-x-2 space-y-1.5">
          <Button variant="outline" type="reset">
            Cancel
          </Button>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </div>
  );
}
