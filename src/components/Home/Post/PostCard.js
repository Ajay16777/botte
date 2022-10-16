/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Paper,
  Divider,
  Card,
  CardActionArea,
  Grid,
} from "@material-ui/core";
import globalStyles from "styles/commonStyles";
import styles from "./CardStyles";

import { Link  } from 'react-router-dom';
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
// import { calculateCountdown } from 'utils/dateFunctions';
import { db } from "Firebse/firebase";
import { query, collection, onSnapshot } from "firebase/firestore";

const PostCard = (props) => {
  const classes = styles();
  const classes_g = globalStyles();
  const [post, setPost] = useState([]);

  const fetchPost = async () => {
    console.log("fetching post");
    const q = query(collection(db, "posts"));
    //get all the post from the database
    let posts = [];
    await onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // console.log("test", doc.data());
        posts.push({ ...doc.data(), id: doc.id });
      });
      setPost(posts);
    });
  };

  useEffect(() => {
    fetchPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {/* <Box lg={4} md={6} sm={12} xs={12}> */} 
      
        <Link
        to={`/posts/${props.id}`}
        color='inherit'
        underline='none'
       
      >

        <Grid
          item
          style={{
            marginBottom: "2rem",
            gap: "30px",
            display: "flex",
            flexDirection: "row",
            marginTop: "2rem",
          }}
        >
          {/* {post &&
            post.map((data) => ( */}
              <CardActionArea>
                <Card className={classes.root}>
                  <Box className={classes_g.flexs}>
                    <Typography variant="body2" className={classes.body2}>
                      {/* {new Date(post.deliveryDate).toDateString()} */}
                      In {props.date}
                      {/* {console.log(props)} */}
                    </Typography>
                    {props.urgent && props.urgent === "high" && (
                      <Paper className={classes.paper}>{props.urgent}</Paper>
                     )} 
                  </Box>
                  <Box
                    m={1}
                    style={{
                      padding: "0px 5px 1px 5px",
                    }}
                  >
                    <Box>
                      <Box className={classes.textBox}>
                        <Typography
                          variant="caption"
                          style={{
                            color: "#292929",
                            overflowWrap: "break-word",
                          }}
                        >
                          {/* {data.description.slice(0, 100)} */}
                          {/* thi si sthe test */}
                          {props.description.slice(0, 100)}
                        </Typography>
                      </Box>
                      <Box
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "start",
                          columnGap: 15,
                        }}
                        mb={1}
                      >
                        <Paper className={classes.paper2}>
                          <Typography variant="caption">
                            {/* {data.from.name} */}
                            {props.from}
                          </Typography>
                        </Paper>
                        <Typography
                          style={{ color: "#5CBCC9", fontSize: "35px" }}
                        >
                          -
                        </Typography>
                        <Paper className={classes.paper2}>
                          <Typography variant="caption">
                            {/* {data.tcity.name} */}
                            {props.to}
                          </Typography>
                        </Paper>
                        <ArrowForwardIosSharpIcon
                          style={{
                            color: "#5CBCC9",
                            fontSize: "20px",
                          }}
                        />
                      </Box>
                      <Divider />
                    </Box>
                    <Box className={classes.cardBottom} mt={0.5}>
                      {/* <Box>
                  <Typography variant='caption'>
                    Product Category
                  </Typography>
                  <Typography
                    variant='h6'
                    style={{ fontWeight: 'bold' }}
                  >
                    {post?.categories[0].name}
                  </Typography>
                </Box> */}
                      <Box>
                        <Typography
                          variant="caption"
                          style={{
                            color: "#292929",
                          }}
                        >
                          Weight
                        </Typography>
                        {/* {post.isDeliveryRequest ? ( */}
                        <Typography variant="h6" style={{ fontWeight: "bold" }}>
                          {/* {data.weight} */}
                          {props.weight} Kg
                        </Typography>
                        {/* ) : ( */}
                        <Typography variant="h6" style={{ fontWeight: "bold" }}>
                          {/* {post.weightFrom} - {post.weightTo} kg */}
                        </Typography>
                        {/* )} */}
                      </Box>
                      <Box>
                        <Typography
                          variant="caption"
                          style={{
                            color: "#292929",
                          }}
                        >
                          Payment
                        </Typography>
                        <Typography variant="h6" style={{ fontWeight: "bold" }}>
                          {/* ${post.amountFrom} */}
                          {props.amount}usd
                          {/* {post.amountTo} */}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Card>
              </CardActionArea>
            {/* ))} */}
        </Grid>
      {/* </Box> */}
      </Link>
    </>
  );
};

export default PostCard;
