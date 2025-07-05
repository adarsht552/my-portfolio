import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Play, Star } from 'lucide-react';

const projects = [
   {
    title: "IAP Growth Tracker",
    description: "Created a cross-platform mobile application to help parents and healthcare professionals track children's growth data based on IAP standards. The app leverages local storage for secure offline access and has surpassed 10,000 downloads on the Play Store, reflecting its practicality and user trust.",
    technologies: ["Flutter", "Local Storage"],
    imgUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop',
    aiHint: 'children growth tracking medical chart',
    category: "Healthcare",
    status: "Live",
    downloads: "10,000+",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.mindspace.iapgrowthchart&hl=en_IN",
    repoUrl: '#',
  },
    {
    title: "BoonEdam",
    description: "Developed a cross-platform mobile application for BoonEdam, integrating a Flutter-based front-end with a scalable Node.js and PostgreSQL backend. The solution prioritized seamless user experience, real-time data processing, and secure database management to support access control and facility management operations.",
    technologies: ["Flutter", "Node.js", "PostgreSQL"],
    imgUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop',
    aiHint: 'automatic security gate entrance',
    category: "Enterprise",
    status: "Live",
    repoUrl: '#',
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.mindspacetech.BoonEdam&hl=en_IN",
  },
  {
    title: "Signode",
    description: "Developed a cross-platform mobile application for Signode, an international leader in packaging solutions. Utilized Flutter for a responsive user interface, with a Node.js and PostgreSQL backend to manage real-time data, streamline field operations, and enhance workflow efficiency across global teams.",
    technologies: ["Flutter", "Node.js", "PostgreSQL"],
    imgUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop',
    aiHint: 'industrial packaging warehouse',
    category: "Enterprise",
    status: "Completed",
    repoUrl: '#',
    liveUrl: '#',
  },
  {
  title: "Gold's Digital Transparency",
  description: "Developed a cross-platform mobile solution to ensure transparency and traceability in the gold supply chain. The application leverages Flutter for an intuitive UI and integrates a Node.js and PostgreSQL backend to securely log sourcing, certification, and transaction history, empowering users with verified gold provenance data.",
  technologies: ["Flutter", "Node.js", "PostgreSQL"],
  imgUrl: "https://images.unsplash.com/photo-1610375461246-83df859d849d?q=80&w=2070&auto=format&fit=crop",
  aiHint: "gold bars bullion precious metals",
  category: "Fintech",
  status: "Completed",
  // repoUrl: "#",
  playStoreUrl: "https://play.google.com/store/apps/details?id=com.mindspacetech.agqr&hl=en_IN",

},
{
  title: "Jagatjit Industries",
  description: "Developed two cross-platform mobile applications for Jagatjit Industries, a leading Indian manufacturer of tractors and agricultural implements. The Jagatjit App supports internal communication and operational tracking, while the Tour Plan App streamlines field staff tour planning and reporting. Built with Flutter for a responsive UI and powered by a secure, scalable Node.js and PostgreSQL backend.",
  technologies: ["Flutter", "Node.js", "PostgreSQL"],
 imgUrl: "https://images.unsplash.com/photo-1530267981375-f0de937f5f13?q=80&w=2070&auto=format&fit=crop",
  aiHint: "agricultural machinery tractor",
  category: "AgriTech",
  status: "in progress",
  repoUrl: "#",
  liveUrl: "#"
},

  {
    title: "Jagatjit Tour Plan",
    description: "Developed a cross-platform mobile application to manage and streamline field staff tour planning and reporting. The app features a smooth Flutter interface and a robust backend built with Node.js and PostgreSQL, enabling efficient data handling, route tracking, and real-time reporting capabilities.",
    technologies: ["Flutter", "Node.js", "PostgreSQL"],
    imgUrl: 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=2074&auto=format&fit=crop',
    aiHint: 'route planning travel map',
    category: "Business",
    status: "Completed",
    repoUrl: '#',
    liveUrl: '#',
  },

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="group overflow-hidden transition-all duration-300 flex flex-col bg-card border border-border/50 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 rounded-lg">
              <CardHeader className="p-0 overflow-hidden">
                <Image
                  src={project.imgUrl}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  data-ai-hint={project.aiHint}
                />
              </CardHeader>
              <div className="p-6 flex flex-col flex-grow">
                <CardTitle className="font-headline text-xl mb-2">{project.title}</CardTitle>
                <CardContent className="p-0 text-muted-foreground mb-4 flex-grow text-sm">
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
              <CardFooter className="p-6 bg-background/50 flex justify-end gap-2 mt-auto">
                <Button variant="outline" size="sm" asChild>
                  {/* <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> Code
                  </a> */}
                </Button>
                {project.playStoreUrl ? (
                   <Button size="sm" asChild>
                    <a href={project.playStoreUrl} target="_blank" rel="noopener noreferrer">
                      <Play className="mr-2 h-4 w-4" /> Play Store
                    </a>
                  </Button>
                ) : (
                  <Button size="sm" asChild>
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