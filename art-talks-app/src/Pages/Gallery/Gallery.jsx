// Gallery.js
import React, { useState, useEffect } from "react";
import PictureCard from "../PictureCard/PictureCard";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import "../Gallery/Gallery.css";
import { fetchImages } from "../../services/apiCalls";

const Gallery = () => {
  const [pictures, setPictures] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  const fetchPictures = async () => {
    const photosData = await fetchImages(searchTerm);
    setPictures(photosData);
  };

  useEffect(() => {
    fetchPictures();
  }, [searchTerm]);
  useEffect(() => {
    console.log(pictures);
  }, [pictures]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="Gallery">
      <TextField
        sx={{ width: "90%", m: "1%" }}
        variant="outlined"
        placeholder="Search..."
        InputProps={{
          startAdornment: <SearchIcon />,
        }}
        value={searchTerm}
        onChange={handleSearch}
      />
      {/* <input
        type="text"
        placeholder="Search by artist name"
        value={searchTerm}
        onChange={handleSearch}
      /> */}
      <div className="gallery">
        {pictures.map((picture, index) => (
          <PictureCard
            index={index}
            imageUrls={picture.urls}
            artistName={picture.user.first_name + picture.user.first_name}
            description={picture.location?.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
