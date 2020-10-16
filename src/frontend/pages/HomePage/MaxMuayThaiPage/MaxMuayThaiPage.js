import React, { useEffect, useState } from "react";
import "./MaxMuayThaiPageStyles.css";

export default function MaxMuayThaiPage() {
  const [fights, setFights] = useState([]);
  const [visible, setVisible] = useState(6);
  const API = "AIzaSyAKB3TVRCkS3d8T4Ikfzfk6FuCksVT8W5s";
  const playlistId = "UCxTrRJip2yBlESWZu5v0wKQ";
  const results = 15;
  const URL = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${playlistId}&part=snippet,id&order=date&maxResults=${results}`;

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        const fightVideos = data.items.map(
          ({ id: { videoId } }) => `https://www.youtube.com/embed/${videoId}`
        );
        console.log(fightVideos);
        setFights(fightVideos);
      });
  }, []);
  const loadVideos = () => {
    setVisible(visible + 15);
  };
  return (
    <div className="videoPageContainer">
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
      <div className="btnContainer">
        <button className="loadVideosBtn" onClick={loadVideos}>
          More Fights
        </button>
      </div>
    </div>
  );
}
