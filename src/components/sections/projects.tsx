import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Play, Star } from 'lucide-react';

const projects = [
  {
    title: "Signode",
    description: "Developed a cross-platform mobile application for Signode, an international leader in packaging solutions. Utilized Flutter for a responsive user interface, with a Node.js and PostgreSQL backend to manage real-time data, streamline field operations, and enhance workflow efficiency across global teams.",
    technologies: ["Flutter", "Node.js", "PostgreSQL"],
    imageUrl: 'https://placehold.co/600x400.png',
    aiHint: 'industrial packaging',
    category: "Enterprise",
    status: "Completed",
    repoUrl: '#',
    liveUrl: '#',
  },
  {
    title: "Jagatjit Industries",
    description: "Built two cross-platform mobile applications for Jagatjit Industries: the Jagatjit App for internal communication and operational tracking, and the Tour Plan App for managing and streamlining field staff tour planning and reporting. Leveraged Flutter for a seamless user experience, with a secure and scalable backend powered by Node.js and PostgreSQL.",
    technologies: ["Flutter", "Node.js", "PostgreSQL"],
    imageUrl: 'https://placehold.co/600x400.png',
    aiHint: 'corporate communication',
    category: "Enterprise",
    status: "Completed",
    repoUrl: '#',
    liveUrl: '#',
  },
  {
    title: "BoonEdam",
    description: "Developed a cross-platform mobile application for BoonEdam, integrating a Flutter-based front-end with a scalable Node.js and PostgreSQL backend. The solution prioritized seamless user experience, real-time data processing, and secure database management to support access control and facility management operations.",
    technologies: ["Flutter", "Node.js", "PostgreSQL"],
    imageUrl: 'https://placehold.co/600x400.png',
    aiHint: 'access control',
    category: "Enterprise",
    status: "Completed",
    repoUrl: '#',
    liveUrl: '#',
  },
  {
    title: "IAP Growth Tracker",
    description: "Created a cross-platform mobile application to help parents and healthcare professionals track children's growth data based on IAP standards. The app leverages local storage for secure offline access and has surpassed 10,000 downloads on the Play Store, reflecting its practicality and user trust.",
    technologies: ["Flutter", "Local Storage"],
    imageUrl: 'https://placehold.co/600x400.png',
    aiHint: 'child growth chart',
    category: "Healthcare",
    status: "Live",
    downloads: "10,000+",
    playStoreUrl: "https://play.google.com/store/apps/details?id=your.iap.growth.tracker.id",
    repoUrl: '#',
  },
  {
    title: "Tour Plan",
    description: "Developed a cross-platform mobile application to manage and streamline field staff tour planning and reporting. The app features a smooth Flutter interface and a robust backend built with Node.js and PostgreSQL, enabling efficient data handling, route tracking, and real-time reporting capabilities.",
    technologies: ["Flutter", "Node.js", "PostgreSQL"],
    imageUrl: 'https://placehold.co/600x400.png',
    aiHint: 'route planning',
    category: "Business",
    status: "Completed",
    repoUrl: '#',
    liveUrl: '#',
  },
  {
    title: "LabDost",
    description: "Designed a cross-platform mobile application aimed at simplifying lab test bookings and medical diagnostics. The app features a user-friendly Flutter interface with a secure and scalable backend powered by Node.js and PostgreSQL. It enables users to browse tests, schedule appointments, and track reports—all in one place.",
    technologies: ["Flutter", "Node.js", "PostgreSQL"],
    imageUrl: 'https://placehold.co/600x400.png',
    aiHint: 'medical lab',
    category: "Healthcare",
    status: "Completed",
    repoUrl: '#',
    liveUrl: '#',
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-20 md:py-32">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Project Showcase</h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills and experience.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="group overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 flex flex-col bg-secondary/20 backdrop-blur-lg border border-border/10">
              <CardHeader className="p-0 overflow-hidden">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  data-ai-hint={project.aiHint}
                />
              </CardHeader>
              <div className="p-6 flex flex-col flex-grow">
                <CardTitle className="font-headline text-2xl mb-2">{project.title}</CardTitle>
                <CardContent className="p-0 text-muted-foreground mb-4 flex-grow">
                  <p>{project.description}</p>
                </CardContent>
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      {tech}
                    </Badge>
                  ))}
                   {project.category && <Badge variant="outline">{project.category}</Badge>}
                   {project.status && <Badge variant="outline" className={project.status === 'Live' ? 'bg-green-500/10 text-green-400 border-green-500/20' : ''}>{project.status}</Badge>}
                   {project.downloads && (
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Star className="h-3 w-3" />
                      {project.downloads}
                    </Badge>
                   )}
                </div>
              </div>
              <CardFooter className="p-6 bg-secondary/30 flex justify-end gap-4 mt-auto">
                <Button variant="outline" asChild>
                  <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> Code
                  </a>
                </Button>
                {project.playStoreUrl ? (
                   <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/30">
                    <a href={project.playStoreUrl} target="_blank" rel="noopener noreferrer">
                      <Play className="mr-2 h-4 w-4" /> Play Store
                    </a>
                  </Button>
                ) : (
                  <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/30">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
