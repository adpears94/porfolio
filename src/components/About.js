import { Box } from "@mui/material";
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import { Grid, Typography, Paper } from '@material-ui/core'
import hotdog from '../images/hotdog.svg'
import { Grid, Typography, Paper } from '@mui/material'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(7),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    '&:hover': {
      transform: 'scale(1.2)',
      transition: 'all 0.5s ease-out',
    },
  },
  img: {
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

export const About = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <img
              src={hotdog}
              alt="kitten"
              className={classes.img}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="body1">
            Hi, my name is [Your Name]. I am a [Your Profession]. I have been
            working in this field for [Number of Years] years. Some of my
            expertise include [Skill #1], [Skill #2], and [Skill #3]. I am
            passionate about [Your Passion].
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            vel magna eget elit dignissim faucibus. Aliquam maximus, eros vel
            blandit bibendum, velit augue accumsan risus, id facilisis magna
            neque nec urna. In hac habitasse platea dictumst.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <img
              src={hotdog}
              alt="kitten"
              className={classes.img}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <img
              src={hotdog}
              alt="kitten"
              className={classes.img}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="body1">
            Duis mollis quam id purus euismod tristique. Sed vel lorem neque.
            Suspendisse dignissim, eros vel tempor pretium, tortor magna
            molestie libero, sit amet finibus elit quam vel odio. Suspendisse
            convallis, sapien quis molestie sodales, nibh turpis efficitur
            augue, eget suscipit urna lacus eu odio.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};
