import React from "react";
import "./HomePageStyles.css";
import MuayTiesVideos from "./MuayTiesComponent/MuayTiesComponent.js";
import ONEFCVideos from "./ONEFCComponent/ONEFCComponent.js";
import YokkaoVideos from "./YokkaoComponent/YokkaoComponent.js";

export default function HomePage() {
  return (
    <div className="HomePageContainer">
      <MuayTiesVideos />
      <ONEFCVideos />
      <YokkaoVideos />
    </div>
  );
}
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   CarouselProvider,
//   Slider,
//   ButtonBack,
//   ButtonNext,
// } from "pure-react-carousel";
// import "pure-react-carousel/dist/react-carousel.es.css";
// import "./HomePageStyles.css";
// import arrowLogo from "../../images/arrowSVG.svg";
// import playlistChannel from "./PlaylistData/PlaylistChannels.js";

// const API = "AIzaSyDp5XB1HNLomcylZ7CTVR6JxiO07mRpZvk";
// const result = 1;

// const URLs = playlistChannel.map(
//   ({ channelId }) =>
//     `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${result}`
// );

// export default function MuayTiesComponent() {
//   const [fights, setFights] = useState([]);
//   const [titles, setTitles] = useState([]);
//   useEffect(() => {
//     URLs.map((URL) => {
//       return fetch(URL)
//         .then((response) => response.json())
//         .then((data) => {
//           const fightInfo = data.items.map(
//             ({ id: { videoId } }) => `https://www.youtube.com/embed/${videoId}`
//           );
//           const fightTitles = data.items.map(({ snippet: { title } }) => title);
//           setFights(fightInfo);
//           setTitles(fightTitles);
//         });
//     });
//   }, []);

//   return (
//     <div className="videoPageContainer">
//       {playlistChannel.map((channel) => (
//         <>
//           <Link to={channel.pageURL} className="channelTitle">
//             {channel.channelTitle}
//           </Link>
//           <CarouselProvider totalSlides={3} className="videoCarousel">
//             <Slider>
//               <div className="vidContainer">
//                 {fights.map((fight, i) => {
//                   return (
//                     <div className="fightInfo">
//                       <iframe
//                         className="vidStyles"
//                         key={i}
//                         src={fight}
//                         frameborder="0"
//                         allowFullScreen
//                       />
//                       <div className="fightTitle">{titles}</div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </Slider>
//             <ButtonBack className="backButton">
//               <img src={arrowLogo} className="backButtonArrow" />
//             </ButtonBack>
//             <ButtonNext className="nextButton">
//               <img src={arrowLogo} />
//             </ButtonNext>
//           </CarouselProvider>
//         </>
//       ))}
//     </div>
//   );
// }
