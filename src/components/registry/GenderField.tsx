
import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { RegistryFormValues } from '@/types/registry';

interface GenderFieldProps {
  register: UseFormRegister<RegistryFormValues>;
  errors: FieldErrors<RegistryFormValues>;
}

const GenderField = ({ register, errors }: GenderFieldProps) => {
  return (
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
  );
};

export default GenderField;
