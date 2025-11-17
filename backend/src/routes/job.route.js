import express from "express";
import { jobUpload, getAllJobs, getJobs,searchJobs } from "../controllers/job.controller.js";


const router = express.Router();

router.post("/upload", jobUpload);
router.get("/viewJobs", getAllJobs); 
router.get("/filter", getJobs); 
router.get("/search", searchJobs); 

export default router;
