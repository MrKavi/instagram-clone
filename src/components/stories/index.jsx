import { Avatar, Box, Grid, Modal } from "@mui/material";
import React, { useState } from "react";

const Stories = () => {
  const [open, setOpen] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState();
  const avtars = [
    {
      id: 1,
      img: "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202212/avatar-the-way-of-water_1200x768-sixteen_nine.jpeg?size=1200:675",
    },
    {
      id: 2,
      img: "http://www.goodmorningimagesdownload.com/wp-content/uploads/2021/07/girl-Unique-Whatsapp-Dp-Profile-Images-photo-download.gif",
    },
    {
      id: 3,
      img: "https://qph.cf2.quoracdn.net/main-qimg-b9d01782523b2c7e2a9976df81cb0b13-lq",
    },
    {
      id: 4,
      img: "https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg",
    },
    {
      id: 5,
      img: "https://cdn-prod.medicalnewstoday.com/content/images/articles/325/325466/man-walking-dog.jpg",
    },
    {
      id: 6,
      img: "https://www.bsr.org/images/heroes/bsr-focus-nature-hero.jpg",
    },
    {
      id: 7,
      img: "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg",
    },
  ];

  return (
    <>
      {avtars &&
        avtars.length &&
        avtars.map((elem) => (
          <Box
            key={elem.id}
            sx={{
              padding: "10px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              border: "1px solid #e619b6",
              transition:
                "background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
              ":hover": {
                boxShadow: "0px 0px 10px blue",
                transition:
                  "background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
              },
            }}
            onClick={() => setOpen(true)}
          >
            <Avatar
              onClick={() => {
                setOpen(true);
                setSelectedAvatar(elem);
              }}
              className="story-avtar"
              sx={{
                cursor: "pointer",
                width: "100px",
                height: "100px",
                outline: "2px solid white",
              }}
              alt="Name"
              src={elem.img}
            />
          </Box>
        ))}
      <Modal
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 8,
          width: "100%",
          height: "500px",
        }}
        open={open}
        onClose={() => setOpen(false)}
      >
        <Grid
          sx={{
            backgroundColor: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "400px",
            height: "500px",
          }}
          style={{ padding: "20px" }}
        >
          {avtars.map((item) => (
            <div key={item.id}>
              <img
                style={{ width: "100%", height: "100%" }}
                src={item.img}
                alt=""
              />
            </div>
          ))}
        </Grid>
      </Modal>
    </>
  );
};

export default Stories;
