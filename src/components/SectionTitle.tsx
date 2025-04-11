
interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionTitle = ({ 
  title, 
  subtitle, 
  centered = false 
}: SectionTitleProps) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className="mb-4 relative inline-block">
        {title}
        <span className="absolute bottom-0 left-0 w-1/3 h-1 bg-secondary"></span>
      </h2>
      {subtitle && <p className="text-lg text-gray-600 max-w-3xl">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
