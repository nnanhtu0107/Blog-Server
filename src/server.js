import express from "express";
import "dotenv/config";
import bodyParser from "body-parser";
import cors from "cors";
import web from "./routers/web.js";
import mongoose from "mongoose";

const app = express();
const PORT = process.env.PORT || 5000;

const URI =
  "mongodb+srv://admin:djXZOjU9gW7TvZsf@cluster0.xcclq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, limit: "30mb" }));
app.use(cors());
app.use("/", web);

mongoose
  .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Conected to database");
    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("err", err);
  });
