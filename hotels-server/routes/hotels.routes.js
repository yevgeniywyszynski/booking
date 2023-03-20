const express = require("express");
const router = express.Router();

router.get("/hotels", async (req, res) => {
  let client = req.client;
  await client.connect();

  const dbName = "Booking";
  const collectionName = "Hotels";

  const database = client.db(dbName);
  const collection = database.collection(collectionName);
  let respx = [];
  try {
    let resp = await collection.find({});
    await resp.forEach((e) => respx.push(e));
    // add a linebreak
    console.log("hotels", respx);
  } catch (err) {
    console.error(
      `Something went wrong trying to find the documents: ${err}\n`
    );
  }
  client.close();
  res.json(respx);
});

router.get("/hotels/:id", async (req, res) => {
  let client = req.client;
  await client.connect(console.log("jest conect"));

  const dbName = "Booking";
  const collectionName = "Hotels";
  const database = client.db(dbName);
  const collection = database.collection(collectionName);
  let respx = [];
  let urlId = req.params.id;
  var ObjectId = require("mongodb").ObjectId;

  try {
    let resp = await collection.find({ _id: new ObjectId(urlId) });
    await resp.forEach((e) => respx.push(e));
    console.log("idHotels", respx);
  } catch (err) {
    console.error(
      `Something went wrong trying to find the documents: ${err}\n`
    );
  }
  client.close();
  res.json(respx);
});

router.get("/search/hotels", async (req, res) => {
  let client = req.client;
  await client.connect(console.log("jest conect"));

  const dbName = "Booking";
  const collectionName = "Hotels";
  const database = client.db(dbName);
  const collection = database.collection(collectionName);
  let respx = [];

  try {
    let resp = await collection.find({ city: req.query.where });
    await resp.forEach((e) => respx.push(e));
    console.log("where", respx);
  } catch (err) {
    console.error(
      `Something went wrong trying to find the documents: ${err}\n`
    );
  }
  client.close();
  res.json(respx);
});

module.exports = router;
