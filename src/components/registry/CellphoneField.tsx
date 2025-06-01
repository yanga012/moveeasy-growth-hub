
import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RegistryFormValues } from '@/types/registry';

interface CellphoneFieldProps {
  register: UseFormRegister<RegistryFormValues>;
  errors: FieldErrors<RegistryFormValues>;
}

const CellphoneField = ({ register, errors }: CellphoneFieldProps) => {
  return (
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
  );
};

export default CellphoneField;
