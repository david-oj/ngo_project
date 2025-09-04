import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { useState } from 'react';
import heroImage from '@/assets/hero-community.jpg';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Global Headquarters',
      details: [
        '123 Humanitarian Avenue',
        'Global City, GC 12345',
        'United States'
      ]
    },
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: [
        'Main: +1 (555) 123-4567',
        'Donations: +1 (555) 123-4568',
        'Volunteers: +1 (555) 123-4569'
      ]
    },
    {
      icon: Mail,
      title: 'Email Addresses',
      details: [
        'info@aidpathways.org',
        'donations@aidpathways.org',
        'volunteer@aidpathways.org'
      ]
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: [
        'Monday - Friday: 9:00 AM - 6:00 PM',
        'Saturday: 10:00 AM - 4:00 PM',
        'Sunday: Closed'
      ]
    }
  ];

  const regionalOffices = [
    {
      region: 'Latin America',
      city: 'Guatemala City, Guatemala',
      phone: '+502 2345-6789',
      email: 'latam@aidpathways.org'
    },
    {
      region: 'East Africa',
      city: 'Nairobi, Kenya',
      phone: '+254 20 123-4567',
      email: 'eastafrica@aidpathways.org'
    },
    {
      region: 'South Asia',
      city: 'Dhaka, Bangladesh',
      phone: '+880 2 9876-5432',
      email: 'southasia@aidpathways.org'
    },
    {
      region: 'Southeast Asia',
      city: 'Manila, Philippines',
      phone: '+63 2 8765-4321',
      email: 'seasia@aidpathways.org'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-112 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-secondary/70" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gradient">Contact Us</h1>
          <p className="text-xl opacity-90">We'd love to hear from you. Let's work together to create change.</p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="lg:flex flex-row-reverse gap-12">
            {/* Contact Form */}
            <Card className="shadow-ngo-medium flex-1">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                <p className="text-muted-foreground mb-8">
                  Send us a message and we'll respond within 24 hours. Whether you have questions 
                  about our programs, want to volunteer, or need assistance, we're here to help.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What is this regarding?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us more about your inquiry..."
                      rows={6}
                    />
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-primary-dark">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8 flex-1 max-lg:mt-12">
              <div>
                <h2 className="text-3xl font-bold mb-6 ">Contact Information</h2>
                <p className="text-muted-foreground mb-8">
                  Find the best way to reach us. Our team is available to assist you with 
                  any questions or support you need.
                </p>
              </div>

              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="hover:shadow-ngo-soft transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                          <info.icon className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2">{info.title}</h3>
                          {info.details.map((detail, detailIndex) => (
                            <p key={detailIndex} className="text-muted-foreground text-sm">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Social Media */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <Facebook className="w-8 h-8 text-muted-foreground hover:text-primary transition-colors cursor-pointer" />
                    <Twitter className="w-8 h-8 text-muted-foreground hover:text-primary transition-colors cursor-pointer" />
                    <Instagram className="w-8 h-8 text-muted-foreground hover:text-primary transition-colors cursor-pointer" />
                    <Linkedin className="w-8 h-8 text-muted-foreground hover:text-primary transition-colors cursor-pointer" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Offices */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Regional Offices</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We have regional offices around the world to better serve the communities we work with.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {regionalOffices.map((office, index) => (
              <Card key={index} className="hover:shadow-ngo-medium transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-semibold mb-2 text-primary">{office.region}</h3>
                  <p className="text-muted-foreground mb-4">{office.city}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center">
                      <Phone className="w-4 h-4 mr-2 text-muted-foreground" />
                      <span>{office.phone}</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <Mail className="w-4 h-4 mr-2 text-muted-foreground" />
                      <span className="text-primary hover:underline cursor-pointer">
                        {office.email}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find quick answers to common questions about our work and how you can get involved.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "How can I volunteer with Aid Pathways?",
                answer: "You can apply through our volunteer page. We offer both field placements and remote opportunities based on your skills and availability."
              },
              {
                question: "Where does my donation go?",
                answer: "85% of donations go directly to programs, 10% to operational costs, and 5% to fundraising efforts. We provide detailed impact reports to all donors."
              },
              {
                question: "Can I visit your project sites?",
                answer: "Yes! We organize donor and volunteer trips to project sites. Contact us to learn about upcoming opportunities to visit our programs."
              },
              {
                question: "How do you measure your impact?",
                answer: "We use rigorous monitoring and evaluation systems, including third-party assessments, community feedback, and quantitative metrics to track our progress."
              }
            ].map((faq, index) => (
              <Card key={index} className="hover:shadow-ngo-soft transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3 text-lg">{faq.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;