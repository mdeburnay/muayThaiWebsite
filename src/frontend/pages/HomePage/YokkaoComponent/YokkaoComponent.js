import React, { useEffect, useState } from "react";
import "pure-react-carousel/dist/react-carousel.es.css";
import "./YokkaoComponentStyles.css";

const API = process.env.GOOGLE_API;
const playlistId = "UCDfvlEBdwpcjwAaRw1m6UiA";
const result = 15;

const URL = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${playlistId}&part=snippet,id&order=date&maxResults=${result}`;

export default function ONEFCComponent() {
  const [fights, setFights] = useState([]);
  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        const videos = data.items.map(
          ({ id: { videoId } }) => `https://www.youtube.com/embed/${videoId}`
        );
        setFights(videos);
      });
  }, []);

  return (
    <div className="videoPageContainer">
      <div className="channelTitle">Yokkao</div>
      <div className="vidContainer">
        {fights.map((fight, i) => {
          return (
            <div className="fightInfo">
              <iframe
                className="vidStyles"
                key={i}
                src={fight}
                frameborder="0"
                allowFullScreen
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
