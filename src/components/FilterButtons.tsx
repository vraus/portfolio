export default function FilterButtons({ tags, activeFilter, setFilter }) {
    return (
      <div className="flex flex-wrap gap-2 mb-4">
        {["All", ...tags].map((tag) => (
          <button
            key={tag}
            onClick={() => setFilter(tag)}
            className={`px-4 py-2 rounded-lg transition font-semibold ${
              activeFilter === tag
                ? "bg-blue-500 text-white shadow-md"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>
    );
  }
  