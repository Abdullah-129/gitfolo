// gitprofile.config.js

const config = {
  github: {
    username: 'abdullah-129', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10,
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    // linkedin: 'ariful-alam',
    // twitter: 'arif_szn',
    // mastodon: 'arifszn@mastodon.social',
    // facebook: '',
    instagram: 'abdullah.s29',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    // medium: 'arifszn',
    // dev: 'arifszn',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'dev.abdullah.shahid@gmail.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'PHP',
    'Laravel',
    'JavaScript',
    'React.js',
    'Node.js',
    'Nest.js',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Docker',
    'PHPUnit',
    'CSS',
    'Antd',
    'Tailwind',
  ],
  experiences: [
    {
      company: 'Upwork',
      position: 'React Developer',
      from: 'September 2022',
      to: 'Present',
      companyLink: 'https://upwork.com',
    },
    {
      company: 'Fiver',
      position: 'React Developer',
      from: 'July 2022',
      to: 'Present',
      companyLink: 'https://Fiver.com',
    },
  ],
  certifications: [
    {
      name: 'Javascript',
      body: 'The Advance Concepts',
      year: 'March 2020',
      link: 'https://publuu.com/flip-book/315215/728128',
    },
    {
      name: 'NodeJs',
      body: 'The Complete Node.js Developer Course',
      year: 'April 2020',
      link: 'https://publuu.com/flip-book/315215/728130',
    },
    {
      name: 'React Server',
      body: 'The Complete React Server State Management',
      year: 'April 2021',
      link: 'https://publuu.com/flip-book/315215/728135',
    },
  ],
  education: [
    {
      institution: 'Superior College',
      degree: 'Fsc. Pre-Eng',
      from: '2015',
      to: '2017',
    },
    {
      institution: 'University of Sialkot',
      degree: 'Bs. Computer Science',
      from: '2017',
      to: '2021',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'SportsWear Manufacturers Website',
      description:
        'This website is built using React.js for the frontend and utilizes Node.js as the backend. It also includes an admin panel similar to WordPress, enabling users to effortlessly add or remove products.',
      link: 'https://allup-sports.com',
      imageUrl: 'https://i.ibb.co/4fZrYw6/Screenshot-2023-11-27-005601.png',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  // blog: {
  //   source: 'dev', // medium | dev
  //   username: 'arifszn', // to hide blog section, keep it empty
  //   limit: 2, // How many posts to display. Max is 10.
  // },
  // googleAnalytics: {
  //   id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  // },
  // // Track visitor interaction and behavior. https://www.hotjar.com
  // hotjar: {
  //   id: '',
  //   snippetVersion: 6,
  // },
  themeConfig: {
    defaultTheme: 'wireframe',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Developed By Abdullah Shahid ❤️`,
};

export default config;
