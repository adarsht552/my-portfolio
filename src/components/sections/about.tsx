import { Briefcase, Users, Zap, Award } from 'lucide-react';

const values = [
    { title: "Innovative Companies", description: "Collaborated with forward-thinking companies to deliver cutting-edge solutions.", Icon: Briefcase },
    { title: "Client-Centric Approach", description: "Dedicated to understanding and achieving client goals for mutual success.", Icon: Users },
    { title: "Agile Development", description: "Expert in agile methodologies for flexible and efficient project execution.", Icon: Zap },
    { title: "Quality & Excellence", description: "Committed to delivering high-quality, robust, and scalable applications.", Icon: Award }
];


export default function AboutSection() {
  return (
    <section id="about" className="w-full py-20 md:py-32 bg-card">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-4">
                <h2 className="font-headline text-3xl md:text-4xl font-bold">About Me</h2>
                <p className="text-primary font-medium">My Values & Work Ethic</p>
                <div className="space-y-4 text-lg text-foreground/80">
                    <p>
                    I am a passionate and results-driven Flutter Developer with a knack for turning complex problems into elegant, user-centric solutions. My journey in software development began with a deep curiosity for how things work, which has since evolved into a career dedicated to building efficient and scalable applications.
                    </p>
                    <p>
                    I thrive in collaborative environments and am always eager to learn new technologies and methodologies to stay at the forefront of the industry.
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {values.map(value => (
                    <div key={value.title} className="bg-background p-6 rounded-lg border border-border transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
                        <value.Icon className="h-8 w-8 text-primary mb-4" />
                        <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                        <p className="text-sm text-muted-foreground">{value.description}</p>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}
