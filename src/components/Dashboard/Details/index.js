/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Button,
  TextField,
  Select,
  MenuItem,
} from "@material-ui/core";
import styles from "./DetailsStyles.js";
import useCommontyles from "styles/commonStyles";
import UseToggle from "../../hooks/useToggleInput";
import ConfirmDialogBox from "../../../Dialogs/ConfirmDialogBox";
import { toast } from "react-toastify";
import { updateUser, auth, db } from "../../../Firebse/firebase";

const Details = () => {
  const classes = styles();
  const classes_g = useCommontyles();
  const [isCancelOpen, toggleCancelOpen] = UseToggle(false);
  const user = sessionStorage.getItem("Auth Token");
  const [image, setImage] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [title, setTitle] = useState("");
  // const User_mail = auth.currentUser.email;
  // user firstname 
  // const User_Name = auth.currentUser.displayName.split(" ");
  // const User_FirstName = User_Name[0];
  // const User_LastName = User_Name[1];
  // const use=auth.currentUser;
  // console.log(contact);
 


  const handle = (e) => {
    const data = {
      image,
      firstName,
      lastName,
      email,
      contact,
      title,
    };
    if (data === null) {
      toast.error("enter valid data");
    }
    updateUser(data);
  };

  const handleImage = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

// fetch the user data from the firebase form the uid
 

  return (
    <Box mt={3}>
      <Box className={classes.root}>
        <Typography variant="subtitle1" style={{ fontWeight: "normal" }}>
          <strong>PROFILE DETAILS</strong>
        </Typography>
        <Typography variant="body2">
          To get Started, you need to give us few details about yourself.
        </Typography>
        <Grid container>
          <Grid item xs={12} sm={3} md={2} lg={2} mb={1}>
            <Box className={classes.smScreen}>
              <Typography variant="body2">
                <strong>Title</strong>
              </Typography>
              <Box>
                <input
                  type="file"
                  className={classes.image}
                  onChange={handleImage}
                />
              </Box>
              <Box className={classes.miniText}>
                <Typography variant="caption">
                  Please note your profile picture will not be displayed to the
                  public.
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={8} md={7} lg={6} spacing={2}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={5}>
                <Box mb={1.5}>
                  <Typography variant="body1">Title</Typography>
                  <Select
                    defaultValue={title}
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                    border
                  >
                    <MenuItem value="Mr">Mr</MenuItem>
                    <MenuItem value="Mrs">Mrs</MenuItem>
                    <MenuItem value="Miss">Miss</MenuItem>
                    <MenuItem value="Ms">Ms</MenuItem>
                    <MenuItem value="Dr">Dr</MenuItem>
                  </Select>
                </Box>
              </Grid>
            </Grid>

            <Typography variant="body1">Name</Typography>
            <Grid container spacing={3}>
              <Grid item xs={10} sm={5}>
                <TextField
                  variant="outlined"
                  fullWidth
                  id="firstName"
                  name="firstName"
                  placeholder="FirstName"
                  // defaultValue={User_FirstName}
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={2} sm={2}></Grid>
              <Grid item xs={10} sm={5}>
                <TextField
                  variant="outlined"
                  fullWidth
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                  // defaultValue={User_LastName}
                  value={lastName}
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                />
              </Grid>
            </Grid>

            <Typography variant="body1">Contact</Typography>
            <Grid container spacing={3}>
              <Grid item xs={10} sm={5}>
                <TextField
                  variant="outlined"
                  fullWidth
                  id="email"
                  name="email"
                  placeholder="Email address"
                  // defaultValue={email}
                  value={email}
                  onChange={(e)=>{setEmail(e.target.value)}}
                  // style={{ background: "#f2f2f2" }}
                />
              </Grid>
              <Grid item xs={2} sm={2}></Grid>
              <Grid item xs={10} sm={5}>
                <TextField
                  variant="outlined"
                  fullWidth
                  id="contact"
                  name="contact"
                  type={"number"}
                  placeholder="Phone number"
                  defaultValue={contact}
                  onChange={(e) => {
                    setContact(e.target.value);
                  }}
                />
              </Grid>
            </Grid>
            <Box className={classes.btn}>
              <Button variant="contained" className={classes.normalButton}>
                Cancel
              </Button>
              <Button
                className={classes_g.greenButton}
                variant="contained"
                onClick={handle}
              >
                Save
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <ConfirmDialogBox
        open={isCancelOpen}
        toggleDialog={toggleCancelOpen}
        title={"Your Profile Details have been saved"}
      />
    </Box>
  );
};

export default Details;
