import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, Github, Send, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'chaitanyavellanki4@gmail.com',
      href: 'mailto:chaitanyavellanki4@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 6304497462',
      href: 'tel:+916304497462'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Hyderabad, India',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/chaitanya1439',
      color: 'hover:text-gray-400'
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:chaitanyavellanki4@gmail.com',
      color: 'hover:text-teal-400'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-charcoal to-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-teal-500 mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Let's collaborate on something amazing! I'm always excited to discuss new opportunities and innovative projects.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-gray-800/50 border-gray-700 hover:border-teal-500/50 transition-all duration-300">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-white">Send me a message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 font-medium mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-teal-500 focus:ring-teal-500"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 font-medium mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-teal-500 focus:ring-teal-500"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-300 font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-teal-500 focus:ring-teal-500 resize-none"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Sending...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <Send size={16} className="mr-2" />
                      Send Message
                    </div>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="flex items-center p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-teal-500/50 transition-all duration-300 group cursor-pointer"
                    onClick={() => info.href !== '#' && window.open(info.href, '_blank')}
                  >
                    <div className="bg-teal-500/20 p-3 rounded-lg mr-4 group-hover:bg-teal-500/30 transition-colors duration-300">
                      <info.icon className="text-teal-400" size={20} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{info.label}</p>
                      <p className="text-white font-medium group-hover:text-teal-400 transition-colors duration-300">
                        {info.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Follow Me</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`bg-gray-800/50 p-4 rounded-lg border border-gray-700 hover:border-teal-500/50 transition-all duration-300 transform hover:scale-110 ${social.color} group`}
                  >
                    <social.icon size={24} className="text-gray-400 group-hover:text-current transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-teal-500/10 to-blue-500/10 p-6 rounded-2xl border border-teal-500/20">
              <h4 className="text-lg font-semibold text-teal-400 mb-3">Let's Build Something Amazing</h4>
              <p className="text-gray-300 leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to 
                be part of your vision. Whether you're looking for AI solutions, full-stack development, 
                or just want to connect, I'd love to hear from you!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
