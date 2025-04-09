import React from 'react';

const AboutPage = () => {
  return (
    <div>
      <section className="bg-gradient-to-br from-green-50 to-white dark:from-gray-900 dark:to-gray-800 py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-4">
          👋 Hi, I'm <span className="text-green-600">Ariful Islam</span>
        </h2>
        <p className="text-center text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Junior Frontend & MERN Stack Developer | I craft scalable, high-performance web apps with clean code and a user-first approach.
        </p>

        {/* Card Layout */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* About Me Section */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 border border-green-100 dark:border-gray-700 backdrop-blur-md">
            <h3 className="text-2xl font-semibold text-green-600 mb-4">🚀 About Me</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              I specialize in developing modern web apps with elegant UI and strong backend structure.
              I'm passionate about writing clean, maintainable code and love solving real-world problems with creativity and performance in mind.
            </p>

            <ul className="mt-6 space-y-3 text-gray-800 dark:text-gray-300">
              <li>✅ <strong>Performance-Driven:</strong> Speed & efficiency at the core</li>
              <li>✅ <strong>User-Centric:</strong> Creating intuitive digital experiences</li>
              <li>✅ <strong>Problem Solver:</strong> Turning challenges into opportunities</li>
              <li>✅ <strong>Continuous Learner:</strong> Always up-to-date with tech trends</li>
            </ul>
          </div>

          {/* Top Skills Section */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 border border-green-100 dark:border-gray-700">
            <h3 className="text-2xl font-semibold text-green-600 mb-4">💼 Top Skills</h3>
            <div className="flex flex-wrap gap-3">
              {[
                'React.js',
                'Tailwind CSS',
                'Express.js',
                'Node.js',
                'MongoDB',
                'JavaScript (ES6+)',
                'HTML5',
                'CSS3',
                'REST API',
              ].map((skill, i) => (
                <span
                  key={i}
                  className="bg-green-100 text-green-800 dark:bg-green-800 dark:text-white px-4 py-1.5 text-sm rounded-full font-medium shadow-sm hover:scale-105 transition-transform"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="text-center mt-14">
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Let’s <span className="text-green-600 font-semibold">collaborate</span> and build something extraordinary together! 🚀
          </p>
        </div>
      </div>
    </section>
    </div>
  );
};

export default AboutPage;