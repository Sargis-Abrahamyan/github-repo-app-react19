import Dropdown from "../ui/dropdown/dropdown";
import useDropdown from "../ui/dropdown/useDropdown";

export default function SortRepo() {
 const dropdown = useDropdown();
  return (
    <Dropdown closeDropdown={dropdown.closeDropdown}>
      <Dropdown.Trigger onClick={dropdown.handleShowDropdown}>Sort By : {dropdown.selectedType}</Dropdown.Trigger>
      <Dropdown.Menu showDropdown={dropdown.showDropdown}>
        <Dropdown.Item  onClick={() => dropdown.handleSelectedType("All")}>All</Dropdown.Item>
        <Dropdown.Item onClick={() => dropdown.handleSelectedType("Forks")}>Forks</Dropdown.Item>
        <Dropdown.Item  onClick={() => dropdown.handleSelectedType("Archived")}>Archived</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
