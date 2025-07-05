import { Card, CardContent } from '@/components/ui/card';
import { FC, SVGProps } from 'react';

const FlutterIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M7 14.5l8-8L19.5 11l-8 8-4.5-4.5zM12.5 1.5L4 10l4.5 4.5 8.5-8.5L12.5 1.5z" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const DjangoIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12,2A10,10,0,0,0,2,12A10,10,0,0,0,12,22A10,10,0,0,0,22,12A10,10,0,0,0,12,2ZM16,17.5H13.5V10.75H12V17.5H9.5V6.5H16V7.75H12V9.5H13.5V16.25H16Z" />
  </svg>
);

const KotlinIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.21 21.9L24 21.9 12.21 12.21 24 2.5 12.21 2.5 0 2.5 12.21 12.21 0 21.9 12.21 21.9z"/>
  </svg>
);

const ReactIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348" fill="none" stroke="currentColor" strokeWidth="1">
    <circle cx="0" cy="0" r="2.05" fill="currentColor" />
    <g stroke="currentColor" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);

const NodeJsIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.75 22.06L5.2 18.28c-.6-.35-.95-1-.95-1.68V7.4c0-.68.35-1.33.95-1.68L11.75 2c.6-.35 1.9-.35 2.5 0l6.55 3.78c.6.35.95 1,.95 1.68v7.4c0 .68-.35 1.33-.95 1.68l-6.55 3.72c-.6.43-1.9.43-2.5 0zm.6-2.49l5.1-2.88V8.34l-5.1-2.9-5.1 2.9v6.57l5.1 2.88zM12.9 8.24h2v7.54h-2V8.24zM9.1 12.44V9.67l-2.73.91v2.73l2.73-1.87z"/>
  </svg>
);

const FirebaseIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M5.1,17.2l3.8,1.6L20.6,6.3L16.8,4.7L5.1,17.2z M4,15.1l7.5-10.6l2.1,1.5L6.1,16.6L4,15.1z M19.4,8.1L10.3,20.4l-2-0.8 l9.1-12.3L19.4,8.1z M17.2,2.8L8.7,4.3l1.1,2.5l7.4-1.5L17.2,2.8z"/>
  </svg>
);

const MySqlIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.2 13.84c-1 .58-2.58 1.07-4.2 1.07-1.62 0-3.2-.49-4.2-1.07V14.2c1 .58 2.58 1.07 4.2 1.07 1.62 0 3.2-.49 4.2-1.07v1.64zm0-3.32c-1 .58-2.58 1.07-4.2 1.07-1.62 0-3.2-.49-4.2-1.07V9.2c1 .58 2.58 1.07 4.2 1.07 1.62 0 3.2-.49 4.2-1.07v1.64zM12 11.2c-1.62 0-3.2-.49-4.2-1.07V6.8c.55.22 1.13.41 1.74.55L9 8.5v.7c1 .58 2.58 1.07 4.2 1.07 1.62 0 3.2-.49 4.2-1.07v-.7l-.54-1.15c.6-.14 1.18-.33 1.74-.55v3.32c-1 .58-2.58 1.07-4.2 1.07z"/>
  </svg>
);

const MongoDbIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,3.5,7.45,10,10,0,0,0,13,0A9.89,9.89,0,0,0,22,12,10,10,0,0,0,12,2Zm2.82,14.79A4.75,4.75,0,0,1,9.09,14a4.44,4.44,0,0,1,0-4.22,4.83,4.83,0,0,1,5.43.59,1.31,1.31,0,0,0,1.48,0,5,5,0,0,1-3.15-4.4,1.25,1.25,0,0,0-1.24-1.24A1.26,1.26,0,0,0,10.4,6.05a8.42,8.42,0,0,0-2,10.74,8.5,8.5,0,0,0,10.75-2A1.25,1.25,0,0,0,18.49,14a1.2,1.2,0,0,0-.94.39,1.15,1.15,0,0,0-.27.52A5.85,5.85,0,0,1,14.82,16.79Z"/>
  </svg>
);

const PostgreSqlIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.44,18.2H9.27V5.8h6.58c1.9,0,3.15.54,3.78,1.61a3.8,3.8,0,0,1,.1,3.47c-.68,1.17-2,1.72-3.88,1.72H12.44Zm0-5.38h3.19c1.07,0,1.83-.24,2.23-.7a1.69,1.69,0,0,0-.09-2.31c-.42-.48-1.2-.7-2.14-.7H12.44Z"/>
  </svg>
);

const skills = [
  { name: 'Flutter', Icon: FlutterIcon },
  { name: 'Django', Icon: DjangoIcon },
  { name: 'Kotlin', Icon: KotlinIcon },
  { name: 'React', Icon: ReactIcon },
  { name: 'Node.js', Icon: NodeJsIcon },
  { name: 'Firebase', Icon: FirebaseIcon },
  { name: 'MySQL', Icon: MySqlIcon },
  { name: 'MongoDB', Icon: MongoDbIcon },
  { name: 'PostgreSQL', Icon: PostgreSqlIcon },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="w-full py-20 md:py-32">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Skills & Experience</h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
            A showcase of my technical proficiency across various modern technologies for web and mobile development.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill) => (
            <Card key={skill.name} className="flex flex-col items-center justify-center text-center p-6 transition-all duration-300 bg-card border border-border/50 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
              <CardContent className="flex flex-col items-center justify-center gap-4 p-0">
                <skill.Icon className="w-16 h-16 text-primary" />
                <p className="font-semibold text-lg">{skill.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
