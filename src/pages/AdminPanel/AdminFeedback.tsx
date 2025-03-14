import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import React from 'react'
import api from '../../../data.json'

type Props = {}

const AdminFeedback = (props: Props) => {
  return (
    <div className='p-14 shadow-xl rounded-2xl m-4'>
        <h1 className='text-2xl font-semibold pb-2'>User Feedback</h1>
        <Table className='border rounded-xl'>
            <TableHeader>
                <TableRow>
                    <TableHead>Application No</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Service</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Feedback Comment</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                    {api.feedback.map((feed)=>(
                <TableRow key={feed.Application_no}>
                        <TableCell>{feed.Application_no}</TableCell>
                        <TableCell>{feed.Name}</TableCell>
                        <TableCell>{feed.Email}</TableCell>
                        <TableCell>{feed.Service}</TableCell>
                        <TableCell>{feed.Location}</TableCell>
                        <TableCell>{feed.Status}</TableCell>
                        <TableCell>{feed.Feedback_comment}</TableCell>
                </TableRow>
                    ))}
            </TableBody>
        </Table>
    </div>
  )
}

export default AdminFeedback