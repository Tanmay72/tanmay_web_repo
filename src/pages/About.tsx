
const About = () => {
  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-sky-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-8 mb-12">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
              alt="Profile photo"
              className="w-48 h-48 rounded-lg object-cover shadow-lg"
            />
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">About Me</h2>
              <p className="text-gray-600">
                Welcome to my portfolio! I'm a dedicated software developer with a passion for creating elegant solutions to complex problems.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <section>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Professional Journey</h3>
              <p className="text-gray-600">
                With several years of experience in software development, I've had the opportunity to work on diverse projects ranging from web applications to system architecture. My focus has always been on writing clean, maintainable code that solves real-world problems efficiently.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Technical Expertise</h3>
              <p className="text-gray-600">
                I specialize in full-stack development with expertise in React, Node.js, and cloud technologies. I'm passionate about staying current with the latest technologies and best practices in software development, ensuring that I can deliver modern and efficient solutions.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Personal Approach</h3>
              <p className="text-gray-600">
                I believe in writing code that not only works but is also maintainable and scalable. My approach combines technical excellence with strong problem-solving skills, always keeping the end-user experience in mind while developing solutions.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
