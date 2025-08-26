import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      const response = await fetch('https://formspree.io/f/xpwjzday', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "chamikashashipriya3@gmail.com",
      link: "mailto:chamikashashipriya3@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+94 70 412 0358",
      link: "tel:+94704120358"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Ambalangoda, Sri Lanka",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      url: "https://github.com/ChamikaShashipriya99",
      color: "hover:text-gray-900 dark:hover:text-white"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://linkedin.com",
      color: "hover:text-blue-600"
    },
    {
      icon: Twitter,
      label: "Twitter",
      url: "https://twitter.com",
      color: "hover:text-blue-400"
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      url: "https://wa.me/94750471511",
      color: "hover:text-green-600"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-25"></div>
      <div className="absolute inset-0 bg-hexagon opacity-15"></div>
      
      {/* Floating Code Elements */}
      <div className="floating-code top-32 left-8">const contact = "open";</div>
      <div className="floating-code top-64 right-12">function message() {"{ return response; }"}</div>
      <div className="floating-code bottom-32 left-16">npm install communication</div>
      
      {/* Glowing Orbs */}
      <div className="glow-orb top-1/4 left-1/4"></div>
      <div className="glow-orb bottom-1/3 right-1/4"></div>
      
      {/* Matrix-style Digital Rain */}
      <div className="matrix-rain left-16" style={{ animationDelay: '0s' }}>let's connect</div>
      <div className="matrix-rain right-16" style={{ animationDelay: '2s' }}>function collaborate()</div>
      
      {/* Particle System */}
      <div className="particle top-1/3 left-1/3" style={{ animationDelay: '1s' }}></div>
      <div className="particle top-2/3 right-1/3" style={{ animationDelay: '3s' }}></div>
      <div className="particle bottom-1/4 left-2/3" style={{ animationDelay: '5s' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Let's discuss your project and see how we can work together
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                Contact Information
              </h3>
              
              <div className="space-y-6 mb-10">
                {contactInfo.map((info, index) => (
                  <a 
                    key={index}
                    href={info.link}
                    className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 group transform hover:scale-105 hover:shadow-lg"
                  >
                    <div className="p-3 bg-blue-600 text-white rounded-lg group-hover:bg-blue-700 transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-3">
                      <info.icon size={24} />
                    </div>
                    <div className="transform group-hover:translate-x-2 transition-transform duration-300">
                      <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {info.label}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Follow Me
                </h4>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 p-3 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-lg transition-all duration-300 transform hover:scale-125 hover:-translate-y-2 hover:shadow-xl ${social.color} hover:bg-white dark:hover:bg-gray-700`}
                    >
                      <social.icon size={20} />
                      <span className="text-sm font-medium">{social.label}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability Status */}
              <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-lg border border-green-200 dark:border-green-800 hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:border-green-300 dark:hover:border-green-700 cursor-pointer group">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse group-hover:scale-150 transition-transform duration-300"></div>
                  <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">
                    Available for Projects
                  </h4>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">
                  Currently accepting new projects and collaborations. Let's build something amazing together!
                </p>
              </div>

              {/* Open to Work Status */}
              <div className="mt-4 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg border border-blue-200 dark:border-blue-800 hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:border-blue-300 dark:hover:border-blue-700 cursor-pointer group">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse group-hover:scale-150 transition-transform duration-300"></div>
                  <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    Open to Work
                  </h4>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">
                  Actively seeking full-time opportunities and new career challenges. Ready to contribute and grow!
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                Send Me a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6" action="https://formspree.io/f/xpwjzday" method="POST">
                {/* Success/Error Messages */}
                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                    <p className="text-green-800 dark:text-green-200 text-sm font-medium">
                      ✅ Message sent successfully! I'll get back to you soon.
                    </p>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                    <p className="text-red-800 dark:text-red-200 text-sm font-medium">
                      ❌ Something went wrong. Please try again or contact me directly.
                    </p>
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors text-gray-900 dark:text-white"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors text-gray-900 dark:text-white"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors text-gray-900 dark:text-white"
                    placeholder="Project discussion"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors resize-none text-gray-900 dark:text-white"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;