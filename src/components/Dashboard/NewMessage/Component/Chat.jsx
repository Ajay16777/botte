import React from "react";
import Box from "@mui/material/Box";
// import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Radio, RadioGroup, FormControlLabel } from "@mui/material";
import Messages from "./Messages";
import Input from "./Input";
import { auth } from "Firebse/firebase";
import { Button, FormControl, TextField } from "@material-ui/core";
import { Link } from "react-router-dom";


const Chat = () => {
  const style = {
    modal: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: 400,
      bgcolor: "background.paper",
      border: "2px solid #000",
      boxShadow: 24,
      p: 4,
    },

    button: {
      backgroundColor: "green",
      color: "white",
      marginTop:'10px',
    },
  };
  //   const { data } = useContext(ChatContext);
  const chatReciever = auth.currentUser.displayName;
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value === "") {
      alert("Please select the checkbox");
    }
    console.log(value);
  };



  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{chatReciever}</span>
        {/* <span>hello this is the shit</span> */}
        <div>
          <button
            style={{
              backgroundColor: "#ff7570",
              border: "none",
              padding: "12px",
            }}
            onClick={() => {
              // alert('msg deleted');
              handleOpen();
            }}
          >
            Initiate Transcation
          </button>
        </div>
        {/* <div className="chatIcons">
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div> */}
      </div>
      <Messages />
      <Input />

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style.modal} onClose>
          {value === "" &&
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Yes i have read the safety guidance and would like to proceed
          </Typography>}
          {value === "true" &&
          <Typography id="modal-modal-title" variant="h6" component="h2">
           Enter the amount you both agreed upon
          </Typography>}
          <FormControl>
            {value==="" &&
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            >
              <FormControlLabel
                value="true"
                control={<Radio />}
                label="Proceed"
              />
            </RadioGroup>}
            {value==="true" && 
            <TextField
              id="outlined-basic"
              label="Enter Amount"
              variant="outlined"
              type="number"
            />}
            
            <Button style={style.button} onClick={handleSubmit}>
              <Link to="/transaction">Proceed</Link>
              
            </Button>
          </FormControl>
        </Box>
      </Modal>
    </div>
  );
};

export default Chat;
