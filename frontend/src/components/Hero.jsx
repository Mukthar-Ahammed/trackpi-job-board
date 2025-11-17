import { Search } from "lucide-react";
import React, { useState } from "react";

function Hero({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <section className="bg-blue-50 py-20 text-center mt-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Find Your Dream Job</h1>
      <p className="text-gray-700 mb-6">Search by job title or company name</p>

      <form onSubmit={handleSubmit} className="py-7 max-w-2xl mx-auto flex gap-4 justify-center">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="e.g., Frontend Developer, Google"
          className="w-full md:w-2/3 border px-4 py-2 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
        />
        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
          <Search/>
        </button>
      </form>
    </section>
  );
}

export default Hero;
