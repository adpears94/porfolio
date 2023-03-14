import * as React from "react";
import { Link } from "react-router-dom";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { alpha } from "@mui/material";
import { useNavigate } from "react-router";

export const Footer = () => {
  // const [value, setValue] = React.useState('recents');

  // const handleChange = (event, newValue) => {
  //   console.log(event)
  //   setValue(newValue);
  // };

  return (
    <Paper
      sx={{
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        bottom: 0,
        left: 0,
        right: 0,
        height: 50,
        backgroundColor: alpha("#fefefe", 0),
        boxShadow: 0,
      }}
      elevation={3}
    >
      <BottomNavigation
        position="sticky"
        sx={{
          width: "15%",
          position: "sticky",
          backgroundColor: alpha("#fefefe", .8),
        }}

        //  value={value}
      >
        <Link to={"https://github.com/adpears94"}>
          <BottomNavigationAction
            sx={{ mt: 2 }}
            // showlabel="Recents"
            value="recents"
            icon={<GitHubIcon />}
          />
        </Link>
        <Link to={"https://www.linkedin.com/in/averypears/"}>
          <BottomNavigationAction
            sx={{ mt: 2 }}
            // showlabel="Favorites"
            value="favorites"
            icon={<LinkedInIcon />}
          />
        </Link>
      </BottomNavigation>
    </Paper>
  );
};
