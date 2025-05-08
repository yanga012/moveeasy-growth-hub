
import SectionTitle from '@/components/SectionTitle';
import RegistryForm from '@/components/registry/RegistryForm';
import RegistryLetterhead from '@/components/registry/RegistryLetterhead';
import RegistryFooter from '@/components/registry/RegistryFooter';

const Registry = () => {
  return (
    <div className="container-custom py-12">
      <div className="w-full max-w-4xl mx-auto">
        {/* Letterhead */}
        <RegistryLetterhead />

        {/* Header */}
        <SectionTitle
          title="E-Kasilami Program Registration"
          subtitle="Shop Owner Document Registry"
          centered
        />

        {/* Form Container */}
        <div className="mt-8 bg-background border rounded-lg shadow-sm p-6 md:p-8">
          <RegistryForm />
        </div>

        {/* Footer */}
        <RegistryFooter />
      </div>
    </div>
  );
};

export default Registry;
