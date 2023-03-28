import React from 'react';
import { makeStyles } from '@mui/styles';
import { LinearProgress, Typography } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(1),
  },
  skill: {
    marginRight: theme.spacing(1),
    width: 120,
  },
}));



export const About = () => {
  
  const SkillBar = ({ name, value }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography className={classes.skill} variant="body2" color="textSecondary">
        {name}
      </Typography>
      <LinearProgress variant="determinate" value={value} />
    </div>
  );
};


  return (
    <div>
      <SkillBar name="JavaScript" value={80} />
      <SkillBar name="Front-end" value={90} />
      <SkillBar name="Back-end" value={75} />
      <SkillBar name="Databases" value={70} />
      <SkillBar name="Work ethic" value={95} />
      <SkillBar name="Overall wicked dude" value={100} />
    </div>
  );
};

