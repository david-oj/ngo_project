import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-community.jpg";
import educationImage from "@/assets/education-program.jpg";
import healthcareImage from "@/assets/healthcare-program.jpg";
import womenEmpowermentImage from "@/assets/women-empowerment.jpg";

const News = () => {
  const featuredArticle = {
    title: "New Education Center Opens in Rural Guatemala",
    excerpt:
      "After 18 months of construction and community collaboration, our newest education center has opened its doors to 400 children in the remote highlands of Guatemala.",
    date: "March 15, 2024",
    location: "Guatemala",
    image: educationImage,
    category: "Education",
    readTime: "5 min read",
  };

  const articles = [
    {
      title: "Mobile Health Clinic Reaches 1,000 Patients in First Month",
      excerpt:
        "Our new mobile health clinic in Kenya has exceeded expectations, providing essential medical care to over 1,000 patients in its first month of operation.",
      date: "March 10, 2024",
      location: "Kenya",
      image: healthcareImage,
      category: "Healthcare",
      readTime: "3 min read",
    },
    {
      title: "Women Entrepreneurs Graduate from Business Training Program",
      excerpt:
        "50 women from rural Bangladesh have completed our intensive 6-month business training program, with 85% launching their own small businesses.",
      date: "March 5, 2024",
      location: "Bangladesh",
      image: womenEmpowermentImage,
      category: "Women Empowerment",
      readTime: "4 min read",
    },
    {
      title: "Emergency Response: Earthquake Relief in Turkey",
      excerpt:
        "Aid Pathways teams are on the ground providing emergency shelter, food, and medical supplies to earthquake survivors in southeastern Turkey.",
      date: "February 28, 2024",
      location: "Turkey",
      image: heroImage,
      category: "Emergency Response",
      readTime: "6 min read",
    },
    {
      title: "Clean Water Project Benefits 5,000 Villagers",
      excerpt:
        "The completion of our latest water well project in Tanzania now provides clean, safe drinking water to an entire community of 5,000 people.",
      date: "February 20, 2024",
      location: "Tanzania",
      image: heroImage,
      category: "Water & Sanitation",
      readTime: "4 min read",
    },
    {
      title: "Partnership Announcement: Local University Collaboration",
      excerpt:
        "We're excited to announce our new partnership with Universidad Nacional to enhance our teacher training programs across Central America.",
      date: "February 15, 2024",
      location: "Costa Rica",
      image: educationImage,
      category: "Partnerships",
      readTime: "3 min read",
    },
    {
      title: "Volunteer Spotlight: Meet Sarah Johnson",
      excerpt:
        "Learn about Sarah's incredible journey from corporate marketing to leading our women empowerment programs in rural communities.",
      date: "February 10, 2024",
      location: "Philippines",
      image: womenEmpowermentImage,
      category: "Volunteer Stories",
      readTime: "5 min read",
    },
  ];

  const categories = [
    "All News",
    "Education",
    "Healthcare",
    "Women Empowerment",
    "Emergency Response",
    "Water & Sanitation",
    "Partnerships",
    "Volunteer Stories",
  ];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      Education: "bg-blue-100 text-blue-700",
      Healthcare: "bg-green-100 text-green-700",
      "Women Empowerment": "bg-purple-100 text-purple-700",
      "Emergency Response": "bg-red-100 text-red-700",
      "Water & Sanitation": "bg-cyan-100 text-cyan-700",
      Partnerships: "bg-orange-100 text-orange-700",
      "Volunteer Stories": "bg-pink-100 text-pink-700",
    };
    return colors[category] ;
  };

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
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gradient">Latest News</h1>
          <p className="text-xl opacity-90">
            Stay updated on our programs and impact worldwide
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-muted border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                size="sm"
                className={`${
                  index === 0 ? "bg-primary hover:bg-primary-dark" : ""
                }
                ${getCategoryColor(category)}
                `}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Featured Story</h2>
          </div>

          <Card className="shadow-ngo-large overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-96 lg:h-auto">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(
                      featuredArticle.category
                    )}`}
                  >
                    {featuredArticle.category}
                  </span>
                </div>
              </div>

              <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                <h3 className="text-3xl font-bold mb-4">
                  {featuredArticle.title}
                </h3>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {featuredArticle.excerpt}
                </p>

                <div className="flex items-center gap-6 mb-6 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {featuredArticle.date}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    {featuredArticle.location}
                  </div>
                  <span>{featuredArticle.readTime}</span>
                </div>

                <Button className="self-start">
                  Read Full Story
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Latest Updates</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover the latest developments from our programs around the
              world.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <Card
                key={index}
                className="group hover:shadow-ngo-medium transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(
                        article.category
                      )}`}
                    >
                      {article.category}
                    </span>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {article.date}
                    </div>
                    <span>{article.readTime}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-1" />
                      {article.location}
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="p-0 h-auto font-medium group-hover:underline hover:bg-transparent group-hover:text-primary"
                    >
                      Read More <ArrowRight className="ml-1 w-3 h-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="default" variant="outline" className="bg-accent text-white hover:bg-accent/90">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-gradient">Stay Connected</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest updates on our
            programs and impact stories.
          </p>
          <div className="h-9 flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto ">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-white/80 border focus:text-white/80"
            />
            <Button className="bg-accent hover:bg-accent-light text-accent-foreground font-semibold px-6">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default News;
