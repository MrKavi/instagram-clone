import { Avatar } from "@mui/material";
import React from "react";

const Stories = () => {
  const avtars = [
    {
      img: "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202212/avatar-the-way-of-water_1200x768-sixteen_nine.jpeg?size=1200:675",
    },
    {
      img: "http://www.goodmorningimagesdownload.com/wp-content/uploads/2021/07/girl-Unique-Whatsapp-Dp-Profile-Images-photo-download.gif",
    },
    {
      img: "https://qph.cf2.quoracdn.net/main-qimg-b9d01782523b2c7e2a9976df81cb0b13-lq",
    },
    {
      img: "https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg",
    },
    {
      img: "https://cdn-prod.medicalnewstoday.com/content/images/articles/325/325466/man-walking-dog.jpg",
    },
    {
      img: "https://www.bsr.org/images/heroes/bsr-focus-nature-hero.jpg",
    },
    {
      img: "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg",
    },
  ];

  return (
    <>
      {avtars &&
        avtars.length &&
        avtars.map((elem) => (
          <Avatar
            sx={{
              border: "1px solid #e619b6",
              width: "100px",
              height: "100px",
              outline: "2px solid white",
            }}
            alt="Name"
            src={elem.img}
          />
        ))}
    </>
  );
};

export default Stories;
