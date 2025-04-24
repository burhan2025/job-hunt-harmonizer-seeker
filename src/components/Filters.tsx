import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import SalaryRangeFilter from "./SalaryRangeFilter";
import DateFilter from "./DateFilter";

interface FiltersProps {
  onLocationChange: (value: string) => void;
  onTypeChange: (value: string) => void;
  onSalaryChange: (value: [number, number]) => void;
  onDateChange: (value: string) => void;
  salaryRange: [number, number];
  dateFilter: string;
}

const Filters = ({ 
  onLocationChange, 
  onTypeChange, 
  onSalaryChange,
  onDateChange,
  salaryRange,
  dateFilter
}: FiltersProps) => {
  return (
    <div className="space-y-6 bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Filters</h2>
      
      <div className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Location</label>
          <Select onValueChange={onLocationChange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Locations</SelectItem>
              <SelectItem value="san-francisco">San Francisco, CA</SelectItem>
              <SelectItem value="new-york">New York, NY</SelectItem>
              <SelectItem value="seattle">Seattle, WA</SelectItem>
              <SelectItem value="boston">Boston, MA</SelectItem>
              <SelectItem value="austin">Austin, TX</SelectItem>
              <SelectItem value="remote">Remote</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Job Type</label>
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

        <SalaryRangeFilter
          value={salaryRange}
          onChange={onSalaryChange}
          min={30000}
          max={200000}
        />

        <DateFilter
          value={dateFilter}
          onChange={onDateChange}
        />
      </div>
    </div>
  );
};

export default Filters;
