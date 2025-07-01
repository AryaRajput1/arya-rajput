import {
    Atom,
    Code2,
    FileType,
    Paintbrush,
    Server,
    LayoutTemplate,
    Layout,
    GitBranch,
    Network,
    Smartphone
} from 'lucide-react';

export const InfoAboutMe = {
    name: 'Arya Rajput',
    skills: [
        {
            title: 'React.Js',
            icon: Atom,
            description: 'Built dynamic, component-driven UIs with hooks, context, and high-performance rendering patterns in React.'
        },
        {
            title: 'JavaScript (ES6+)',
            icon: Code2,
            description: 'Proficient in modern JavaScript including ES6+, async/await, closures, and modular architecture.'
        },
        {
            title: 'TypeScript',
            icon: FileType,
            description: 'Implemented type-safe, scalable React apps with TypeScript, enhancing code quality and maintainability.'
        },
        {
            title: 'Tailwind CSS',
            icon: Paintbrush,
            description: 'Crafted responsive, utility-first UIs using Tailwind CSS with custom design systems and theming.'
        },
        {
            title: 'Next.js',
            icon: Server,
            description: 'Delivered high-performance SSR and SSG apps with Next.js, optimizing SEO and build-time rendering.'
        },
        {
            title: 'Vue.js',
            icon: LayoutTemplate,
            description: 'Built reactive interfaces with Vue 3, Composition API, and Vuex for state management.'
        },
        {
            title: 'HTML5 & CSS3',
            icon: Layout,
            description: 'Strong foundation in semantic HTML, CSS Grid, Flexbox, and accessibility best practices.'
        },
        {
            title: 'Git & GitHub',
            icon: GitBranch,
            description: 'Experienced with Git workflows, branching strategies, and collaboration via GitHub.'
        },
        {
            title: 'REST APIs & Axios',
            icon: Network,
            description: 'Integrated RESTful APIs using Axios with error handling, retries, and token-based auth patterns.'
        },
        {
            title: 'Responsive Design',
            icon: Smartphone,
            description: 'Delivered mobile-first, fully responsive UI experiences across devices using modern CSS and media queries.'
        }],
    education:
    {
        '2015': 'Completed 10th Grade with 89.4% – Foundation in Mathematics and Science',
        '2017': 'Completed 12th Grade with 87.4% – Specialization in PCM (Physics, Chemistry, Mathematics)',
        '2018-2022': 'B.Tech in Computer Science 84% – Focus on Data Structures, Web Development, and Software Engineering',
    },
    experience: {
        title: 'Frontend Developer',
        subtitle: 'Infosys Ltd. — Jul 2022 – Present',
        location: 'Hyderabad',
        responsibility: [
            'Developed scalable enterprise-grade applications using React.js and TypeScript.',
            'Modernized legacy UI components, improving performance and reducing maintenance overhead.',
            'Implemented accessibility (WCAG 2.1) and internationalization (i18n) across global modules.',
            'Optimized performance with code-splitting, lazy loading, and memoization.',
            'Collaborated with cross-functional Agile teams to deliver sprint-based feature releases.',
            'Documented UI components using Storybook for design-dev alignment.',
            'Integrated REST and GraphQL APIs with robust error handling and state management.',
            'Mentored junior engineers and led internal sessions on React patterns and testing practices.'
        ],
        techStack: [
            'React.js', 'TypeScript', 'Redux Toolkit', 'Chakra UI', 'Tailwind CSS',
            'HTML5', 'CSS3', 'Jest', 'React Testing Library', 'Storybook',
            'Git', 'Jira', 'Postman', 'Vite', 'Webpack', 'Jenkins',
            'REST APIs', 'GraphQL (Basic)', 'Figma', 'i18n', 'Agile/Scrum'
        ]
    },
    projects: [{
        title: 'SummAIze',
        descrption: "A webapp built using NextJs to summarize PDFs using AI.",
        imageSrc: "/summaize.png",
        demoLink: "https://summaize.vercel.app/",
        githubLink: "https://github.com/AryaRajput1/summaize"
    }, {
        title: 'PrepInterview',
        descrption: "A webapp built using NextJs to Practice Mock Interviews.",
        imageSrc: "/arPrepInterview.png",
        demoLink: "https://ar-prep-interview.vercel.app/",
        githubLink: "https://github.com/AryaRajput1/prep-interview"
    }, {
        title: 'CodingMasterAI',
        descrption: "A app which improves your code by giving Live review.",
        imageSrc: "/codingAiMaster.png",
        demoLink: "https://coding-ai-master.vercel.app/",
        githubLink: "https://github.com/AryaRajput1/coding-ai-master"
    },]
}