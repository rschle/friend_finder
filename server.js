const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 2019;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



require("./app/routes/apiRoutes")(app);
require("./app/routes/htmlRoutes")(app);

app.listen(PORT, () => {
    console.log("App listening on PORT " + PORT);
});