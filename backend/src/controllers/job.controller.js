import Job from "../models/job.model.js";


export const jobUpload = async (req, res) => {
  const { title, company, category, location, description } = req.body;

  try {
    if (!title || !company || !category || !location || !description) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newJob = new Job({
      title,
      company,
      category,
      location,
      description,
    });

    await newJob.save();

    res.status(201).json({
      success: true,
      message: "Job posted successfully",
      job: newJob,
    });
  } catch (error) {
    console.error("Error uploading job:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};



export const getJobs = async (req, res) => {
  try {
    const { query, category, location, jobType, experience } = req.query;

    const filter = {};

    if (query) {
      filter.$or = [
        { title: { $regex: query, $options: "i" } },
        { company: { $regex: query, $options: "i" } },
      ];
    }
    if (category) filter.category = category;
    if (location) filter.location = location;
    if (jobType) filter.jobType = jobType;
    if (experience) filter.experience = experience;

    const jobs = await Job.find(filter).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: jobs.length,
      jobs,
    });
  } catch (error) {
    console.error("Error fetching jobs:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: jobs.length,
      jobs,
    });
  } catch (error) {
    console.error("Error fetching jobs:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};


export const searchJobs = async (req, res) => {
  try {
    const { query } = req.query;

    if (!query) {
      return res.status(400).json({ success: false, message: "Query is required" });
    }

    const jobs = await Job.find({
      $or: [
        { title: { $regex: query, $options: "i" } },
        { company: { $regex: query, $options: "i" } }
      ]
    }).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: jobs.length,
      jobs,
    });
  } catch (error) {
    console.error("Error searching jobs:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
