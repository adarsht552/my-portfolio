import { Github, Linkedin } from 'lucide-react';
import { Button } from './ui/button';

export default function Footer() {
  return (
    <footer className="border-t border-border/10">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between py-6 max-w-7xl px-4 md:px-6">
        <p className="text-sm text-muted-foreground mb-4 sm:mb-0">
          &copy; {new Date().getFullYear()} Adarsh Tiwari. All rights reserved.
        </p>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild>
            <a href="https://github.com/adarsh-tiwari" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://linkedin.com/in/adarsh-tiwari-dev" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
}
