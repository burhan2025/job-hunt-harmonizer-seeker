
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface FiltersProps {
  onLocationChange: (value: string) => void;
  onTypeChange: (value: string) => void;
}

const Filters = ({ onLocationChange, onTypeChange }: FiltersProps) => {
  return (
    <div className="flex gap-4 flex-wrap">
      <Select onValueChange={onLocationChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Location" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Locations</SelectItem>
          <SelectItem value="san-francisco">San Francisco</SelectItem>
          <SelectItem value="new-york">New York</SelectItem>
          <SelectItem value="remote">Remote</SelectItem>
        </SelectContent>
      </Select>

      <Select onValueChange={onTypeChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Job Type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Types</SelectItem>
          <SelectItem value="full-time">Full-time</SelectItem>
          <SelectItem value="part-time">Part-time</SelectItem>
          <SelectItem value="contract">Contract</SelectItem>
          <SelectItem value="remote">Remote</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default Filters;
