
import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RegistryFormValues } from '@/types/registry';
import { validateSouthAfricanID } from '@/utils/idValidation';

interface IdNumberFieldProps {
  register: UseFormRegister<RegistryFormValues>;
  errors: FieldErrors<RegistryFormValues>;
}

const IdNumberField = ({ register, errors }: IdNumberFieldProps) => {
  return (
    <div className="space-y-2">
      <Label htmlFor="idNumber">Identity Number</Label>
      <Input
        id="idNumber"
        placeholder="Enter your South African ID number"
        {...register("idNumber", { 
          required: "ID number is required",
          validate: (value) => 
            validateSouthAfricanID(value) || "Please enter a valid South African ID number"
        })}
      />
      {errors.idNumber && (
        <p className="text-sm text-destructive">{errors.idNumber.message}</p>
      )}
      <p className="text-xs text-muted-foreground">South African ID format: 13 digits (YYMMDD 0000 000 0)</p>
    </div>
  );
};

export default IdNumberField;
