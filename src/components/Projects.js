import { useState } from "react";
import { Typography, Box } from "@mui/material";
import hotdog from "../images/hotdog.svg";
// import Carousel from 'react-gallery-carousel';
// import 'react-gallery-carousel/dist/index.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import addtosched from "../images/pass/addtosched.PNG";
import csv from "../images/pass/csv.PNG";
import editprof from "../images/pass/editprof.PNG";
import people from "../images/pass/people.PNG";
import roster from "../images/pass/roster.PNG";
import customdata from "../images/vigil/customdata.PNG";
import data from "../images/vigil/data.PNG";
import forms from "../images/vigil/forms.PNG";
import login from "../images/vigil/login.PNG";
import thirtyday from "../images/vigil/thirtyday.PNG";
import users from "../images/vigil/users.PNG";
import webmasters from "../images/vigil/webmasters.PNG";

export const Projects = () => {
  const [newImages, setNewImages] = useState([]);

  const vigil = [
    { image: login, text: "Login functionality with Bcrypt and JWT" },
    { image: thirtyday, text: "boobies" },
    { image: users, text: "boobies" },
    { image: webmasters, text: "boobies" },
    { image: forms, text: "boobies" },
    { image: data, text: "boobies" },
    { image: customdata, text: "boobies" },
  ];
  const pass = [
    { image: roster, text: "boobies" },
    { image: people, text: "boobies" },
    { image: editprof, text: "boobies" },
    { image: csv, text: "boobies" },
    { image: addtosched, text: "boobies" },
  ];
  // setNewImages(vigil)

  const images = vigil.map((number, index) => ({
    src: number,
    index: index,
  }));

  return (
    <>
      {/* <Carousel  index={images.index} style={{ height: 600, width: 1250 }}
    onChange={(e) => {console.log(e)}} >
    {vigil.map((number, index) => (
      <Box sx={{display: 'flex', flexDirection: "column"}}>
      <img style={{ height: 600, width: 1250 }} src={number}/>
    <Typography sx={{position:'absolute'}}>testing from project page</Typography>
      </Box>
    ))}
    
    </Carousel> */}
      <Box
        sx={{
          display: "flex",
          width: "99.5vw",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Carousel
          width="60%"
          showThumbs={false}
          showArrows={true}
          showIndicators={false}
          autoPlay={true}
          infiniteLoop={true}
          onChange={(e) => console.log(e)}
        >
          {vigil.map((number, index) => ( 
            <>
            <img key={index} src={number.image} />
            <Typography>{number.text}</Typography>
            </>
          ))}
        </Carousel>
      </Box>
    </>
  );
};
//   return (
//     <Box sx={{ display: "flex", width: "99.9vw", border: 1, ml: -1 }}>
//       <Typography >testing from project page</Typography>
//     </Box>

//   );
