import React, { useState } from "react";

function Filter({ applyFilters, closeFilter }) {
  const [filters, setFilters] = useState({
    category: "",
    location: "",
    jobType: "",
    experience: ""
  });

  const handleChange = (e) => setFilters({ ...filters, [e.target.name]: e.target.value });

  const handleApply = () => {
    applyFilters(filters);
    closeFilter();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-start pt-20 bg-black/40 backdrop-blur-md z-50">
      <div className="bg-white p-6 w-[380px] rounded-xl shadow-xl">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Filter Jobs</h2>

        <label className="block text-sm font-medium text-gray-700">Category</label>
        <select name="category" onChange={handleChange} className="w-full border p-2 rounded-lg mt-1 mb-3">
          <option value="">All</option>
          <option value="Tech">Tech</option>
          <option value="Marketing">Marketing</option>
          <option value="Finance">Finance</option>
          <option value="Design">Design</option>
          <option value="HR">HR</option>
        </select>

        <label className="block text-sm font-medium text-gray-700">Location</label>
        <select name="location" onChange={handleChange} className="w-full border p-2 rounded-lg mt-1 mb-3">
          <option value="">All</option>
          <option value="Bangalore">Bangalore</option>
          <option value="Hyderabad">Hyderabad</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Remote">Remote</option>
          <option value="USA">USA</option>
        </select>

        <label className="block text-sm font-medium text-gray-700">Job Type</label>
        <select name="jobType" onChange={handleChange} className="w-full border p-2 rounded-lg mt-1 mb-3">
          <option value="">All</option>
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
          <option value="Internship">Internship</option>
          <option value="Hybrid">Hybrid</option>
        </select>

        <label className="block text-sm font-medium text-gray-700">Experience</label>
        <select name="experience" onChange={handleChange} className="w-full border p-2 rounded-lg mt-1 mb-3">
          <option value="">All</option>
          <option value="Fresher">Fresher</option>
          <option value="Mid">Mid</option>
          <option value="Senior">Senior</option>
        </select>

        <button onClick={handleApply} className="w-full bg-blue-600 text-white py-2 rounded-lg mt-3 hover:bg-blue-700">Apply Filters</button>
        <button onClick={closeFilter} className="w-full bg-gray-200 text-gray-700 py-2 rounded-lg mt-2 hover:bg-gray-300">Close</button>
      </div>
    </div>
  );
}

export default Filter;
