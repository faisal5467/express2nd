import express from "express";
import bodyParser from "body-parser";
import usersRoutes from "./routes/users.js";
import { MongoClient } from "mongodb";
////// database connection
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
////get data from db
let response;
async function getData() {
  let result = await client.connect();
  let db = result.db("testdb");
  let collection = db.collection("User1");
  response = await collection.find({}).toArray();
  console.log(response);
}

const app = express();

app.get("/", (req, res) => {
  res.json(response);
});
app.use(bodyParser.json());
app.use("/users", usersRoutes);

// app.get("/", (req, res) => {
//   res.send("hello chaacha");
// });
app.listen(5000, () => {
  console.log("Server is running");
});

getData();
