import { useEffect, useRef, type ReactNode  } from "react";
import { cn } from "../../../utils/cn";
import useDropdown from "./useDropdown";

type DropdownProps = {
  children: ReactNode;
  closeDropdown: () => void;
} & React.HTMLAttributes<HTMLDivElement>;

type DropdownMenuListProps = {
  children: ReactNode;
  showDropdown: boolean;
} & React.HTMLAttributes<HTMLUListElement>;

type DropdownMenuLiProps = {
  children: ReactNode;
} & React.HTMLAttributes<HTMLLIElement>;

type DropdownTriggerProps = {
  children: ReactNode;
} & React.HTMLAttributes<HTMLButtonElement>;

export default function Dropdown({
  children,
  closeDropdown,
  className,
  ...props
}: DropdownProps) {
  const dropdown = useDropdown();
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        closeDropdown();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [closeDropdown, dropdown]);

  return (
    <div
      ref={dropdownRef}
      className={cn("relative w-3xs", className)}
      {...props}
    >
      {children}
    </div>
  );
}

export function DropdownTrigger({ children, ...props }: DropdownTriggerProps) {
  return (
    <button
      className="flex items-center justify-between w-full cursor-pointer text-text-secondary  border border-border-main shadow-md rounded-2xl px-3 h-12 font-bold  transition-all duration-300 ease-in-out
    focus-within:border-border-focus focus-within:shadow-md"
      {...props}
    >
      {children}
    </button>
  );
}

export function DropdownMenu({
  children,
  showDropdown,
  className,
  ...props
}: DropdownMenuListProps) {
  return (
    <ul
      className={cn(
        "absolute left-0 mt-2 w-full rounded-xl border border-border-main bg-bg-main shadow-lg overflow-hidden transition-all duration-200",
        showDropdown && "opacity-100 scale-100",
        !showDropdown && "opacity-0 scale-95 pointer-events-none",
        className,
      )}
      {...props}
    >
      {children}
    </ul>
  );
}

export function DropdownItem({  children,className,...props }: DropdownMenuLiProps) {
  return (
    <li
      className={cn("px-4 py-2 hover:bg-bg-surface cursor-pointer",className)}
    {...props}
    >
      {children}
    </li>
  );
}

Dropdown.Trigger = DropdownTrigger;
Dropdown.Menu = DropdownMenu;
Dropdown.Item = DropdownItem;
