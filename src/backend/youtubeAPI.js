const request = require("request");
const path = require("path");

const youtubeAPI = () => {};

module.exports = youtubeAPI;

require("dotenv").config();
const API = process.env.REACT_APP_GOOGLE_API_KEY;
console.log(process.env);
