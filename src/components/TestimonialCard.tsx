
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating: number;
  image?: string;
}

const TestimonialCard = ({ 
  name, 
  role, 
  content, 
  rating, 
  image 
}: TestimonialCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow p-6 flex flex-col">
      <div className="flex items-center mb-4">
        <div className="mr-4">
          {image ? (
            <img 
              src={image} 
              alt={name} 
              className="w-16 h-16 rounded-full object-cover"
            />
          ) : (
            <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center text-2xl font-bold text-primary">
              {name.charAt(0)}
            </div>
          )}
        </div>
        <div>
          <h4 className="font-bold">{name}</h4>
          <p className="text-sm text-gray-600">{role}</p>
          <div className="flex mt-1">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={16} 
                className={i < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"} 
              />
            ))}
          </div>
        </div>
      </div>
      <p className="italic text-gray-700">{content}</p>
    </div>
  );
};

export default TestimonialCard;
