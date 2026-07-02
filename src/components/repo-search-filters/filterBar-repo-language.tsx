import Dropdown from "../ui/dropdown/dropdown";
import useDropdown from "../ui/dropdown/useDropdown";

export default function FilterBarRepoLanguage() {
 const dropdown = useDropdown();
  return (
    <Dropdown closeDropdown={dropdown.closeDropdown}>
      <Dropdown.Trigger onClick={dropdown.handleShowDropdown}>Language : {dropdown.selectedType}</Dropdown.Trigger>
      <Dropdown.Menu showDropdown={dropdown.showDropdown}>
        <Dropdown.Item  onClick={() => dropdown.handleSelectedType("All")}>All</Dropdown.Item>
        <Dropdown.Item onClick={() => dropdown.handleSelectedType("Forks")}>Forks</Dropdown.Item>
        <Dropdown.Item  onClick={() => dropdown.handleSelectedType("Archived")}>Archived</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
