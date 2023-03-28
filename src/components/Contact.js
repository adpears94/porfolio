import { Typography, Box, TextField, Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import CircularProgress from "@mui/material/CircularProgress";
import { motion } from "framer-motion";
import contact from "../images/contact.png";

// import hotdog from "../images/hotdog.svg";
const theme = createTheme({
  typography: {
    main: {
      fontFamily: "Montserrat",
      fontSize: 100,
    },
  },
});

export const Contact = () => {
  const [flag, setFlag] = useState(false);
  const [buttonText, setButtonText] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    if (
      buttonText.user_name === "" ||
      buttonText.user_email === "" ||
      buttonText.message === ""
    ) {
      const { clientX, clientY } = event;
      const buttonX = clientX - 50; // Subtract half the button width
      const buttonY = clientY - 50; // Subtract half the button height
      setButtonPosition({ x: buttonX, y: buttonY });
    }
  };

  const form = useRef();
  const sendEmail = (e) => {
    setFlag(true);
    // e.preventDefault();
    // console.log(newEmail);

    emailjs
      .sendForm(
        "service_zrgif4h",
        "template_cg79g7w",
        form.current,
        "TePWG0ybiiZ739Cms"
      )
      .then(
        (result) => {
          if (result.text === "OK") {
            setFlag(false);
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <ThemeProvider theme={theme}>
      <motion.div
        className="container text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Box
          sx={{ width: "100vw", height: "100vh", position: "relative" }}
          style={{
            backgroundImage: `url(${contact})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            // width: '100%',
            height: "95.3vh",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "94vh",
              width: "100%",
              border: 1,
            }}
          >
            <Box
              sx={{
                display: "flex",
                height: "50vh",
                width: "100%",
                flexDirection: "column",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              {/* <Box sx={{ display: "flex", flexDirection: "column",justifyContent: "center", width: "75%", border: 1, borderColor: "#fefefe" }}> */}
              <motion.div
                style={{ border: 1, borderColor: "#fefefe" }}
                className="container text-center"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 3,
                  delay: 1.2,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              >
                <Typography
                  variant="main"
                  sx={{
                    color: "#fefefe",
                    height: 250,
                    opacity: 1,
                    transition: "opacity 10s ease-in-out",
                    ml: 50,
                  }}
                >
                  Lets Talk...{" "}
                </Typography>
              </motion.div>
              <motion.div
                className="container text-center"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 3,
                  delay: 3.2,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              >
                <Typography
                  variant="main"
                  sx={{
                    color: "#fefefe",
                    opacity: 1,
                    transition: "opacity 10s ease-in-out",
                    mr: 50,
                  }}
                >
                  Lets Build
                </Typography>
              </motion.div>
              {/* </Box> */}
            </Box>

            <form ref={form} onSubmit={sendEmail}>
              <Box
                position="relative"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  width: "98vw",
                  // m: 2
                }}
              >
                <TextField
                  margin="normal"
                  required
                  id="user_name"
                  label="Name"
                  name="user_name"
                  sx={{
                    ml: 2,
                    mr: 2,
                    "& .MuiOutlinedInput-input": { color: "#fefefe" },
                    "& .MuiFormLabel-root": { color: "#fefefe" },
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#fefefe",
                    },
                    "& label.Mui-focused": { color: "#fefefe" },
                    "& .MuiOutlinedInput-root": {
                      "&.Mui-focused fieldset": {
                        borderColor: "#fefefe",
                      },
                    },
                  }}
                  autoFocus
                  onChange={(e) => {
                    setButtonText({ user_name: e.target.value });
                  }}
                />
                <TextField
                  margin="normal"
                  required
                  id="user_email"
                  label="Email Address"
                  name="user_email"
                  autoFocus
                  onChange={(e) => {
                    setButtonText({ user_email: e.target.value });
                  }}
                  sx={{
                    "& .MuiOutlinedInput-input": { color: "#fefefe" },
                    "& .MuiFormLabel-root": { color: "#fefefe" },
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#fefefe",
                    },
                    "& label.Mui-focused": { color: "#fefefe" },
                    "& .MuiOutlinedInput-root": {
                      "&.Mui-focused fieldset": {
                        borderColor: "#fefefe",
                      },
                    },
                  }}
                />
              </Box>
              {flag && (
                <Box
                  sx={{
                    display: "flex",
                    border: 1,
                    height: "100%",
                    width: "99.9vw",
                    justifyContent: "center",
                    position: "absolute",
                    flexDirection: "row",
                  }}
                >
                  <CircularProgress
                    sx={{
                      justifyContent: "center",
                      position: "absolute",
                      mr: 15,
                    }}
                  />
                </Box>
              )}
              <Box
              position="relative"
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "98vw",
                // m: 2
              }}
              >
              <TextField
                sx={{
                  ml: 2,
                  

                  width: "50%",
                  //this is the text color
                  "& .MuiOutlinedInput-input": { color: "#fefefe" },
                  "& .MuiFormLabel-root": { color: "#fefefe" },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#fefefe",
                  },
                  "& label.Mui-focused": { color: "#fefefe" },
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderColor: "#fefefe",
                    },
                  },
                }}
                required
                id="message"
                label="Message"
                multiline
                name="message"
                rows={10}
                autoFocus
                onChange={(e) => {
                  setButtonText({ message: e.target.value });
                }}
              />
            

            <Button
              // variant="contained"
              sx={{
                color: "black",
                width: "50%",
                
                backgroundColor: "#fefefe",
                size: "large",
                ml: 2,
                mt: 1,
                left: buttonPosition.x,
                top: buttonPosition.y,
              }}
              onClick={() => sendEmail()}
              // onMouseMove={(e) => console.log(e)}
            >
              send
            </Button>
            </Box>
            </form>
          </Box>
        </Box>
      </motion.div>
    </ThemeProvider>
  );
};
