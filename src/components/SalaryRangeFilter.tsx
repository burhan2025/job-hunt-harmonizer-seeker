
import { Slider } from "@/components/ui/slider"

interface SalaryRangeFilterProps {
  value: [number, number];
  onChange: (value: [number, number]) => void;
  min: number;
  max: number;
}

const SalaryRangeFilter = ({ value, onChange, min, max }: SalaryRangeFilterProps) => {
  const formatSalary = (amount: number) => {
    return `$${amount.toLocaleString()}`;
  };

  return (
    <div className="w-full space-y-2">
      <label className="text-sm font-medium">Salary Range</label>
      <Slider
        value={value}
        onValueChange={onChange as (value: number[]) => void}
        max={max}
        min={min}
        step={1000}
        className="w-full"
      />
      <div className="flex justify-between text-sm text-gray-600">
        <span>{formatSalary(value[0])}</span>
        <span>{formatSalary(value[1])}</span>
      </div>
    </div>
  );
};

export default SalaryRangeFilter;
