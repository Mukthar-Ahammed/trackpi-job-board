import React from "react";
import { Briefcase } from "lucide-react";

function JobCard({ jobs }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 px-4">
      {jobs && jobs.map((job) => (
        <div
          key={job._id}
          className="group relative w-full p-6 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-transform duration-300 ease-in-out"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">{job.title}</h2>
          <p className="text-gray-600 font-medium mb-4">{job.company}</p>

          <div className="flex justify-between items-center text-sm text-gray-700 mb-4">
            <span className="flex items-center gap-1 bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">
              <Briefcase size={16} /> {job.category}
            </span>
            <span className="text-gray-500">{job.location}</span>
          </div>

          <p className="text-gray-700 text-sm mb-6 line-clamp-3">{job.description}</p>

          <button className="w-full py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200">
            View Details
          </button>
        </div>
      ))}
    </div>
  );
}

export default JobCard;
