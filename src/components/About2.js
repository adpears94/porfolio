import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import { Grid, Typography, Paper } from '@material-ui/core'
import hotdog from "../images/hotdog.svg";
import { Typography, Box, LinearProgress, Tooltip } from "@mui/material";
import { motion } from "framer-motion";
import  database  from "../images/database.png";
import js from "../images/js.png";
import frontend from "../images/frontend.png";
import backend from "../images/backend.png";
import hardwork from "../images/hardwork.png";
import devilhorns from "../images/devilhorns.png";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    overflowX: "scroll",

    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },
  paper: {
    padding: theme.spacing(2),
    // textAlign: "center",
    width: "60%",
    maxHeight: 500,
    color: theme.palette.text.secondary,
    "&:hover": {
      transform: "scale(1.1)",
      transition: "all 0.7s ease-out",
      // transform: "rotate(360deg)",
    },
    skill: {
      marginRight: theme.spacing(1),
      width: 120,
    },
  },
  avatar: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    marginRight: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(3),
      marginRight: 0,
    },
  },
  img: {
    minWidth: "100%",
    minHeight: "100%",
  },
  // colorPrimary: {
  //   backgroundColor: '#d9cdba',
  // },
  barColorPrimary: {
    backgroundColor: '#8a652b',
  }
}));

export const About = () => {
  const classes = useStyles();

  const SkillBar = ({ ds, value, img }) => {
    const classes = useStyles();
    return (
        <Tooltip title={ds} placement="top-start">
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Typography
        sx={{ mr: 1}}
          className={classes.skill}
          variant="h6"
          color="textSecondary"
        >
          <img src={img} style={{width: 50 }}/>
        </Typography>
        <LinearProgress sx={{width: 1, pt: .5, mt: 2, ml: 2}} classes={{colorPrimary: classes.colorPrimary, barColorPrimary: classes.barColorPrimary}}
          // sx={{
          //   height: 15,
          //   "& .MuiLinearProgress-root": { Color: "black" },
          //   "& .MuiLinearProgress-bar1": { BackgroundColor: "black" },
          //   "& .MuiLinearProgress-bar2": { BackgroundColor: "black" },
          //   "& .MuiLinearProgress-root": { BackgroundColor: "black" },
          //   "& .MuiLinearProgress-colorPrimary": { BackgroundColor: "black" },
          //   "& .MuiLinearProgress-bar1": { BackgroundColor: "black" },
          // }}
          // style={{ barColor: "black", colorPrimary: "black", "& ..MuiLinearProgress-root": { color: "black" }  }}
          variant="buffer"
          value={value}
          valueBuffer={50}
        />
      </div>
        </Tooltip>
    );
  };

  return (
    <motion.div
      className="container text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={classes.root}>
        <Box sx={{ width: "99%" }}>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              mb: 5,
              justifyContent: "spaceBetween",
              width: "100%",
            }}
          >
            <Typography variant="body1">
              Hi, my name is [Your Name]. I am a [Your Profession]. I have been
              working in this field for [Number of Years] years. Some of my
              expertise include [Skill #1], [Skill #2], and [Skill #3]. I am
              passionate about [Your Passion].
            </Typography>

            <img src={hotdog} alt="kitten" className={classes.paper} />
          </Box>
          {/* <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              mb: 5,
              justifyContent: "spaceBetween",
              width: "100%",
            }}
          > */}
            <SkillBar ds={"JavaScript"} value={92} img={js}  />
            <SkillBar ds={"Front-end"} value={85} img={frontend} />
            <SkillBar ds={"Back-end"} value={90} img={backend} />
            <SkillBar ds={"Databases"} value={80} img={database} />
            <SkillBar ds={"Work ethic"} value={100} img={hardwork} />
            <SkillBar ds={"Overall Awesome Dude"} value={100} img={devilhorns} />
          {/* </Box> */}
          {/* <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              mb: 5,
              justifyContent: "spaceBetween",
              width: "100%",
            }}
          >
            <img src={hotdog} alt="kitten" className={classes.paper} />

            <Typography variant="body1">
              Duis mollis quam id purus euismod tristique. Sed vel lorem neque.
              Suspendisse dignissim, eros vel tempor pretium, tortor magna
              molestie libero, sit amet finibus elit quam vel odio. Suspendisse
              convallis, sapien quis molestie sodales, nibh turpis efficitur
              augue, eget suscipit urna lacus eu odio.
            </Typography>
          </Box> */}
        </Box>
      </div>
    </motion.div>
  );
};
