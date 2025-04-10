import { Project, List, Task } from '../src/types/dataTypes'

export const tasks: Task[] = [
  {
    id: 1,
    name: 'Create project outline',
    description: 'Define the scope and objectives of the project',
    isCompleted: true,
  },
  {
    id: 2,
    name: 'Research competitors',
    description: 'Analyze similar products in the market',
    isCompleted: false,
  },
  {
    id: 3,
    name: 'Design wireframes',
    description: 'Create basic wireframes for key screens',
    isCompleted: false,
  },
  {
    id: 4,
    name: 'Define user personas',
    description: 'Create detailed user personas for target audience',
    isCompleted: true,
  },
  {
    id: 5,
    name: 'Set up project repository',
    description: 'Initialize git repository and set up project structure',
    isCompleted: true,
  },

  // Project 1, List 2 tasks
  {
    id: 6,
    name: 'Implement authentication',
    description: 'Set up user authentication system',
    isCompleted: false,
  },
  {
    id: 7,
    name: 'Create database schema',
    description: 'Design and implement database structure',
    isCompleted: true,
  },
  {
    id: 8,
    name: 'Build API endpoints',
    description: 'Develop RESTful API endpoints for core functionality',
    isCompleted: false,
  },
  {
    id: 9,
    name: 'Write unit tests',
    description: 'Create comprehensive unit tests for backend',
    isCompleted: false,
  },
  {
    id: 10,
    name: 'Set up CI/CD pipeline',
    description: 'Configure continuous integration and deployment',
    isCompleted: true,
  },

  // Project 1, List 3 tasks
  {
    id: 11,
    name: 'Design UI components',
    description: 'Create reusable UI components',
    isCompleted: true,
  },
  {
    id: 12,
    name: 'Implement responsive layout',
    description: 'Ensure the UI works on all device sizes',
    isCompleted: false,
  },
  {
    id: 13,
    name: 'Add animations',
    description: 'Implement smooth transitions and animations',
    isCompleted: false,
  },
  {
    id: 14,
    name: 'Optimize performance',
    description: 'Improve loading times and reduce bundle size',
    isCompleted: false,
  },
  {
    id: 15,
    name: 'Conduct user testing',
    description: 'Get feedback from real users',
    isCompleted: false,
  },

  // Project 2, List 1 tasks
  {
    id: 16,
    name: 'Plan marketing strategy',
    description: 'Develop comprehensive marketing plan',
    isCompleted: true,
  },
  {
    id: 17,
    name: 'Create content calendar',
    description: 'Plan content for next 3 months',
    isCompleted: true,
  },
  {
    id: 18,
    name: 'Design social media assets',
    description: 'Create graphics for social media posts',
    isCompleted: false,
  },
  {
    id: 19,
    name: 'Write blog posts',
    description: 'Create initial set of blog content',
    isCompleted: false,
  },
  {
    id: 20,
    name: 'Set up analytics',
    description: 'Configure tracking for marketing campaigns',
    isCompleted: true,
  },

  // Project 2, List 2 tasks
  {
    id: 21,
    name: 'Research keywords',
    description: 'Identify high-value SEO keywords',
    isCompleted: true,
  },
  {
    id: 22,
    name: 'Optimize website content',
    description: 'Update content with target keywords',
    isCompleted: false,
  },
  {
    id: 23,
    name: 'Build backlink strategy',
    description: 'Develop plan for acquiring quality backlinks',
    isCompleted: false,
  },
  {
    id: 24,
    name: 'Create technical SEO audit',
    description: 'Identify and fix technical SEO issues',
    isCompleted: false,
  },
  {
    id: 25,
    name: 'Monitor rankings',
    description: 'Track keyword rankings over time',
    isCompleted: false,
  },

  // Project 2, List 3 tasks
  {
    id: 26,
    name: 'Design email templates',
    description: 'Create branded email templates',
    isCompleted: true,
  },
  {
    id: 27,
    name: 'Build subscriber list',
    description: 'Implement strategies to grow email list',
    isCompleted: false,
  },
  {
    id: 28,
    name: 'Create email sequences',
    description: 'Develop automated email sequences',
    isCompleted: false,
  },
  {
    id: 29,
    name: 'A/B test subject lines',
    description: 'Test different email subject lines',
    isCompleted: false,
  },
  {
    id: 30,
    name: 'Analyze email metrics',
    description: 'Review open rates and click-through rates',
    isCompleted: false,
  },
]

// Lists data
export const lists: List[] = [
  // Project 1 lists
  { id: 1, name: 'Planning', color: 'blue', tasks: [1, 2, 3, 4, 5] },
  { id: 2, name: 'Development', color: 'green', tasks: [6, 7, 8, 9, 10] },
  { id: 3, name: 'Design', color: 'pink', tasks: [11, 12, 13, 14, 15] },

  // Project 2 lists
  { id: 4, name: 'Marketing', color: 'red', tasks: [16, 17, 18, 19, 20] },
  { id: 5, name: 'SEO', color: 'orange', tasks: [21, 22, 23, 24, 25] },
  { id: 6, name: 'Email', color: 'blue', tasks: [26, 27, 28, 29, 30] },
]

// Projects data
export const projects: Project[] = [
  { id: 1, name: 'Product Launch', lists: [1, 2, 3] },
  { id: 2, name: 'Marketing Campaign', lists: [4, 5, 6] },
]
