import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import React, { useState } from 'react'
import api from '../../../data.json'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'

type Props = {}

const AdminAppointment = (props: Props) => {
  const [currentPage, setCurrentPage] = useState(1);


    const indexOfLastItem = currentPage * api.adminpanel.itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - api.adminpanel.itemsPerPage;
    const currentItems = api.adminpanel.appointments.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(api.adminpanel.appointments.length / api.adminpanel.itemsPerPage);
  return (
    <Card className=" text-neutral-100 m-4 gap-2">
    <CardHeader className=' flex flex-row justify-between'>
      <CardTitle className="flex items-center text-2xl text-black">Appointments</CardTitle>
      <Input className=' max-w-xs text-black' placeholder='Search Appointments'  />
    </CardHeader>
    <CardContent>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Application No</TableHead>
            <TableHead>Full Name</TableHead>
            <TableHead>Service</TableHead>
            <TableHead>Appointment Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Fee Collected ($)</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentItems.map((appt) => (
            <TableRow key={appt.id} className=" text-neutral-600">
              <TableCell>{appt.applicationNo}</TableCell>
              <TableCell>{appt.fullName}</TableCell>
              <TableCell>{appt.service}</TableCell>
              <TableCell>{appt.appointmentDate}</TableCell>
              <TableCell>
                <Badge className={appt.status === "In progress" ? "border-neutral-500 text-neutral-800 bg-white" : "border-neutral-400 text-neutral-800 bg-white"}>{appt.status}</Badge>
              </TableCell>
              <TableCell>{appt.location}</TableCell>
              <TableCell>{appt.fee}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex justify-between mt-4">
        <Button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>
          Previous
        </Button>
        <span className="text-black">Page {currentPage} of {totalPages}</span>
        <Button disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)}>
          Next
        </Button>
      </div>
    </CardContent>
  </Card>
  )
}

export default AdminAppointment