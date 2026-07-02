import Header from "./components/header/header";
import RepoList from "./components/repo-card/repo-list";
import FilterBarRepoLanguage from "./components/repo-search-filters/filterBar-repo-language";
import SearchBar from "./components/repo-search-filters/search-bar";
import SortRepo from "./components/repo-search-filters/sort-repo";

export default function App() {
  return (
    <div className="min-h-screen bg-bg-main text-text-primary transition-colors duration-200">
      <Header />
      <div className="flex items-center gap-x-3 p-4">
        <SearchBar />
        <FilterBarRepoLanguage />
        <SortRepo />
      </div>
      <RepoList />
    </div>
  );
}
