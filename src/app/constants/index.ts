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
        }]
}