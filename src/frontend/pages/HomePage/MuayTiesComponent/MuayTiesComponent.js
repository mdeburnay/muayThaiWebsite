import React, { useEffect, useState } from "react";
import "pure-react-carousel/dist/react-carousel.es.css";
import "./MuayTiesComponentStyles.css";

const API = "AIzaSyAKB3TVRCkS3d8T4Ikfzfk6FuCksVT8W5s";
const playlistId = "UCk3THNGRpNmCsRbCaWNeWSA";
const result = 15;
const URL = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${playlistId}&part=snippet,id&order=date&maxResults=${result}`;

export default function MuayTiesComponent() {
  const [fights, setFights] = useState([]);
  useEffect(() => {
    console.log(URL);
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        const fightInfo = data.items.map(
          ({ id: { videoId } }) => `https://www.youtube.com/embed/${videoId}`
        );
        setFights(fightInfo);
      });
  }, []);

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
    </div>
  );
}
