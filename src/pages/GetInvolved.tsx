import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Users, Building, Handshake, DollarSign, Clock, Globe, Star } from 'lucide-react';
import heroImage from '@/assets/hero-community.jpg';

const GetInvolved = () => {
  const volunteerOpportunities = [
    {
      title: 'Field Volunteer',
      duration: '3-12 months',
      location: 'Various countries',
      description: 'Work directly with communities on education, healthcare, or development projects.',
      icon: Globe,
      requirements: ['Relevant experience', 'Language skills', 'Cultural sensitivity']
    },
    {
      title: 'Virtual Volunteer',
      duration: 'Flexible',
      location: 'Remote',
      description: 'Contribute your professional skills remotely to support our programs.',
      icon: Users,
      requirements: ['Professional expertise', 'Regular availability', 'Strong communication']
    },
    {
      title: 'Local Ambassador',
      duration: 'Ongoing',
      location: 'Your city',
      description: 'Represent Aid Pathways in your community and organize fundraising events.',
      icon: Star,
      requirements: ['Leadership skills', 'Local network', 'Passion for our cause']
    }
  ];

  const donationOptions = [
    {
      title: 'Monthly Giving',
      description: 'Provide sustained support that helps us plan long-term programs effectively.',
      icon: Heart,
      impact: 'Your monthly gift compounds to create lasting change',
      amounts: ['$25/month', '$50/month', '$100/month', 'Custom amount']
    },
    {
      title: 'One-Time Donation',
      description: 'Make an immediate impact with a single donation of any amount.',
      icon: DollarSign,
      impact: 'Every dollar goes directly to programs that transform lives',
      amounts: ['$50', '$100', '$250', '$500', '$1000']
    },
    {
      title: 'Emergency Response',
      description: 'Support our rapid response efforts during disasters and humanitarian crises.',
      icon: Clock,
      impact: 'Your emergency donation provides critical aid when it\'s needed most',
      amounts: ['$100', '$250', '$500', '$1000+']
    }
  ];

  const partnerships = [
    {
      type: 'Corporate Partnership',
      description: 'Partner with us to create meaningful CSR programs that align with your values.',
      icon: Building,
      benefits: ['Employee engagement', 'Brand alignment', 'Impact reporting', 'Tax benefits']
    },
    {
      type: 'Foundation Partnership',
      description: 'Collaborate on large-scale initiatives that address systemic challenges.',
      icon: Handshake,
      benefits: ['Strategic alignment', 'Amplified impact', 'Shared expertise', 'Joint recognition']
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden mt-16">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-accent/70" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Get Involved</h1>
          <p className="text-xl opacity-90">Join us in creating lasting change around the world</p>
        </div>
      </section>

      {/* Ways to Help */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Ways to Make a Difference</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Whether you can donate, volunteer, or partner with us, there are many ways to support our mission
              and help transform lives around the world.
            </p>
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Volunteer Opportunities</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Use your skills and passion to directly impact communities and gain meaningful experience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {volunteerOpportunities.map((opportunity, index) => (
              <Card key={index} className="hover:shadow-ngo-medium transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <opportunity.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-center">{opportunity.title}</h3>
                  <div className="text-center mb-4">
                    <span className="text-primary font-medium">{opportunity.duration}</span>
                    <span className="text-muted-foreground"> • </span>
                    <span className="text-muted-foreground">{opportunity.location}</span>
                  </div>
                  <p className="text-muted-foreground mb-6 text-center">{opportunity.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Requirements:</h4>
                    <ul className="space-y-1">
                      {opportunity.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="text-sm text-muted-foreground">• {req}</li>
                      ))}
                    </ul>
                  </div>

                  <Button className="w-full">Apply Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" variant="outline" className="px-8">
              View All Volunteer Positions
            </Button>
          </div>
        </div>
      </section>

      {/* Donation Options */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Support Our Work</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your financial support enables us to expand our programs and reach more communities in need.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {donationOptions.map((option, index) => (
              <Card key={index} className="hover:shadow-ngo-medium transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                    <option.icon className="w-8 h-8 text-secondary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-center">{option.title}</h3>
                  <p className="text-muted-foreground mb-6 text-center">{option.description}</p>
                  
                  <div className="bg-muted p-4 rounded-lg mb-6">
                    <p className="text-sm font-medium text-center">{option.impact}</p>
                  </div>

                  <div className="space-y-2 mb-6">
                    {option.amounts.map((amount, amountIndex) => (
                      <Button 
                        key={amountIndex} 
                        variant="outline" 
                        className="w-full justify-center"
                        size="sm"
                      >
                        {amount}
                      </Button>
                    ))}
                  </div>

                  <Button className="w-full bg-accent hover:bg-accent-light">
                    Donate Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Opportunities */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Partnership Opportunities</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join forces with us to create larger-scale impact and meaningful change.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {partnerships.map((partnership, index) => (
              <Card key={index} className="hover:shadow-ngo-medium transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                      <partnership.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-2xl font-semibold">{partnership.type}</h3>
                  </div>

                  <p className="text-muted-foreground mb-6 text-lg">{partnership.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-4">Partnership Benefits:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {partnership.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                          <span className="text-sm text-muted-foreground">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full">Learn More</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 warm-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Join Our Mission?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Take the first step towards making a meaningful difference in the lives of those who need it most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-neutral-100 font-semibold px-8 py-4"
            >
              Start Volunteering
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-white/10 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4"
            >
              Make a Donation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GetInvolved;