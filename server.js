require("dotenv").config();
const pool = require("./server/config/database")
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT;

// Middlewares
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.listen(port, (res, req) =>
  console.log(`Listening at http://localhost:${port}`)
);
