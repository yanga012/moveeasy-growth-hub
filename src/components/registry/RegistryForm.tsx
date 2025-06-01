
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { RegistryFormValues } from '@/types/registry';
import { submitRegistryForm } from '@/utils/registryFormUtils';
import RegistryConfirmationModal from './RegistryConfirmationModal';
import NameFields from './NameFields';
import GenderField from './GenderField';
import IdNumberField from './IdNumberField';
import CellphoneField from './CellphoneField';
import TradeLicenseField from './TradeLicenseField';
import AddressField from './AddressField';

const RegistryForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<RegistryFormValues>();
  const [submitting, setSubmitting] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [submittedData, setSubmittedData] = useState<RegistryFormValues | null>(null);

  const onSubmit = async (data: RegistryFormValues) => {
    setSubmitting(true);
    
    try {
      await submitRegistryForm(data);
      
      // Store the submitted data for the modal
      setSubmittedData(data);
      
      // Show the confirmation modal
      setModalOpen(true);
      
      // Reset the form after successful submission
      reset();
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <NameFields register={register} errors={errors} />
        <GenderField register={register} errors={errors} />
        <IdNumberField register={register} errors={errors} />
        <CellphoneField register={register} errors={errors} />
        <TradeLicenseField register={register} />
        <AddressField register={register} errors={errors} />

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
