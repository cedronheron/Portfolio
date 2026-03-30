export const heroStats = [
  { value: '2 yrs', label: 'Full-stack work' },
  { value: '8', label: 'Projects shipped' },
  { value: '4', label: 'Team collabs' },
  { value: '1-2 wks', label: 'Typical kickoff' }
];

export const skills = [
  {
    name: 'Frontend systems',
    icon: 'BoltIcon',
    level: 'Mid',
    detail: 'Builds responsive frontends with clean components, state management, and sensible animations.',
    tags: ['Vue 3', 'Tailwind', 'JavaScript', 'Vite', 'UI polish'],
    logos: [
      { alt: 'Vue', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
      { alt: 'TailwindCSS', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' },
      { alt: 'Vite', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg' }
    ]
  },
  {
    name: 'Backend & data',
    icon: 'ServerStackIcon',
    level: 'Mid',
    detail: 'Creates REST APIs with Laravel or Node, designs straightforward SQL schemas, and handles auth.',
    tags: ['PHP', 'Laravel', 'PostgreSQL', 'Auth', 'API design'],
    logos: [
      { alt: 'PHP', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
      { alt: 'Laravel', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg' },
      { alt: 'PostgreSQL', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' }
    ]
  },
  {
    name: 'Product & delivery',
    icon: 'ChartBarIcon',
    level: 'Mid',
    detail: 'Comfortable with analytics events, basic CI/CD, and writing UI tests when needed.',
    tags: ['Analytics', 'CI/CD basics', 'Playwright', 'Docker'],
    logos: [
      { alt: 'Node.js', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { alt: 'Docker', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      { alt: 'Playwright', src: 'https://playwright.dev/img/playwright-logo.svg' }
    ]
  }
];

export const projects = [
  {
    title: 'Landing page kit',
    year: '2024',
    description: 'Reusable Vue components for marketing pages with theme support and simple CMS hooks.',
    stack: ['Vue', 'Tailwind', 'Markdown CMS'],
    impact: 'Faster page launches',
    link: ''
  },
  {
    title: 'Client portal MVP',
    year: '2023',
    description: 'Login, roles, and file sharing built with Laravel APIs and a Vue front end.',
    stack: ['Vue', 'Laravel', 'PostgreSQL'],
    impact: 'Clearer client handoffs',
    link: ''
  },
  {
    title: 'Analytics dashboard',
    year: '2023',
    description: 'Charts and filters powered by tracked events; exports and saved views included.',
    stack: ['Node', 'Vue', 'Supabase'],
    impact: 'Quicker reporting',
    link: ''
  },
  {
    title: 'Booking flow',
    year: '2022',
    description: 'Mobile-friendly booking with email reminders and basic payment integration.',
    stack: ['Vue', 'Tailwind', 'PHP', 'Stripe'],
    impact: 'Reduced manual scheduling',
    link: ''
  }
];

export const certificates = [
  {
    title: 'HTML Certification',
    issuer: 'Portfolio Upload',
    year: '2023',
    detail: 'Standards-first HTML foundations and semantic structure.',
    image: '/Certification HTML.jpg'
  },
  {
    title: 'CSS Certification',
    issuer: 'Portfolio Upload',
    year: '2023',
    detail: 'Responsive layouts, modern selectors, and animation basics.',
    image: '/Certification CSS.jpg'
  },
  {
    title: 'Analytics & Experimentation',
    issuer: 'Reforge',
    year: '2022',
    detail: 'Designed experimentation frameworks that respect privacy and speed.'
  }
];

export const aboutMetrics = [
  { value: '10', label: 'Web apps built' },
  { value: '4', label: 'Team projects' },
  { value: '6', label: 'Personal projects' },
  { value: '2', label: 'Years coding' }
];

export const socialLinks = [
  {
    name: 'Instagram',
    url: 'https://instagram.com',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/instagram.svg'
  },
  {
    name: 'GitHub',
    url: 'https://github.com',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg'
  },
  {
    name: 'Facebook',
    url: 'https://facebook.com',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/facebook.svg'
  }
];

export const contactInfo = {
  name: 'Nheron Cedro  ',
  email: 'cedronheron@gmail.com',
  phone: '+63 950 3151 603',
  address: 'Butuan City, Philippines',
  calendarUrl: 'https://cal.com',
  formEndpoint: 'https://formspree.io/f/xvgpgdlj'
};

export const profile = {
  name: 'Nheron Cedro',
  title: 'Full-stack Developer',
  age: 22,
  phone: '+63 950 3151 603',
  email: 'cedronheron@gmail.com',
  address: 'Butuan City, Philippines',
  photo: '/Me.png',
  education: {
    degree: 'Bachelor of Science in Information Technology',
    school: 'Caraga State University',
    year: '2026'
  }
};
