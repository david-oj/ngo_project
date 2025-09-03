import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Eye, Heart, Users, Globe, Award } from 'lucide-react';
import heroImage from '@/assets/hero-community.jpg';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Compassion',
      description: 'We approach every situation with empathy and understanding, putting people first.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'We believe in the power of working together to create lasting change.'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Our mission extends across borders to reach those who need it most.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for the highest standards in everything we do.'
    }
  ];

  const milestones = [
    { year: '2015', event: 'Aid Pathways was founded with a mission to transform lives' },
    { year: '2017', event: 'Reached our first 1,000 beneficiaries across 3 countries' },
    { year: '2019', event: 'Launched our Women Empowerment program' },
    { year: '2021', event: 'Expanded to 10 countries and built 50 schools' },
    { year: '2023', event: 'Impacted over 25,000 lives and trained 500+ volunteers' }
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
          <div className="absolute inset-0 bg-primary/70" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">About Us</h1>
          <p className="text-xl opacity-90">Empowering communities through compassionate action</p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="shadow-ngo-medium">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                    <Target className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h2 className="text-3xl font-bold">Our Mission</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To empower underserved communities worldwide by providing access to quality education, 
                  healthcare, and economic opportunities that break the cycle of poverty and create 
                  sustainable positive change.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-ngo-medium">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mr-4">
                    <Eye className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <h2 className="text-3xl font-bold">Our Vision</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A world where every person, regardless of their circumstances, has the opportunity 
                  to thrive and reach their full potential through access to education, healthcare, 
                  and economic empowerment.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Story</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Aid Pathways was born from a simple belief: that every person deserves the chance to build 
                a better future. Founded in 2015 by a group of passionate humanitarians, we started with 
                a small education program in rural communities.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                What began as a grassroots initiative has grown into a global movement, touching lives 
                across 15 countries and empowering over 25,000 individuals. Our journey has been marked 
                by countless stories of transformation, resilience, and hope.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Today, we continue to expand our reach while staying true to our core values: treating 
                every person with dignity, working in partnership with local communities, and creating 
                solutions that last.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              These core principles guide everything we do and shape how we serve communities worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-ngo-medium transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary cta-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Journey</h2>
            <p className="text-xl text-muted-foreground">Key milestones in our mission to transform lives</p>
          </div>

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-center mb-8 last:mb-0">
                <div className="flex-shrink-0 w-24 text-right mr-8">
                  <span className="text-2xl font-bold text-primary">{milestone.year}</span>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-primary rounded-full mr-8 relative">
                  {index !== milestones.length - 1 && (
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-primary/30" />
                  )}
                </div>
                <div className="flex-1">
                  <p className="text-lg">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;