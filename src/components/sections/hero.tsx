'use client';
import { Button } from '@/components/ui/button';
import { Briefcase, CheckCircle, Users } from 'lucide-react';
import { useState, useEffect } from 'react';

const titles = ["Flutter Developer", "Full-Stack Developer", "Android & iOS Developer"];
const typingSpeed = 100;
const deletingSpeed = 50;
const delay = 2000;

const stats = [
    { value: "6+", label: "Years Experience" },
    { value: "20+", label: "Projects Completed" },
    { value: "10+", label: "Happy Clients" },
];

export default function HeroSection() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentText, setCurrentText] = useState('');

  useEffect(() => {
    const handleTyping = () => {
      const currentTitle = titles[titleIndex];
      if (isDeleting) {
        if (charIndex > 0) {
          setCurrentText(currentTitle.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % titles.length);
        }
      } else {
        if (charIndex < currentTitle.length) {
          setCurrentText(currentTitle.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
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
        <div className="flex flex-col items-center space-y-8 text-center">
          <div className="space-y-4">
            <p className="text-primary font-medium tracking-widest uppercase">HI, I'M ADARSH TIWARI</p>
            <h1 className="font-headline text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              A <span className="text-primary">{currentText}</span>
              <span className="animate-pulse">|</span>
            </h1>
            <p className="max-w-[700px] text-foreground/80 md:text-xl">
              I build beautiful and robust mobile applications for iOS and Android.
              Passionate about clean code, great user experiences, and continuous learning.
            </p>
          </div>
          <div className="flex gap-4">
            <Button size="lg" asChild>
              <a href="#contact">
                Get Started
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#projects">
                My Work
              </a>
            </Button>
          </div>
          <div className="w-full max-w-4xl pt-12">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-card border border-border/50 rounded-lg p-6 text-center transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
                   <h3 className="text-4xl lg:text-5xl font-bold text-primary">{stat.value}</h3>
                   <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
