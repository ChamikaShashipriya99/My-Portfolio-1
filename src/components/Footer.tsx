import React from 'react';
import { Heart, ArrowUp, Mail, Phone, MapPin, Github, Linkedin, Twitter, MessageCircle, ExternalLink } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Experience', id: 'experience' },
    { name: 'Contact', id: 'contact' }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/ChamikaShashipriya99',
      icon: Github,
      color: 'hover:text-gray-300'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com',
      icon: Linkedin,
      color: 'hover:text-blue-400'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com',
      icon: Twitter,
      color: 'hover:text-blue-400'
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/94750471511',
      icon: MessageCircle,
      color: 'hover:text-green-400'
    }
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'chamikashashipriya3@gmail.com',
      link: 'mailto:chamikashashipriya3@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+94 70 412 0358',
      link: 'tel:+94704120358'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Ambalangoda, Sri Lanka',
      link: '#'
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.querySelector(`#${id}`);
    if (element) {
      // Add visual feedback for the clicked link
      const activeLink = document.querySelector(`[data-section="${id}"]`);
      if (activeLink) {
        activeLink.classList.add('text-blue-400', 'scale-105');
        setTimeout(() => {
          activeLink.classList.remove('text-blue-400', 'scale-105');
        }, 300);
      }

      // Smooth scroll with easing
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });

      // Add highlight effect to the target section
      element.classList.add('ring-2', 'ring-blue-500', 'ring-opacity-50');
      setTimeout(() => {
        element.classList.remove('ring-2', 'ring-blue-500', 'ring-opacity-50');
      }, 2000);
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-16 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-circuit opacity-10"></div>
      
      {/* Floating Code Elements */}
      <div className="floating-code top-32 left-8">const footer = "complete";</div>
      <div className="floating-code top-64 right-12">function thanks() {"{ return gratitude; }"}</div>
      <div className="floating-code bottom-32 left-16">git push origin main</div>
      
      {/* Glowing Orbs */}
      <div className="glow-orb top-1/4 left-1/4"></div>
      <div className="glow-orb bottom-1/3 right-1/4"></div>
      
      {/* Matrix-style Digital Rain */}
      <div className="matrix-rain left-16" style={{ animationDelay: '0s' }}>end of page</div>
      <div className="matrix-rain right-16" style={{ animationDelay: '2s' }}>function scrollTop()</div>
      
      {/* Particle System */}
      <div className="particle top-1/3 left-1/3" style={{ animationDelay: '1s' }}></div>
      <div className="particle top-2/3 right-1/3" style={{ animationDelay: '3s' }}></div>
      <div className="particle bottom-1/4 left-2/3" style={{ animationDelay: '5s' }}></div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-all duration-200 hover:scale-110 z-20"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h3 className="text-3xl font-bold text-white mb-3">
                  Chamika Shashipriya
                </h3>
                <p className="text-gray-400 text-lg mb-4">
                  Full Stack Developer & UI/UX Designer
                </p>
                <p className="text-gray-500 leading-relaxed">
                  Passionate about creating modern, scalable web applications with clean code and exceptional user experiences. 
                  Always learning and adapting to new technologies.
                </p>
              </div>
              
              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Connect With Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-gray-800 text-gray-400 rounded-lg transition-all duration-200 hover:scale-110 ${social.color}`}
                      aria-label={social.name}
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      data-section={link.id}
                      className="text-gray-400 hover:text-white transition-all duration-300 text-left hover:translate-x-2 transform hover:scale-105 group"
                    >
                      <span className="inline-block group-hover:bg-blue-600 group-hover:bg-opacity-20 px-2 py-1 rounded transition-all duration-300">
                        {link.name}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
              <ul className="space-y-3">
                {contactInfo.map((info, index) => (
                  <li key={index}>
                    <a
                      href={info.link}
                      className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-200 group"
                    >
                      <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-blue-600 transition-colors duration-200">
                        <info.icon size={16} />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">{info.label}</p>
                        <p className="text-sm font-medium">{info.value}</p>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Copyright */}
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <span>© {currentYear} Chamika Shashipriya. Made with</span>
                <Heart size={16} className="text-red-500" />
                <span>using React & Tailwind CSS</span>
              </div>

              {/* Additional Info */}
              <div className="text-gray-400 text-sm text-center md:text-right">
                <p>Designed & Developed by Chamika Shashipriya</p>
                <p className="text-xs mt-1">Based in Ambalangoda, Sri Lanka</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;