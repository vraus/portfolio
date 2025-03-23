export default function FilterButtons({
  tags,
  activeFilter,
  setFilter,
}: {
  tags: string[];
  activeFilter: string;
  setFilter: (tag: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {["All", ...tags].map((tag) => (
        <button
          key={tag}
          onClick={() => setFilter(tag)}
          className={`btn transition ${
            activeFilter === tag
              ? "btn-primary text-primary shadow-lg"
              : "btn-secondary text-gray-800"
          }`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}
