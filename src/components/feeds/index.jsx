import { Grid } from "@mui/material";
import React from "react";
import "./style.scss";
const Feeds = (props) => {
  const [done, setDone] = React.useState(0);
  const [time, setTime] = React.useState(0);

  return (
    <div
      className="feed-container"
      sx={{ width: "100%", backgroundColor: "white" }}
    >
      <video
        style={{ padding: "15px" }}
        width="350px"
        height="350px"
        muted
        loop
      >
        <source src={props?.videoUrl} type="video/mp4" />
      </video>
      <div className="progress-bar-container">
        <div class="progress">
          <div
            class="progress-bar"
            role="progressbar"
            style={{ width: `${done}%` }}
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <span className="remaining-time">{time} min</span>
      </div>
    </div>
  );
};

export default Feeds;
