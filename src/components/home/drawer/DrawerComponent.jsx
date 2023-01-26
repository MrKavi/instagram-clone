import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import MailIcon from "@mui/icons-material/Mail";
import NearMeIcon from "@mui/icons-material/NearMe";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import AppsIcon from "@mui/icons-material/Apps";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import SettingsIcon from "@mui/icons-material/Settings";
import LoginIcon from "@mui/icons-material/Login";
import SearchIcon from "@mui/icons-material/Search";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import { Avatar, Button, CardMedia, Grid, TextField } from "@mui/material";
import Stories from "../../stories";
import Feeds from "../../feeds";
import "./style.scss";
import Home from "..";
import { useDispatch, useSelector } from "react-redux";
import { feeds } from "../../../mock/feeds";
import { photos } from "../../../mock/photos";

import { Link, Route, Routes } from "react-router-dom";
import Photos from "../../feeds/photos";
import SearchBox from "../../../shared/search/Search";
import Search from "../../../shared/search/Search";
const drawerWidth = 240;

function DrawerComponent(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Grid
        sx={{
          mt: "5px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CardMedia
          className="img"
          component="img"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginRight: "3px",
            width: "50px",
            height: "50px",
            mr: 2,
          }}
          image="https://cdn.pixabay.com/photo/2016/08/09/17/52/instagram-1581266__340.jpg"
          alt="Live from space album cover"
        />
        <Typography variant="h6">Instagram</Typography>
      </Grid>

      <Grid
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            padding: "5px",
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
        >
          <Avatar
            sx={{
              width: "100px",
              height: "100px",
              offset: 1,
            }}
            alt="Travis Howard"
            src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202212/avatar-the-way-of-water_1200x768-sixteen_nine.jpeg?size=1200:675"
          />
        </Box>

        <Typography sx={{ mt: 1 }}>Avtar Name</Typography>
        <Typography sx={{ mt: "1px", color: "gray", fontSize: "13px" }}>
          @Name
        </Typography>
        <Grid sx={{ mt: 2, display: "flex" }}>
          <Box sx={{ mr: 2 }}>
            <Typography
              sx={{
                mt: 1,
                fontSize: "14px",
                fontWeight: "600",
              }}
            >
              100
            </Typography>
            <Typography
              sx={{
                fontSize: "12px",
                color: "gray",
                fontWeight: "600",
              }}
            >
              Posts
            </Typography>
          </Box>
          <Box sx={{ mr: 2 }}>
            <Typography
              sx={{
                mt: 1,
                fontSize: "14px",
                fontWeight: "600",
              }}
            >
              1M
            </Typography>
            <Typography
              sx={{
                fontSize: "12px",
                color: "gray",
                fontWeight: "600",
              }}
            >
              Followers
            </Typography>
          </Box>{" "}
          <Box sx={{ mr: 2 }}>
            <Typography
              sx={{
                mt: 1,
                fontSize: "14px",
                fontWeight: "600",
              }}
            >
              0
            </Typography>
            <Typography
              sx={{
                fontSize: "12px",
                color: "gray",
                fontWeight: "600",
              }}
            >
              Followings
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Grid
        sx={{
          display: "flex",
          flexDirection: "column",
          ml: "18px",
          mt: 3,
          mr: "18px",
        }}
      >
        <List
          sx={{
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
            ":hover": {
              boxShadow: "0px 0px 10px",
              transition:
                "background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
            },
          }}
        >
          <AppsIcon sx={{ fontSize: "30px", color: "#d415a4" }} />
          <Typography
            sx={{ ml: 1, color: "black", fontSize: "15px", fontWeight: "600" }}
          >
            Feeds
          </Typography>
        </List>
        <List
          sx={{
            ":hover": {
              boxShadow: "0px 0px 10px",
              transition:
                "background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
            },
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
          }}
        >
          <NotificationsIcon sx={{ fontSize: "30px", color: "black" }} />
          <Typography
            sx={{ ml: 1, color: "black", fontSize: "15px", fontWeight: "600" }}
          >
            Notification
          </Typography>
        </List>
        <List
          sx={{
            ":hover": {
              boxShadow: "0px 0px 10px",
              transition:
                "background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
            },
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
          }}
        >
          <MailIcon sx={{ fontSize: "30px", color: "black" }} />
          <Typography
            sx={{ ml: 1, color: "black", fontSize: "15px", fontWeight: "600" }}
          >
            Mails
          </Typography>
        </List>
        <List
          sx={{
            ":hover": {
              boxShadow: "0px 0px 10px",
              transition:
                "background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
            },
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
          }}
        >
          <NearMeIcon sx={{ fontSize: "30px", color: "black" }} />
          <Typography
            sx={{ ml: 1, color: "black", fontSize: "15px", fontWeight: "600" }}
          >
            Direct
          </Typography>
        </List>
        <List
          sx={{
            ":hover": {
              boxShadow: "0px 0px 10px",
              transition:
                "background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
            },
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
          }}
        >
          <SignalCellularAltIcon sx={{ fontSize: "30px", color: "black" }} />
          <Typography
            sx={{ ml: 1, color: "black", fontSize: "15px", fontWeight: "600" }}
          >
            Status
          </Typography>
        </List>
        <List
          sx={{
            ":hover": {
              boxShadow: "0px 0px 10px",
              transition:
                "background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
            },
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
          }}
        >
          <SettingsIcon sx={{ fontSize: "30px", color: "black" }} />
          <Typography
            sx={{ ml: 1, color: "black", fontSize: "15px", fontWeight: "600" }}
          >
            Settings
          </Typography>
        </List>
        <Divider />
        <List
          sx={{
            ":hover": {
              boxShadow: "0px 0px 10px",
              transition:
                "background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
            },
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
          }}
        >
          <LoginIcon sx={{ fontSize: "30px", color: "black" }} />
          <Typography
            sx={{ ml: 1, color: "black", fontSize: "15px", fontWeight: "600" }}
          >
            Logout
          </Typography>
        </List>
        <Divider />
        <Typography sx={{ fontSize: "10px" }}>@Copyrights-kv_gasyal</Typography>
      </Grid>
    </div>
  );
  const feedsData = useSelector((state) => state.feedsReducer);
  const photosData = useSelector((state) => state.photosReducer);
  const dispatch = useDispatch();

  const container =
    window !== undefined ? () => window().document.body : undefined;

  React.useEffect(() => {
    dispatch({ type: "FETCH_FEEDS_DATA", payload: feeds });
  }, []);
  React.useEffect(() => {
    dispatch({ type: "FETCH_PHOTOS_DATA", payload: photos });
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "white",
          boxShadow: "none",
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 3, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Grid
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              margin: "5px",
            }}
          >
            <Search />
            <Grid
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <NotificationsIcon sx={{ color: "black", marginRight: "20px" }} />
              <MarkunreadIcon sx={{ color: "black", marginRight: "20px" }} />
              <Button
                sx={{
                  color: "white",
                  backgroundColor: "#c7149a",
                  boxShadow: "none",
                }}
                variant="contained"
                startIcon={<AddIcon />}
              >
                Post
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of
        links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Grid
          sx={{
            mr: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography sx={{ fontWeight: "600" }} variant="h6">
            Stories
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <PlayCircleIcon sx={{ marginRight: "10px" }} />
            <Typography sx={{ fontSize: "13px", fontWeight: "600" }}>
              {" "}
              Watch All
            </Typography>
          </Box>
        </Grid>
        <Grid
          sx={{
            mr: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "5px",
          }}
        >
          <Stories />
        </Grid>
        <Grid
          sx={{
            mr: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mt: "10px",
          }}
        >
          <Typography sx={{ fontWeight: "600" }} variant="h6">
            Feeds
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Link style={{ textDecoration: "none" }} to="/photos">
              <Typography
                sx={{
                  marginRight: "20px",
                  fontWeight: "600",
                }}
              >
                Photos
              </Typography>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/videos">
              <Typography sx={{ fontWeight: "600" }}>Videos</Typography>
            </Link>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                marginRight: "10px",
                fontWeight: "600",
                fontSize: "13px",
              }}
            >
              <ThumbUpIcon sx={{ mr: 1 }} /> Likes
            </Typography>
            <Typography sx={{ fontWeight: "600", fontSize: "13px" }}>
              Popular
            </Typography>
          </Box>
        </Grid>
        <Grid
          sx={{
            mt: 2,
            p: 2,
            backgroundColor: "#f2f2f2",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gridGap: ".5rem",
          }}
        >
          <Routes>
            {feeds && feeds.length ? (
              <Route
                path="videos"
                element={feeds.map((elem) => (
                  <Feeds {...elem} />
                ))}
              />
            ) : null}
            {photos && photos.length ? (
              <Route
                path="photos"
                element={photos.map((elem) => (
                  <Photos {...elem} />
                ))}
              />
            ) : null}
          </Routes>
        </Grid>
      </Box>
    </Box>
  );
}

DrawerComponent.propTypes = {
  window: PropTypes.func,
};

export default DrawerComponent;
