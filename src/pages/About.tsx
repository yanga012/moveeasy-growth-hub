
import { Users, Award, Target, Clock } from 'lucide-react';
import HeroBanner from '@/components/HeroBanner';
import SectionTitle from '@/components/SectionTitle';
import TestimonialCard from '@/components/TestimonialCard';

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroBanner
        title="About MoveEasy"
        subtitle="Learn about our mission, vision, and commitment to community development"
      />

      {/* Our Mission */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-4">Our Mission</h2>
              <p className="text-lg mb-4">
                At MoveEasy, we're on a mission to democratize access to financial technology and business solutions for entrepreneurs in underserved communities.
              </p>
              <p className="text-lg mb-4">
                We believe that with the right tools and support, every entrepreneur has the potential to build a thriving business that contributes to local economic growth and community development.
              </p>
              <p className="text-lg">
                Our dedicated team works tirelessly to develop innovative fintech solutions and systems that address the unique challenges faced by self-employed individuals and small businesses in diverse settings.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-moveeasy-light p-6 rounded-lg text-center">
                <div className="text-5xl text-primary mb-2">
                  <Users className="mx-auto" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Inclusion</h4>
                <p className="text-gray-600">Creating opportunities for all entrepreneurs</p>
              </div>
              <div className="bg-moveeasy-light p-6 rounded-lg text-center">
                <div className="text-5xl text-primary mb-2">
                  <Award className="mx-auto" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Excellence</h4>
                <p className="text-gray-600">Delivering quality solutions</p>
              </div>
              <div className="bg-moveeasy-light p-6 rounded-lg text-center">
                <div className="text-5xl text-primary mb-2">
                  <Target className="mx-auto" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Innovation</h4>
                <p className="text-gray-600">Pioneering new approaches</p>
              </div>
              <div className="bg-moveeasy-light p-6 rounded-lg text-center">
                <div className="text-5xl text-primary mb-2">
                  <Clock className="mx-auto" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Sustainability</h4>
                <p className="text-gray-600">Building for long-term impact</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <SectionTitle title="Our Story" centered />
          
          <div className="max-w-4xl mx-auto">
            <p className="text-lg mb-6">
              MoveEasy was founded in 2018 by a group of entrepreneurs who saw firsthand the challenges that small business owners in township and rural communities faced when trying to access financial services and business solutions.
            </p>
            <p className="text-lg mb-6">
              Having experienced these barriers themselves, our founders were committed to creating a company that would bridge the digital divide and empower entrepreneurs with the tools they need to succeed in an increasingly digital economy.
            </p>
            <p className="text-lg mb-6">
              What began as a small initiative offering basic financial literacy workshops has grown into a comprehensive platform providing fintech solutions, custom systems development, and business support services to entrepreneurs across South Africa.
            </p>
            <p className="text-lg">
              Today, MoveEasy continues to expand its reach and impact, developing new technologies and partnerships to further our mission of enabling inclusive growth for all entrepreneurs.
            </p>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionTitle 
            title="Our Team" 
            subtitle="Meet the dedicated professionals working to make entrepreneurship more accessible"
            centered
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="mb-4 rounded-full bg-gray-200 w-48 h-48 mx-auto flex items-center justify-center">
                <span className="text-4xl font-semibold text-primary">JM</span>
              </div>
              <h4 className="text-xl font-bold">John Mbeki</h4>
              <p className="text-gray-600">Founder & CEO</p>
            </div>
            
            {/* Team Member 2 */}
            <div className="text-center">
              <div className="mb-4 rounded-full bg-gray-200 w-48 h-48 mx-auto flex items-center justify-center">
                <span className="text-4xl font-semibold text-primary">LN</span>
              </div>
              <h4 className="text-xl font-bold">Lerato Ndlovu</h4>
              <p className="text-gray-600">Head of Fintech</p>
            </div>
            
            {/* Team Member 3 */}
            <div className="text-center">
              <div className="mb-4 rounded-full bg-gray-200 w-48 h-48 mx-auto flex items-center justify-center">
                <span className="text-4xl font-semibold text-primary">SM</span>
              </div>
              <h4 className="text-xl font-bold">Sam Molefe</h4>
              <p className="text-gray-600">Systems Development Lead</p>
            </div>
            
            {/* Team Member 4 */}
            <div className="text-center">
              <div className="mb-4 rounded-full bg-gray-200 w-48 h-48 mx-auto flex items-center justify-center">
                <span className="text-4xl font-semibold text-primary">TD</span>
              </div>
              <h4 className="text-xl font-bold">Thabo Dube</h4>
              <p className="text-gray-600">Community Outreach Director</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <SectionTitle 
            title="Success Stories" 
            subtitle="Hear from entrepreneurs who have grown their businesses with MoveEasy"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard 
              name="Nomsa Khumalo"
              role="Boutique Owner"
              content="MoveEasy's financial tools helped me streamline my inventory management and expand my clothing boutique to two new locations in just one year."
              rating={5}
            />
            <TestimonialCard 
              name="James Sithole"
              role="Tech Entrepreneur"
              content="The business mentorship program gave me the confidence and skills to turn my app idea into a viable business that now serves clients across three provinces."
              rating={5}
            />
            <TestimonialCard 
              name="Grace Moloi"
              role="Catering Business Owner"
              content="Before MoveEasy, I was struggling to keep track of orders and payments. Their system solution transformed my business and I've doubled my revenue."
              rating={4}
            />
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="section bg-primary text-white py-16">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
            <p className="text-lg max-w-2xl mx-auto">
              We measure our success by the positive change we bring to entrepreneurs and communities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">3,500+</div>
              <p className="text-xl">Entrepreneurs Supported</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">150+</div>
              <p className="text-xl">Communities Reached</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">R8.5M</div>
              <p className="text-xl">Business Growth Facilitated</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">1,200+</div>
              <p className="text-xl">New Jobs Created</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
