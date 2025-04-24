
import { Job } from "@/types/job";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface JobCardProps {
  job: Job;
}

const JobCard = ({ job }: JobCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-200">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">{job.title}</CardTitle>
        <div className="text-sm text-gray-500">{job.company}</div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-600">{job.location}</div>
            <Badge variant="secondary">{job.type}</Badge>
          </div>
          <div className="text-sm font-medium text-blue-600">{job.salary}</div>
          <p className="text-sm text-gray-600 line-clamp-2">{job.description}</p>
          <div className="text-xs text-gray-400">
            Posted: {new Date(job.posted).toLocaleDateString()}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default JobCard;
