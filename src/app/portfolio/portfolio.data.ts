export interface NavItem {
  id: string;
  label: string;
}

export interface SkillItem {
  name: string;
  category: 'Frontend' | 'UI / Styling' | 'Backend & Database' | 'Tools & Soft Skills';
  icon: string;
  level: number;
  badge: string;
  description: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  isCurrent?: boolean;
  description: string[];
  technologies: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'Angular' | 'Web Apps' | 'Enterprise Tools' | 'Angular & NodeJs';
  description: string;
  imagePlaceholder: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  responsibilities?: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  highlights: string[];
}

export interface PersonalDetails {
  name: string;
  title: string;
  tagline: string;
  shortBio: string;
  fullBio: string[];
  location: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
  profileImagePlaceholder: string;
  yearsOfExperience: number;
  completedProjects: number;
  codeQualityRating: string;
}

export const PORTFOLIO_DATA: {
  personal: PersonalDetails;
  navItems: NavItem[];
  skills: SkillItem[];
  experiences: ExperienceItem[];
  projects: ProjectItem[];
  education: EducationItem[];
} = {
  personal: {
    name: 'Aniket Agale',
    title: 'Fullstack Developer',
    tagline: 'I build scalable, beautiful digital experiences.',
    shortBio: 'Passionate Frontend Developer specialized in Angular, TypeScript, UI component architecture, and REST API integration with hands-on experience on real-time client projects.',
    fullBio: [
      'I am a Frontend Developer with 2 years of hands-on experience specializing in Angular, dedicated to building dynamic, user-friendly, and responsive web applications.',
      'Experienced in full-spectrum UI development, multi-step stepper workflows, complex REST API integration, bug fixing, and developing reusable component libraries for client projects.',
      'With strong problem-solving capabilities and commitment to clean code standards, I focus on delivering scalable frontend solutions that enhance user usability and performance.'
    ],
    location: 'Sangamner, Maharashtra, India',
    email: 'aniketagale7@gmail.com',
    phone: '+91 9370268569',
    github: 'https://github.com/aniketagale',
    linkedin: 'https://www.linkedin.com/in/aniket-agale-b02b78296/',
    resumeUrl: '/assets/Aniket_Agale_Resume.pdf',
    profileImagePlaceholder: 'AA',
    yearsOfExperience: 2,
    completedProjects: 4,
    codeQualityRating: '100%'
  },

  navItems: [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' }
  ],

  skills: [
    {
      name: 'Angular',
      category: 'Frontend',
      icon: 'code-2',
      level: 95,
      badge: 'Core Expertise',
      description: 'Standalone Components, RxJS, Reactive Forms, Stepper Workflows, Routing & Reusable Widgets'
    },
    {
      name: 'React',
      category: 'Frontend',
      icon: 'layout',
      level: 80,
      badge: 'Proficient',
      description: 'Component Architecture, JSX, State Management, Hooks & SPA Principles'
    },
    {
      name: 'Python',
      category: 'Backend & Database',
      icon: 'code',
      level: 80,
      badge: 'Proficient',
      description: 'Data Processing, Automation, API Development & Scripting'
    },
    {
      name: 'TypeScript',
      category: 'Frontend',
      icon: 'file-code',
      level: 90,
      badge: 'Advanced',
      description: 'Strict Typing, Interfaces, Generics, OOP Patterns & Modular Code Architecture'
    },
    {
      name: 'JavaScript',
      category: 'Frontend',
      icon: 'terminal',
      level: 88,
      badge: 'Advanced',
      description: 'ES6+, Async/Await, Promises, Closures, DOM Manipulation & Event Handling'
    },
    {
      name: 'HTML5',
      category: 'Frontend',
      icon: 'layout',
      level: 95,
      badge: 'Expert',
      description: 'Semantic Layouts, Accessibility (a11y), Standards Compliance & Form Validations'
    },
    {
      name: 'CSS3',
      category: 'Frontend',
      icon: 'palette',
      level: 90,
      badge: 'Advanced',
      description: 'Flexbox, CSS Grid, Custom Properties, Keyframe Animations & Responsive Layouts'
    },

    {
      name: 'Bootstrap',
      category: 'UI / Styling',
      icon: 'box',
      level: 92,
      badge: 'Expert',
      description: 'Grid System, Utility Classes, Responsive UI Layouts & Custom Component Styling'
    },
    {
      name: 'Tailwind CSS',
      category: 'UI / Styling',
      icon: 'wind',
      level: 88,
      badge: 'Advanced',
      description: 'Utility-First Styling, Modern Dark Mode, Glassmorphism & Custom Themes'
    },

    {
      name: 'Node.js',
      category: 'Backend & Database',
      icon: 'server',
      level: 75,
      badge: 'Intermediate',
      description: 'JavaScript Server Environment, REST API Communication & Backend Fundamentals'
    },
    {
      name: 'SQL',
      category: 'Backend & Database',
      icon: 'database',
      level: 80,
      badge: 'Proficient',
      description: 'Relational Database Queries, Data Manipulation & Database Schema Concepts'
    },
    {
      name: 'PostgreSQL',
      category: 'Backend & Database',
      icon: 'database',
      level: 78,
      badge: 'Proficient',
      description: 'Relational Database Operations, Data Management & Query Execution'
    },
    {
      name: 'MySQL',
      category: 'Backend & Database',
      icon: 'database',
      level: 80,
      badge: 'Proficient',
      description: 'Database Operations, Table Design, Queries & CRUD Integration'
    },

    {
      name: 'REST API Integration',
      category: 'Tools & Soft Skills',
      icon: 'globe',
      level: 95,
      badge: 'Expert',
      description: 'HttpClient, Seamless Client-Server Data Exchange, Data Handling & Error Management'
    },
    {
      name: 'Problem Solving & Bug Fixing',
      category: 'Tools & Soft Skills',
      icon: 'wrench',
      level: 92,
      badge: 'Advanced',
      description: 'Root Cause Diagnostics, UI Enhancement, Performance Optimization & Stability'
    },
    {
      name: 'Teamwork & Adaptability',
      category: 'Tools & Soft Skills',
      icon: 'users',
      level: 95,
      badge: 'Core Skill',
      description: 'Agile Collaboration, Fast Learner, Cross-Functional Teamwork & Communication'
    }
  ],

  experiences: [
    {
      id: 'exp-1',
      role: 'Frontend Developer',
      company: 'The Baap Company',
      location: '',
      period: '2026 - Present',
      isCurrent: true,
      description: [
        'LIMA (Audit Tool): Developing scalable frontend architecture, multi-step workflows, and dynamic data visualization for enterprise audits.'
      ],
      technologies: []
    },
    {
      id: 'exp-2',
      role: 'Frontend Developer',
      company: 'The Baap Company',
      location: '',
      period: '2024 - 2025',
      isCurrent: false,
      description: [
        'Simplify-VMS, Hotel Management & Productivity Tracker: Built responsive Angular UIs, integrated REST APIs, and optimized performance across multiple client domains.'
      ],
      technologies: []
    },
    {
      id: 'exp-3',
      role: 'Technical Foundation',
      company: 'The Baap Company',
      location: '',
      period: '2023 - 2024',
      isCurrent: false,
      description: [
        'Mastered foundational web technologies (HTML, CSS, JS) and programming paradigms through intensive training and hands-on assignments.'
      ],
      technologies: []
    }
  ],

  projects: [
    {
      id: 'proj-vms',
      title: 'Vendor Management System (VMS)',
      subtitle: 'User, Invoice & Delegation Management Solution',
      category: 'Angular',
      description: 'Developed and maintained the User Management, Invoice Management, and Delegation modules for the Vendor Management System (VMS) with responsive interfaces and seamless API integration.',
      imagePlaceholder: 'VMS SYSTEM DASHBOARD',
      tags: ['Angular', 'TypeScript', 'Bootstrap', 'HTML5', 'CSS3', 'REST API'],
      demoUrl: '#demo-vms',
      githubUrl: '#github-vms',
      featured: false,
      responsibilities: [
        'Developed and maintained User Management, Invoice Management, and Delegation modules.',
        'Built responsive, user-friendly interfaces using Angular, HTML, CSS, Bootstrap, and TypeScript.',
        'Integrated RESTful APIs for reliable data communication and collaborated on feature enhancements.'
      ]
    },
    {
      id: 'proj-lima',
      title: 'LIMA (Audit Tool)',
      subtitle: 'Multi-Step Audit Workflows & Dynamic Data Portal',
      category: 'Angular',
      description: 'Developed modern, responsive Angular interfaces and multi-step audit workflows across multiple modules. Integrated RESTful APIs and implemented dynamic forms to manage complex audit processes efficiently.',
      imagePlaceholder: 'LIMA AUDIT WORKFLOW UI',
      tags: ['Angular', 'TypeScript', 'Stepper Workflows', 'RESTful API', 'Dynamic Forms', 'UI Enhancement'],
      demoUrl: '#demo-lima',
      githubUrl: '#github-lima',
      featured: true,
      responsibilities: [
        'Built modern, responsive Angular interfaces and multi-step audit workflows across multiple modules.',
        'Integrated RESTful APIs and implemented dynamic forms and data handling for complex audit workflows.',
        'Resolved functional and UI issues, improved usability and performance, and executed thorough testing.'
      ]
    },
    {
      id: 'proj-hotel',
      title: 'Hotel Management System',
      subtitle: 'Digital Hospitality Platform & Dashboard Widgets',
      category: 'Angular',
      description: 'Developed modules for a digital hotel management system using Angular. Built responsive UI components, integrated REST APIs, and created reusable widgets to improve user interaction and performance.',
      imagePlaceholder: 'HOTEL MANAGEMENT UI',
      tags: ['Angular', 'TypeScript', 'REST API', 'Reusable Widgets', 'Dashboard UI'],
      demoUrl: '#demo-hotel',
      githubUrl: '#github-hotel',
      featured: false,
      responsibilities: [
        'Developed modules for a digital hotel management system using Angular.',
        'Built responsive UI components and integrated REST APIs.',
        'Created reusable widgets to improve overall user interaction and dashboard performance.'
      ]
    },
    {
      id: 'proj-health-camp',
      title: 'Health Camp',
      subtitle: 'Personal Project',
      category: 'Angular & NodeJs',
      description: 'A personal project developed for managing youth medical camp registrations. Built multiple dynamic UI designs using Angular and successfully integrated backend APIs with NodeJs for seamless participant registration and data flow.',
      imagePlaceholder: 'HEALTH CAMP REGISTRATION UI',
      tags: ['Angular', 'TypeScript', 'UI Design', 'REST API Integration'],
      demoUrl: '#demo-health',
      githubUrl: '#github-health',
      featured: false,
      responsibilities: [
        'Designed and developed multiple user interfaces tailored for youth medical camp registrations.',
        'Built a responsive and intuitive frontend using Angular and TypeScript.',
        'Integrated backend REST APIs to handle registration data submission and processing smoothly.'
      ]
    },
    {
      id: 'proj-productivity',
      title: 'Productivity Tracker',
      subtitle: 'Employee Analytics & Activity Monitoring Suite',
      category: 'Angular & NodeJs',
      description: 'Developed UI screens to fetch and display comprehensive employee productivity analytics. Integrated tracking parameters including punch-in/out logs, system screenshots, and chat activity metrics.',
      imagePlaceholder: 'ANALYTICS DASHBOARD UI',
      tags: ['Angular', 'TypeScript', 'Analytics UI', 'REST API', 'Data Visualization'],
      demoUrl: '#demo-productivity',
      githubUrl: '#github-productivity',
      featured: false,
      responsibilities: [
        'Developed UI screens to fetch and display comprehensive employee productivity analytics.',
        'Integrated tracking parameters, including punch-in/out logs, system screenshots, and chat activity metrics.',
        'Ensured smooth rendering and responsive data updates for analytics views.'
      ]
    }
  ],

  education: [
    {
      id: 'edu-bca',
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'Mysore University',
      location: 'India',
      period: 'Graduate',
      highlights: [
        'Graduated with core specialization in Computer Applications, Software Engineering, and Web Development.',
        'Gained hands-on knowledge in programming, algorithms, database systems, and modern software design.'
      ]
    },
    {
      id: 'edu-hsc',
      degree: 'HSC (Higher Secondary Certificate)',
      institution: 'Maharashtra State Board',
      location: 'Maharashtra, India',
      period: 'Completed',
      highlights: [
        'Higher Secondary Education under Maharashtra State Board with strong foundation in analytical subjects.'
      ]
    },
    {
      id: 'edu-ssc',
      degree: 'SSC (Secondary School Certificate)',
      institution: 'Maharashtra State Board',
      location: 'Maharashtra, India',
      period: 'Completed',
      highlights: [
        'Secondary School Certificate under Maharashtra State Board with academic focus on Mathematics & Science.'
      ]
    }
  ]
};
