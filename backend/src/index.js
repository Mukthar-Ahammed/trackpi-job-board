import express from 'express'
import dotenv from 'dotenv'
import jobRoutes from "./routes/job.route.js"
import { connectdb } from './lib/db.js';
import cors from 'cors'

dotenv.config()

const app=express();

app.use(express.json())

app.use(

    cors({
        origin:[
            "http://localhost:5173"
        ],
        Credential:true
    })
)


app.use('/api/jobs',jobRoutes)
connectdb()
const port=process.env.PORT

app.listen(port,()=>{
    console.log(`App connected to port ${port}`)
})