
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-bg opacity-80"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-charcoal/50 to-charcoal"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="text-white">Vellanki</span>
          <br />
          <span className="text-gradient">Chaitanya</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light">
          B.Tech Mechanical Engineering | AI & Full‑Stack Developer
        </p>
        
        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Passionate about crafting innovative AI solutions and smooth user experiences. 
          Currently exploring the intersection of engineering and technology.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-8 py-3 text-lg transition-all duration-300 transform hover:scale-105"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View My Work
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white font-semibold px-8 py-3 text-lg transition-all duration-300"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get In Touch
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-teal-500" size={32} />
      </div>
    </section>
  );
};

export default Hero;
