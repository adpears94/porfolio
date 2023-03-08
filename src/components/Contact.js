import { Typography, Box, TextField, Button } from "@mui/material";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import CircularProgress from "@mui/material/CircularProgress";

export const Contact = () => {
  const [flag, setFlag] = useState(false);
  const [buttonText, setButtonText] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });
console.log(buttonText)


  const handleMouseMove = (event) => {
    if (buttonText.user_name === "" || buttonText.user_email === "" || buttonText.message === "") {
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
    console.log(form.current);

    emailjs
      .sendForm(
        "service_zrgif4h",
        "template_cg79g7w",
        form.current,
        "TePWG0ybiiZ739Cms"
      )
      .then(
        (result) => {
          console.log(result.text);
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
    <Box sx={{ justifyContent: "column", width: "99.9vw", border: 1, ml: -4, }}>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Typography>Please contact me if you would like to ...</Typography>
      </Box>

      <form ref={form} onSubmit={sendEmail}>
        <Box
          position="relative"
          sx={{
            display: "flex",
            justifyContent: "start",
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
              "& .MuiOutlinedInput-input": { color: "black" },
              "& .MuiFormLabel-root": { color: "black" },
              "& .MuiOutlinedInput-notchedOutline": { borderColor: "black" },
              "& label.Mui-focused": { color: "white" },
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: "white",
                },
              },
            }}
            autoFocus
            onChange={(e)=>{setButtonText({user_name: e.target.value})}}
          />
          <TextField
            margin="normal"
            required
            id="user_email"
            label="Email Address"
            name="user_email"
            autoFocus
            onChange={(e)=>{setButtonText({user_email: e.target.value})}}
            sx={{
              "& .MuiOutlinedInput-input": { color: "black" },
              "& .MuiFormLabel-root": { color: "black" },
              "& .MuiOutlinedInput-notchedOutline": { borderColor: "black" },
              "& label.Mui-focused": { color: "white" },
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: "white",
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
              height: "100vh",
              width: "99.9vw",
              justifyContent: "center",
              position: "absolute",
              flexDirection: "row",
            }}
          >
            <CircularProgress
              sx={{ justifyContent: "center", position: "absolute", mr: 15 }}
            />
          </Box>
        )}
        <TextField
          sx={{
            ml: 2,
            width: "98vw",
            //this is the text color
            "& .MuiOutlinedInput-input": { color: "black" },
            "& .MuiFormLabel-root": { color: "black" },
            "& .MuiOutlinedInput-notchedOutline": { borderColor: "black" },
            "& label.Mui-focused": { color: "white" },
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                borderColor: "white",
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
          onChange={(e)=>{setButtonText({message: e.target.value})}}
        />
      </form>

      <Button
        variant="contained"

        sx={{ color: "#fefefe", backgroundColor: "black", size: "large", ml: 2, mt: 2,  left: buttonPosition.x, top: buttonPosition.y  }}
        onClick={() => sendEmail()}
        onMouseMove={(e) => console.log(e)}
      >
        send
      </Button>
    </Box>
  );
};
