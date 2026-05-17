import dotenv from "dotenv";
dotenv.config(); 

import express from 'express';
import connectDB from "./db/dbConfig.js";
import userRoute from "./routes/user.route.js";
import cors from "cors"

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/v1/user", userRoute);

const startServer = async () => {
    try {
        console.log("Connecting to DB..."); 
        await connectDB();
        console.log("DB Connected!");      
        app.listen(8000, () => {
            console.log("Server started on port 8000");
        });

    } catch (error) {
        console.error("Startup Error:", error); 
        process.exit(1);
    }
};

startServer();