import React from "react";
import purple from "assets/purplebg.png";
import { Card, Box, Typography, Grid,Button } from "@material-ui/core";
// import LocationOnIcon from '@mui/icons-material/LocationOn';
import "./transaction.css";
 
const data = [
    {
        id: 1,
        name: "1. Meet at the Safe Location",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id: 2,
        name: "2. Review item to send",

        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id: 3,
        name: "3.Identification",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id: 4,
        name: "4.Agree on Price",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
];



const Transaction = () => {
  return (
    <div
      style={{
        backgroundColor: "rgb(238 232 232)",
        minHeight: "100vh",
      }}
    >
      <img
        src={purple}
        alt="orange"
        style={{
          width: "100vw",
          height: "20%",
          minHeight: 200,
          marginTop: "-2px",
        }}
      />
      <Typography variant="h4" className="textCenter">
        Great you are final ready to transact. Ensure you follow the checklist 1
        to 4 for your transaction to go smoothly and securely.
      </Typography>
      {/* card to show the data */}
      {/* <CardActionArea> */}
      <Box lg={4} className="cardBox">
          
        <Grid container spacing={2}>
        {data.map((data,index) => (
            <Grid key={index} item lg={6}>
        <Card  className="cardMui"  >
        
            <Typography variant="h5" className="textHead" style={{textDecoration:"underline",marginTop:"10px"}}>
              {data.name}
            </Typography>
            <Box>
            <p>
                {data.text}
            </p>
            </Box>
        </Card>
        </Grid>
        ))}
        </Grid>
    </Box>
    <Box className="buttonBox">
        <Button>Cancel</Button>
        <Button style={{backgroundColor:'green',color:'#fff'}}>Submit</Button>
    </Box>

      {/* </CardActionArea> */}
      </div>
  );
};

export default Transaction;

// element.style {
//     /* position: relative; */
//     display: flex;
//     justify-content: flex-end;
//     /* flex-direction: row; */
//     margin: auto;
//     margin-left: 90%;
//     mar: #8da4f1;
//     background-color: #fff;
//     border-radius: 50%;
//     font-size: 3rem;
//     maring-bottom: 17rem;