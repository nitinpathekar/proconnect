import express from 'express';
import cors from 'cors';
import mongoose from "mongoose";
import dotenv from 'dotenv';
import postRoutes from "./route/posts.routes.js"
import userRoutes from "./route/user.routes.js"

dotenv.config();

const app = express();


app.use(express.json());
app.use(cors());
app.use(postRoutes)
app.use(userRoutes)

const start = async () => {
    
        await mongoose.connect(
            "mongodb+srv://ayushhs2005:Indore%40123@proconnect.qydcbfi.mongodb.net/proconnect?retryWrites=true&w=majority"
        );

        console.log("MongoDB Connected Successfully");

        app.listen(9000, () => {
            console.log("Server running on port 9000");
        });

     
};

start();
