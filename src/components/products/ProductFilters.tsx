export default function ProductFilters() {
  return (
    <aside className="w-full max-w-sm p-4 border">
      <h1 className="text-xl">Filters</h1>

      <div className="flex flex-col gap-4">
        <div>
          <h2>Price</h2>

          <input type="range" min={0} max={100} />
        </div>

        <div>
          <h2>Category</h2>

          <select>
            <option value="1">Category 1</option>
            <option value="2">Category 2</option>
            <option value="3">Category 3</option>
          </select>
        </div>
      </div>
    </aside>
  );
}
