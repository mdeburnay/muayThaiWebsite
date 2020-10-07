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
