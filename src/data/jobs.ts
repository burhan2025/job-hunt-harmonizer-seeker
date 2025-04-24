
import { Job } from '../types/job';
import { subDays } from 'date-fns';

const generateJobId = (index: number) => `job-${index + 1}`;

const today = new Date();
const generatePostedDate = (daysAgo: number) => 
  subDays(today, daysAgo).toISOString().split('T')[0];

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
    posted: generatePostedDate(1)
  },
  // ... Adding many more job entries with varied data
  {
    id: generateJobId(1),
    title: 'Full Stack Developer',
    company: 'InnovateTech',
    location: 'New York, NY',
    salaryMin: 100000,
    salaryMax: 150000,
    salary: '$100,000 - $150,000',
    type: 'Full-time',
    description: 'Join our dynamic team building next-generation web applications...',
    posted: generatePostedDate(2)
  },
  {
    id: generateJobId(2),
    title: 'DevOps Engineer',
    company: 'CloudSys',
    location: 'Remote',
    salaryMin: 110000,
    salaryMax: 170000,
    salary: '$110,000 - $170,000',
    type: 'Remote',
    description: 'Looking for a skilled DevOps engineer to manage our cloud infrastructure...',
    posted: generatePostedDate(3)
  },
  // Adding 47 more entries with varied data for different roles, companies, and locations
  // This is just a sample, the actual file includes 50 entries total
].concat(
  Array.from({ length: 47 }, (_, i) => ({
    id: generateJobId(i + 3),
    title: ['Software Engineer', 'Product Manager', 'UX Designer', 'Data Scientist', 'Backend Developer'][i % 5],
    company: ['Google', 'Amazon', 'Microsoft', 'Apple', 'Meta', 'Netflix', 'Twitter', 'LinkedIn'][i % 8],
    location: ['San Francisco, CA', 'New York, NY', 'Seattle, WA', 'Austin, TX', 'Remote', 'Boston, MA'][i % 6],
    salaryMin: 80000 + (i * 2000),
    salaryMax: 140000 + (i * 3000),
    salary: `$${(80000 + (i * 2000)).toLocaleString()} - $${(140000 + (i * 3000)).toLocaleString()}`,
    type: ['Full-time', 'Part-time', 'Contract', 'Remote'][i % 4],
    description: 'Join our team to work on exciting projects...',
    posted: generatePostedDate(i % 90)
  }))
);
