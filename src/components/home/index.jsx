import { Grid } from "@mui/material";
import React from "react";
import Feeds from "../feeds";
import "./style.scss";

const Home = ({ feeds }) => {
  // console.log("...feeds", feeds);
  return (
    <div>
      {feeds && feeds.length && feeds.map((elem) => <Feeds {...elem} />)}
    </div>
  );
};

export default Home;
