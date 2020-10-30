const path = require("path");
const express = require("express");
const youtubeAPI = require("./youtubeAPI.js");

const app = express();

const port = process.env.PORT || 3000;

app.get("/", (res, req) => {
  res.send("HomePage");
});
