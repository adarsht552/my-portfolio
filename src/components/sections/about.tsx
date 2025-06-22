import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

export default function AboutSection() {
  return (
    <section id="about" className="w-full py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-2 flex justify-center">
            <Card className="overflow-hidden w-[300px] h-[300px] md:w-[350px] md:h-[350px] rounded-full shadow-xl">
              <Image 
                src="https://placehold.co/400x400.png"
                alt="About Adarsh Tiwari" 
                width={350} 
                height={350} 
                className="object-cover w-full h-full"
                data-ai-hint="professional workspace"
              />
            </Card>
          </div>
          <div className="md:col-span-3">
            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-6">About Me</h2>
            <div className="space-y-4 text-lg text-foreground/80">
              <p>
                I am a passionate and results-driven Full-Stack Developer with a knack for turning complex problems into elegant, user-centric solutions. My journey in software development began with a deep curiosity for how things work, which has since evolved into a career dedicated to building efficient and scalable applications.
              </p>
              <p>
                I thrive in collaborative environments and am always eager to learn new technologies and methodologies to stay at the forefront of the industry. My goal is to leverage my skills to contribute to innovative projects that make a meaningful impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
