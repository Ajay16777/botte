/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useCallback } from "react";
import { Box, Typography, Button } from "@material-ui/core";
import styles from "../DashboardStyles";
import useCommonStyles from "styles/commonStyles";
import postIcon from "assets/post.svg";
import { db, auth } from "../../../Firebse/firebase";
import { query, collection, onSnapshot, where } from "firebase/firestore";
import box from "assets/box.png";
import bag from "assets/bag.png";
//import tostify
import { toast } from "react-toastify";
const AllPosts = ({ validateStep }) => {
  const classes = styles();
  const classes_g = useCommonStyles();
  const [deliveryRequests, setDeliveryRequests] = useState([]);
  const [courierRequests, setCourierRequests] = useState([]);
  const [allRequests, setAllRequests] = useState([]);

  const [check, setCheck] = useState(false);
  const user = auth.currentUser;


  const fetchPost = async (request) => {
    //if request is delivery request
    if (request === "delivery") {
      //get the post from firebase whre isDeliveryRequest is true and user id is equal to current user id
      const q = query(
        collection(db, "posts"),
        where("isDeliveryRequest", "==", true),
        where("uid", "==", user.uid)
      );

      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const docs = [];
        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
        });
        setDeliveryRequests(docs);
      });
      return unsubscribe;
    } else if (request === "courier") {
      //get the post from firebase whre isDeliveryRequest is false
      const q = query(
        collection(db, "posts"),
        where("isDeliveryRequest", "==", false),
        where("uid", "==", user.uid)
      );
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const docs = [];
        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
        });
        setCourierRequests(docs);
      });
      return unsubscribe;
    } else {
      //get all the posts
      const q = query(collection(db, "posts"), where("uid", "==", user.uid));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const docs = [];
        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
        });
        setAllRequests(docs);
      });
      return unsubscribe;
    }
  };
  // fix the memory leak issue in the useEffect
  useEffect(() => {
    let deliveryRequests = fetchPost("delivery" );
    let courierRequests = fetchPost("courier");
    let allRequests = fetchPost("all");
    return () => {
      deliveryRequests();
      courierRequests();
      allRequests();
    };
   
  }, []);

  const handleEditRequest = () => {
    console.log("edit request");
  };
  const handleDeleteRequest = (id) => {
    console.log("id", id);
  };

  const handleStartPosting = async() => {
    console.log(user);
    //if user dont have phone number then toast error
    if (user.phoneNumber === null) {
      toast.error("Please Update your Profile");
    } else {
   
    validateStep();
    }
  };
  // firebase get data
  const User_Name = auth.currentUser.displayName;

  return (
    <div className={classes.postRoot}>
      <Box className={classes.info}>
        <Typography variant="body1">
          <b>Hi</b> {User_Name}
        </Typography>
        <Typography variant="body1">
          You have {allRequests.length} in the dashboard
        </Typography>
      </Box>
      {allRequests?.length === 0 ? (
        <>
          <Box className={classes.zeroPost}>
            <Typography variant="body1">
              Do you have Something to Post ?
            </Typography>
            <img src={postIcon} alt="postIcon" style={{ height: "140px" }} />
            <Button
              disabled={check}
              className={classes_g.greenButton}
              onClick={handleStartPosting}
            >
              Start Posting
            </Button>
            {check && (
              <Typography variant="body1">
                Please complete your profile first
              </Typography>
            )}
          </Box>
        </>
      ) : (
        <>
          <Box mt={1}>
            <Typography variant="body1" style={{ color: "#619D61" }}>
              POST A NEW REQUEST
            </Typography>
            <Box className={classes.greenBox} mt={0.5}>
              <Typography variant="body2">
                As a Courier Traveller or Delivery Requests
              </Typography>
              <Button
                // disabled={check}
                variant="contained"
                className={classes_g.greenButton}
                onClick={handleStartPosting}
              >
                Start Posting
              </Button>
            </Box>
          </Box>
          <Box mt={3}>
            <Typography variant="body1">
              Manage My DeliveryRequest Posts
            </Typography>
            {deliveryRequests &&
              deliveryRequests.map((request,index) => (
                <Box className={classes.grayBox} key={index}>
                  <Box className={classes.flexb}>
                    <img src={box} alt="box" style={{ height: "5vh" }} />
                    <Typography variant="body2">
                      {request?.description.slice(0, 20)} &nbsp;
                      <b>from</b>&nbsp;
                      {request.from.name}&nbsp;
                      <b>to</b>&nbsp;
                      {request.tcity.name}
                    </Typography>
                  </Box>
                  <Box>
                    <Button
                      variant="standard"
                      //on click pop up edit form
                    >
                      Edit
                    </Button>
                    <Button
                      variant="standard"
                      //on click pop up delete form
                    >
                      Delete
                    </Button>
                  </Box>
                </Box>
              ))}
          </Box>
          <Box>
            <Typography variant="body1">
              Manage My CourierRequest ADS
            </Typography>
            {courierRequests &&
              courierRequests.map((courier,index) => (
                <>
                  <Box className={classes.grayBox} key={index}>
                    <Box className={classes.flexb}>
                      <img src={bag} alt="bag" style={{ height: "5vh" }} />
                      <Typography variant="body2">
                        {courier?.description.slice(0, 20)} &nbsp;
                        <b>from</b>&nbsp;
                        {courier.from.name}&nbsp;
                        <b>to</b>&nbsp;
                        {courier.tcity.name}
                      </Typography>
                    </Box>
                    <Box>
                      <Button
                        variant="standard"
                        onClick={() => handleEditRequest()}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="standard"
                        onClick={() => handleDeleteRequest()}
                      >
                        Delete
                      </Button>
                    </Box>
                  </Box>
                </>
              ))}
          </Box>
        </>
      )}
    </div>
  );
};

export default AllPosts;
