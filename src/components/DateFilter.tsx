
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface DateFilterProps {
  value: string;
  onChange: (value: string) => void;
}

const DateFilter = ({ value, onChange }: DateFilterProps) => {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">Posted Date</label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Filter by date" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Time</SelectItem>
          <SelectItem value="today">Today</SelectItem>
          <SelectItem value="week">Past Week</SelectItem>
          <SelectItem value="month">Past Month</SelectItem>
          <SelectItem value="3months">Past 3 Months</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default DateFilter;
