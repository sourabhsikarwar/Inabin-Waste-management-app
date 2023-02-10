import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";

// To establish connection with databases
import Connection from "./config/db.js";
import Routes from "./routes/route.js";

dotenv.config();

const app = express();

const PORT = 80;

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username,password);

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', Routes);
app.listen(PORT,()=> console.log(`Server is running on port : ${PORT}`));
