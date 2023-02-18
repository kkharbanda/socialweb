const app = require("./app.js");
const { connectDatabase } = require("./config/database");
connectDatabase()
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });