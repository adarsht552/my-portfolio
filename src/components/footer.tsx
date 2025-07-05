import { Github, Linkedin } from 'lucide-react';
import { Button } from './ui/button';
import { Package } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-border/40">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between py-6 max-w-7xl px-4 md:px-6">
        <div className="flex items-center gap-2 mb-4 sm:mb-0">
          <a href="#" className="flex items-center gap-2 font-headline text-lg font-bold">
            <Package className="h-6 w-6 text-primary" />
            Portfolio
          </a>
        </div>
        <p className="text-sm text-muted-foreground mb-4 sm:mb-0">
          &copy; {new Date().getFullYear()} Adarsh Tiwari. All rights reserved.
        </p>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild>
            <a href="https://github.com/adarsht552" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://www.linkedin.com/in/adarsh-tiwari-88073b273/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
}
