import React, { useState } from 'react'
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'

type Props = {}

const CancellationPopup = (props: Props) => {
    const [open,setOpen]= useState(false)
    const handleClose=()=>{
setOpen(false)
    }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger><Badge className='cursor-pointer w-full hover:underline hover:text-red-500' variant="secondary">Cancel Appointment</Badge></DialogTrigger>
        <DialogContent>
            <h1 className='text-xl font-semibold'>Are you sure to cancel the appointment</h1>
            <div className='gap-2 flex'>
                <Button className='px-6' type='submit' onClick={handleClose}>Yes</Button>
                <Button variant={'default'} className='px-6' onClick={handleClose}>No</Button>
            </div>
        </DialogContent>
    </Dialog>
  )
}

export default CancellationPopup