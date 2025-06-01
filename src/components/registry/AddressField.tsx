
import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RegistryFormValues } from '@/types/registry';

interface AddressFieldProps {
  register: UseFormRegister<RegistryFormValues>;
  errors: FieldErrors<RegistryFormValues>;
}

const AddressField = ({ register, errors }: AddressFieldProps) => {
  return (
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
  );
};

export default AddressField;
