// import statement
import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { route } from "./server/routers/route.js";
import { fileURLToPath } from "url";
import path from 'path'


// Initialization 
const server = express();
dotenv.config({ path: 'info.env' })
const PORT = process.env.PORT || "4176"


// middleware
server.use(express.static("public"));
server.use(morgan({ type: "tiny" }))
server.use(bodyParser.urlencoded({ extended: true }));


// Added this because github pages threw 404

// I created a variable "viewsPath" to hodl the file path,
// first, the "import.meta.url" gets the file url path,
// which is the below
//  file:///home/kami/Documents/Angela_Yu/27Part_01/5.2%20JSON/server.js (file url)
//  then the fileURLToPath(import.meta.url) converts to the below
//  /home/kami/Documents/Angela_Yu/27Part_01/5.2 JSON/server.js and then (file path)
//  the path.resolve() combines the file path with the directory name to get an 
// absolute path to the views directory

//  Resolve the path to the 'views' directory
const viewsPath = path.resolve(fileURLToPath(import.meta.url), '../views');
console.log(viewsPath);
console.log(fileURLToPath(import.meta.url));
console.log(import.meta.url);
// Set the directory for views
server.set('views', viewsPath);


// Seting up views engine
server.set("view engine", "ejs");



// Routes
route(server)


// server listener
server.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});


