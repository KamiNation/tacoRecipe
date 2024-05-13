// import statement
import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { route } from "./server/routers/route.js";


// Initialization 
const server = express();
dotenv.config({ path: 'info.env' })
const PORT = process.env.PORT || "4176"


// middleware
server.use(express.static("public"));
server.use(morgan({ type: "tiny" }))
server.use(bodyParser.urlencoded({ extended: true }));


// Seting up views engine
server.set("view engine", "ejs")

// Routes
route(server)


// server listener
server.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});



