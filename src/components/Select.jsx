import { IoIosArrowDown } from "react-icons/io";

const Select = ({ title, options }) => {
  return (
    <div className="relative">
      <select
        defaultValue={""}
        className="boder-gray-500 w-24 appearance-none border bg-white p-4"
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
      <div className="flex-center absolute inset-y-0 right-0 pr-3">
        <IoIosArrowDown />
      </div>
    </div>
  );
};

export default Select;
