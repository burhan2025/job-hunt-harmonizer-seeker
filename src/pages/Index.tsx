
import { useState } from 'react';
import { jobs } from '@/data/jobs';
import JobCard from '@/components/JobCard';
import SearchBar from '@/components/SearchBar';
import Filters from '@/components/Filters';
import { subDays } from 'date-fns';

const Index = () => {
  const [search, setSearch] = useState('');
  const [locationFilter, setLocationFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');
  const [salaryRange, setSalaryRange] = useState<[number, number]>([30000, 200000]);
  const [dateFilter, setDateFilter] = useState('all');

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase()) ||
      job.description.toLowerCase().includes(search.toLowerCase());

    const matchesLocation = locationFilter === 'all' || 
      job.location.toLowerCase().includes(locationFilter.toLowerCase());

    const matchesType = typeFilter === 'all' || 
      job.type.toLowerCase() === typeFilter.toLowerCase();

    const matchesSalary = job.salaryMin >= salaryRange[0] && job.salaryMax <= salaryRange[1];

    const postedDate = new Date(job.posted);
    const now = new Date();
    let matchesDate = true;

    switch (dateFilter) {
      case 'today':
        matchesDate = postedDate >= subDays(now, 1);
        break;
      case 'week':
        matchesDate = postedDate >= subDays(now, 7);
        break;
      case 'month':
        matchesDate = postedDate >= subDays(now, 30);
        break;
      case '3months':
        matchesDate = postedDate >= subDays(now, 90);
        break;
      default:
        matchesDate = true;
    }

    return matchesSearch && matchesLocation && matchesType && matchesSalary && matchesDate;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Job Listings</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <Filters 
              onLocationChange={setLocationFilter}
              onTypeChange={setTypeFilter}
              onSalaryChange={setSalaryRange}
              onDateChange={setDateFilter}
              salaryRange={salaryRange}
              dateFilter={dateFilter}
            />
          </div>
          
          <div className="lg:col-span-3 space-y-6">
            <SearchBar value={search} onChange={setSearch} />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredJobs.map(job => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
            
            {filteredJobs.length === 0 && (
              <div className="text-center text-gray-500 py-8">
                No jobs found matching your criteria.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
