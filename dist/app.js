import express from "express";
import router from "./presentation/routes/Routes.js";
var app = express();
app.use(express.json()).use(router);
app.listen(3000, function () {
    console.log("Magic happens on port 3000");
});
