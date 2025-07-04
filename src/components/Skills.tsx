
const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Python', 'TypeScript', 'JavaScript'],
      color: 'bg-blue-500'
    },
    {
      title: 'Frontend Frameworks',
      skills: ['Next.js', 'Nuxt.js', 'React', 'HTML'],
      color: 'bg-green-500'
    },
    {
      title: 'Styling & UI',
      skills: ['CSS', 'Tailwind CSS', 'Responsive Design'],
      color: 'bg-purple-500'
    },
    {
      title: 'Database',
      skills: ['PostgreSQL', 'Database Design'],
      color: 'bg-orange-500'
    },
    {
      title: 'AI & Machine Learning',
      skills: ['ChatGPT Fine-tuning', 'Tokenization', 'Chat groq', 'Gemini LLM'],
      color: 'bg-teal-500'
    },
    {
      title: 'Design & Tools',
      skills: ['CATIA', 'MS Office', 'Git', 'VS Code'],
      color: 'bg-red-500'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-charcoal">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-teal-500 mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A diverse toolkit spanning full-stack development, AI/ML, and engineering design
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700 hover:border-teal-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group"
            >
              <div className="flex items-center mb-4">
                <div className={`w-4 h-4 rounded-full ${category.color} mr-3 group-hover:scale-110 transition-transform duration-300`}></div>
                <h3 className="text-xl font-semibold text-white group-hover:text-teal-400 transition-colors duration-300">
                  {category.title}
                </h3>
              </div>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center p-3 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors duration-200"
                  >
                    <div className="w-2 h-2 bg-teal-500 rounded-full mr-3 opacity-70"></div>
                    <span className="text-gray-300 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skill Level Indicators */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-8 text-teal-500">Proficiency Levels</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <h4 className="font-semibold text-white mb-2">Advanced</h4>
              <p className="text-gray-400 text-sm">Python, TypeScript, Next.js</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">I</span>
              </div>
              <h4 className="font-semibold text-white mb-2">Intermediate</h4>
              <p className="text-gray-400 text-sm">AI/ML, PostgreSQL, CATIA</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">F</span>
              </div>
              <h4 className="font-semibold text-white mb-2">Familiar</h4>
              <p className="text-gray-400 text-sm">Design Tools, Cloud Platforms</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
