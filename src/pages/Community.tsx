
import { Play, Users, Calendar, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import HeroBanner from '@/components/HeroBanner';
import SectionTitle from '@/components/SectionTitle';

const Community = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroBanner
        title="Our Community Impact"
        subtitle="Discover how MoveEasy is making a difference in communities across South Africa"
      />

      {/* Impact Overview */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle 
                title="Building Stronger Communities" 
                subtitle="At MoveEasy, we believe that empowering entrepreneurs is key to creating thriving, sustainable communities."
              />
              <p className="text-lg mb-6">
                Our work goes beyond providing business services – we're committed to fostering economic growth, creating jobs, and building inclusive financial systems that benefit entire communities.
              </p>
              <p className="text-lg">
                Through partnerships with local organizations, government agencies, and community leaders, we're working to create an ecosystem where entrepreneurship can flourish and drive positive change.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-moveeasy-light p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-primary mb-2">150+</div>
                <p className="text-gray-700">Communities Reached</p>
              </div>
              <div className="bg-moveeasy-light p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-primary mb-2">3,500+</div>
                <p className="text-gray-700">Entrepreneurs Supported</p>
              </div>
              <div className="bg-moveeasy-light p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-primary mb-2">1,200+</div>
                <p className="text-gray-700">Jobs Created</p>
              </div>
              <div className="bg-moveeasy-light p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-primary mb-2">30+</div>
                <p className="text-gray-700">Partner Organizations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Success Story */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <SectionTitle 
            title="Success Stories" 
            subtitle="Real entrepreneurs making real impact with MoveEasy's support"
            centered
          />
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="bg-primary flex items-center justify-center p-8">
                <div className="relative w-full aspect-video max-w-md bg-black/20 rounded-lg flex items-center justify-center">
                  <button className="absolute w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                    <Play className="w-8 h-8 text-white fill-white" />
                  </button>
                  <span className="text-white text-lg">Success Story Video</span>
                </div>
              </div>
              <div className="p-8">
                <span className="text-sm text-secondary font-semibold uppercase">Featured Story</span>
                <h3 className="text-2xl font-bold mt-2 mb-4">Soweto Fresh Market: From Struggling Vendor to Thriving Business</h3>
                <p className="mb-4">
                  When Maria Nkosi started her fresh produce stand in Soweto, she struggled with inventory management and access to fair financing. After joining MoveEasy's business support program and implementing our digital payment system, her business transformed.
                </p>
                <p className="mb-6">
                  Today, Soweto Fresh Market employs 12 people and has expanded to three locations, providing quality produce to the community while supporting local farmers.
                </p>
                <Button>Read Full Story</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Initiatives */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionTitle 
            title="Our Initiatives" 
            subtitle="Programs that create lasting impact and foster community development"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="text-primary text-3xl mb-4">
                <Users />
              </div>
              <h3 className="text-xl font-bold mb-3">Youth Entrepreneurship Academy</h3>
              <p className="text-gray-600 mb-4">
                Equipping young people with business skills, digital literacy, and mentorship to build the next generation of entrepreneurs.
              </p>
              <Button variant="outline">Learn More</Button>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="text-primary text-3xl mb-4">
                <Calendar />
              </div>
              <h3 className="text-xl font-bold mb-3">Women in Business Network</h3>
              <p className="text-gray-600 mb-4">
                Supporting women entrepreneurs through specialized resources, networking opportunities, and access to markets.
              </p>
              <Button variant="outline">Learn More</Button>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="text-primary text-3xl mb-4">
                <MapPin />
              </div>
              <h3 className="text-xl font-bold mb-3">Rural Outreach Program</h3>
              <p className="text-gray-600 mb-4">
                Bringing business tools and training to underserved rural communities to bridge the urban-rural digital divide.
              </p>
              <Button variant="outline">Learn More</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <SectionTitle 
            title="Upcoming Events" 
            subtitle="Join us for workshops, networking, and community events"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex mb-4">
                <div className="bg-primary text-white rounded-lg p-3 text-center mr-4">
                  <div className="text-sm">JUN</div>
                  <div className="text-2xl font-bold">15</div>
                </div>
                <div>
                  <h4 className="text-xl font-bold">Digital Marketing Workshop</h4>
                  <p className="text-gray-600">Cape Town Business Hub</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Learn practical digital marketing strategies to help your small business reach more customers online.
              </p>
              <Button variant="outline" className="w-full">Register Now</Button>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex mb-4">
                <div className="bg-primary text-white rounded-lg p-3 text-center mr-4">
                  <div className="text-sm">JUL</div>
                  <div className="text-2xl font-bold">08</div>
                </div>
                <div>
                  <h4 className="text-xl font-bold">Entrepreneur Networking Mixer</h4>
                  <p className="text-gray-600">Johannesburg Innovation Center</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Connect with fellow entrepreneurs, potential partners, and investors in this evening networking event.
              </p>
              <Button variant="outline" className="w-full">Register Now</Button>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex mb-4">
                <div className="bg-primary text-white rounded-lg p-3 text-center mr-4">
                  <div className="text-sm">JUL</div>
                  <div className="text-2xl font-bold">22</div>
                </div>
                <div>
                  <h4 className="text-xl font-bold">Fintech for Small Business Webinar</h4>
                  <p className="text-gray-600">Online Event</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Discover how fintech solutions can help streamline your business finances and improve cash flow.
              </p>
              <Button variant="outline" className="w-full">Register Now</Button>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex mb-4">
                <div className="bg-primary text-white rounded-lg p-3 text-center mr-4">
                  <div className="text-sm">AUG</div>
                  <div className="text-2xl font-bold">05</div>
                </div>
                <div>
                  <h4 className="text-xl font-bold">Community Market Day</h4>
                  <p className="text-gray-600">Soweto Community Center</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Showcase your products and services at our community market day, connecting local businesses with customers.
              </p>
              <Button variant="outline" className="w-full">Register Now</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <SectionTitle 
            title="Our Partners" 
            subtitle="Working together to create sustainable community development"
            centered
          />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {/* These would be actual partner logos in the implementation */}
            <div className="bg-gray-50 p-6 rounded-lg h-32 flex items-center justify-center">
              <div className="font-bold text-primary">Partner 1</div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg h-32 flex items-center justify-center">
              <div className="font-bold text-primary">Partner 2</div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg h-32 flex items-center justify-center">
              <div className="font-bold text-primary">Partner 3</div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg h-32 flex items-center justify-center">
              <div className="font-bold text-primary">Partner 4</div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg h-32 flex items-center justify-center">
              <div className="font-bold text-primary">Partner 5</div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg h-32 flex items-center justify-center">
              <div className="font-bold text-primary">Partner 6</div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg h-32 flex items-center justify-center">
              <div className="font-bold text-primary">Partner 7</div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg h-32 flex items-center justify-center">
              <div className="font-bold text-primary">Partner 8</div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved CTA */}
      <section className="py-16 bg-cta-pattern text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get Involved</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            There are many ways to support our community initiatives, from partnering with us to volunteering your time and expertise.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="btn-accent">Become a Partner</Button>
            <Button variant="outline" className="text-white border-white hover:bg-white/20">
              Volunteer With Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Community;
