import React from "react";
import "./HomePageStyles.css";
import { Link } from "react-router-dom";
import homePageGridData from "./HomePageGridData.js";

export default function HomePage() {
  return (
    <div className="HomePageContainer">
      <div className="channelGridInfo">
        {homePageGridData.map(({ channelIcon, pageURL }) => {
          return (
            <Link className="gridItem" to={pageURL}>
              <img className="gridImg" src={channelIcon} alt="Channel Icon" />
              <div className="recentUploads"></div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
