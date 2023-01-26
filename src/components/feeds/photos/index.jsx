import { CardMedia, Typography } from "@mui/material";
import React from "react";
import NearMeIcon from "@mui/icons-material/NearMe";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

import "./style.scss";
const Photos = (props) => {
  return (
    <div
      className="photos-container"
      sx={{ width: "100%", backgroundColor: "white" }}
    >
      <div>
        <img
          className="photos"
          src={props?.photos}
          style={{ padding: "15px", objectFit: "cover", borderRadius: "30px" }}
          width="350px"
          height="350px"
          loop
        />
        <div className="photo-content">
          <Typography sx={{ color: "black", fontWeight: "600" }}>
            {props.title}
          </Typography>
          <div>
            <ThumbUpIcon sx={{ color: "blue", mr: 1 }} />
            <FavoriteOutlinedIcon sx={{ color: "red", mr: 1 }} />
            <NearMeIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photos;
