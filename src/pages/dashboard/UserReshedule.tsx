import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'



const UserReshedule = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-semibold">
            Reschedule Appointment
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className='space-y-1.5'>
              <Label htmlFor="appointment-number">Appointment Number</Label>
              <Input id="appointment-number" placeholder="Enter Appointment No"  />
            </div>
            <div className='space-y-1.5'>
              <Label htmlFor="email">Appointment Holder Email</Label>
              <Input id="email" type="email" placeholder="Enter Email Address"  />
            </div>
            <Button className="w-full" type="submit">
              Reschedule Appointment
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default UserReshedule