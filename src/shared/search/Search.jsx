import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Box } from "@mui/system";
import { TextField } from "@mui/material";

const Search = () => {
  const photos = [
    {
      id: "1",
      photos:
        "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg",
      title: "Nature",
    },
    {
      id: "2",
      photos: "https://www.bsr.org/images/heroes/bsr-focus-nature-hero.jpg",
      title: "Mountain",
    },
    {
      id: "3",
      photos:
        "https://cdn-prod.medicalnewstoday.com/content/images/articles/325/325466/man-walking-dog.jpg",
      title: "Mother Nature ",
    },
    {
      id: "4",
      photos:
        "https://images.cnbctv18.com/wp-content/uploads/2022/10/nature-therapy-1019x573.jpg",
      title: "Yoga",
    },
    {
      id: "5",
      photos:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/1121098-pink-nature-wallpaper-1920x1080-lockscreen.jpg/1280px-1121098-pink-nature-wallpaper-1920x1080-lockscreen.jpg",
      title: "Beautiful tree",
    },
    {
      id: "6",
      photos:
        "https://img.freepik.com/free-vector/gradient-mountain-landscape_52683-77407.jpg?w=2000",
      title: "Art Nature",
    },
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState(photos);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    const results = photos.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Box sx={{ mr: "5px", display: "flex", alignItems: "center" }}>
          <TextField
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Search..."
            size="small"
            variant="outlined"
            sx={{
              width: "400px",
            }}
          />
          <SearchIcon sx={{ marginLeft: "-30px", color: "black" }} />
          <ul
            style={{
              width: "100%",
              backgroundColor: "white",
              listStyle: "none",
              color: "black",
              display: "flex",
              flexDirection: "column",
              justifyContent: "start",
            }}
          >
            {searchResults.map((item) => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul>
        </Box>
      </div>
    </>
  );
};

export default Search;
