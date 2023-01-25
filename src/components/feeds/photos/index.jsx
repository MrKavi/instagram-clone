import { CardMedia, Typography } from "@mui/material";
import React from "react";

const Photos = (props) => {
  return (
    <div
      className="photos-container"
      sx={{ width: "100%", backgroundColor: "white" }}
    >
      <img
        src={props?.photos}
        style={{ padding: "15px", objectFit: "cover" }}
        width="350px"
        height="350px"
        loop
      />
      <div className="photo-content">
        <Typography>{props.title}</Typography>
      </div>
    </div>
  );
};

export default Photos;
