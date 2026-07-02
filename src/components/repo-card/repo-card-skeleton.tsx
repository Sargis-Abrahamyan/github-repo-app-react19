export default function RepoCardSkeleton() {
  return (
    <div className="p-2 sm:p-4 lg:p-6 2xl:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 animate-fade-in">
      {Array.from({ length: 10 }).map((_, index) => (
        <div
          key={index}
          className="bg-bg-surface p-3 sm:p-4 lg:p-5 rounded-lg border border-border-main shadow-md animate-pulse"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-8 w-8 rounded-full bg-gray-700" />
            <div className="h-4 w-32 bg-gray-700 rounded" />
          </div>

          <div className="space-y-2">
            <div className="h-3 w-full bg-gray-700 rounded" />
            <div className="h-3 w-5/6 bg-gray-700 rounded" />
          </div>

          <div className="mt-6 space-y-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-full bg-gray-700" />
                <div className="h-3 w-20 bg-gray-700 rounded" />
              </div>

              <div className="flex items-center gap-2">
                <div className="h-4 w-4 bg-gray-700 rounded" />
                <div className="h-3 w-12 bg-gray-700 rounded" />
              </div>

              <div className="flex items-center gap-2">
                <div className="h-4 w-4 bg-gray-700 rounded" />
                <div className="h-3 w-12 bg-gray-700 rounded" />
              </div>
            </div>

            <div className="h-3 w-24 bg-gray-700 rounded" />
          </div>
        </div>
      ))}
    </div>
  );
}