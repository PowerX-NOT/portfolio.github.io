import {
  JGI,
  backend,
  ux,
  mobile,
  javascript,
  typescript,
  html,
  css,
  nodejs,
  git,
  mysql,
  sh,
  linux,
  FAD,
  DBMS,
  ROM,
  coverhunt,
  dcc,
  kelhel,
  microverse,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Computer Science @ JAIN',
    icon: JGI,
  },
  {
    title: 'Competitve Programming',
    icon: backend,
  },
  {
    title: 'Web Development',
    icon: ux,
  },
  {
    title: 'Android & kernel development',
    icon: mobile,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'linux',
    icon: linux,
  },
  {
    name: 'sh',
    icon: sh,
  },
  {
    name: 'mysql',
    icon: mysql,
  },
];

const experiences = [
  {
    title: 'Front-End Developer',
    company_name: 'Cover Hunt',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Aug 2021 - Feb 2022',
  },
  {
    title: 'Mentor (Volunteer)',
    company_name: 'Microverse',
    icon: microverse,
    iconBg: '#333333',
    date: 'Mar 2022 - May 2022',
  },
  {
    title: 'Junior Software Engineer',
    company_name: 'Kelhel',
    icon: kelhel,
    iconBg: '#333333',
    date: 'May 2022 - Oct 2022',
  },
  {
    title: 'Full Stack Developer',
    company_name: 'Diversity Cyber Council',
    icon: dcc,
    iconBg: '#333333',
    date: 'Sep 2022 - Present',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'FAD',
    description: 'A Financial Analysis Dashboard is a visual tool designed to track, analyze, and display financial data such as income, expenses, savings, and debts. It provides key insights, trends, and performance indicators through interactive charts, graphs, and tables, helping users make informed financial decisions.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: FAD,
    repo: 'https://github.com/PowerX-NOT/FAD-PCL',
    demo: 'https://shaqdeff.github.io/KomiKult/',
  },
  {
    id: 'project-2',
    name: 'DBMS',
    description:
      'This Flask web application allows users to interact with a MySQL database through a user-friendly interface. Users can perform various database management tasks.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: DBMS,
    repo: 'https://github.com/PowerX-NOT/DBMS_WebApplication',
    demo: 'https://shaqdeff.github.io/Leaderboard/',
  },
  {
    id: 'project-3',
    name: 'Custom ROM',
    description: 'A Custom ROM is a modified version of the operating system (OS) for Android devices. It is developed by third-party developers or communities and replaces the stock ROM. Custom ROMs offer additional features, customization options, improved performance.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: ROM,
    repo: 'https://github.com/Mi-A3-laurel-sprout',
    demo: 'https://t.me/EvoX_Mi_A3',
  },
];

export { services, technologies, experiences, projects };
