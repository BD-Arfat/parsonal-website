import React from 'react';

const Abouts = () => {
    return (
        <section className="bg-gray-50 min-h-screen flex items-center justify-center p-6">
          <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-8">
            <h1 className="text-4xl font-bold text-center text-green-600 mb-6">Hi, I'm Ariful Islam! 🚀</h1>
            
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-green-700 mb-4">Top Skills</h2>
              <div className="flex flex-wrap gap-3">
                {["React.js", "Tailwind CSS", "Express.js", "Node.js", "MongoDB"].map((skill, index) => (
                  <span key={index} className="bg-green-100 text-green-700 px-4 py-2 rounded-lg font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
    
            <p className="text-gray-700 leading-relaxed">
              I’m a <span className="font-semibold">Junior Frontend & MERN Stack Developer</span> who thrives on crafting scalable, high-performance, and user-centric web applications.
              From pixel-perfect frontend designs to robust backend architectures, I turn ideas into seamless digital experiences.
            </p>
            
            <h2 className="text-2xl font-semibold text-green-700 mt-6">What Sets Me Apart? 🔥</h2>
            <ul className="list-disc list-inside text-gray-700 mt-2">
              <li><strong>Performance-Driven Development</strong> – Speed & efficiency at the core</li>
              <li><strong>User-Centric Design</strong> – Crafting intuitive digital experiences</li>
              <li><strong>Problem-Solving Mindset</strong> – Turning challenges into opportunities</li>
              <li><strong>Continuous Learning</strong> – Staying ahead with the latest technologies</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-green-700 mt-6">Tech Stack 🌐</h2>
            <div className="mt-3 grid grid-cols-2 gap-4 text-gray-700">
              <div>
                <h3 className="font-semibold">Frontend:</h3>
                <p>HTML | CSS | Tailwind CSS | JavaScript (ES6+) | React.js | React Router DOM | Context API | Axios</p>
              </div>
              <div>
                <h3 className="font-semibold">Backend:</h3>
                <p>Node.js | Express.js | MongoDB | Mongoose</p>
              </div>
              <div>
                <h3 className="font-semibold">Security & Authentication:</h3>
                <p>Firebase Authentication | JWT | Helmet & CORS</p>
              </div>
              <div>
                <h3 className="font-semibold">DevOps & Deployment:</h3>
                <p>Vercel | Netlify | MongoDB Atlas | Git & GitHub</p>
              </div>
            </div>
            
            <p className="text-center text-gray-700 font-semibold mt-8">
              Code. Create. Innovate. Let’s push boundaries together! 🚀
            </p>
          </div>
        </section>
      );
    };

export default Abouts;