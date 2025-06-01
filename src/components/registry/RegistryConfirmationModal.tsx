
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { RegistryFormValues } from '@/types/registry';

interface RegistryConfirmationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  formData: RegistryFormValues | null;
}

const RegistryConfirmationModal = ({
  open,
  onOpenChange,
  formData,
}: RegistryConfirmationModalProps) => {
  if (!formData) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-center">
            <div className="mx-auto flex items-center">
              <div className="mr-2 rounded-full bg-green-100 p-2">
                <Check className="h-6 w-6 text-green-600" />
              </div>
              <span>Registration Successfully Submitted</span>
            </div>
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4 pt-4">
          <p className="text-center text-muted-foreground">
            Your information has been sent to y.skaal@moveeasy.co.za
          </p>
          
          <div className="rounded-lg border p-4">
            <h3 className="mb-3 font-medium">Registration Details</h3>
            <div className="space-y-2 text-sm">
              <div className="grid grid-cols-2 gap-1">
                <span className="font-medium">Name:</span>
                <span>{formData.firstName} {formData.surname}</span>
              </div>
              <div className="grid grid-cols-2 gap-1">
                <span className="font-medium">Gender:</span>
                <span>{formData.gender}</span>
              </div>
              <div className="grid grid-cols-2 gap-1">
                <span className="font-medium">ID Number:</span>
                <span>{formData.idNumber}</span>
              </div>
              <div className="grid grid-cols-2 gap-1">
                <span className="font-medium">Cellphone:</span>
                <span>{formData.cellphone}</span>
              </div>
              <div className="grid grid-cols-2 gap-1">
                <span className="font-medium">Trade License:</span>
                <span>{formData.tradeLicense || 'No'}</span>
              </div>
              <div className="grid grid-cols-2 gap-1">
                <span className="font-medium">Address:</span>
                <span>{formData.address}</span>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button
              onClick={() => onOpenChange(false)}
              className="w-full sm:w-auto"
            >
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RegistryConfirmationModal;
