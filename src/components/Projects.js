import { Typography, Box } from "@mui/material";
import hotdog from "../images/hotdog.svg"
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';

export const Projects = () => {
  const images = [9, 8, 7, 6, 5].map((number) => ({
    src: `https://placedog.net/${number}00/${number}00?id=${number}`
  }));

  return (
    <Carousel images={images} style={{ height: 500, width: 800 }} />
  );
};
//   return (
//     <Box sx={{ display: "flex", width: "99.9vw", border: 1, ml: -1 }}>
//       <Typography >testing from project page</Typography>
//     </Box>
   
//   );

