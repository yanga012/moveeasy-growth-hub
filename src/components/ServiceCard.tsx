
import { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  link: string;
}

const ServiceCard = ({ title, description, icon, link }: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 card-hover">
      <div className="text-primary mb-4 text-3xl">{icon}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link to={link}>
        <Button variant="outline" className="group">
          Learn More
          <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </Link>
    </div>
  );
};

export default ServiceCard;
