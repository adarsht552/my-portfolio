import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section id="home" className="w-full py-24 md:py-32 lg:py-40">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col items-center space-y-6 text-center">
          <Image
            src="https://placehold.co/200x200.png"
            alt="Adarsh Tiwari"
            width={160}
            height={160}
            className="rounded-full border-4 border-primary/30 shadow-2xl shadow-primary/20"
            data-ai-hint="developer avatar"
          />
          <div className="space-y-2">
            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Adarsh Tiwari
            </h1>
            <p className="text-lg text-foreground/80 md:text-xl">
              Full-Stack Developer
            </p>
          </div>
          <p className="max-w-[700px] text-foreground/80 md:text-xl">
            I build beautiful and robust web applications from front to back.
            Passionate about clean code, great user experiences, and continuous learning.
          </p>
          <div className="flex gap-4">
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/30">
              <a href="#contact">
                Get in Touch
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#projects">
                My Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
