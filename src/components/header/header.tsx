import ThemeSwitcher from "../../theme/theme-switcher";
import { FaGithub } from "react-icons/fa";

export default function Header() {
  return (
    <header
      className="flex justify-between items-center bg-bg-surface p-4  shadow-sm"
      role="banner"
    >
      <div className="flex items-center gap-x-2">
        <FaGithub size={32} aria-hidden="true" />
        <span className="text-lg lg:text-2xl font-bold tracking-tight">
          RepoFlow
        </span>
      </div>
        <ThemeSwitcher />
    </header>
  );
}
