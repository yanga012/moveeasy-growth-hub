
import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RegistryFormValues } from '@/types/registry';

interface NameFieldsProps {
  register: UseFormRegister<RegistryFormValues>;
  errors: FieldErrors<RegistryFormValues>;
}

const NameFields = ({ register, errors }: NameFieldsProps) => {
  return (
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
  );
};

export default NameFields;
