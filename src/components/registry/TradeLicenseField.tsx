
import { UseFormRegister } from 'react-hook-form';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { RegistryFormValues } from '@/types/registry';

interface TradeLicenseFieldProps {
  register: UseFormRegister<RegistryFormValues>;
}

const TradeLicenseField = ({ register }: TradeLicenseFieldProps) => {
  return (
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
  );
};

export default TradeLicenseField;
