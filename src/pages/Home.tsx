
import { Link } from 'react-router-dom';
import { ArrowRight, Banknote, LineChart, Users, BarChart4, Lightbulb, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import HeroBanner from '@/components/HeroBanner';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import SectionTitle from '@/components/SectionTitle';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroBanner
        title="Empowering Communities, Enabling Growth"
        subtitle="Providing innovative fintech solutions and systems development for self-employed individuals and small businesses."
      >
        <div className="flex flex-wrap gap-4">
          <Button className="btn-accent" asChild>
            <Link to="/services">Explore Our Services</Link>
          </Button>
          <Button variant="outline" className="text-white bg-white/10 hover:bg-white/20 border-white" asChild>
            <Link to="/contact">Book a Consultation</Link>
          </Button>
        </div>
      </HeroBanner>

      {/* Introduction Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="mb-4">Welcome to MoveEasy</h2>
              <p className="text-lg mb-6">
                MoveEasy is dedicated to driving inclusion and development for self-employed individuals
                and small businesses across diverse communities. We believe in the power of accessible
                financial technology and tailored systems to transform livelihoods and boost economic growth.
              </p>
              <p className="text-lg mb-6">
                Our mission is to bridge the digital divide and empower entrepreneurs with the tools they
                need to thrive in today's competitive marketplace, regardless of their background or location.
              </p>
              <Button className="btn-primary" asChild>
                <Link to="/about">
                  Learn More About Us
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-moveeasy-light p-6 rounded-lg text-center">
                <div className="text-5xl text-primary mb-2">
                  <Users className="mx-auto" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Community Focus</h4>
                <p className="text-gray-600">Tailored solutions for local entrepreneurs</p>
              </div>
              <div className="bg-moveeasy-light p-6 rounded-lg text-center">
                <div className="text-5xl text-primary mb-2">
                  <Banknote className="mx-auto" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Fintech Solutions</h4>
                <p className="text-gray-600">Accessible financial tools for growth</p>
              </div>
              <div className="bg-moveeasy-light p-6 rounded-lg text-center">
                <div className="text-5xl text-primary mb-2">
                  <Lightbulb className="mx-auto" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Innovation</h4>
                <p className="text-gray-600">Cutting-edge systems development</p>
              </div>
              <div className="bg-moveeasy-light p-6 rounded-lg text-center">
                <div className="text-5xl text-primary mb-2">
                  <LineChart className="mx-auto" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Growth</h4>
                <p className="text-gray-600">Enabling sustainable business growth</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <SectionTitle 
            title="Our Services" 
            subtitle="Discover how MoveEasy can help you transform your business with our comprehensive suite of services."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard 
              title="Fintech Solutions" 
              description="Access to tools for managing finances, loans, and investments tailored for small businesses and self-employed individuals."
              icon={<Banknote size={36} />}
              link="/services#fintech"
            />
            <ServiceCard 
              title="Systems Development" 
              description="Custom systems and software designed to boost business efficiency and streamline operations for growing businesses."
              icon={<BarChart4 size={36} />}
              link="/services#systems"
            />
            <ServiceCard 
              title="Business Support" 
              description="Comprehensive resources, workshops, and mentorship programs designed to help small businesses thrive in competitive markets."
              icon={<Building2 size={36} />}
              link="/services#support"
            />
          </div>
          
          <div className="mt-12 text-center">
            <Button className="btn-primary" asChild>
              <Link to="/services">
                View All Services
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-cta-pattern text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Grow Your Business?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join hundreds of entrepreneurs who have transformed their businesses with MoveEasy's innovative solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="btn-accent" asChild>
              <Link to="/contact">Book a Consultation</Link>
            </Button>
            <Button variant="outline" className="text-white border-white hover:bg-white/20" asChild>
              <Link to="/resources">Explore Resources</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionTitle 
            title="Success Stories" 
            subtitle="Hear from entrepreneurs who have experienced growth and success with MoveEasy's support."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard 
              name="Sarah Nkosi"
              role="Small Business Owner"
              content="MoveEasy's fintech solutions revolutionized how I manage my shop's finances. Their support has been invaluable for growing my business in the township."
              rating={5}
            />
            <TestimonialCard 
              name="David Mokoena"
              role="Entrepreneur"
              content="The custom system MoveEasy developed for my delivery service has streamlined operations and helped me expand to new areas. Their team truly understands the challenges we face."
              rating={5}
            />
            <TestimonialCard 
              name="Thandi Dlamini"
              role="Community Marketplace Founder"
              content="From business mentorship to financial tools, MoveEasy provided everything I needed to turn my idea into a thriving community marketplace."
              rating={4}
            />
          </div>
        </div>
      </section>
      
      {/* Partners Section */}
      <section className="section bg-gray-50 py-12">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Trusted Partners</h3>
            <Separator className="w-24 mx-auto bg-secondary" />
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {/* These would be replaced with actual partner logos */}
            <div className="bg-white p-4 rounded-md shadow-sm w-32 h-20 flex items-center justify-center">
              <div className="text-primary font-bold">Partner 1</div>
            </div>
            <div className="bg-white p-4 rounded-md shadow-sm w-32 h-20 flex items-center justify-center">
              <div className="text-primary font-bold">Partner 2</div>
            </div>
            <div className="bg-white p-4 rounded-md shadow-sm w-32 h-20 flex items-center justify-center">
              <div className="text-primary font-bold">Partner 3</div>
            </div>
            <div className="bg-white p-4 rounded-md shadow-sm w-32 h-20 flex items-center justify-center">
              <div className="text-primary font-bold">Partner 4</div>
            </div>
            <div className="bg-white p-4 rounded-md shadow-sm w-32 h-20 flex items-center justify-center">
              <div className="text-primary font-bold">Partner 5</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
