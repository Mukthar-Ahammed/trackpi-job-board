import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import JobCard from "../components/jobCards";
import { SlidersHorizontal } from "lucide-react";
import Filter from "../components/Filter";
import Footer from "../components/Footer";
import { fetchJobs, fetchFilteredJobs, searchJobs } from "../services/jobService";

function Home() {
  const [showFilter, setShowFilter] = useState(false);
  const [jobs, setJobs] = useState([]);

  const loadAllJobs = async () => {
    try {
      const data = await fetchJobs();
      setJobs(data);
    } catch (err) {
      console.error("Error fetching jobs:", err);
    }
  };

  useEffect(() => {
    loadAllJobs();
  }, []);

  const applyFilters = async (filters) => {
    try {
      const data = await fetchFilteredJobs(filters);
      setJobs(data);
    } catch (err) {
      console.error("Error applying filters:", err);
    }
  };

  const handleSearch = async (query) => {
    try {
      if (!query) {
        loadAllJobs();
        return;
      }
      const data = await searchJobs(query);
      setJobs(data);
    } catch (err) {
      console.error("Error searching jobs:", err);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero onSearch={handleSearch} />

      <div className="flex text-3xl ml-5 items-center mt-4">
        Filter
        <SlidersHorizontal
          onClick={() => setShowFilter(true)}
          className="text-blue-700 ml-4 hover:text-blue-400 cursor-pointer"
          size={32}
        />
      </div>

      {showFilter && (
        <Filter closeFilter={() => setShowFilter(false)} applyFilters={applyFilters} />
      )}

      <div className="flex-1">
        <JobCard jobs={jobs} />
      </div>

     
    </div>
  );
}

export default Home;
