import { IoIosArrowDown } from "react-icons/io";
import { twMerge } from "tw-merge";

const Select = ({ title, options, className, defaultValue }) => {
  return (
    <div className="relative">
      <select
        defaultValue={defaultValue || ""}
        className={twMerge(
          `boder-gray-500 w-24 appearance-none border bg-white p-4 ${className}`,
        )}
      >
        <option value="" hidden disabled>
          {title}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div className="flex-center pointer-events-none absolute inset-y-0 right-0 pr-3">
        <IoIosArrowDown />
      </div>
    </div>
  );
};

export default Select;
