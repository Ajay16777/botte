/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Box, Typography, Button, TextField, Select } from "@material-ui/core";
import clsx from "clsx";
import globalStyles from "styles/commonStyles";
import useManyInputs from "../../hooks/useManyInputs";
import styles from "./SearchStyles";
import { useLocation, useNavigate } from "react-router-dom";
import { Country, City } from "country-state-city";
import { db, auth } from "../../../Firebse/firebase";
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  where,
} from "firebase/firestore";
// import { array } from 'yup/lib/locale';
import PostCard from "components/Home/Post/PostCard";

const Type = [
  "All",
  "Books",
  "Electronic/electrical devices",
  "Clothing",
  "Jewelry/Ornaments",
  "Perfumes/fashion accessories",
  "Dried/canned food",
  "keys/utensils",
  "cosmetics",
];

const Weight = [
  "0-1",
  "1-2",
  "2-3",
  "3-4",
  "4-5",
  "5-6",
  "6-7",
  "7-8",
  "8-9",
  "9-10",
  "0-10",
];

export default function Search(props) {
  const classes = styles();
  // const classes_g = globalStyles();
  const [fcountry, setFCountry] = useState([]);
  const [tcountry, setTCountry] = useState([]);
  const [date, setDate] = useState();
  const [category, setCategory] = useState();
  const [weight, setWeight] = useState();
  const [submitForm, setSubmitForm] = useState();
  // const [search, setSearch] = useState();
  const Name = [
    "NIGERIA",


"UK",


 "BANGLADESH",

"INDIA",

"SPAIN",


"KENYA",


"ROMANIA",


"PHILIPPINES"
  ]

  const getAllCountries = () => {
    const allCountries = Country.getAllCountries();
    return allCountries.map((country) => {
      return { name: country.name, code: country.isoCode };
    });
  };
 
  const initialState = {
    from: fcountry,
    to: tcountry,
    deliveryDate: date,
    packageType: category,
    weightLimit: weight,
  };

  const [inputState, handleTxtChange, , changeInput, , setInputstate] =
    useManyInputs(initialState);

    
  useEffect(() => {
    // console.log('STATE', inputState);
  }, [inputState]);
// const handleSearch = (e) => {
//   e.preventDefault();
//   let data = {
//         from: fcountry,
//         to: tcountry,
//         deliveryDate: date,
//         packageType: category,
//         weightLimit: weight,
//       };
//       props.getData(data);
//       // console.log(data);
//     };

  const handleSearch = (e) => {
    e.preventDefault();
    let data = {
      from: fcountry,
      to: tcountry,
      deliveryDate: date,
      packageType: category,
      weightLimit: weight,
    };
    console.log(data,"states check");

    let searchweight = weight.split("-");
    let weight1 = searchweight[0];
    let weight2 = searchweight[1];

    // convert weight 1 and 2 to number
    weight1 = parseInt(weight1);
    weight2 = parseInt(weight2);

    if (category === "All") {
      // console.log("All");
      const q = query(
        collection(db, "posts"),
        where("from.name", "==", fcountry),
        where("to.name", "==", tcountry),
        where("deliveryDate", "==", date),
        where("weight", ">=", weight1),
        where("weight", "<=", weight2)
      );
      onSnapshot(q, (querySnapshot) => {
        const data = [];
        querySnapshot.forEach((doc) => {
          // console.log("doc", doc.data());
          data.push({ ...doc.data(), id: doc.id });
        });
        // console.log("data search function", data);
        // console.log("q", q);
        props.getData(data);

        // localStorage.setItem("search", JSON.stringify(data));
        // setSearch(data);
      });
    } else {
      let searchCat = { name: category };

      const q = query(
        collection(db, "posts"),
        where("from.name", "==", fcountry),
        where("to.name", "==", tcountry),
        where("deliveryDate", "==", date),
        where("categories", "array-contains", searchCat),
        where("weight", ">=", weight1),
        where("weight", "<=", weight2)
      );
      onSnapshot(q, (querySnapshot) => {
        const data = [];
        querySnapshot.forEach((doc) => {
          console.log("doc", doc.data());
          data.push({ ...doc.data(), id: doc.id });
        });
        // console.log("data search function", data);
        // console.log("q", q);
        //save data in local storage by key search
        // localStorage.setItem("search", JSON.stringify(data));
        props.getData(data);
        // setSearch(data);

      });
    }
  };

 

  return (
    <>
      <form onSubmit={submitForm}>
        <Box className={clsx(classes.container)}>
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <Typography variant="body2" className={classes.typo}>
              Search Delivery Request from Sender
            </Typography>
            <Box
              className={classes.flexs}
              style={{
                rowGap: 10,
              }}
            >
              <TextField
                id="from"
                select
                type="search"
                placeholder="From"
                name="from"
                value={fcountry}
                onChange={(e) => setFCountry(e.target.value)}
                SelectProps={{
                  native: true,
                }}
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                }}
              >
                <option value="select">Select</option>
                {getAllCountries().map((country) => (
                  <option value={country.name}>{country.name}</option>
                ))}
              </TextField>
              <TextField
                id="to"
                select
                name="to"
                placeholder="To"
                value={tcountry}
                onChange={(e) => setTCountry(e.target.value)}
                SelectProps={{
                  native: true,
                }}
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                }}
              >
                <option value="select">Select</option>
                {getAllCountries().map((country) => (
                  <option value={country.name}>{country.name}</option>
                ))}

                {/* {countries.map((option, index) => (
                  <option key={index} value={option}>
                    {option === 'UK'
                      ? countries.filter((el) => el.name !== 'UK')
                      : [{ name: 'UK' }]}
                  </option>
                ))} */}
              </TextField>
              <TextField
                id="Delivery Date"
                type="date"
                placeholder="Delivery Date"
                name="deliveryDate"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                }}
              />
              <TextField
                id="packageType"
                select
                placeholder="Package Type"
                name="packageType"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                SelectProps={{
                  native: true,
                }}
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                }}
              >
                {Type.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </TextField>
              <TextField
                id="weightLimit"
                select
                placeholder="WeightLimit"
                name="weightLimit"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                SelectProps={{
                  native: true,
                }}
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                }}
              >
                {Weight.map((option, index) => (
                  <option key={index} value={option}>
                    {option} kg
                  </option>
                ))}
              </TextField>
              <Button
                variant="contained"
                size="medium"
                className={classes.greenButton}
                onClick={handleSearch}
              >
                Search
              </Button>
              {/* {search && search.map((post) => (
             <PostCard 
            //  deliveryRequests={deliveryRequests}
             id={post.id}
             description={post.description}
             to={post.to.name}
             from={post.from.name}
             weight={post.weight}
             amount={post.amount}
             date={post.deliveryDate}
             urgent={post.urgent}
             />
            ))} */}
            </Box>
          </Box>
        </Box>
      </form>
    </>
  );
}
