const mongoose = require("mongoose");

const MONGO_URL = `mongodb+srv://NASA:Ekaterine18@nasa-cluster.xckxpdc.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connection.once("open", () => {
  console.log("mongoDB connection ready!");
});
mongoose.connection.on("error", (err) => {
  console.error(err);
});

async function mongoConnect() {
  mongoose.set("strictQuery", false);
  await mongoose.connect(MONGO_URL, { useNewUrlParser: true });
}

async function mongoDisconnect() {
  await mongoose.disconnect();
}

module.exports = {
  mongoConnect,
  mongoDisconnect,
};
