// useDropdown.ts
import { useState } from "react";

export default function useDropdown() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedType, setSelectedType] = useState("All");

  const handleShowDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  const closeDropdown = () => {
    setShowDropdown(false);
  }

  const handleSelectedType = (type: string) => {
    setSelectedType(type);
    setShowDropdown(false);
  };


  return {
    showDropdown,
    selectedType,
    handleShowDropdown,
    handleSelectedType,
    closeDropdown
  };
}