const express = require("express");

const PORT = process.env.PORT || 3800;
const app = express();

app.use(express.static("public"));

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, function() {
  console.log("Server is running on port:", PORT);
});