import { uploadJob, viewJobs, filterJobs, searchJobs as searchAPI } from "../api/jobApi.js";

export const fetchJobs = async () => {
  const res = await viewJobs();
  return res.data.jobs;
};

export const submitJob = async (data) => {
  const res = await uploadJob(data);
  return res.data;
};

export const fetchFilteredJobs = async (filters) => {
  const queryParams = new URLSearchParams(filters).toString();
  const res = await filterJobs(queryParams);
  return res.data.jobs;
};

export const searchJobs = async (query) => {
  const res = await searchAPI(query);
  return res.data.jobs;
};
