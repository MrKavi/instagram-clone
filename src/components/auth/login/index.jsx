import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, Grid, TextField } from "@mui/material";
import "./style.scss";

const Login = () => {
  const theme = useTheme();
  return (
    <Card
      className="login"
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CardMedia
        className="img"
        component="img"
        sx={{ width: "30%", marginRight: "30px" }}
        image="https://media.istockphoto.com/id/1180475665/vector/two-factor-multi-factor-authentication-security-concept.jpg?s=612x612&w=0&k=20&c=tWmNdeHC1wJTokI0s3ueZvCQGNcZRZcUyDNDa1ywEmQ="
        alt="Live from space album cover"
      />
      <Box
        className="login-form"
        sx={{
          marginRight: "30px",
          width: "30%",
          display: "flex",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          flexDirection: "column",
          paddingTop: "40px",
          paddingBottom: "40px",
          justifyContent: "center",
        }}
      >
        <CardContent
          sx={{
            flex: "1 0 auto",
            padding: "20px",
            border: "1px",
          }}
        >
          <Typography component="div" variant="h5">
            Login
          </Typography>
          <Grid
            sx={{
              display: "flex",
              flexDirection: "column",
              marginTop: "20px",
            }}
          >
            <TextField
              sx={{ marginBottom: "20px" }}
              id="outlined-basic"
              label="Username"
              type="text"
              variant="outlined"
            />
            <TextField
              sx={{ marginBottom: "20px" }}
              id="outlined-basic"
              label="Password"
              type="password"
              variant="outlined"
            />
            <Button variant="contained">Login</Button>
          </Grid>
        </CardContent>
      </Box>
    </Card>
  );
};
export default Login;
