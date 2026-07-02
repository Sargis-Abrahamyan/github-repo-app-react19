import { MdOutlineStarBorderPurple500 } from "react-icons/md";
import { FaCodeFork } from "react-icons/fa6";
import { formatCount, formatRelativeTime } from "../../utils/calculate";

export default function RepoCard() {
 return (
  <div className="p-2 sm:p-4 lg:p-6 2xl:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 animate-fade-in">
    {Array.from({ length: 10 }).map((_, index) => (
      <div
        key={index}
        className="bg-bg-surface p-3 sm:p-4 lg:p-5 rounded-lg border border-border-main shadow-md 
                   focus-within:border-border-focus transition-all"
      >
        {/* Header */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-gray-900 h-7 w-7 sm:h-8 sm:w-8 rounded-full text-white flex items-center justify-center text-sm">
              S
            </div>

            <h3 className="text-base sm:text-lg font-bold text-text-primary truncate">
              RepoCard {index + 1}
            </h3>
          </div>

          <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
            This is a simple repository card component.
          </p>
        </div>

        <div className="flex flex-col gap-2 mt-6 sm:mt-8">
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <div className="flex items-center gap-2">
              <div className="bg-gray-900 h-5 w-5 sm:h-6 sm:w-6 rounded-full text-white flex items-center justify-center text-xs">
                S
              </div>
              <span className="text-sm sm:text-base text-text-primary">
                JavaScript
              </span>
            </div>

            <div className="flex items-center gap-1 text-sm sm:text-base text-text-primary">
              <MdOutlineStarBorderPurple500 size={18} className="sm:size-5.5" />
              <span>{formatCount(110000)}</span>
            </div>

            <div className="flex items-center gap-1 text-sm sm:text-base text-text-primary">
              <FaCodeFork size={14} className="sm:size-5" />
              <span>{formatCount(22000)}</span>
            </div>
          </div>

          <span className="text-xs sm:text-sm text-text-secondary">
            {formatRelativeTime("2023-10-01T12:00:00Z")}
          </span>
        </div>
      </div>
    ))}
  </div>
);
}
