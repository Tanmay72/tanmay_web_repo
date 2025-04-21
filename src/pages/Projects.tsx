
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Project One",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      description: [
        "A modern web application built with React and Node.js, focusing on delivering a seamless user experience with real-time updates and responsive design.",
        "Implemented advanced features including user authentication, data visualization, and integration with external APIs to provide comprehensive functionality."
      ],
      skills: ["React", "Node.js", "TypeScript", "MongoDB"]
    },
    {
      title: "Project Two",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      description: [
        "Developed a scalable e-commerce platform that handles thousands of concurrent users, featuring a robust product management system and secure payment processing.",
        "Optimized performance through efficient database queries and caching strategies, resulting in significantly improved load times and user satisfaction."
      ],
      skills: ["Next.js", "PostgreSQL", "Redis", "AWS"]
    },
    {
      title: "Project Three",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      description: [
        "Created an innovative mobile-first application that leverages machine learning algorithms to provide personalized recommendations to users.",
        "Integrated advanced analytics and monitoring tools to track user engagement and system performance in real-time."
      ],
      skills: ["React Native", "Python", "TensorFlow", "Firebase"],
      projectLink: "https://github.com/username/project-three"
    },
    {
      title: "Project Four",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      description: [
        "Built a comprehensive project management tool that streamlines team collaboration and task tracking with an intuitive interface.",
        "Implemented real-time updates and notification systems to keep team members informed of project progress and changes."
      ],
      skills: ["Vue.js", "Django", "Docker", "GitLab CI"],
      projectLink: "https://github.com/username/project-four"
    }
  ];

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-sky-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">My Projects</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4 flex justify-between items-center">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  {project.projectLink && (
                    <Button 
                      variant="default" 
                      onClick={() => window.open(project.projectLink, '_blank')}
                      className="bg-orange-500 hover:bg-orange-600 text-white"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Link to Publication
                    </Button>
                  )}
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  {project.description.map((paragraph, idx) => (
                    <p key={idx} className="text-gray-600">
                      {paragraph}
                    </p>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill, idx) => (
                    <Badge key={idx} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

