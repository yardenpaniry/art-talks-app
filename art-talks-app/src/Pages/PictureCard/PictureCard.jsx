// PictureCard.js
import React from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";

const PictureCard = ({ images, index, imageUrls, artistName, description }) => {
  const navigate = useNavigate();
  console.log("imageUrl", imageUrls);

  const handleClick = (index) => {
    navigate(`/PictureDetails/${index}`, {
      state: {
        SelectedImg: index,
        imageUrls: imageUrls,
        artistName: artistName,
        description: description,
      },
    });
  };
  return (
    <div className="picture-card">
      <img
        onClick={() => handleClick(index)}
        src={imageUrls.thumb}
        alt="Artwork"
      />
      <h3>{artistName}</h3>
      <p>{description}</p>
    </div>
  );
};

export default PictureCard;
