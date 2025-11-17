import React, { useState } from "react";
import { submitJob } from "../services/jobService";
import { toast } from "react-toastify";

function Uploader() {
  const [form, setForm] = useState({
    title: "",
    company: "",
    category: "",
    location: "",
    description: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await submitJob(form);
      console.log("Job Uploaded:", response);
      toast.success("Job Posted Successfully");

      setForm({
        title: "",
        company: "",
        category: "",
        location: "",
        description: "",
      });
    } catch (error) {
      console.error("Upload failed:", error);
      toast.error("Failed to upload job");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-25 p-6 bg-white shadow-md rounded-lg min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-center">Post a Job</h1>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block font-medium mb-1">Job Title</label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            className="w-full border px-3 py-3 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Frontend Developer"
            required
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Company</label>
          <input
            type="text"
            name="company"
            value={form.company}
            onChange={handleChange}
            className="w-full border px-3 py-3 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Google"
            required
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Category</label>
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="w-full border px-3 py-3 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            required
          >
            <option value="">Select Category</option>
            <option value="Tech">Tech</option>
            <option value="Finance">Finance</option>
            <option value="Design">Design</option>
            <option value="Marketing">Marketing</option>
            <option value="HR">HR</option>
          </select>
        </div>

        <div>
          <label className="block font-medium mb-1">Location</label>
          <select
            name="location"
            value={form.location}
            onChange={handleChange}
            className="w-full border px-3 py-3 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            required
          >
            <option value="">Select Location</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Remote">Remote</option>
            <option value="USA">USA</option>
          </select>
        </div>

        <div>
          <label className="block font-medium mb-1">Job Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            rows="4"
            className="w-full border px-3 py-3 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Explain the job role, requirements..."
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Uploader;
