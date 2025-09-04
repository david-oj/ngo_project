import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Quote, Star, MapPin } from 'lucide-react';
import heroImage from '@/assets/hero-community.jpg';
import educationImage from '@/assets/education-program.jpg';

const Impact = () => {
  const globalStats = [
    { value: '25,847', label: 'Lives Directly Impacted' },
    { value: '15', label: 'Countries Served' },
    { value: '127', label: 'Communities Reached' },
    { value: '583', label: 'Active Volunteers' },
    { value: '108', label: 'Schools & Health Centers Built' },
    { value: '$2.4M', label: 'Total Program Investment' }
  ];

  const testimonials = [
    {
      name: 'Maria Santos',
      location: 'Guatemala',
      program: 'Education Program',
      image: educationImage,
      quote: "Thanks to Aid Pathways, my daughter now has access to quality education. The new school in our village has opened doors we never thought possible. She dreams of becoming a doctor, and now I believe she can achieve it."
    },
    {
      name: 'Dr. James Okonkwo',
      location: 'Nigeria',
      program: 'Healthcare Access',
      image: heroImage,
      quote: "The mobile health clinic has transformed healthcare in our region. We can now provide prenatal care, vaccinations, and treatment for diseases that were previously untreatable in our community."
    },
    {
      name: 'Fatima Al-Rashid',
      location: 'Jordan',
      program: 'Women Empowerment',
      image: heroImage,
      quote: "The vocational training program gave me the skills to start my own tailoring business. Now I employ five other women and support my family with dignity and independence."
    }
  ];

  const successStories = [
    {
      title: 'Clean Water for 50,000 People',
      location: 'Kenya & Tanzania',
      description: 'Our water and sanitation projects have provided clean, safe drinking water to over 50,000 people across East Africa, reducing waterborne diseases by 85% in target communities.',
      impact: [
        '25 water wells constructed',
        '85% reduction in waterborne illness',
        '200% increase in school attendance',
        '15,000 women gained 4+ hours daily'
      ]
    },
    {
      title: 'Educational Revolution in Rural Areas',
      location: 'Guatemala & Honduras',
      description: 'By building schools and training teachers, we\'ve dramatically improved literacy rates and educational outcomes in remote communities across Central America.',
      impact: [
        '45 schools built or renovated',
        '300 teachers trained',
        '8,000 children now in school',
        '90% graduation rate improvement'
      ]
    },
    {
      title: 'Women Leading Change',
      location: 'Bangladesh & India',
      description: 'Our women empowerment programs have enabled thousands of women to become entrepreneurs, community leaders, and advocates for change in their societies.',
      impact: [
        '2,500 women trained in skills',
        '800 businesses established',
        '60% increase in household income',
        '150 women in leadership roles'
      ]
    }
  ];

  const impactByNumbers = [
    { category: 'Education', stats: [
      { label: 'Students Educated', value: '15,240' },
      { label: 'Schools Built', value: '108' },
      { label: 'Teachers Trained', value: '567' },
      { label: 'Scholarship Recipients', value: '892' }
    ]},
    { category: 'Healthcare', stats: [
      { label: 'Patients Treated', value: '48,350' },
      { label: 'Health Centers', value: '32' },
      { label: 'Vaccinations Given', value: '25,000+' },
      { label: 'Healthcare Workers', value: '234' }
    ]},
    { category: 'Community Development', stats: [
      { label: 'Water Wells Built', value: '67' },
      { label: 'Families with Clean Water', value: '12,500' },
      { label: 'Emergency Responses', value: '89' },
      { label: 'Communities Served', value: '127' }
    ]}
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
          <div className="absolute inset-0 bg-primary/70" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gradient">Our Impact</h1>
          <p className="text-xl opacity-90">Measuring the difference we make together</p>
        </div>
      </section>

      {/* Global Impact Stats */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Global Impact at a Glance</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These numbers represent real lives changed, communities strengthened, and hope restored across the globe.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {globalStats.map((stat, index) => (
              <div key={index} className="text-center animate-scale-in">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Success Stories</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real stories of transformation from the communities we serve.
            </p>
          </div>

          <div className="space-y-16">
            {successStories.map((story, index) => (
              <Card key={index} className="shadow-ngo-medium">
                <CardContent className="p-8 md:p-12">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="flex items-center mb-4">
                        <MapPin className="w-5 h-5 text-primary mr-2" />
                        <span className="text-primary font-medium">{story.location}</span>
                      </div>
                      <h3 className="text-3xl font-bold mb-4">{story.title}</h3>
                      <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                        {story.description}
                      </p>
                    </div>
                    
                    <div className="bg-primary/5 p-6 rounded-lg">
                      <h4 className="font-semibold mb-4 text-lg">Key Achievements:</h4>
                      <ul className="space-y-3">
                        {story.impact.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-center">
                            <Star className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                            <span className="text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Voices from the Field</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Hear directly from the people whose lives have been transformed by our programs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-ngo-medium transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <Quote className="w-8 h-8 text-primary mb-4" />
                  </div>
                  <p className="text-muted-foreground mb-6 italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="border-t pt-6">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                        <span className="text-primary-foreground font-semibold">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                        <div className="text-sm text-primary">{testimonial.program}</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact by Program */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Impact by Program</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Detailed breakdown of our achievements across different focus areas.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {impactByNumbers.map((program, index) => (
              <Card key={index} className="hover:shadow-ngo-medium transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-center text-primary">
                    {program.category}
                  </h3>
                  <div className="space-y-4">
                    {program.stats.map((stat, statIndex) => (
                      <div key={statIndex} className="flex justify-between items-center">
                        <span className="text-muted-foreground">{stat.label}</span>
                        <span className="font-semibold text-lg">{stat.value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-gradient">Be Part of Our Next Success Story</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            These achievements are only possible with the support of people like you. Join us in creating even greater impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent-light text-accent-foreground font-semibold px-8 py-4"
            >
              Donate Today
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-white/10 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4"
            >
              Volunteer Now
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Impact;