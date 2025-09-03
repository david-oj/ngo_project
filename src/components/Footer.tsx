import { Link } from 'react-router-dom';
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-neutral-700 text-neutral-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <Heart className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold">Aid Pathways</span>
            </div>
            <p className="text-neutral-300 text-sm">
              Empowering communities through education, healthcare, and sustainable development programs worldwide.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-neutral-400 hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-neutral-400 hover:text-primary cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-neutral-400 hover:text-primary cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-neutral-400 hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-neutral-300 hover:text-primary transition-colors text-sm">About Us</Link></li>
              <li><Link to="/programs" className="text-neutral-300 hover:text-primary transition-colors text-sm">Our Programs</Link></li>
              <li><Link to="/impact" className="text-neutral-300 hover:text-primary transition-colors text-sm">Impact Stories</Link></li>
              <li><Link to="/news" className="text-neutral-300 hover:text-primary transition-colors text-sm">Latest News</Link></li>
              <li><Link to="/contact" className="text-neutral-300 hover:text-primary transition-colors text-sm">Contact Us</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Programs</h3>
            <ul className="space-y-2">
              <li><span className="text-neutral-300 text-sm">Education for All</span></li>
              <li><span className="text-neutral-300 text-sm">Healthcare Access</span></li>
              <li><span className="text-neutral-300 text-sm">Women Empowerment</span></li>
              <li><span className="text-neutral-300 text-sm">Disaster Relief</span></li>
              <li><span className="text-neutral-300 text-sm">Community Development</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-neutral-400" />
                <span className="text-neutral-300 text-sm">123 Humanitarian Ave, Global City, GC 12345</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-neutral-400" />
                <span className="text-neutral-300 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-neutral-400" />
                <span className="text-neutral-300 text-sm">info@aidpathways.org</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-600 mt-8 pt-8 text-center">
          <p className="text-neutral-400 text-sm">
            © 2024 Aid Pathways. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;