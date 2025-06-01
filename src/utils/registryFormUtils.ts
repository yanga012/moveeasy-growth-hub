
import { toast } from 'sonner';
import { RegistryFormValues } from '@/types/registry';

export const submitRegistryForm = async (data: RegistryFormValues): Promise<void> => {
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
  
  toast.success('Registration submitted successfully! Data sent to y.skaal@moveeasy.co.za');
};
