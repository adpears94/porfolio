import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@mui/material/";
import hotdog from "../images/hotdog.svg";
import { zIndex } from '@mui/system';
// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//     alignItems: "center",
//     [theme.breakpoints.down("sm")]: {
//       flexDirection: "column",
//       alignItems: "center",
//     },
//   },
//   avatar: {
//     width: theme.spacing(20),
//     height: theme.spacing(20),
//     marginRight: theme.spacing(5),
//     [theme.breakpoints.down("sm")]: {
//       marginBottom: theme.spacing(3),
//       marginRight: 0,
//     },
//     "&:hover": {
//       transform: "scale(1.2)",
//       transition: "all 8s",
//     },
//   },
//   introContainer: {
//     maxWidth: 600,
//     [theme.breakpoints.down("sm")]: {
//       textAlign: "center",
//     },
//   },
// }));

export const Home = () => {
  //   const classes = useStyles();

  return (
    <Box
      sx={{
        
        
        display: "flex",
        flexDirection: "row",
        
        width: "100%",
        // height: 1,
        alignItems: "center",
        // mt: -14.1,
      }}
    >
      <Box sx={{display: "flex", justifyContent: "center"}}>
        <img width={"60%"} alt="Profile Picture" src={hotdog} />
      </Box>
      <Box sx={{ display: 'flex', flexDirection: "column", width: "100%", justifyConent: "start", ml: 3 }}>
        <Typography variant="h4" gutterBottom>
          <a>Hi, I'm Avery.</a>
          <p>Im a Full Stack Software Developer</p>
        </Typography>
        <Typography variant="body1">
          We should build something together
        </Typography>
      </Box>
    </Box>
  );
};
