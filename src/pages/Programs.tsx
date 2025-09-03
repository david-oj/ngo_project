import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Stethoscope, UserCheck, Shield, ArrowRight } from 'lucide-react';
import educationImage from '@/assets/education-program.jpg';
import healthcareImage from '@/assets/healthcare-program.jpg';
import womenEmpowermentImage from '@/assets/women-empowerment.jpg';
import heroImage from '@/assets/hero-community.jpg';

const Programs = () => {
  const programs = [
    {
      title: 'Education for All',
      description: 'We believe education is the foundation of lasting change. Our education programs focus on building schools, training teachers, and providing learning materials to ensure every child has access to quality education.',
      image: educationImage,
      icon: BookOpen,
      stats: [
        { label: 'Schools Built', value: '100+' },
        { label: 'Students Reached', value: '15,000+' },
        { label: 'Teachers Trained', value: '500+' }
      ],
      initiatives: [
        'School construction and renovation',
        'Teacher training and development',
        'Scholarship programs for vulnerable children',
        'Adult literacy programs',
        'Digital learning initiatives'
      ]
    },
    {
      title: 'Healthcare Access',
      description: 'Healthcare is a human right. We work to ensure communities have access to essential medical services, clean water, and health education to build healthier, stronger communities.',
      image: healthcareImage,
      icon: Stethoscope,
      stats: [
        { label: 'Health Centers', value: '25' },
        { label: 'Patients Treated', value: '50,000+' },
        { label: 'Healthcare Workers', value: '200+' }
      ],
      initiatives: [
        'Mobile health clinics',
        'Maternal and child health programs',
        'Vaccination campaigns',
        'Clean water and sanitation projects',
        'Health education workshops'
      ]
    },
    {
      title: 'Women Empowerment',
      description: 'Empowering women creates ripple effects that strengthen entire communities. Our programs provide skills training, microfinance opportunities, and leadership development for women.',
      image: womenEmpowermentImage,
      icon: UserCheck,
      stats: [
        { label: 'Women Trained', value: '3,000+' },
        { label: 'Businesses Started', value: '800+' },
        { label: 'Families Impacted', value: '12,000+' }
      ],
      initiatives: [
        'Vocational skills training',
        'Microfinance and entrepreneurship',
        'Leadership development programs',
        'Women\'s health education',
        'Gender equality advocacy'
      ]
    },
    {
      title: 'Disaster Relief',
      description: 'When disasters strike, we respond rapidly to provide emergency aid and support long-term recovery efforts to help communities rebuild stronger than before.',
      image: heroImage,
      icon: Shield,
      stats: [
        { label: 'Emergency Responses', value: '50+' },
        { label: 'People Assisted', value: '75,000+' },
        { label: 'Countries Served', value: '15' }
      ],
      initiatives: [
        'Emergency food and water distribution',
        'Temporary shelter construction',
        'Medical emergency response',
        'Infrastructure rebuilding',
        'Community resilience building'
      ]
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
          <div className="absolute inset-0 bg-secondary/70" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Programs</h1>
          <p className="text-xl opacity-90">Creating lasting impact through focused interventions</p>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Transforming Communities</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our comprehensive programs address the root causes of poverty and inequality, 
              creating sustainable pathways to prosperity for communities worldwide.
            </p>
          </div>

          <div className="space-y-20">
            {programs.map((program, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="relative h-96 rounded-lg overflow-hidden shadow-ngo-medium">
                    <img 
                      src={program.image} 
                      alt={program.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-6 left-6 w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                      <program.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <h3 className="text-3xl font-bold mb-6">{program.title}</h3>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    {program.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-6 mb-8">
                    {program.stats.map((stat, statIndex) => (
                      <div key={statIndex} className="text-center">
                        <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Initiatives */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold mb-4">Key Initiatives:</h4>
                    <ul className="space-y-2">
                      {program.initiatives.map((initiative, initIndex) => (
                        <li key={initIndex} className="flex items-center">
                          <ArrowRight className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                          <span className="text-muted-foreground">{initiative}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className="bg-primary hover:bg-primary-dark text-primary-foreground">
                    Learn More About This Program
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Every program we run is made possible by the generous support of donors and volunteers like you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent-light text-accent-foreground font-semibold px-8 py-4"
            >
              Support Our Programs
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-white/10 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4"
            >
              Volunteer With Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Programs;