import Header from "./components/header";
import RepoSearchFilters from "./components/repo-search-filters";

export default function App() {
  return (
    <div className="min-h-screen  bg-bg-main text-text-primary transition-colors duration-200">
      <Header />
      <RepoSearchFilters/>
    </div>
  );
}
