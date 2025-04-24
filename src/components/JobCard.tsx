
import { Job } from "@/types/job";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

interface JobCardProps {
  job: Job;
}

const JobCard = ({ job }: JobCardProps) => {
  const handleApply = () => {
    window.location.href = `mailto:${job.company.toLowerCase().replace(/\s+/g, '')}@careers.com?subject=Application for ${job.title}&body=I am interested in the ${job.title} position at ${job.company}.`;
  };

  return (
    <Card className="hover:shadow-lg transition-shadow duration-200 border-red-100">
      <CardHeader className="bg-gradient-to-r from-red-50 to-red-100">
        <CardTitle className="text-xl font-semibold">{job.title}</CardTitle>
        <div className="text-sm text-gray-500">{job.company}</div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-600">{job.location}</div>
            <Badge variant="secondary" className="bg-red-100">{job.type}</Badge>
          </div>
          <div className="text-sm font-medium text-red-600">{job.salary}</div>
          <div className="space-y-2">
            <p className="text-sm text-gray-600 line-clamp-2">{job.description}</p>
            <div className="text-sm text-gray-600">
              <strong className="font-medium">Requirements:</strong>
              <ul className="list-disc list-inside mt-1 space-y-1">
                {job.requirements.map((req, index) => (
                  <li key={index} className="text-sm">{req}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="text-xs text-gray-400">
              Posted: {new Date(job.posted).toLocaleDateString()}
            </div>
            <Button 
              onClick={handleApply}
              className="bg-red-500 hover:bg-red-600 text-white"
            >
              <Mail className="w-4 h-4 mr-2" />
              Apply Now
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default JobCard;
