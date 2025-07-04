
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const education = [
    {
      course: 'B.Tech (Mechanical Engineering)',
      school: 'Priyadarshini Institute Of Technology & Management',
      grade: '6.8 CGPA',
      year: '2025',
      status: 'Current'
    },
    {
      course: 'Diploma in Mechanical Engineering',
      school: 'M.B.T.S Govt Polytechnic',
      grade: '72%',
      year: '2022',
      status: 'Completed'
    },
    {
      course: 'SSC',
      school: 'M.G.M Crop govt High school',
      grade: '8.3',
      year: '2019',
      status: 'Completed'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-charcoal to-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-teal-500 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio */}
          <div className="space-y-6">
            <div className="animate-fade-in-up">
              <h3 className="text-2xl font-semibold mb-4 text-teal-500">Hello, I'm Chaitanya</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I'm a final‑year Mechanical Engineering student at Priyadarshini Institute, Hyderabad. 
                What started as curiosity about how things work has evolved into a passion for AI, 
                full‑stack development, and crafting smooth user experiences.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                I believe in the power of technology to solve real-world problems. Whether it's building 
                intelligent AI assistants or creating seamless web applications, I'm driven by the 
                challenge of turning complex ideas into elegant solutions.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                <span className="text-gray-300">Born: September 14, 2003</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                <span className="text-gray-300">Location: Hyderabad, India</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                <span className="text-gray-300">Languages: English, Telugu</span>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6 text-teal-500">Education</h3>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <Card key={index} className="bg-gray-800/50 border-gray-700 hover:border-teal-500/50 transition-all duration-300 transform hover:scale-105">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-white text-lg">{edu.course}</h4>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        edu.status === 'Current' 
                          ? 'bg-teal-500/20 text-teal-400' 
                          : 'bg-gray-600/50 text-gray-300'
                      }`}>
                        {edu.year}
                      </span>
                    </div>
                    <p className="text-gray-300 mb-2">{edu.school}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-teal-400 font-medium">Grade: {edu.grade}</span>
                      <span className="text-sm text-gray-400">{edu.status}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
