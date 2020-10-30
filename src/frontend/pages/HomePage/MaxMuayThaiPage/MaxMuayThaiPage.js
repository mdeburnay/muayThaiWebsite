import React, { useEffect, useState } from "react";
import "./MaxMuayThaiPageStyles.css";

export default function MaxMuayThaiPage() {
  const [fights, setFights] = useState([]);

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
