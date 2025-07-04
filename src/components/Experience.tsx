
import { Card, CardContent } from '@/components/ui/card';
import { Building, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'Viswam AI',
      role: 'AI Developer Intern',
      duration: 'Recent',
      type: 'Internship',
      achievements: [
        'Contributed to LLM evaluation pipelines for improved model performance',
        'Assisted with fine-tuning experiments on large language models',
        'Collaborated with senior developers on AI-driven product features',
        'Gained hands-on experience with modern AI/ML frameworks and tools'
      ],
      technologies: ['Python', 'LLM', 'AI/ML', 'Model Evaluation']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-gray-900 to-charcoal">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-teal-500 mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Building expertise through hands-on experience in AI development and software engineering
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-gray-800/50 border-gray-700 hover:border-teal-500/50 transition-all duration-300 mb-8 overflow-hidden group">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div className="flex items-center mb-4 md:mb-0">
                    <div className="bg-teal-500/20 p-3 rounded-lg mr-4 group-hover:bg-teal-500/30 transition-colors duration-300">
                      <Building className="text-teal-400" size={24} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-teal-400 transition-colors duration-300">
                        {exp.role}
                      </h3>
                      <p className="text-teal-400 font-semibold text-lg">{exp.company}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center text-gray-400">
                      <Calendar size={16} className="mr-2" />
                      <span>{exp.duration}</span>
                    </div>
                    <span className="px-3 py-1 bg-teal-500/20 text-teal-400 rounded-full text-sm font-medium">
                      {exp.type}
                    </span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-300 mb-4">Key Achievements:</h4>
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-300 leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-300 mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-lg text-sm font-medium hover:bg-teal-500/20 hover:text-teal-400 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Future Goals */}
        <div className="text-center mt-16">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4 text-teal-500">Looking Forward</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm actively seeking opportunities to further develop my skills in AI/ML and full-stack development. 
              My goal is to work on impactful projects that combine engineering principles with cutting-edge technology 
              to solve real-world problems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
