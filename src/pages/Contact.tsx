
import { Mail, Phone, Clock, MapPin } from 'lucide-react';
import HeroBanner from '@/components/HeroBanner';
import SectionTitle from '@/components/SectionTitle';
import ContactForm from '@/components/ContactForm';

const Contact = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroBanner
        title="Contact Us"
        subtitle="Get in touch with our team to learn how we can help your business grow"
      />

      {/* Contact Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionTitle 
                title="Get In Touch" 
                subtitle="We'd love to hear from you. Fill out the form and we'll get back to you as soon as possible."
              />
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <Mail className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Email Us</h4>
                    <p className="text-gray-600">info@moveeasy.com</p>
                    <p className="text-gray-600">support@moveeasy.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <Phone className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Call Us</h4>
                    <p className="text-gray-600">+27 21 123 4567</p>
                    <p className="text-gray-600">+27 82 987 6543</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <MapPin className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Visit Us</h4>
                    <p className="text-gray-600">123 Business Avenue</p>
                    <p className="text-gray-600">Cape Town, South Africa, 8001</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <Clock className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Business Hours</h4>
                    <p className="text-gray-600">Monday - Friday: 8:00 AM - 5:00 PM</p>
                    <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-bold mb-2">Need Immediate Assistance?</h4>
                <p className="text-gray-600 mb-4">
                  For urgent inquiries, please call our support hotline at +27 82 987 6543 during business hours.
                </p>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-white pb-16">
        <div className="container-custom">
          <div className="bg-gray-300 w-full h-96 rounded-lg flex items-center justify-center">
            <span className="text-gray-600 text-lg">Map Location Would Be Displayed Here</span>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <SectionTitle 
            title="Frequently Asked Questions" 
            subtitle="Find quick answers to common questions about our services"
            centered
          />
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="text-lg font-bold mb-2">How do I schedule a consultation?</h4>
                <p className="text-gray-600">
                  You can schedule a consultation by filling out the contact form above, calling our office, or sending us an email. One of our team members will get back to you within 24 hours to arrange a suitable time.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="text-lg font-bold mb-2">What areas do you serve?</h4>
                <p className="text-gray-600">
                  We currently provide services throughout the Western Cape, Gauteng, and KwaZulu-Natal provinces, with plans to expand to other regions. We also offer virtual consultations for clients in other areas.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="text-lg font-bold mb-2">Do you offer any free resources for businesses?</h4>
                <p className="text-gray-600">
                  Yes! We offer a range of free resources including articles, guides, and webinars. Check out our Resources page to access these materials and sign up for our newsletter to stay informed about upcoming free events.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="text-lg font-bold mb-2">How much do your services cost?</h4>
                <p className="text-gray-600">
                  Our service costs vary depending on your specific needs and the scale of your business. We're committed to making our solutions accessible and offer flexible pricing options. Contact us for a personalized quote.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
