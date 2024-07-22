import { Twitter, Linkedin, Github } from 'feather-icons-react';

export const socials = [
  { name: 'X', icon: <Twitter />, href: 'https://twitter.com/_plaxamana' },
  { name: 'Github', icon: <Github />, href: 'https://github.com/plaxamana' },
  {
    name: 'Linkedin',
    icon: <Linkedin />,
    href: 'https://linkedin.com/in/plaxamana',
  },
];

export const experience = [
  {
    title: 'Software Engineer',
    company: 'Achievers',
    year: 'Sept 2022 - Present',
    isCurrent: true,
  },
  {
    title: 'Software Developer Intern',
    company: 'CrowdParty.app',
    year: 'Aug 2021 - May 2022',
    isCurrent: false,
  },
  {
    title: 'Software Developer Intern',
    company: 'Co.Lab',
    year: 'Feb 2021 - Apr 2022',
    isCurrent: false,
  },
];

export const pages = [
  { to: 'Home', href: '/' },
  { to: 'About', href: '/about' },
  { to: 'Blog', href: '/blog' },
  { to: 'Work', href: '/work' },
  { to: 'Contact', href: '/contact' },
];

export const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};
