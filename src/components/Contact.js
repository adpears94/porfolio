import { Typography, Box, TextField, Button, FormControl } from "@mui/material";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef();
  const [newEmail, setNewEmail] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const sendEmail = (e) => {
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
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Box sx={{justifyContent: "column", width: "100vw", border: 1, ml: -4 }}>
      {/* <Typography sx={{ }}>
        testing from contact page
    </Typography> */}
      {/* <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form> */}
      {/* <FormControl ref={form} > */}
      
      <Box sx={{display: 'flex', justifyContent: "center"}}>

      <Typography >Please contact me if you would like to ...</Typography>
      </Box>
      
      <form ref={form} onSubmit={sendEmail}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            width: "100vw",
            // m: 2
          }}
        >
          <TextField
            // error={failedLogin}
            margin="normal"
            required
            // fullWidth
            id="user_name"
            label="Name"
            name="user_name"
            sx ={{ml: 2, mr: 2}}
            // autoComplete="Username"
            autoFocus
            onChange={(e) => {
              setNewEmail((prev) => {
                return { ...prev, user_name: e.target.value };
              });
            }}
          />
          <TextField
            // error={failedLogin}
            margin="normal"
            required
            // fullWidth
            
            id="user_email"
            label="Email Address"
            name="user_email"
            // autoComplete="Useremail"
            autoFocus
            onChange={(e) => {
              setNewEmail((prev) => {
                return { ...prev, user_email: e.target.value };
              });
            }}
          />
        </Box>
        <TextField
        sx={{ml: 2}}
          // error={failedLogin}
          margin="auto"
          required
          fullWidth
          id="message"
          label="Message"
          multiline
          name="message"
          rows={10
          }
          // autoComplete="Useremail"
          autoFocus
          onChange={(e) => {
            setNewEmail((prev) => {
              return { ...prev, message: e.target.value };
            });
          }}
        />
      </form>
      {/* </FormControl> */}
      <Button onClick={() => sendEmail()}>send</Button>
    </Box>
  );
};
