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
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
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
          mt: "10px",
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
        <Avatar
          sx={{
            width: "100px",
            height: "100px",
            mt: "20px",
            offset: 1,
            border: "1px solid #e619b6",
          }}
          alt="Travis Howard"
          src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202212/avatar-the-way-of-water_1200x768-sixteen_nine.jpeg?size=1200:675"
        />
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
      <Toolbar />
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton sx={{ color: "black" }}>
              <ListItemIcon>
                {index % 2 === 0 ? (
                  <InboxIcon sx={{ color: "#e619b6" }} />
                ) : (
                  <MailIcon sx={{ color: "#e619b6" }} />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
  const feedsData = useSelector((state) => state.feedsReducer);
  const dispatch = useDispatch();

  const container =
    window !== undefined ? () => window().document.body : undefined;

  React.useEffect(() => {
    dispatch({ type: "FETCH_EXAMPLE_DATA", payload: feeds });
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
            <Box sx={{ mr: "5px", display: "flex", alignItems: "center" }}>
              <TextField
                size="small"
                variant="outlined"
                sx={{
                  width: "400px",
                }}
              />
              <SearchIcon sx={{ marginLeft: "-30px", color: "black" }} />
            </Box>
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
                  backgroundColor: "#e619b6",
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
          <Typography variant="h4">Stories</Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <PlayCircleIcon sx={{ marginRight: "10px" }} />
            <Typography> Watch All</Typography>
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
          <Stories />
          <Stories />
          <Stories />
          <Stories />
          <Stories />
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
          <Typography variant="h4">Feeds</Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography sx={{ marginRight: "20px", fontWeight: "600" }}>
              Photos
            </Typography>
            <Typography sx={{ fontWeight: "600" }}>Videos</Typography>
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
              }}
            >
              <ThumbUpIcon /> Likes
            </Typography>
            <Typography>Popular</Typography>
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
          {feeds && feeds.length && feeds.map((elem) => <Feeds {...elem} />)}
        </Grid>
      </Box>
    </Box>
  );
}

DrawerComponent.propTypes = {
  window: PropTypes.func,
};

export default DrawerComponent;
