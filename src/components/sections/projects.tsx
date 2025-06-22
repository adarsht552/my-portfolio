import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce website with user authentication, product catalog, shopping cart, and payment integration.',
    technologies: ['Django', 'React', 'PostgreSQL', 'Node.js'],
    imageUrl: 'https://placehold.co/600x400.png',
    aiHint: 'online store',
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    title: 'Task Management App',
    description: 'A cross-platform mobile application for managing tasks and projects, featuring real-time collaboration and notifications.',
    technologies: ['Flutter', 'Firebase', 'Node.js'],
    imageUrl: 'https://placehold.co/600x400.png',
    aiHint: 'task list',
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    title: 'Blogging Platform API',
    description: 'A robust RESTful API for a blogging platform, supporting CRUD operations for posts, comments, and users, with JWT authentication.',
    technologies: ['Django', 'PostgreSQL'],
    imageUrl: 'https://placehold.co/600x400.png',
    aiHint: 'blog article',
    liveUrl: '#',
    repoUrl: '#',
  },
   {
    title: 'Real-time Chat Application',
    description: 'A web application enabling users to chat in real-time, built with WebSockets and a modern front-end framework.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    imageUrl: 'https://placehold.co/600x400.png',
    aiHint: 'chat interface',
    liveUrl: '#',
    repoUrl: '#',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Project Showcase</h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
            Here are some of the projects I&apos;ve worked on, showcasing my skills and experience.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <CardHeader className="p-0">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full object-cover"
                  data-ai-hint={project.aiHint}
                />
              </CardHeader>
              <div className="p-6 flex flex-col flex-grow">
                <CardTitle className="font-headline text-2xl mb-2">{project.title}</CardTitle>
                <CardContent className="p-0 text-muted-foreground mb-4 flex-grow">
                  <p>{project.description}</p>
                </CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </div>
              <CardFooter className="p-6 bg-secondary/50 flex justify-end gap-4 mt-auto">
                <Button variant="outline" asChild>
                  <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> Code
                  </a>
                </Button>
                <Button asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
