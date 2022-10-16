/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Box, Grid, Typography, Tab, Tabs } from "@material-ui/core";
import PropTypes from "prop-types";
import Banner from "./Banner";
import cardImage from "assets/cardImage.png";
import globalStyles from "styles/commonStyles";
import styles from "styles/HomeStyles";
import ConnectShare from "./ConnectShare";
import Search from "components/common/Search/Search";
import PostCard from "./Post/PostCard";
import { db } from "Firebse/firebase";
import { query, collection, onSnapshot, where } from "firebase/firestore";
import { calculateCountdown } from "utils/dateFunctions";
import { useSelector } from "react-redux";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Home = (props) => {
  const classes = styles();
  const classes_g = globalStyles();
  const [value, setValue] = useState(0);

  const [deliveryRequests, setDeliveryRequests] = useState([]);
  const [courierRequests, setCourierRequests] = useState([]);
  const [cSearch, setCSearch] = useState("");
  const [dSearch, setDSearch] = useState("");
  // get the search data from the local storage and set to the search state

  const fetchPost = async (request) => {
    console.log("fetching posts is called");
    //if request is delivery request
    if (request === "delivery") {
      //get the post from firebase whre isDeliveryRequest is true
      const q = query(
        collection(db, "posts"),
        where("isDeliveryRequest", "==", true)
      );
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const docs = [];
        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
        });
        setDeliveryRequests(docs);
      });
      return unsubscribe;
    } else {
      //get the post from firebase whre isDeliveryRequest is false
      const q = query(
        collection(db, "posts"),
        where("isDeliveryRequest", "==", false)
      );
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const docs = [];
        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
        });
        setCourierRequests(docs);
      });
      return unsubscribe;
    }
  };

  useEffect(() => {
    let deliveryRequests = fetchPost("delivery");
    let courierRequests = fetchPost("courier");
    return () => {
      deliveryRequests();
      courierRequests();
    };
  }, []);

  const handleChange = (event, newValue) => {
    // console.log('VALue', newValue);
    setValue(newValue);
  };

  const getData = (data) => {
    console.log("data", data);
    if (data) {
      setCSearch(data);
      console.log("cSearch", cSearch);
      setDSearch(data);
      console.log("dSearch", dSearch);
    } else {
      setCSearch("");
      setDSearch("");
    }
  };

  return (
    <div>
      <Box className={classes.body1}>
        <Box
          style={{
            backgroundColor: "rgb(253, 247, 242)",
            Path: "polygon(100% 0px, 100% 100%, 50% 90%, 0px 100%, 0px 0px)",
            paddingBottom: 300,
          }}
        >
          <Banner />
          <Box className={classes.body}>
            <Box
              sx={{
                borderBottom: 1,
                borderColor: "divider",
                padding: 0,
              }}
            >
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
                // indicatorColor=''
              >
                <Tab label="Delivery Requests" {...a11yProps(0)} />
                <Tab label="Courier Traveller" {...a11yProps(1)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <Search getData={getData} />
              <div style={{ display: "flex", gap: "20px" }}>
                {/* if search is not in the local storage */}
                {!dSearch ? (
                  //  <>
                  <Grid
                    container
                    spacing={2}
                    style={{ marginTop: "1rem", gap: "20px" }}
                  >
                    {deliveryRequests &&
                      deliveryRequests.map((post) => (
                        <PostCard
                          id={post.id}
                          description={post.description}
                          to={post.to.name}
                          from={post.from.name}
                          weight={post.weight}
                          amount={post.amount}
                          date={post.deliveryDate}
                          urgent={post.urgent}
                        />
                      ))}
                  </Grid>
                ) : (
                  // </>
                  <>
                    <Grid
                      container
                      spacing={2}
                      style={{ marginTop: "1rem", gap: "20px" }}
                    >
                      {dSearch &&
                        dSearch.map((post) => (
                          <PostCard
                            // deliveryRequests={deliveryRequests}
                            id={post.id}
                            description={post.description}
                            to={post.to.name}
                            from={post.from.name}
                            weight={post.weight}
                            amount={post.amount}
                            date={post.deliveryDate}
                            urgent={post.urgent}
                          />
                        ))}
                    </Grid>
                  </>
                )}
              </div>
            </TabPanel>
            <TabPanel value={value} index={1} style={{ color: "#111111" }}>
              <Search getData={getData} /> t
              <div style={{ display: "flex", gap: "20px" }}>
                {/* if search is not in the local storage */}
                {!cSearch ? (
                  //  <>
                  <Grid
                    container
                    spacing={2}
                    style={{ marginTop: "1rem", gap: "20px" }}
                  >
                    {courierRequests &&
                      courierRequests.map((post) => (
                        <PostCard
                          id={post.id}
                          description={post.description}
                          to={post.to.name}
                          from={post.from.name}
                          weight={post.weight}
                          amount={post.amount}
                          date={post.deliveryDate}
                          urgent={post.urgent}
                        />
                      ))}
                  </Grid>
                ) : (
                  // </>
                  <>
                    <Grid
                      container
                      spacing={2}
                      style={{ marginTop: "1rem", gap: "20px" }}
                    >
                      {cSearch &&
                        cSearch.map((post) => (
                          <PostCard
                            // deliveryRequests={deliveryRequests}
                            id={post.id}
                            description={post.description}
                            to={post.to.name}
                            from={post.from.name}
                            weight={post.weight}
                            amount={post.amount}
                            date={post.deliveryDate}
                            urgent={post.urgent}
                          />
                        ))}
                    </Grid>
                  </>
                )}
              </div>
            </TabPanel>

            <Box mt={5} p={3}>
              <Grid container spacing={5} className={classes.staticContainer}>
                <Grid item xs={12} sm={6} md={4}>
                  <Box>
                    <img
                      src={cardImage}
                      alt="cardImage"
                      className={classes.packImage}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Typography variant="body1" className={classes.typo}>
                    QUICK AND HASSLE FREE
                  </Typography>
                  <Typography variant="body2" className={classes.typo2}>
                    If you don’t have the time to go shopping, need an extra
                    ingredient or simply want to relax then we can help. Order
                    online and we’ll deliver your grocery shopping to your
                    doorstep in under two hours. Our home delivery service is
                    simple, convenient and only requires a minimum order of £15.
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Typography variant="body1" className={classes.typo}>
                    COST EFFECTIVE OPTION
                  </Typography>
                  <Typography variant="body2">
                    At BOTTE, our pride is in providing exceptional value for
                    money. We go the extra mile to offer a fast delivery option
                    at unbeatable prices - why pay more? Our peer-to-peer
                    approach presents cost savings which we split between
                    courier and sender to ensure everyone is happy at the
                    completion of each journey.
                  </Typography>
                </Grid>
                <Grid container style={{ padding: "0rem 1rem" }}>
                  <Grid item xs={12} sm={6} md={4}></Grid>
                  <Grid xs={12} sm={6} md={4}>
                    <Box>
                      <Typography variant="body1" className={classes.typo}>
                        SECURE TRACKING AND PERSONALISED SERVICE
                      </Typography>
                      <Typography variant="body2">
                        Know the location of your package while at no extra
                        cost. Experience true human touch when your queries are
                        resolved. Also, interface directly with a community of
                        travelers to get the latest travel advice for your
                        destination.
                      </Typography>
                    </Box>
                  </Grid>
                  {/* <Grid item xs={12} sm={6} md={4}></Grid> */}
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Box>
      <ConnectShare />
    </div>
  );
};

export default Home;
