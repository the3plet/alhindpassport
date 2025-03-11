import React, { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Badge } from "../ui/badge";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Label } from "../ui/label";
import { ArrowDown } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

type Props = {
    applicationNo:string;
};

const FeedbackPopup = ({applicationNo}: Props) => {
    const [open, setOpen] = useState(false);
    const [rating, setRating] = useState("");
    const [summary, setSummary] = useState("");
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      console.log({ rating, summary });
      setOpen(false);
    };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <Badge className="cursor-pointer">Share Feedback</Badge>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Feedback Form</DialogTitle>
        <DialogDescription>Application No:{applicationNo}</DialogDescription>
      <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-4">
          {/* Rating Select */}
          <div className="flex flex-col gap-1.5">
            <Label className="text-gray-700">Rating</Label>
            <Select onValueChange={setRating}>
              <SelectTrigger className="w-full border border-gray-300">
                <SelectValue placeholder="Select rating" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="good">Good</SelectItem>
                <SelectItem value="average">Average</SelectItem>
                <SelectItem value="poor">Poor</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Summary Input */}
          <div className="flex flex-col gap-1.5">
            <Label className="text-gray-700">Summary</Label>
            <Textarea
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              placeholder="Enter your feedback here..."
              className="border border-gray-300"
            />
          </div>

          {/* Submit Button */}
          <Button type="submit" className="w-full text-white py-2 rounded-lg">
            Submit Feedback
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default FeedbackPopup;
