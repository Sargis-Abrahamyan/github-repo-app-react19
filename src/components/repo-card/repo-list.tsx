import { Suspense } from "react";
import RepoCardSkeleton from "./repo-card-skeleton";
import RepoCard from "./RepoCard";

export default function RepoList() {
  return (
    <Suspense fallback={<RepoCardSkeleton />}>
      <RepoCard  />
    </Suspense>
  );
}