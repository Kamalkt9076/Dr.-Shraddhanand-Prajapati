
import { toast } from "sonner";

export interface AppointmentFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  message?: string;
}

export const validateAppointmentForm = (data: AppointmentFormData): boolean => {
  // Basic validation
  if (!data.firstName.trim()) {
    toast.error("Please enter your first name");
    return false;
  }
  
  if (!data.lastName.trim()) {
    toast.error("Please enter your last name");
    return false;
  }
  
  if (!data.email.trim() || !/^\S+@\S+\.\S+$/.test(data.email)) {
    toast.error("Please enter a valid email address");
    return false;
  }
  
  if (!data.phone.trim() || !/^[0-9]{10}$/.test(data.phone.replace(/\D/g, ''))) {
    toast.error("Please enter a valid 10-digit phone number");
    return false;
  }
  
  if (!data.service) {
    toast.error("Please select a service");
    return false;
  }
  
  return true;
};

export const submitAppointmentForm = async (data: AppointmentFormData): Promise<boolean> => {
  try {
    // In a real application, you would send this data to your backend
    // For now, we'll simulate a successful submission
    console.log("Submitting appointment form:", data);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Return success
    return true;
  } catch (error) {
    console.error("Error submitting form:", error);
    return false;
  }
};
