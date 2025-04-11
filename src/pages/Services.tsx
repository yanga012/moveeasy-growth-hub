
import { Banknote, BarChart4, Building2, CreditCard, Database, Smartphone, LineChart, PieChart, Users, BookOpen, Calendar, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import HeroBanner from '@/components/HeroBanner';
import SectionTitle from '@/components/SectionTitle';
import ServiceCard from '@/components/ServiceCard';

const Services = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroBanner
        title="Our Services"
        subtitle="Comprehensive solutions to help entrepreneurs and small businesses thrive"
      />

      {/* Services Overview */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionTitle 
            title="How We Can Help You" 
            subtitle="MoveEasy offers a comprehensive suite of services designed to address the unique challenges faced by entrepreneurs and small businesses in diverse communities."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="text-primary text-4xl mb-4">
                <Banknote />
              </div>
              <h3 className="text-2xl font-bold mb-3">Fintech Solutions</h3>
              <p className="text-gray-600 mb-6">
                Accessible financial tools to help you manage, grow, and secure your business finances.
              </p>
              <Button variant="outline" className="w-full" asChild>
                <a href="#fintech">Learn More</a>
              </Button>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="text-primary text-4xl mb-4">
                <BarChart4 />
              </div>
              <h3 className="text-2xl font-bold mb-3">Systems Development</h3>
              <p className="text-gray-600 mb-6">
                Custom software and systems designed to streamline operations and boost business efficiency.
              </p>
              <Button variant="outline" className="w-full" asChild>
                <a href="#systems">Learn More</a>
              </Button>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="text-primary text-4xl mb-4">
                <Building2 />
              </div>
              <h3 className="text-2xl font-bold mb-3">Business Support</h3>
              <p className="text-gray-600 mb-6">
                Comprehensive resources, workshops, and mentorship to help your business grow and thrive.
              </p>
              <Button variant="outline" className="w-full" asChild>
                <a href="#support">Learn More</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Fintech Solutions */}
      <section id="fintech" className="section bg-gray-50 pt-20">
        <div className="container-custom">
          <SectionTitle 
            title="Fintech Solutions" 
            subtitle="Access to tools for managing finances, loans, and investments tailored for small businesses and self-employed individuals."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard 
              title="Digital Payments" 
              description="Secure, affordable digital payment solutions that make it easy to accept payments from customers and manage transactions."
              icon={<CreditCard size={36} />}
              link="/contact"
            />
            <ServiceCard 
              title="Financial Management" 
              description="User-friendly tools to track income, expenses, and profits, helping you make informed business decisions."
              icon={<LineChart size={36} />}
              link="/contact"
            />
            <ServiceCard 
              title="Micro-Loans" 
              description="Access to small business loans with favorable terms, designed specifically for entrepreneurs in emerging communities."
              icon={<Banknote size={36} />}
              link="/contact"
            />
          </div>
        </div>
      </section>

      {/* Systems Development */}
      <section id="systems" className="section bg-white pt-20">
        <div className="container-custom">
          <SectionTitle 
            title="Systems Development" 
            subtitle="Custom systems and software designed to boost business efficiency and streamline operations for growing businesses."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard 
              title="Inventory Management" 
              description="Digital systems to track stock levels, automate reordering, and reduce waste in your business operations."
              icon={<Database size={36} />}
              link="/contact"
            />
            <ServiceCard 
              title="Mobile Applications" 
              description="Custom mobile apps that help you reach more customers and provide better service in an increasingly digital world."
              icon={<Smartphone size={36} />}
              link="/contact"
            />
            <ServiceCard 
              title="Business Analytics" 
              description="Data-driven insights that help you understand your business performance and identify growth opportunities."
              icon={<PieChart size={36} />}
              link="/contact"
            />
          </div>
        </div>
      </section>

      {/* Business Support */}
      <section id="support" className="section bg-gray-50 pt-20">
        <div className="container-custom">
          <SectionTitle 
            title="Business Support" 
            subtitle="Comprehensive resources, workshops, and mentorship programs designed to help small businesses thrive in competitive markets."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard 
              title="Business Mentorship" 
              description="One-on-one guidance from experienced entrepreneurs who understand the unique challenges of your business and market."
              icon={<Users size={36} />}
              link="/contact"
            />
            <ServiceCard 
              title="Skills Workshops" 
              description="Practical training sessions on essential business skills, from marketing to financial planning and digital literacy."
              icon={<BookOpen size={36} />}
              link="/contact"
            />
            <ServiceCard 
              title="Networking Events" 
              description="Opportunities to connect with other entrepreneurs, potential partners, and investors to grow your business network."
              icon={<Calendar size={36} />}
              link="/contact"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionTitle 
            title="Why Choose MoveEasy" 
            subtitle="What sets our services apart and why entrepreneurs trust us to support their growth journey."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
            <div className="flex gap-4">
              <div className="text-primary mt-1">
                <Award size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Local Expertise</h4>
                <p className="text-gray-600">
                  Our team has deep understanding of the unique challenges and opportunities in township, rural, and emerging markets.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="text-primary mt-1">
                <Award size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Customized Approach</h4>
                <p className="text-gray-600">
                  We tailor our solutions to fit the specific needs of your business, not the other way around.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="text-primary mt-1">
                <Award size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Affordable Solutions</h4>
                <p className="text-gray-600">
                  Our services are priced with small businesses in mind, making technology accessible to all entrepreneurs.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="text-primary mt-1">
                <Award size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Ongoing Support</h4>
                <p className="text-gray-600">
                  We provide continuous guidance and assistance to ensure you get the most value from our solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-cta-pattern text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how our services can help you achieve your business goals.
          </p>
          <Button className="btn-accent" asChild>
            <Link to="/contact">Book a Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
