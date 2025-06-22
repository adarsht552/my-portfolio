import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function HeroSection() {
  return (
    <section id="home" className="relative w-full py-20 md:py-32 bg-background">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-start text-left">
            <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4">
              Hi, I&apos;m Adarsh Tiwari
            </h1>
            <p className="text-primary text-xl md:text-2xl font-medium mb-6 font-headline">
              A Full-Stack Developer
            </p>
            <p className="text-lg text-foreground/80 max-w-xl mb-8">
              I specialize in creating high-quality mobile and web applications. With a strong foundation in both front-end and back-end technologies, I build robust, scalable, and user-friendly digital experiences.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <a href="#projects">View My Work</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#contact">
                  Contact Me
                  <ArrowDown className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
          <div className="flex justify-center items-center">
             <Avatar className="h-64 w-64 md:h-80 md:w-80 border-4 border-primary shadow-lg">
                <AvatarImage src="https://placehold.co/400x400.png" alt="Adarsh Tiwari" data-ai-hint="man portrait" />
                <AvatarFallback>AT</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </section>
  );
}
