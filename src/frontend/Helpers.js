// import playlistChannels from "./PlaylistData/PlaylistChannels.js";
require("dotenv").config();
const axios = require("axios").default;
export function GlobalFetch(playlistChannels) {
  /** Needed to make Youtube call to grab Videos
   * ChannelID & API Key & Results requested #
   */
  const API = process.env.GOOGLE_API;
  const URL =
    "https://www.googleapis.com/youtube/v3/search?key=" +
    API +
    "&channelId=" +
    playlistChannels.channelId +
    "&part=snippet,id&order=date&maxResults=15";

  /** Do Fetch/Axios Here */
  return axios
    .get(URL)
    .then(function (response) {
      //handle success
      console.log(response);
    })
    .catch(function (error) {
      //handle error
      console.log(error);
    });
  /** Return Videos */
}
