const { MongoClient } = require("mongodb");
const express = require("express");
const cors = require("cors");
import { PASS } from "./settings";
const app = express();
app.use(express.json());
app.use(cors());

const URL_MONGO_DATA_BASE = `mongodb+srv://ywyszynski:${PASS}@bookingcluster.469j2um.mongodb.net/test`;

const client = new MongoClient(URL_MONGO_DATA_BASE);

const hotels = require("./routes/hotels.routes");

app.use((req, res, next) => {
  req.client = client;
  console.log("new client connecting");
  next();
});

app.use("/api", hotels);

app.listen(3003, console.log("server start"));
