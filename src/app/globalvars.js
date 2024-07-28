import { Twitter, Linkedin, Github } from 'feather-icons-react';

import CodeIcon from '@/app/assets/code.svg';
import PenIcon from '@/app/assets/pen-tool.svg';
import PencilIcon from '@/app/assets/edit-3.svg';

export const socials = [
  { name: 'X', icon: <Twitter />, href: 'https://twitter.com/_plaxamana' },
  { name: 'Github', icon: <Github />, href: 'https://github.com/plaxamana' },
  {
    name: 'Linkedin',
    icon: <Linkedin />,
    href: 'https://linkedin.com/in/plaxamana',
  },
];

export const skillsArr = [
  {
    id: 0,
    skill: 'Responsive Web Design',
    description:
      "I create websites that look fabulous on every device—whether it's a desktop, tablet, or the tiniest of phones. No more pinching and zooming, I promise!",
    icon: PenIcon,
  },
  {
    id: 1,
    skill: 'Web Development',
    description:
      'Turning designs into websites is my jam. With just a sprinkle of HTML, CSS, and JavaScript—or maybe a framework or two—I make the magic happen. No wand needed!',
    icon: CodeIcon,
  },
  {
    id: 2,
    skill: 'Copywriting',
    description:
      "Need your website to speak human? I've got you covered. I'll help your visitors find what they need and understand what you're all about—minus the jargon overload.",
    icon: PencilIcon,
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
