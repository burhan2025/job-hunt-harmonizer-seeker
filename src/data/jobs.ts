
import { Job } from '../types/job';
import { subDays } from 'date-fns';

const generateJobId = (index: number) => `job-${index + 1}`;

const today = new Date();
const generatePostedDate = (daysAgo: number) => 
  subDays(today, daysAgo).toISOString().split('T')[0];

const baseRequirements = [
  '3+ years of relevant experience',
  'Strong problem-solving skills',
  'Excellent communication skills',
  'Bachelor\'s degree in related field'
];

export const jobs: Job[] = [
  {
    id: generateJobId(0),
    title: 'Senior Frontend Developer',
    company: 'TechCorp',
    location: 'San Francisco, CA',
    salaryMin: 120000,
    salaryMax: 160000,
    salary: '$120,000 - $160,000',
    type: 'Full-time',
    description: 'Looking for an experienced frontend developer with React expertise...',
    requirements: [
      '5+ years of React experience',
      'Experience with TypeScript',
      'Strong UI/UX skills',
      'Knowledge of modern frontend tools'
    ],
    posted: generatePostedDate(1)
  },
  // ... adding many more job entries with requirements
].concat(
  Array.from({ length: 47 }, (_, i) => ({
    id: generateJobId(i + 3),
    title: ['Software Engineer', 'Product Manager', 'UX Designer', 'Data Scientist', 'Backend Developer'][i % 5],
    company: ['Google', 'Amazon', 'Microsoft', 'Apple', 'Meta', 'Netflix', 'Twitter', 'LinkedIn'][i % 8],
    location: ['San Francisco, CA', 'New York, NY', 'Seattle, WA', 'Austin, TX', 'Boston, MA', 'Remote'][i % 6],
    salaryMin: 80000 + (i * 2000),
    salaryMax: 140000 + (i * 3000),
    salary: `$${(80000 + (i * 2000)).toLocaleString()} - $${(140000 + (i * 3000)).toLocaleString()}`,
    type: ['Full-time', 'Part-time', 'Contract', 'Remote'][i % 4] as Job['type'],
    description: 'Join our team to work on exciting projects and make a difference in the industry...',
    requirements: [
      ...baseRequirements,
      ['SQL proficiency', 'Cloud platform experience', 'Mobile development', 'UI/UX expertise', 'Data analysis'][i % 5]
    ],
    posted: generatePostedDate(i % 90)
  }))
);
