import React from "react";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import api from '../../data.json'
import { useNavigate } from "react-router";

type Props = {};

const OfficeTable = (props: Props) => {
    const naviagte = useNavigate()
  return (
    <Table className="">
        
      <TableHeader >
        <TableRow>
          <TableHead className="w-[50px]">Location</TableHead>
          {/* <TableHead className="w-40">No of Counters</TableHead> */}
          <TableHead className="w-40">Day</TableHead>
          <TableHead className="w-40 text-right">Office Hours</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {api.locations.map((loc)=>(
            <TableRow key={loc.id} onClick={()=>naviagte(`/offices/${loc.id}`)}>
                <TableCell className="underline cursor-pointer">{loc.name}</TableCell>
                {/* <TableCell>{loc.no_of_counters}</TableCell> */}
                <TableCell>{loc.day}</TableCell>
                <TableCell className="text-right">{loc.opening_hours}</TableCell>
            </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default OfficeTable;
