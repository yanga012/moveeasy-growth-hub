
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import RegistryConfirmationModal from './RegistryConfirmationModal';

export interface RegistryFormValues {
  firstName: string;
  surname: string;
  gender: string;
  idNumber: string;
  cellphone: string;
  tradeLicense: string;
  address: string;
}

const RegistryForm = () => {
  const { register, handleSubmit, formState: { errors }, control, reset } = useForm<RegistryFormValues>();
  const [submitting, setSubmitting] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [submittedData, setSubmittedData] = useState<RegistryFormValues | null>(null);

  const onSubmit = async (data: RegistryFormValues) => {
    setSubmitting(true);
    
    try {
      // Format the email content
      const emailContent = `
        New Registration:
        First Name: ${data.firstName}
        Surname: ${data.surname}
        Gender: ${data.gender}
        ID Number: ${data.idNumber}
        Cellphone: ${data.cellphone}
        Trade License: ${data.tradeLicense || 'No'}
        Address: ${data.address}
      `;

      console.log('Sending email with data:', emailContent);
      
      // In a real implementation, you would use an API service here
      // This is a simulated email sending process
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Store the submitted data for the modal
      setSubmittedData(data);
      
      // Show the confirmation modal
      setModalOpen(true);
      
      // Reset the form after successful submission
      reset();
      
      toast.success('Registration submitted successfully! Data sent to y.skaal@moveeasy.co.za');
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to submit registration. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First Name */}
          <div className="space-y-2">
            <Label htmlFor="firstName">First Name</Label>
            <Input
              id="firstName"
              placeholder="Enter your first name"
              {...register("firstName", { required: "First name is required" })}
            />
            {errors.firstName && (
              <p className="text-sm text-destructive">{errors.firstName.message}</p>
            )}
          </div>

          {/* Surname */}
          <div className="space-y-2">
            <Label htmlFor="surname">Surname</Label>
            <Input
              id="surname"
              placeholder="Enter your surname"
              {...register("surname", { required: "Surname is required" })}
            />
            {errors.surname && (
              <p className="text-sm text-destructive">{errors.surname.message}</p>
            )}
          </div>
        </div>

        {/* Gender */}
        <div className="space-y-2">
          <Label htmlFor="gender">Gender</Label>
          <Select {...register("gender", { required: "Gender is required" })}>
            <SelectTrigger>
              <SelectValue placeholder="Select gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="male">Male</SelectItem>
              <SelectItem value="female">Female</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
          {errors.gender && (
            <p className="text-sm text-destructive">{errors.gender.message}</p>
          )}
        </div>

        {/* Identity Number */}
        <div className="space-y-2">
          <Label htmlFor="idNumber">Identity Number</Label>
          <Input
            id="idNumber"
            placeholder="Enter your ID number"
            {...register("idNumber", { 
              required: "ID number is required",
              pattern: {
                value: /^[0-9]{13}$/,
                message: "ID number must be 13 digits"
              }
            })}
          />
          {errors.idNumber && (
            <p className="text-sm text-destructive">{errors.idNumber.message}</p>
          )}
        </div>

        {/* Cellphone */}
        <div className="space-y-2">
          <Label htmlFor="cellphone">Cellphone Number</Label>
          <Input
            id="cellphone"
            type="tel"
            placeholder="Enter your cellphone number"
            {...register("cellphone", { 
              required: "Cellphone number is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Please enter a valid 10-digit phone number"
              }
            })}
          />
          {errors.cellphone && (
            <p className="text-sm text-destructive">{errors.cellphone.message}</p>
          )}
        </div>

        {/* Trade License */}
        <div className="space-y-3">
          <Label>Do you have a trade license?</Label>
          <RadioGroup defaultValue="no" {...register("tradeLicense")}>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="license-yes" />
                <Label htmlFor="license-yes" className="font-normal">Yes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="license-no" />
                <Label htmlFor="license-no" className="font-normal">No</Label>
              </div>
            </div>
          </RadioGroup>
        </div>

        {/* Address */}
        <div className="space-y-2">
          <Label htmlFor="address">Address</Label>
          <Input
            id="address"
            placeholder="Enter your address"
            {...register("address", { required: "Address is required" })}
          />
          {errors.address && (
            <p className="text-sm text-destructive">{errors.address.message}</p>
          )}
        </div>

        {/* Email Notice */}
        <div className="text-sm text-muted-foreground">
          <p>By submitting this form, your registration details will be sent to y.skaal@moveeasy.co.za</p>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center pt-4">
          <Button 
            type="submit" 
            className="w-full md:w-auto bg-primary hover:bg-primary/90"
            disabled={submitting}
          >
            {submitting ? 'Submitting...' : 'Submit Registration'}
          </Button>
        </div>
      </form>

      {/* Confirmation Modal */}
      <RegistryConfirmationModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        formData={submittedData}
      />
    </>
  );
};

export default RegistryForm;
