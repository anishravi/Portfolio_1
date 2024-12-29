// app/page.tsx
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { GithubIcon, LinkedinIcon, MailIcon, Terminal, Code2Icon, DatabaseIcon, PenToolIcon, GitFork } from 'lucide-react';
import Profile from "../public/Anish_photo(tie).png";

interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'database' | 'language';
  icon?: JSX.Element;
}

interface SocialLink {
  platform: string;
  url: string;
  icon: JSX.Element;
}

const skills: Skill[] = [
  // Frontend Technologies
  { name: 'JavaScript', category: 'frontend', icon: <Code2Icon className="w-6 h-6 text-green-400" /> },
  { name: 'TypeScript', category: 'frontend', icon: <Code2Icon className="w-6 h-6 text-green-400" /> },
  { name: 'React', category: 'frontend', icon: <Code2Icon className="w-6 h-6 text-green-400" /> },
  { name: 'Next.js', category: 'frontend', icon: <Code2Icon className="w-6 h-6 text-green-400" /> },
  { name: 'HTML/CSS', category: 'frontend', icon: <Code2Icon className="w-6 h-6 text-green-400" /> },
  
  // Backend Technologies
  { name: 'Node.js', category: 'backend', icon: <Terminal className="w-6 h-6 text-purple-400" /> },
  { name: 'Java', category: 'language', icon: <Terminal className="w-6 h-6 text-purple-400" /> },
  { name: 'Spring Boot', category: 'backend', icon: <Terminal className="w-6 h-6 text-purple-400" /> },
  
  // Database
  { name: 'SQL', category: 'database', icon: <DatabaseIcon className="w-6 h-6 text-blue-400" /> },
  { name: 'Oracle SQL', category: 'database', icon: <DatabaseIcon className="w-6 h-6 text-blue-400" /> },
  
  // Tools and Systems
  { name: 'Git', category: 'tools', icon: <GitFork className="w-6 h-6 text-yellow-400" /> },
  { name: 'Linux', category: 'tools', icon: <PenToolIcon className="w-6 h-6 text-yellow-400" /> },
];

const socialLinks: SocialLink[] = [
  {
    platform: 'GitHub',
    url: 'https://github.com/anishravi',
    icon: <GithubIcon size={24} className="hover:text-green-400" />,
  },
  {
    platform: 'LinkedIn',
    url: 'https://linkedin.com/in/anishravi2002',
    icon: <LinkedinIcon size={24} className="hover:text-green-400" />,
  },
  {
    platform: 'Email',
    url: 'anish.ravi2023@gmail.com',
    icon: <MailIcon size={24} className="hover:text-green-400" />,
  },
];

const Page: React.FC = () => {
  return (
    <main className="min-h-screen bg-gray-900 text-green-400">
      {/* Matrix-like background with reduced opacity */}
      <div className="fixed inset-0 pointer-events-none opacity-10">
        <div className="absolute inset-0 bg-[url('/matrix.png')] bg-repeat" />
      </div>

      {/* Header/Navigation */}
      <nav className="bg-black/50 backdrop-blur-sm border-b border-green-400/20 sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-mono font-bold text-green-400">Anish Ravi</h1>
            </div>
            <div className="flex space-x-8">
              {['About', 'Skills', 'Contact'].map((section) => (
                <Link
                  key={section}
                  href={`#${section}`}
                  className="font-mono text-green-400 hover:text-green-300 transition-colors"
                >
                {section}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="About" className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center relative z-10">
            <div className="relative w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden border-2 border-green-400/50">
              <Image
                src={Profile}
                alt="Profile"
                fill
                className="object-cover"
              />
            </div>
            <h2 className="text-4xl font-mono font-bold text-green-400 sm:text-5xl">
              Software Developer
            </h2>
            <p className="mt-4 text-xl text-green-300 font-mono">
              @ Hatio Innovations Pvt Ltd
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="Skills" className="py-16 bg-black/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-mono font-bold text-green-400 mb-8">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="bg-black/50 backdrop-blur-sm rounded-lg border border-green-400/20 p-6 
                         transition-all hover:scale-105 hover:border-green-400/50 hover:shadow-lg 
                         hover:shadow-green-400/20"
              >
                <div className="flex items-center space-x-3">
                  {skill.icon}
                  <div>
                    <p className="text-lg font-mono font-medium text-green-400">{skill.name}</p>
                    <span className="text-sm text-green-300/70 capitalize">{skill.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="Contact" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-mono font-bold text-green-400 mb-8">Contact Me</h2>
          <div className="flex justify-center space-x-8">
            {socialLinks.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 transition-colors"
                aria-label={link.platform}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 backdrop-blur-sm border-t border-green-400/20 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center font-mono text-green-400/70">
          <p>© {new Date().getFullYear()} Anish Ravi</p>
        </div>
      </footer>
    </main>
  );
};

export default Page;