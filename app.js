const express = require("express");
require("./src/db/mongoose");
const apiRouter = require("./src/routes/apiRoutes");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use("/api", apiRouter);

app.listen(PORT, () => {
  console.log(`Server is up on port: ${PORT}`);
});
