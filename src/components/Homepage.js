import React from "react";
import { Typography, Box } from "@mui/material/";
import { motion } from "framer-motion";
import hotdog from "../images/hotdog.svg";



export const Home = () => {
  //   const classes = useStyles();
  

  return (
    <motion.div
      className="container text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: .5 }}
    >
    <Box
      sx={{
        
        
        display: "flex",
        flexDirection: "row",
        
        width: "100%",
        height: "95vh",
       
        
        // mt: -14.1,
      }}
    >
     

      <Box sx={{display: "flex", justifyContent: "center"}}>
        <img width={"60%"} alt="Profile Picture" src={hotdog} />
      </Box>
      <Box sx={{ display: 'flex', flexDirection: "column", width: "100%", justifyContent: "center", alignItems: "center" }}>
        <Typography variant="h4" gutterBottom>
          <a>Hi, I'm Avery.</a>
          <p>Im a Full Stack Software Developer</p>
        </Typography>
        <Typography variant="body1">
          We should build something together
        </Typography>
      </Box>
      
    </Box>
    </motion.div>
  );
};
