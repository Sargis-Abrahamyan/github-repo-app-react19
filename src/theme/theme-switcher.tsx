import { useTheme } from "./context/useTheme";
export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <nav className="flex items-center gap-2  md:gap-4" aria-label="Main controls">
      <button
        onClick={toggleTheme}
        aria-label="Toggle Theme"
        className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
          isDark ? "bg-slate-700" : "bg-gray-200"
        }`}
      >
        <span
          className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
            isDark ? "translate-x-5" : "translate-x-0"
          }`}
        />
      </button>

      <span className="text-sm font-medium text-text-primary">
        {isDark ? "Dark Mode" : "Light Mode"}
      </span>
    </nav>
  );
}
