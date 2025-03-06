export interface User {
  id: string;
  email: string;
  name: string;
  phone: string;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  fees: number;
  processingTime: string;
}

export interface Appointment {
  id: string;
  userId: string;
  serviceId: string;
  date: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
}

export interface Application {
  id: string;
  userId: string;
  serviceId: string;
  appointmentId: string;
  status: 'submitted' | 'processing' | 'completed' | 'rejected';
  submittedAt: string;
}