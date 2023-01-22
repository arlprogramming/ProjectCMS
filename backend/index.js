import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";

const app = express();
app.use(cors());
app.use(express.json()); //supaya bisa menerima format json
app.use(UserRoute);

app.listen("5000", () => console.log("Server Up and Running"));
