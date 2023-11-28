<br/>

<p align="center">

<h1 align="center"> GITFOLO </h1>

  <h4 align="center">Easy to use automatic portfolio builder for every GitHub user!</h4>
  <p align="center">
    <a href="https://abdullah-129.000webhostapp.com/">View Demo</a>
    ·
    <a href="https://abdullah-129.000webhostapp.com/">Report Bug</a>
    ·
    <a href="https://abdullah-129.000webhostapp.com/">Request Feature</a>
  </p>
</p>

<p align="center">
  <a href="https://abdullah-129.000webhostapp.com/">
    <img src="https://i.ibb.co/Sm90B9w/Portfolio-of-Abdullah-Shahid-Google-Chrome-2023-11-27-04-16-58.gif" alt="Preview" width="60%"/>
  </a>
  <br/>
  <a href="#arifszn"><img src="https://arifszn.netlify.app/assets/img/drop-shadow.png" width="50%" alt="Shadow"/></a>
</p>

**GitFolo** is an easy to use portfolio builder where you can create a portfolio page automatically by just providing your GitHub username. It is built using React.js on top of Vite. But it's not necessary to have knowledge on these to get you started. You can make your own copy with zero coding experience.

**Features:**

✓ [Easy to Setup](#-installation--setup)  
✓ [30 Themes](#themes)  
✓ [Google Analytics](#google-analytics)  
✓ [Hotjar](#hotjar)  
✓ [SEO](#seo)  
✓ [PWA](#pwa)  
✓ [Avatar and Bio](#avatar-and-bio)  
✓ [Social Links](#social-links)  
✓ [Skill Section](#skills)  
✓ [Experience Section](#experience)  
✓ [Certification Section](#certifications)  
✓ [Education Section](#education)  
✓ [Projects Section](#projects)  
✓ [Blog Posts Section](#blog-posts)

To view a live example, **[click here](https://abdullah-129.000webhostapp.com)**.

Or try it **[online](https://stackblitz.com/~/github.com/Abdullah-129/gitfolo)**.

<p align="center">
  <img src="https://i.ibb.co/7CrgRQB/Screenshot-2023-11-27-042021.png" alt="Themes">
</p>
<p align="center">
  <img src="https://i.ibb.co/Wcwg86S/Screenshot-2023-11-27-042031.png" alt="Themes">
</p>
<p align="center">
  <img src="https://i.ibb.co/syTXYGd/Screenshot-2023-11-27-042103.png" alt="Themes">
</p>
<p align="center">
  <img src="https://i.ibb.co/x86cm8F/Screenshot-2023-11-27-042048.png" alt="Themes">
</p>

## 🛠 Installation & Setup

There are two ways to use **GITFOLO**. Use any.

- [Forking this repo _(recommended)_](#forking-this-repo)
- [Setting up locally](#setting-up-locally)

### Forking this repo

These instructions will get you a copy of the project and deploy your portfolio online using GitHub Pages!

- **Fork repo:** Click [here](https://github.com/abdullah-129/gitfolo/fork) to fork the repo so you have your own project to customize. A "fork" is a copy of a repository.
- **Rename repo:**
  - If you want to host your portfolio at `https://<USERNAME>.github.io`, rename your forked repository to `username.github.io` in GitHub, where `username` is your GitHub username (or organization name).
  - If you want to host your portfolio at `https://<USERNAME>.github.io/<REPO_NAME>` (e.g. `https://<USERNAME>.github.io/portfolio`), rename your forked repository to `<REPO_NAME>` (e.g. `portfolio`) in GitHub.
- **Enable workflows:** Go to your repo's **Actions** tab and enable workflows.

  ![Workflows](https://arifszn.netlify.app/assets/img/hosted/gitprofile/workflows.png)

- **Base Value:** Open `vite.config.js`, and change `base`'s value.

  - If you are deploying to `https://<USERNAME>.github.io`, set `base` to `'/'`.

  - If you are deploying to `https://<USERNAME>.github.io/<REPO_NAME>` (e.g. `https://<USERNAME>.github.io/portfolio`), then set `base` to `'/<REPO_NAME>/'` (e.g. `'/portfolio/'`).

  ```js
  {
    base: '/',
    // ...
  }
  ```

- **Commit the changes:** Now commit to your **main** branch with your changes. Wait a few minutes so that the CI/CD pipeline can publish your website to GitHub Pages. You can check the progress in the [Actions]() tab.

Your portfolio website will be live shortly. Any time you commit a change to the **main** branch, the website will be automatically updated. If you face any issue viewing the website, double-check the `base` value in the `vite.config.js` file. Also, check if **Source** is set to **GitHub Actions** in **Settings** ➜ **Pages** ➜ **Build and deployment**.

If you wish to add a custom domain, no CNAME file is required. Just add it to your repo's **Settings** ➜ **Pages** ➜ **Custom domain**.

As this is a Vite project, you can also host your website to Netlify, Vercel, Heroku, or other popular services. Please refer to this [doc](https://vitejs.dev/guide/static-deploy.html) for a detailed deployment guide to other services. Also, if you are not deploying to GitHub pages, `base:` might need to be deleted from `vite.config.js`.

### Setting up locally

- Clone the project and change directory.

  ```shell
  git clone https://github.com/abdullah-129/gitfolo.git
  cd <directory>
  ```

- Install dependencies.

  ```shell
  npm install
  ```

- Run dev server.

  ```shell
  npm start
  ```

- Finally, visit [`http://localhost:3000/`](http://localhost:3000/) from your browser.

List of all config [here](#-customization).

**If you face any problems or have any questions, open an issue [here](https://github.com/abdullah-129/gitfolo/issues).**

## 🎨 Customization

All the magic happens in the file `gitprofile.config.js`. Open it and modify it according to your preference.

```js
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

```

### Themes

There are 30 themes available that can be selected from the dropdown.

The default theme can be specified.

```js
// gitprofile.config.js
const config = {
  // ...
  themeConfig: {
    defaultTheme: 'light',
    // ...
  },
};
```

<p align="center">
  <img src="https://i.ibb.co/L91Jpzj/Screenshot-2023-11-27-042957.png" alt="Theme Dropdown" width="50%">
</p>

You can create your own custom theme by modifying these values. Theme `procyon` will have the custom styles.

```js
// gitprofile.config.js
const config = {
  // ...
  themeConfig: {
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
    // ...
  },
};
```

### Google Analytics

**GitProfile** supports both GA3 and GA4. If you do not want to use Google Analytics, keep the `id` empty.

```js
// gitprofile.config.js
const config = {
  // ...
  googleAnalytics: {
    id: '',
  },
};
```

Besides tracking visitors, it will track `click events` on projects and blog posts, and send them to Google Analytics.

### Hotjar

**GitProfile** supports [hotjar](https://www.hotjar.com) to track visitor interaction and behavior. If you do not want to use Hotjar, keep the `id` empty.

```js
// gitprofile.config.js
const config = {
  // ...
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
};
```

### SEO

Meta tags will be auto-generated from configs dynamically. However, you can also manually add meta tags in `public/index.html`.

### PWA

GitProfile is PWA enabled. The site can be installed as a Progressive Web App.

![PWA](https://github.com/arifszn/gitprofile/assets/45073703/9dc7cc5c-4262-4445-a7a5-1e3566ef43fa)

### Avatar and Bio

Your avatar and bio will be fetched from GitHub automatically.

### Social Links

You can link your social media services you're using, including LinkedIn, Twitter, Mastodon, Facebook, Instagram, YouTube, Dribbble, Behance, Medium, dev, Stack Overflow, Skype, Telegram, personal website, phone and email.

```js
// gitprofile.config.js
const config = {
  // ...
  social: {
    linkedin: 'abdullah0129',
    twitter: 'abdullah-213',
    mastodon: 'dev.abdullah',
    facebook: '',
    instagram: '',
    youtube: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '',
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: '',
  },
};
```

### Skills

To showcase your skills provide them here.

```js
// gitprofile.config.js
const config = {
  // ...
  skills: ['JavaScript', 'React.js'],
};
```

Empty array will hide the skills section.

### Experience

Provide your job history in `experiences`.

```js
// gitprofile.config.js
const config = {
  // ...
  experiences: [
    {
      company: 'Company Name',
      position: 'Position',
      from: 'September 2021',
      to: 'Present',
      companyLink: 'https://example.com',
    },
    {
      company: 'Company Name',
      position: 'Position',
      from: 'July 2019',
      to: 'August 2021',
      companyLink: 'https://example.com',
    },
  ],
};
```

Empty array will hide the experience section.

### Education

Provide your education history in `education`.

```js
// gitprofile.config.js
const config = {
  // ...
  education: [
    {
      institution: 'Institution name 1',
      degree: 'Bachelor of Science',
      from: '2015',
      to: '2019',
    },
    {
      institution: 'Institution name 2',
      degree: 'Higher Secondary Certificate (HSC)',
      from: '2012',
      to: '2014',
    },
  ],
};
```

Empty array will hide the education section.

### Certifications

Provide your industry certifications in `certifications`.

```js
// gitprofile.config.js
const config = {
  // ...
  certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com',
    },
  ],
};
```

Empty array will hide the certifications section.

### Projects

#### Github Projects

Your public repo from GitHub will be displayed in the `Github Projects` section automatically. You can limit how many projects do you want to be displayed. Also, you can hide forked or specific repo.

```js
// gitprofile.config.js
const config = {
  // ...
  github: {
    username: 'abdullah',
    sortBy: 'stars',
    limit: 8,
    exclude: {
      forks: false,
      projects: ['my-project1', 'my-project2'],
    },
  },
};
```

#### External Projects

In this section you can showcase your external/personal projects.

```js
// gitprofile.config.js
const config = {
  // ...
  externalProjects: [
    {
      title: 'Project Name',
      description: 'Description',
      link: 'https://example.com',
      imageUrl: 'https://via.placeholder.com/250x250',
    },
  ],
};
```

### Blog Posts

If you have [medium](https://medium.com) or [dev](https://dev.to) account, you can show your recent blog posts in here just by providing your medium/dev username. You can limit how many posts to display (Max is `10`).

```js
// gitprofile.config.js
const config = {
  // ...
  blog: {
    source: 'dev',
    username: 'abdullah',
    limit: 5,
  },
};
```



## 📄 License

[MIT](https://github.com/Abdullah-129/gitfolo/blob/main/LICENSE)
