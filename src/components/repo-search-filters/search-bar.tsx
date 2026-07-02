import { useState, type ChangeEvent } from "react";
import { FaSearch } from "react-icons/fa";
import useDebounce from "../../hooks/useDebounce";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState<string| null>("");
  const debouncedValue = useDebounce({ value: searchTerm?? "", daley: 800 });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  console.log(debouncedValue, "debouncedValue");

  return (
    <div
      className="flex items-center gap-2 max-w-4xl rounded-2xl px-3 border-2 border-border-main bg-bg-surface transition-all duration-300 ease-in-out
    focus-within:border-border-focus focus-within:shadow-md"
    >
      <FaSearch
        size={18}
        className="text-text-secondary transition-colors duration-300 group-focus-within:text-border-focus"
      />

      <input
        type="text"
        value={searchTerm ?? ""}
        onChange={handleChange}
        placeholder="Search Repository..."
        className="
      w-full h-12 bg-transparent outline-none text-text-secondary font-medium placeholder:text-gray-400 transition-all duration-300"
      />
    </div>
  );
}
