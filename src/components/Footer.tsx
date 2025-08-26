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
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-16 relative">
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-all duration-200 hover:scale-110"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>

      <div className="container mx-auto px-6">
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
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-left hover:translate-x-1 transform transition-transform"
                    >
                      {link.name}
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

          {/* Additional Sections */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Skills Summary */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-white mb-4">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {['React', 'Node.js', 'JavaScript', 'Python', 'MongoDB', 'MySQL'].map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-blue-600 text-white text-xs rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-white mb-4">Status</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-400">Available for Projects</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-400">Open to Work</span>
                </div>
              </div>
            </div>

            {/* Download CV */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-white mb-4">Resume</h4>
              <a
                href="https://drive.google.com/file/d/1TyhpkBU6cNPi3uqAojoDZknd57lGbcTz/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 hover:scale-105"
              >
                <ExternalLink size={16} />
                Download CV
              </a>
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