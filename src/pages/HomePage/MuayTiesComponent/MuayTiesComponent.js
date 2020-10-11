import React, { useEffect, useState } from "react";
import {
  CarouselProvider,
  Slider,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import "./MuayTiesComponentStyles.css";
import arrowLogo from "../../../images/arrowSVG.svg";

const API = "AIzaSyDp5XB1HNLomcylZ7CTVR6JxiO07mRpZvk";
const playlistId = "UCk3THNGRpNmCsRbCaWNeWSA";
const result = 15;
const URL = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${playlistId}&part=snippet,id&order=date&maxResults=${result}`;

export default function MuayTiesComponent() {
  const [fights, setFights] = useState([]);
  const [titles, setTitles] = useState([]);
  useEffect(() => {
    console.log(URL);
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        const fightInfo = data.items.map(
          ({ id: { videoId } }) => `https://www.youtube.com/embed/${videoId}`
        );
        const fightTitles = data.items.map(({ snippet: { title } }) => title);
        setFights(fightInfo);
        setTitles(fightTitles);
      });
  }, []);

  return (
    <div className="videoPageContainer">
      <div className="channelTitle">Muay Ties</div>
      <CarouselProvider totalSlides={3} className="videoCarousel">
        <Slider>
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
                  <div className="fightTitle">{titles}</div>
                </div>
              );
            })}
          </div>
        </Slider>
        <ButtonBack className="backButton">
          <img src={arrowLogo} className="backButtonArrow" />
        </ButtonBack>
        <ButtonNext className="nextButton">
          <img src={arrowLogo} />
        </ButtonNext>
      </CarouselProvider>
    </div>
  );
}
