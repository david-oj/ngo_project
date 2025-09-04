import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { 
  ArrowRight, 
  Users, 
  Heart, 
  Globe, 
  BookOpen, 
  Stethoscope, 
  UserCheck, 
  Shield,
  Star,
  Award,
  TrendingUp,
  Mail,
  CheckCircle,
  Play,
  Quote
} from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import heroImage from '@/assets/hero-community.jpg';
import educationImage from '@/assets/education-program.jpg';
import healthcareImage from '@/assets/healthcare-program.jpg';
import womenEmpowermentImage from '@/assets/women-empowerment.jpg';

const Home = () => {
  // const stats = [
  //   { icon: Users, value: '125,000+', label: 'Lives Transformed', suffix: '' },
  //   { icon: Globe, value: '24', label: 'Countries Served', suffix: '' },
  //   { icon: Heart, value: '2,500+', label: 'Active Volunteers', suffix: '' },
  //   { icon: BookOpen, value: '450+', label: 'Educational Programs', suffix: '' },
  // ];

  const programs = [
    {
      title: 'Education for All',
      description: 'Empowering communities through quality education, literacy programs, and scholarship opportunities for underprivileged children.',
      image: educationImage,
      icon: BookOpen,
      impact: '25,000+ children educated',
      color: 'primary'
    },
    {
      title: 'Healthcare Access',
      description: 'Delivering comprehensive medical care, preventive health services, and medical training to underserved regions.',
      image: healthcareImage,
      icon: Stethoscope,
      impact: '150,000+ patients treated',
      color: 'secondary'
    },
    {
      title: 'Women Empowerment',
      description: 'Supporting women through vocational training, microfinance, and leadership development programs.',
      image: womenEmpowermentImage,
      icon: UserCheck,
      impact: '8,000+ women empowered',
      color: 'accent'
    },
    {
      title: 'Emergency Relief',
      description: 'Rapid disaster response, emergency supplies distribution, and long-term recovery support for affected communities.',
      image: heroImage,
      icon: Shield,
      impact: '50+ disaster responses',
      color: 'gold'
    },
  ];

  const testimonials = [
    {
      quote: "Aid Pathways transformed our village school. Now our children have access to quality education and a brighter future.",
      author: "Maria Santos",
      role: "Village Leader, Guatemala",
      rating: 5
    },
    {
      quote: "The healthcare program saved my daughter's life. We are forever grateful for the compassionate care and support.",
      author: "Ahmed Hassan",
      role: "Father, Sudan",
      rating: 5
    },
    {
      quote: "Through the women's empowerment program, I started my own business and now support my entire family.",
      author: "Priya Sharma",
      role: "Entrepreneur, India",
      rating: 5
    }
  ];

  // const partners = [
  //   'United Nations', 'World Health Organization', 'UNICEF', 'Red Cross',
  //   'Doctors Without Borders', 'Save the Children', 'Oxfam', 'USAID'
  // ];

  const newsItems = [
    {
      title: 'New Education Center Opens in Kenya',
      excerpt: 'Our latest facility will serve over 500 children in rural Kenya, providing modern learning resources and qualified teachers.',
      date: 'March 15, 2024',
      category: 'Education'
    },
    {
      title: 'Emergency Response: Turkey Earthquake Relief',
      excerpt: 'Aid Pathways mobilizes rapid response team to provide emergency shelter, medical care, and supplies to earthquake survivors.',
      date: 'March 10, 2024',
      category: 'Emergency Relief'
    },
    {
      title: 'Women\'s Cooperative Celebrates 1000th Graduate',
      excerpt: 'Our vocational training program reaches milestone as 1000th woman completes skills training and starts her own business.',
      date: 'March 5, 2024',
      category: 'Women Empowerment'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Premium Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110 transition-transform duration-[10s] ease-out"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 hero-gradient opacity-85" />
        </div>
        
        {/* Floating elements for visual interest */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-40 right-20 w-32 h-32 bg-accent/20 rounded-full blur-2xl animate-pulse delay-1000" />
        
        <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
            <Award className="w-4 h-4 mr-2" />
            Trusted by 125,000+ people worldwide
          </div>
          
          <h1 className="font-merriweather font-black mb-8 text-white leading-[1.1]">
            Transforming Lives 
            <br />
            <span className="text-transparent bg-gradient-to-r from-accent-light to-gold bg-clip-text">
             Through Compassion
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto opacity-95 font-lato leading-relaxed">
            Join our global mission to provide education, healthcare, and sustainable development 
            to communities that need it most. Every contribution creates lasting change.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="btn-premium cta-gradient text-white font-semibold px-10 py-6 text-lg rounded-xl min-w-[200px] shadow-premium-xl"
            >
              Donate Now
              <Heart className="ml-3 w-6 h-6" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="btn-premium bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white hover:text-primary font-semibold px-10 py-6 text-lg rounded-xl min-w-[200px]"
            >
              Watch Our Story
              <Play className="ml-3 w-6 h-6" />
            </Button>
          </div>
          
          <div className="mt-16 flex justify-center items-center space-x-8 opacity-80">
            <div className="text-center">
              <div className="text-3xl font-bold">125K+</div>
              <div className="text-sm">Lives Changed</div>
            </div>
            <div className="w-px h-12 bg-white/30" />
            <div className="text-center">
              <div className="text-3xl font-bold">24</div>
              <div className="text-sm">Countries</div>
            </div>
            <div className="w-px h-12 bg-white/30" />
            <div className="text-center">
              <div className="text-3xl font-bold">15+</div>
              <div className="text-sm">Years Impact</div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics Section */}
      {/* <section className="section-padding bg-muted">
        <div className="container-premium">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center group animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-20 h-20 mx-auto mb-6 cta-gradient rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-premium-medium">
                  <stat.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-merriweather font-bold text-primary mb-3 animate-counter">
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Mission Statement - Enhanced */}
      <section className="section-padding">
        <div className="container-premium">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-medium mb-6">
                <TrendingUp className="w-4 h-4 mr-2" />
                Our Mission
              </div>
              <h2 className="font-merriweather mb-8 text-foreground">
                Building Bridges to 
                <span className="text-premium"> Better Futures</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                At Aid Pathways, we believe sustainable change comes from empowering communities 
                with the tools, knowledge, and opportunities they need to thrive. Our holistic 
                approach addresses root causes, not just symptoms.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0" />
                  <span className="text-lg">Sustainable community development</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0" />
                  <span className="text-lg">Evidence-based interventions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0" />
                  <span className="text-lg">Local partnership and empowerment</span>
                </div>
              </div>
            </div>
            <div className="animate-slide-in-right">
              <div className="relative">
                <img 
                  src={heroImage} 
                  alt="Community development in action"
                  className="rounded-2xl shadow-premium-2xl"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section - Enhanced */}
      <section className="section-padding bg-muted">
        <div className="container-premium">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-secondary/10 rounded-full text-secondary font-medium mb-6">
              <Globe className="w-4 h-4 mr-2" />
              Our Programs
            </div>
            <h2 className="font-merriweather mb-8 text-foreground">
              Where We Make
              <span className="text-premium"> A Difference</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our comprehensive programs address the most critical needs in communities worldwide, 
              creating sustainable change that lasts for generations.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <Card 
                key={index} 
                className="card-premium group overflow-hidden border-0"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className={`absolute top-6 left-6 w-14 h-14 bg-${program.color} rounded-xl flex items-center justify-center shadow-premium-medium`}>
                    <program.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <div className="text-sm font-medium opacity-90">{program.impact}</div>
                  </div>
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-merriweather font-bold mb-4 text-foreground">
                    {program.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {program.description}
                  </p>
                  <Button 
                    variant="outline" 
                    className="group/btn hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding">
        <div className="container-premium">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-gold/10 rounded-full text-gold-foreground font-medium mb-6">
              <Quote className="w-4 h-4 mr-2" />
              Success Stories
            </div>
            <h2 className="font-merriweather mb-8 text-foreground">
              Voices of <span className="text-premium">Transformation</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="card-premium p-8 text-center border-0"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex justify-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-gold fill-current" />
                  ))}
                </div>
                <blockquote className="text-lg mb-6 text-muted-foreground italic leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      {/* <section className="py-16 bg-muted">
        <div className="container-premium">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-merriweather font-bold mb-4 text-foreground">
              Trusted Partners & Collaborators
            </h3>
            <p className="text-muted-foreground">
              Working together with leading organizations to maximize our impact
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <div 
                key={index}
                className="flex items-center justify-center p-6 bg-white rounded-xl shadow-premium-soft hover:shadow-premium-medium transition-all duration-300"
              >
                <span className="text-sm font-medium text-muted-foreground text-center">
                  {partner}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Latest News Section */}
      <section className="section-padding">
        <div className="container-premium">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-accent/10 rounded-full text-accent font-medium mb-6">
              <TrendingUp className="w-4 h-4 mr-2" />
              Latest Updates
            </div>
            <h2 className="font-merriweather mb-8 text-foreground">
              Recent <span className="text-premium">Impact Stories</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {newsItems.map((item, index) => (
              <Card 
                key={index} 
                className="card-premium border-0 overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-4">
                    {item.category}
                  </div>
                  <h3 className="text-xl font-merriweather font-bold mb-3 text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {item.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{item.date}</span>
                    <Button variant="ghost" size="sm" className="text-primary hover:text-primary-dark">
                      Read More <ArrowRight className="ml-1 w-3 h-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-muted">
        <div className="container-premium">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-secondary/10 rounded-full text-secondary font-medium mb-6">
              <Mail className="w-4 h-4 mr-2" />
              Stay Connected
            </div>
            <h2 className="text-3xl font-merriweather font-bold mb-6 text-foreground">
              Get Impact Updates
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Join our community and receive monthly updates on our programs, 
              success stories, and ways to make a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-1 px-6 py-3 rounded-xl border-2 border-border focus:border-primary"
              />
              <Button className="cta-gradient text-white px-8 py-3 rounded-xl font-semibold">
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              No spam. Unsubscribe at any time. Privacy policy protected.
            </p>
          </div>
        </div>
      </section>

      {/* Premium CTA Section */}
      <section className="section-padding cta-gradient text-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-40 h-40 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-60 h-60 bg-white/5 rounded-full blur-3xl" />
        </div>
        
        <div className="container-premium relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="font-merriweather font-bold mb-8 text-white">
              Ready to Make a Lasting Impact?
            </h2>
            <p className="text-xl mb-12 opacity-95 leading-relaxed max-w-3xl mx-auto">
              Every contribution, whether through donation, volunteering, or advocacy, 
              creates ripples of positive change that transform entire communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                size="lg" 
                className="btn-premium bg-white text-primary hover:bg-neutral-100 font-bold px-12 py-6 text-lg rounded-xl shadow-premium-xl min-w-[220px]"
              >
                Start Donating Today
                <Heart className="ml-3 w-6 h-6" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="btn-premium bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white hover:text-primary font-bold px-12 py-6 text-lg rounded-xl min-w-[220px]"
              >
                Become a Volunteer
                <Users className="ml-3 w-6 h-6" />
              </Button>
            </div>
            
            {/* <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="opacity-90">
                <div className="text-3xl font-bold mb-2">$25</div>
                <div className="text-sm">Provides meals for 5 children</div>
              </div>
              <div className="opacity-90">
                <div className="text-3xl font-bold mb-2">$100</div>
                <div className="text-sm">Funds a month of education</div>
              </div>
              <div className="opacity-90">
                <div className="text-3xl font-bold mb-2">$500</div>
                <div className="text-sm">Supports a family for 3 months</div>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;