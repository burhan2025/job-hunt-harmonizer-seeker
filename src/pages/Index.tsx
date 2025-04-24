
import { useState } from 'react';
import { jobs } from '@/data/jobs';
import JobCard from '@/components/JobCard';
import SearchBar from '@/components/SearchBar';
import Filters from '@/components/Filters';

const Index = () => {
  const [search, setSearch] = useState('');
  const [locationFilter, setLocationFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase()) ||
      job.description.toLowerCase().includes(search.toLowerCase());

    const matchesLocation = locationFilter === 'all' || 
      job.location.toLowerCase().includes(locationFilter.toLowerCase());

    const matchesType = typeFilter === 'all' || 
      job.type.toLowerCase() === typeFilter.toLowerCase();

    return matchesSearch && matchesLocation && matchesType;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Job Listings</h1>
        
        <div className="space-y-6">
          <SearchBar value={search} onChange={setSearch} />
          
          <Filters 
            onLocationChange={setLocationFilter}
            onTypeChange={setTypeFilter}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
  );
};

export default Index;
