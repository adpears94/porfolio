import { useState, useEffect } from "react";
import { Typography, Box, Button } from "@mui/material/";
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
  const [description, setDescription] = useState("vigil");
  const vigil = [
    { image: login, text: "Login Functionality With Bcrypt and JWT" },
    { image: thirtyday, text: "30 Day and Yearly Trend Analytics" },
    { image: users, text: "Admin: User Management" },
    {
      image: webmasters,
      text: "WebMasters: Create New Users/Base DataTable dynamically",
    },
    { image: forms, text: "Delivery Driver Input Form" },
    { image: data, text: "Delivery Driver History for Location" },
    {
      image: customdata,
      text: "Customizable Time/Date Analytics for Trend Analysis",
    },
  ];
  const pass = [
    { image: roster, text: "Home Screen" },
    { image: people, text: "boobies" },
    { image: editprof, text: "boobies" },
    { image: csv, text: "boobies" },
    { image: addtosched, text: "boobies" },
  ];
  const [newImages, setNewImages] = useState([]);

  const vigilDescription = (
    <div>
      <Typography variant="h1" gutterBottom>
        VIGIL
      </Typography>
      <Typography variant="h4" gutterBottom>
        Vehicle Inspection Gateway and Installation Logistics
      </Typography>
      <Typography variant="body1" paragraph>
        As a software developer, I am proud to have initiated, created, and
        implemented VIGIL - a powerful application designed to provide valuable
        insights into delivery driver activities on military installations.
        VIGIL is a user-friendly solution that saves military police $100k
        annually and 3,000 man-hours per implementation.
      </Typography>
      <Typography variant="body1" paragraph>
        Using the PERN stack, VIGIL is reliable, secure, and scalable, with a
        customizable feature set that allows for the creation of new data tables
        dynamically. This feature gives webmasters control to tailor the
        application to meet the specific needs of each military installation,
        providing relevant and valuable insights for installation commanders.
      </Typography>
      <Typography variant="body1" paragraph>
        Overall, VIGIL is an important addition to any military installation's
        management processes, empowering commanders with data-driven insights to
        optimize security, efficiency, and cost savings. As a software
        developer, I am proud to have created a solution that improves the lives
        of those who serve our country.
      </Typography>{" "}
    </div>
  );

  const passDescription = (
    <div>
      <Typography variant="h1" gutterBottom>
        PASS
      </Typography>
      <Typography variant="h4" gutterBottom>
        Personnell Assignment Scheduling System
      </Typography>
      <Typography variant="body1" paragraph>
        This scheduling application is designed to meet the unique needs of
        shift workers, specifically 32,000 military police members. The
        application is completely dynamic, allowing users to easily set time
        frames and dates for scheduling based on certification requirements and
        manning needs.
      </Typography>
      <Typography variant="body1" paragraph>
        Developed using the PERN stack, this application is highly efficient and
        user-friendly. It allows for real-time updates and notifications,
        ensuring that all users are aware of any changes to their schedules.
        Additionally, the application features advanced filtering options that
        enable users to quickly find the information they need.
      </Typography>
      <Typography variant="body1" paragraph>
        With this scheduling application, shift managers can easily create and
        manage schedules for their team members, taking into account all
        relevant factors such as certification requirements and manning needs.
        This ensures that all shifts are adequately staffed and that all
        employees are working within their areas of expertise.
      </Typography>
      <Typography variant="body1" paragraph>
        Overall, this scheduling application is a powerful tool for managing
        complex schedules and ensuring that all shift workers are working
        effectively and efficiently. Whether you're managing a small team or a
        large organization, this application can help you stay on top of your
        scheduling needs and keep your workforce operating smoothly.
      </Typography>{" "}
    </div>
  );

  useEffect(() => {
    setNewImages(vigil);
  }, []);

  const images = vigil.map((number, index) => ({
    src: number,
    index: index,
  }));

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          width: "100%",
          height: "2vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          // position: "absolute",
          // zIndex: 10,
          // mt: 7,
        }}
      >
        <Button
          cursor="pointer"
          onClick={() => {
            setDescription("vigil");
            setNewImages(vigil);
          }}
        >
          VIGIL
        </Button>
        <Button
          cursor="pointer"
          onClick={() => {
            setDescription("pass");
            setNewImages(pass);
          }}
        >
          PASS
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          // width: "99.5vw",
          width: '100%',
          flexDirection: "row",
          flexWrap: 'wrap',
          justifyContent: "space-between",
          // alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "50%",
            minWidth: 412,
            // display: "flex",
            // justifyContent: "center",
            // height: 1,
            // pt: 10,
          }}
        >
          <Carousel
          // width="50%"
            // sx={{ width: "20vw" }}            
            showThumbs={false}
            showArrows={true}
            showIndicators={false}
            autoPlay={true}
            infiniteLoop={true}
            onChange={(e) => console.log(e)}
          >
            {newImages.map((number, index) => (
              <>
                <img key={index} src={number.image} />
                <Typography>{number.text}</Typography>
              </>
            ))}
          </Carousel>
        </Box>
        <Box
          sx={{
            width: '50%',
            minWidth: 412,
            maxWidth: "100%",
            display: "flex",
            justifyContent: "center",
            // position: "relative",
            alignItems: "start",
            // mb: description === "vigil" ? 0 : 14,
            // ml: 3,
          }}
        >
          {description === "vigil" ? vigilDescription : passDescription}
        </Box>
      </Box>
    </Box>
  );
};
//   return (
//     <Box sx={{ display: "flex", width: "99.9vw", border: 1, ml: -1 }}>
//       <Typography >testing from project page</Typography>
//     </Box>

//   );
