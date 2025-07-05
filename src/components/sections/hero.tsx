'use client';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const titles = ["Flutter Developer", "Full-Stack Developer", "Android & iOS Developer"];
const typingSpeed = 100;
const deletingSpeed = 50;
const delay = 2000;

export default function HeroSection() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentText, setCurrentText] = useState('');

  useEffect(() => {
    const handleTyping = () => {
      const currentTitle = titles[titleIndex];
      if (isDeleting) {
        // Deleting
        if (charIndex > 0) {
          setCurrentText(currentTitle.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % titles.length);
        }
      } else {
        // Typing
        if (charIndex < currentTitle.length) {
          setCurrentText(currentTitle.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          // Wait after typing is complete
          setTimeout(() => setIsDeleting(true), delay);
        }
      }
    };

    const timeoutId = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timeoutId);
  }, [charIndex, isDeleting, titleIndex, currentText]);

  return (
    <section id="home" className="w-full py-24 md:py-32 lg:py-40">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col items-center space-y-6 text-center">
          <div className="space-y-2">
            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Adarsh Tiwari
            </h1>
            <p className="text-xl text-foreground/80 md:text-2xl min-h-[2.5rem]">
              <span className="text-accent font-medium">{currentText}</span>
              <span className="animate-pulse text-primary font-medium">|</span>
            </p>
          </div>
          <p className="max-w-[700px] text-foreground/80 md:text-xl">
            I build beautiful and robust mobile applications for iOS and Android.
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
