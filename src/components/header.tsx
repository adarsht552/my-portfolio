'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Package } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const NavLink = ({ href, label, onClick }: { href: string; label: string; onClick?: () => void }) => (
    <a
      href={href}
      onClick={onClick}
      className="text-foreground/80 hover:text-primary transition-colors font-medium text-base"
    >
      {label}
    </a>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-6">
        <a href="#" className="flex items-center gap-2 font-headline text-2xl font-bold">
          <Package className="h-7 w-7 text-primary" />
          Portfolio
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
        </nav>
        
        <div className="hidden md:flex">
          <Button asChild>
            <a href="#contact">Contact Me</a>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-background border-l-border">
              <div className="p-6 h-full flex flex-col">
                <a href="#" className="flex items-center gap-2 font-headline text-xl font-bold text-foreground mb-8" onClick={() => setIsMenuOpen(false)}>
                   <Package className="h-6 w-6 text-primary" />
                   Portfolio
                </a>
                <nav className="flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <NavLink key={link.href} {...link} onClick={() => setIsMenuOpen(false)} />
                  ))}
                </nav>
                <Button asChild className="mt-auto">
                  <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact Me</a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
