const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
exports.connectDatabase = () => {
  
};// Define the database URL to connect to.
const mongoDB = "mongodb://127.0.0.1/socialApp";

// Wait for database to connect, logging an error if there is a problem 
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}