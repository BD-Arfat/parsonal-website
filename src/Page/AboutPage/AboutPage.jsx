import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20 px-4 md:px-10">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-extrabold text-green-700 dark:text-green-300 mt-10 mb-4">
          Assalamu Alaikum, I'm Ariful Islam
        </h1>
        <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          A passionate Frontend Developer focused on building modern web apps with React.js and Tailwind CSS.
        </p>
      </div>

      {/* Timeline Style Section */}
      <div className="relative border-l-4 border-green-500 pl-6 space-y-12">
        {/* Step 1 */}
        <div className="relative bg-white dark:bg-gray-900 shadow-xl rounded-2xl p-6 border border-green-100 dark:border-gray-700">
          <h3 className="text-2xl font-semibold text-green-600 mb-2">💡 My Journey</h3>
          <p className="text-gray-700 dark:text-gray-300">
            I started learning web development with HTML, CSS, and JavaScript. As I grew confident, I embraced React and modern UI libraries to create better experiences.
          </p>
        </div>

        {/* Step 2 */}
        <div className="relative bg-white dark:bg-gray-900 shadow-xl rounded-2xl p-6 border border-green-100 dark:border-gray-700">
          <h3 className="text-2xl font-semibold text-green-600 mb-2">⚛️ React & Tailwind</h3>
          <p className="text-gray-700 dark:text-gray-300">
            I build responsive, modular user interfaces using React.js and style them beautifully with Tailwind CSS. I understand DOM manipulation, props, state, and use hooks like <code>useState</code>, <code>useEffect</code>, and React Router effectively.
          </p>
        </div>

        {/* Step 3 */}
        <div className="relative bg-white dark:bg-gray-900 shadow-xl rounded-2xl p-6 border border-green-100 dark:border-gray-700">
          <h3 className="text-2xl font-semibold text-green-600 mb-2">🛠️ Projects</h3>
          <p className="text-gray-700 dark:text-gray-300">
            I've built projects like a Quiz Website, a Car Selling Platform, and a Punjabi E-commerce Store — always focusing on clean code and smooth user experience.
          </p>
        </div>

        {/* Step 4 */}
        <div className="relative bg-white dark:bg-gray-900 shadow-xl rounded-2xl p-6 border border-green-100 dark:border-gray-700">
          <h3 className="text-2xl font-semibold text-green-600 mb-2">🤝 Collaboration & Vision</h3>
          <p className="text-gray-700 dark:text-gray-300">
            I'm comfortable using Git & GitHub, love teamwork, and aim to work on impactful real-world projects while constantly learning new technologies.
          </p>
        </div>
      </div>

      {/* Professional Highlights Section */}
      <div className="mt-20">
        <h3 className="text-3xl font-bold text-center text-green-700 dark:text-green-300 mb-8">✨ Professional Highlights</h3>
        <div className="grid md:grid-cols-2 gap-8">

          {/* Self-learning */}
          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border-l-4 border-green-400">
            <h4 className="text-xl font-semibold text-green-600 mb-2">🧠 Self-Learning Ability</h4>
            <p className="text-gray-700 dark:text-gray-300">
              I have primarily learned through online platforms and make it a habit to learn something new every day. I'm always curious to explore and apply new technologies and tools.
            </p>
          </div>

          {/* Time Management */}
          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border-l-4 border-green-400">
            <h4 className="text-xl font-semibold text-green-600 mb-2">⏰ Time Management</h4>
            <p className="text-gray-700 dark:text-gray-300">
              I always try to finish tasks on time and stick to deadlines. I consider time management a key part of every project I handle.
            </p>
          </div>

          {/* Tools Used */}
          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border-l-4 border-green-400">
            <h4 className="text-xl font-semibold text-green-600 mb-2">🧰 Tools & Software</h4>
            <p className="text-gray-700 dark:text-gray-300">
              I use Visual Studio Code for coding, GitHub for version control, and can convert UI designs from Figma to functional code.
            </p>
          </div>

          {/* Real-life Feedback */}
          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border-l-4 border-green-400">
            <h4 className="text-xl font-semibold text-green-600 mb-2">📣 User Feedback</h4>
            <p className="text-gray-700 dark:text-gray-300">
              I have shared some of my projects with friends and mentors who appreciated the UI and overall design experience.
            </p>
          </div>

          {/* Future Goals */}
          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border-l-4 border-green-400 md:col-span-2">
            <h4 className="text-xl font-semibold text-green-600 mb-2">🚀 Future Goal</h4>
            <p className="text-gray-700 dark:text-gray-300">
              My goal is to become a professional frontend engineer and work on world-class, real-life projects that create real impact.
            </p>
          </div>
        </div>
      </div>


      {/* Skills Section */}
      <div className="mt-20">
        <h3 className="text-3xl font-bold text-center text-green-700 dark:text-green-300 mb-6">💼 Top Skills</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            'React.js',
            'Tailwind CSS',
            'JavaScript',
            'HTML5',
            'CSS3',
            'MongoDB',
            'Express.js',
            'REST API',
            'Git & GitHub',
          ].map((skill, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-800 text-green-800 dark:text-white px-5 py-2 rounded-full shadow-md border border-green-200 dark:border-green-600 text-sm font-medium hover:scale-105 transition-transform"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>

      {/* Footer CTA */}
      <div className="mt-16 text-center">
        <p className="text-lg text-gray-800 dark:text-gray-200">
          I'm excited to work on meaningful projects. Let’s connect and build something amazing! 🚀
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
