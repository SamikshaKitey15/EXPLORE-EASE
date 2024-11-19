const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

main()
   .then(() => {
      console.log("connected to DB");
   })
   .catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/ExploreEase');
}

const initDB = async() => {
   initData.data = initData.data.map((obj) => ({...obj, owner: "67232a6e174bee86d1427ba3"}));
   await Listing.insertMany(initData.data);
   console.log("data was initialise");
};

initDB();