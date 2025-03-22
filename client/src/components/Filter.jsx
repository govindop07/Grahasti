import { IoSearch } from "react-icons/io5";

function Filter() {
  return (
    <div className="p-4">
      <p className="text-2xl mb-4 font-light">
        Search results for <b>London</b>
      </p>

      {/* Location Input */}
      <div className="flex flex-col w-full mb-4">
        <label htmlFor="city" className="text-xs mb-1">Location</label>
        <input
          type="text"
          id="city"
          name="city"
          placeholder="City Location"
          className="border border-gray-300 p-2 rounded-md w-full"
        />
      </div>

      {/* Filter Section */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-4">
        <div className="flex flex-col">
          <label htmlFor="type" className="text-xs mb-1">Type</label>
          <select
            name="type"
            id="type"
            className="border border-gray-300 p-2 rounded-md"
          >
            <option value="">Any</option>
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label htmlFor="property" className="text-xs mb-1">Property</label>
          <select
            name="property"
            id="property"
            className="border border-gray-300 p-2 rounded-md"
          >
            <option value="">Any</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="condo">Condo</option>
            <option value="land">Land</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label htmlFor="minPrice" className="text-xs mb-1">Min Price</label>
          <input
            type="number"
            id="minPrice"
            name="minPrice"
            placeholder="Any"
            className="border border-gray-300 p-2 rounded-md"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="maxPrice" className="text-xs mb-1">Max Price</label>
          <input
            type="number"
            id="maxPrice"
            name="maxPrice"
            placeholder="Any"
            className="border border-gray-300 p-2 rounded-md"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="bedroom" className="text-xs mb-1">Bedroom</label>
          <select
            name="bedroom"
            id="bedroom"
            className="border border-gray-300 p-2 rounded-md"
          >
            <option value="">Any</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
      </div>

      {/* Search Button */}
      <div className="flex justify-end">
        <button className="bg-yellow-400 hover:bg-yellow-500 px-4 py-2 rounded-md flex items-center gap-2">
          <IoSearch />
          <span>Search</span>
        </button>
      </div>
    </div>
  );
}

export default Filter;
