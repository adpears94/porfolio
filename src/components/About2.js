import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import { Grid, Typography, Paper } from '@material-ui/core'
import hotdog from "../images/hotdog.svg";
import { Grid, Typography, Paper, Box, Avatar } from "@mui/material";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        
        [theme.breakpoints.down('sm')]: {
          flexDirection: 'column',
          alignItems: 'center',
        },
      },
  paper: {
    padding: theme.spacing(2),
    // textAlign: "center",
    width: '60%',
    maxHeight: 500,
    color: theme.palette.text.secondary,
    "&:hover": {
      transform: "scale(1.1)",
      transition: "all 0.7s ease-out",
      // transform: "rotate(360deg)",
    },
  },
  avatar: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    marginRight: theme.spacing(5),
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(3),
      marginRight: 0,
    },
  },
  img: {
    minWidth: "100%",
    minHeight: "100%",
  },
}));

export const About = () => {
  const classes = useStyles();

  return (
    <div className={classes.root} >
      <Box sx={{width: '99%'}}>
        <Box sx={{ display: "flex", flexDirection: "row", mb: 5, justifyContent: 'spaceBetween', width: '100%' }}>
          
           

              <img src={hotdog} alt="kitten" className={classes.paper} />
            
            
          
          
            <Typography variant="body1">
              Hi, my name is [Your Name]. I am a [Your Profession]. I have been
              working in this field for [Number of Years] years. Some of my
              expertise include [Skill #1], [Skill #2], and [Skill #3]. I am
              passionate about [Your Passion].
            </Typography>
          
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row", mb: 5, justifyContent: 'spaceBetween', width: '100%' }}>
        
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum vel magna eget elit dignissim faucibus. Aliquam
              maximus, eros vel blandit bibendum, velit augue accumsan risus, id
              facilisis magna neque nec urna. In hac habitasse platea dictumst.
            </Typography>
          
        
          <img src={hotdog} alt="kitten" className={classes.paper} />
          
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row", mb: 5, justifyContent: 'spaceBetween', width: '100%' }}>
          
          <img src={hotdog} alt="kitten" className={classes.paper} />
          
          
            <Typography variant="body1">
              Duis mollis quam id purus euismod tristique. Sed vel lorem neque.
              Suspendisse dignissim, eros vel tempor pretium, tortor magna
              molestie libero, sit amet finibus elit quam vel odio. Suspendisse
              convallis, sapien quis molestie sodales, nibh turpis efficitur
              augue, eget suscipit urna lacus eu odio.
            </Typography>
          
        </Box>
      </Box>
    </div>
  );
};
