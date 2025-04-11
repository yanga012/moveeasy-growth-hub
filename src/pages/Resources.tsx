
import { Filter } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import HeroBanner from '@/components/HeroBanner';
import SectionTitle from '@/components/SectionTitle';
import ResourceCard from '@/components/ResourceCard';

// Define resource type and sample data
type ResourceCategory = 'all' | 'fintech' | 'business' | 'systems' | 'case-studies';

interface Resource {
  id: string;
  title: string;
  description: string;
  category: 'fintech' | 'business' | 'systems' | 'case-studies';
  readTime: string;
  image?: string;
  link: string;
}

const resourcesData: Resource[] = [
  {
    id: '1',
    title: 'Getting Started with Digital Payments',
    description: 'A comprehensive guide to implementing digital payment solutions in your small business.',
    category: 'fintech',
    readTime: '8',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    link: '/resources/digital-payments',
  },
  {
    id: '2',
    title: 'Building a Business Plan That Works',
    description: 'Learn how to create a practical business plan that will guide your growth and help secure funding.',
    category: 'business',
    readTime: '12',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    link: '/resources/business-plan',
  },
  {
    id: '3',
    title: 'Inventory Management Systems for Small Retailers',
    description: 'How the right inventory system can reduce costs and improve customer satisfaction in retail businesses.',
    category: 'systems',
    readTime: '10',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    link: '/resources/inventory-systems',
  },
  {
    id: '4',
    title: 'Success Story: From Market Stall to Online Store',
    description: 'How one entrepreneur used technology to transform a traditional market business into a thriving e-commerce operation.',
    category: 'case-studies',
    readTime: '7',
    image: 'https://images.unsplash.com/photo-1664575196079-9ac04582854b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    link: '/resources/market-to-online',
  },
  {
    id: '5',
    title: 'Understanding Microloans for Entrepreneurs',
    description: 'A guide to accessing and effectively using microloans to fuel your business growth.',
    category: 'fintech',
    readTime: '9',
    image: 'https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    link: '/resources/microloans',
  },
  {
    id: '6',
    title: 'Marketing Strategies for Township Businesses',
    description: 'Effective and affordable marketing techniques to help local businesses stand out and attract more customers.',
    category: 'business',
    readTime: '11',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    link: '/resources/township-marketing',
  },
];

const Resources = () => {
  const [activeCategory, setActiveCategory] = useState<ResourceCategory>('all');

  const filteredResources = activeCategory === 'all' 
    ? resourcesData 
    : resourcesData.filter(resource => resource.category === activeCategory);

  return (
    <div>
      {/* Hero Section */}
      <HeroBanner
        title="Resources"
        subtitle="Free educational materials to help you grow your business"
      />

      {/* Filter Section */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container-custom">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center">
              <Filter className="mr-2 text-primary" />
              <span className="font-medium">Filter by:</span>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <Button 
                variant={activeCategory === 'all' ? 'default' : 'outline'} 
                onClick={() => setActiveCategory('all')}
                className="rounded-full"
              >
                All Resources
              </Button>
              <Button 
                variant={activeCategory === 'fintech' ? 'default' : 'outline'} 
                onClick={() => setActiveCategory('fintech')}
                className="rounded-full"
              >
                Fintech
              </Button>
              <Button 
                variant={activeCategory === 'business' ? 'default' : 'outline'} 
                onClick={() => setActiveCategory('business')}
                className="rounded-full"
              >
                Business Tips
              </Button>
              <Button 
                variant={activeCategory === 'systems' ? 'default' : 'outline'} 
                onClick={() => setActiveCategory('systems')}
                className="rounded-full"
              >
                Systems
              </Button>
              <Button 
                variant={activeCategory === 'case-studies' ? 'default' : 'outline'} 
                onClick={() => setActiveCategory('case-studies')}
                className="rounded-full"
              >
                Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionTitle 
            title={activeCategory === 'all' ? 'All Resources' : `${activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)} Resources`}
            subtitle="Explore our collection of guides, articles, and case studies designed to help entrepreneurs succeed."
          />
          
          {filteredResources.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredResources.map((resource) => (
                <ResourceCard 
                  key={resource.id}
                  title={resource.title}
                  description={resource.description}
                  category={resource.category}
                  readTime={resource.readTime}
                  image={resource.image}
                  link={resource.link}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No resources found for this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-lg text-gray-600 mb-8">
              Subscribe to our newsletter to receive the latest resources, tips, and success stories directly in your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-2 rounded-md border border-gray-300 flex-grow"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Resource */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="bg-gray-50 rounded-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4">Featured Resource</h3>
                <h4 className="text-xl font-semibold mb-2">The Small Business Digital Transformation Guide</h4>
                <p className="text-gray-600 mb-6">
                  A comprehensive manual to help small business owners leverage technology for growth, efficiency, and market expansion.
                </p>
                <Button className="self-start">Download Free Guide</Button>
              </div>
              <div className="bg-gray-400 h-full min-h-[300px] hidden md:block">
                {/* This would be an image in the actual implementation */}
                <div className="w-full h-full flex items-center justify-center text-white">
                  <span>Guide Cover Image</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;
