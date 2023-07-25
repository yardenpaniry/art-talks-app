import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import "./PictureDetails.css";
import photo from "../../photo.jpeg";
import Chat from "../../Components/Chat/Chat";

const PictureDetails = ({ route, navigation }) => {
  const location = useLocation();
  const { state } = location;

  if (!state) {
    // Handle the case when there are no parameters passed
    return <div>No parameters found.</div>;
  }

  // Access the parameters from the state object
  const { SelectedImg, imageUrls, artistName, description } = state;

  console.log("state", imageUrls);
  return (
    <div className="detailsPage">
      <div className="detailsPicture">
        <div className="header">
          <div className="title">{artistName}</div>
          <div className="artist">{description}</div>
        </div>
        <div className="imgView">
          <img
            className="SelectedImg"
            // key={id}
            src={imageUrls.full}
            alt="description"
          />
        </div>
      </div>
      <div className="chat">
        <Chat></Chat>
      </div>
    </div>
  );
};

export default PictureDetails;
