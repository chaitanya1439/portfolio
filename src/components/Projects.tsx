
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'SHELTERIC',
      description: 'A comprehensive property management platform built with modern web technologies. Features include property listings, user management, and real-time updates.',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
      liveUrl: 'https://www.shelteric.com',
      githubUrl: '#',
      category: 'Full-Stack Web App',
      featured: true
    },
    {
      title: 'AI Assistant',
      description: 'An intelligent chat assistant powered by Gemini LLM. Provides natural language processing capabilities with a clean, intuitive Streamlit interface.',
      technologies: ['Python', 'Streamlit', 'Gemini LLM', 'NLP'],
      liveUrl: 'https://chaitanya1439-ai-assistant-fljxld.streamlit.app',
      githubUrl: 'https://github.com/chaitanya1439/ai',
      category: 'AI/ML Application',
      featured: true
    },
    {
      title: 'SOFTWARE AGENT AI',
      description: 'An advanced AI agent system that combines modern web technologies with large language models to create intelligent software solutions.',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'LLM Integration'],
      liveUrl: 'https://software-agent.vercel.app',
      githubUrl: 'https://github.com/chaitanya1439/Software-Agent',
      category: 'AI-Powered Platform',
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-charcoal">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-teal-500 mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Showcasing a blend of full-stack development, AI integration, and innovative problem-solving
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {projects.filter(project => project.featured).map((project, index) => (
            <Card key={index} className="bg-gray-800/50 border-gray-700 hover:border-teal-500/50 transition-all duration-300 transform hover:scale-105 group overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="px-3 py-1 bg-teal-500/20 text-teal-400 rounded-full text-sm font-medium mb-3 inline-block">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white group-hover:text-teal-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-lg text-sm font-medium hover:bg-teal-500/20 hover:text-teal-400 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    className="bg-teal-500 hover:bg-teal-600 text-white font-semibold transition-all duration-300 flex items-center justify-center group/btn"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                  >
                    <ExternalLink size={16} className="mr-2 group-hover/btn:scale-110 transition-transform duration-200" />
                    View Live
                  </Button>
                  <Button
                    variant="outline"
                    className="border-gray-600 text-gray-300 hover:border-teal-500 hover:text-teal-400 font-semibold transition-all duration-300 flex items-center justify-center group/btn"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github size={16} className="mr-2 group-hover/btn:scale-110 transition-transform duration-200" />
                    Source Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Projects */}
        <div className="grid md:grid-cols-1 gap-6">
          {projects.filter(project => !project.featured).map((project, index) => (
            <Card key={index} className="bg-gray-800/30 border-gray-700 hover:border-teal-500/50 transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1 mb-4 md:mb-0">
                    <div className="flex items-center mb-2">
                      <span className="px-2 py-1 bg-teal-500/20 text-teal-400 rounded text-xs font-medium mr-3">
                        {project.category}
                      </span>
                      <h3 className="text-xl font-bold text-white group-hover:text-teal-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-gray-300 mb-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-gray-700/50 text-gray-400 rounded text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-3 md:ml-6">
                    <Button
                      size="sm"
                      className="bg-teal-500 hover:bg-teal-600 text-white"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <ExternalLink size={14} className="mr-1" />
                      Live
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-gray-600 text-gray-300 hover:border-teal-500 hover:text-teal-400"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github size={14} className="mr-1" />
                      Code
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* AI Demo Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-2xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold mb-4 text-teal-500">
              Try My AI Assistant
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Experience my AI assistant in action! Built with Python and Streamlit, powered by Gemini LLM 
              for natural language conversations.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-semibold px-8 py-3 text-lg transition-all duration-300 transform hover:scale-105"
              onClick={() => window.open('https://chaitanya1439-ai-assistant-fljxld.streamlit.app', '_blank')}
            >
              Chat with AI Assistant
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
