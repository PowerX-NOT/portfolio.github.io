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
    title: 'Pre-University College',
    company_name: 'St. Francis Sales PU College',
    icon: coverhunt,
    iconBg: '#333333',
    date: '2021 - 2023',
  },
  {
    title: 'Hobbyist Programmer',
    company_name: 'expanding my skill in advanced programming languages',
    icon: microverse,
    iconBg: '#333333',
    date: ':)',
  },
  {
    title: 'Bachelors of Computer Application',
    company_name: 'Jain Deemed to be University',
    icon: kelhel,
    iconBg: '#333333',
    date: '2023 - 2026',
  },
  {
    title: 'Android dev',
    company_name: 'AOSP Custom ROMS',
    icon: dcc,
    iconBg: '#333333',
    date: 'At free time',
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
    demo: 'https://powerx-not.github.io/wip-display/',
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
    demo: 'https://github.com/PowerX-NOT/DBMS_WebApplication?tab=readme-ov-file#setup',
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
