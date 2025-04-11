
import { Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface ResourceCardProps {
  title: string;
  description: string;
  category: string;
  readTime: string;
  image?: string;
  link: string;
}

const ResourceCard = ({ 
  title, 
  description, 
  category, 
  readTime, 
  image, 
  link 
}: ResourceCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden card-hover">
      {image && (
        <div className="h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          <span className="bg-muted text-xs font-medium px-2.5 py-0.5 rounded">
            {category}
          </span>
          <div className="flex items-center text-sm text-gray-500">
            <Clock size={14} className="mr-1" />
            {readTime} min read
          </div>
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        <Link to={link}>
          <Button variant="ghost" className="group p-0 hover:bg-transparent">
            Read More
            <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ResourceCard;
