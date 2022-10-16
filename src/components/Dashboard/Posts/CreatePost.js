/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import {
  TextField,
  Button,
  Box,
  FormControlLabel,
  Grid,
  Typography,
  FormControl,
  RadioGroup,
  Radio,
  Checkbox,
  CircularProgress,
} from "@material-ui/core";
import { PostData } from "../../../Firebse/firebase";
import * as yup from "yup";
import Slider from "@material-ui/core/Slider";
import { withStyles } from "@material-ui/core/styles";
import styles from "./PostStyles";
// import ConfirmDialogBox from '../../../Dialogs/ConfirmDialogBox';
import UseToggle from "../../hooks/useToggleInput";
import useStyles from "styles/commonStyles";
import { AutoComplete } from "components/common/FormikTextFields";
import { useNavigate } from "react-router-dom";
import { Country, State, City }  from 'country-state-city';
// console.log(Country.getAllCountries())
// console.log(State.getAllCities(),"stste")

const PrettoSlider = withStyles({
  root: {
    height: 8,
  },
  thumb: {
    height: 24,
    width: 40,
    backgroundColor: "#4F4E4D",
    borderRadius: "12px",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 5,
    borderRadius: 4,
  },
})(Slider);

const currencies = [
  {
    name: "1cm",
    value: 1,
  },
  {
    name: "2cm",
    value: 2,
  },
  {
    name: "3cm",
    value: 3,
  },
  {
    name: "4cm",
    value: 4,
  },
  {
    name: "5cm",
    value: 5,
  },
  {
    name: "6cm",
    value: 6,
  },
  {
    name: "7cm",
    value: 7,
  },
  {
    name: "8cm",
    value: 8,
  },
  {
    name: "9cm",
    value: 9,
  },
  {
    name: "10cm",
    value: 10,
  },
];

const countries = [
  { name: "Bangladesh" },
  { name: "India" },
  { name: "Kenya" },
  { name: "Nigeria" },
  { name: "Philippines" },
  { name: "Romania" },
  { name: "Spain" },
  { name: "UK" },
];
const cities = [
  { name: "Dhaka" },
  { name: "Chittagong" },
  { name: "Khulna" },
  { name: "mumbai" },
  { name: "Chennai" },
  { name: "Kolkata" },
  { name: "Delhi" },
  { name: "Nicosia" },
  { name: "Tripoli" },
  { name: "Rome" },
  { name: "Berlin" },
  { name: "London" },
  { name: "Paris" },
  { name: "Madrid" },
  { name: "Amsterdam" },
  { name: "Oslo" },
];
const categories = [
  { name: "Clothing" },
  { name: "Electronics" },
  { name: "Furniture" },
  { name: "Books" },
  { name: "Sports" },
];








const CreatePost = ({ handleBack, validateStep, isDeliveryRequest, id }) => {
  const classes = styles();
  const classes_g = useStyles();
  // const navigate = useNavigate();
  // const [isCancelOpen, toggleCancelOpen] = UseToggle(false);
  const [disable, setDisable] = useState(false);

  // make a function to get all countries
const getAllCountries = () => {
  const allCountries = Country.getAllCountries();
  return allCountries.map((country) => {
    return { name: country.name, code: country.isoCode };
  });
};
//get all cities of a country via country code
const getAllCities = (isoCode) => {
  const allCities = City.getCitiesOfCountry(isoCode);
  return allCities.map((city) => {
    return { name: city.name };
  }
  );

};


  const validationSchema = yup.object({
    from: yup
      .object({
        name: yup.string("Must Choose Title"),
      })
      .required("Title required"),
    to: yup
      .object({
        name: yup.string("Destination must have a title of type String"),
      })
      .required("location required"),
    fromCity: yup
      .object({
        name: yup.string("Must Choose City"),
      })
      .required("From city required"),
    toCity: yup
      .object({
        name: yup.string("Must Choose City"),
      })
      .required("To city required"),
    description: yup
      .string("Enter your description")
      .min(20)
      .required("description  required"),
    categories: yup.array().min(1).required("categories required"),
    weight: yup.number(),
    length: yup
      .object({
        value: yup.number("length must have a title of type Number"),
      })
      .required("required"),
    breadth: yup
      .object({
        value: yup.number("breadth must have a title of type Number"),
      })
      .required("required"),
    height: yup
      .object({
        value: yup.number("height must have a title of type Number"),
      })
      .required("required"),
    urgent: yup.string("Enter your priority"),
    deliveryDate: yup
      .date()
      .required("date isrequired")
      .min(new Date(), "Please choose future date"),
    amount: yup.number().required("amount required"),
    negotiate: yup.bool().required("required"),
  });

  const formik = useFormik({
    initialValues: {
      isDeliveryRequest: isDeliveryRequest,
      from: "",
      to: "",
      fromCity: "",
      toCity: "",
      description: "",
      categories: [],
      weight: 0,
      length: 0,
      breadth: 0,
      height: 0,
      urgent: "",
      deliveryDate: new Date(),
      amount: [0, 5],
      weights: [0.5, 1],
      negotiate: false,
    },
    validationSchema: validationSchema,

    validateOnChange: true, //*  validate the field onChange
    validateOnBlur: false, //*  will give the accurate error

    onSubmit: (values) => {
      formik.setSubmitting(true);
      console.log(values);
      setTimeout(() => {
        formik.resetForm();
      }, 1000);
    },
  });



  const handleFormikChange = (e) => {
    formik.handleChange(e);
    formik.handleBlur(e);
  };

  const handleAutoCompleteChange = (e, value, key) => {
    formik.setFieldValue(key, value);
    formik.handleBlur(e);
  };

  const handleWeightChange = (e, value) => {
    formik.setFieldValue("weight", value);
    formik.handleBlur(e);
  };

  const handleamountChange = (e, value) => {
    formik.setFieldValue("amount", value);
    formik.handleBlur(e);
  };

  const handleWeightsChange = (e, value) => {
    formik.setFieldValue("weights", value);
    formik.handleBlur(e);
  };

  const handleCheckBoxChange = (e) => {
    formik.setFieldValue(e.target.name, e.target.checked);
    formik.handleBlur(e);
  };
  const handleSubmit = (e) => {
    PostData(formik.values);
    console.log("hello this is the post function");
  };
console.log(formik.values, "values")
  // const data = ()=>{
  //   PostData(formik.values)
  // };

  const handleCancel = (e) => {
    // toggleCancelOpen();
    console.log("cancel post");
  };

  const getMuiDateFormat = (givenDate) => {
    let dateNow;
    if (givenDate) {
      dateNow = new Date(givenDate);
    } else {
      dateNow = new Date();
    }
    const year = dateNow.getFullYear(); // * Getting current year from the created Date object
    const monthWithOffset = dateNow.getUTCMonth() + 1; // * January is 0 by default in JS. Offsetting +1 to fix date for calendar.
    const month = // * Setting current Month number from current Date object
      monthWithOffset.toString().length < 2 // * Checking if month is < 10 and pre-prending 0 to adjust for date input.
        ? `0${monthWithOffset}`
        : monthWithOffset;

    const date =
      dateNow.getUTCDate().toString().length < 2 // * Checking if date is < 10 and pre-prending 0 if not to adjust for date input.
        ? `0${dateNow.getUTCDate()}`
        : dateNow.getUTCDate();

    return `${year}-${month}-${date}`; // * combining to format for defaultValue or value attribute of material <TextField>
  };

  console.log("form", formik.values.from.code);

  //   // useEffect(() => {
  //   //   console.log('formik', formik.values);
  //   //   console.log('formik', formik.errors);
  //   // }, [formik]);

  //   // const handleCancel = () => {
  //   //   navigate('/dashboard/Posts');
  //   // };

  //   const handleCancel = () => {
  //     handleBack();
  //     window.location.reload();
  //   };

  return (
    <Box mb={10}>
      <Box ml={1}>
        <Typography
          variant="body1"
          style={{
            color: "#3E3E3E",
            marginBlock: "1rem",
          }}
        >
          Please fill in your required information for your journey
        </Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid sm={12} md={6} lg={6} Item className={classes.body}>
          {/* <form onSubmit={formik.handleSubmit}> */}
          <form>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <Typography variant="body2">
                  {isDeliveryRequest ? "Pick up From:" : "Travelling From:"}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box>
                  <AutoComplete
                    options={getAllCountries()}
                    handleChange={handleAutoCompleteChange}
                    formik={formik}
                    objectValue="from"
                    placeholder="Country"
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box>
                  
                  <AutoComplete
                    options={getAllCities(formik.values.from.code)}
                    handleChange={handleAutoCompleteChange}
                    formik={formik}
                    objectValue="fromCity"
                    placeholder="City"
                  />
                </Box>
              </Grid>
            </Grid>
            {/* for Delivery */}
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <Typography variant="body2">
                  {isDeliveryRequest ? "Delivery To:" : "Travelling To:"}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box>
                  <AutoComplete
                    options={getAllCountries()}
                    handleChange={handleAutoCompleteChange}
                    formik={formik}
                    objectValue="to"
                    placeholder="Country"
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box>
                  <AutoComplete
                    options={getAllCities(formik.values.to.code)}
                    handleChange={handleAutoCompleteChange}
                    formik={formik}
                    objectValue="tcity"
                    placeholder="City"
                  />
                </Box>
              </Grid>
            </Grid>

            <Box>
              <Typography variant="body2">
                {isDeliveryRequest
                  ? "Provide iinformation about you request"
                  : "Provide relevant information you want to include"}
              </Typography>
              <TextField
                variant="outlined"
                fullWidth
                multiline
                minRows={3}
                // style={{minHeight}}
                id="description"
                name="description"
                placeholder="Enter description here"
                value={formik.values.description}
                onChange={handleFormikChange}
                error={
                  formik.touched.description &&
                  Boolean(formik.errors.description)
                }
                helperText={
                  formik.touched.description && formik.errors.description
                }
                onBlur={formik.handleBlur}
              />
            </Box>
            <Box>
              <Typography variant="body2">
                {isDeliveryRequest ? "Product Category:" : "Package Type"}
                {/* Package type */}
              </Typography>
              <AutoComplete
                multiple
                options={categories}
                isDisabled={disable}
                handleChange={handleAutoCompleteChange}
                formik={formik}
                objectValue="categories"
                placeholder={
                  isDeliveryRequest
                    ? "Select Category"
                    : "Select types of package you will carry"
                }
                renderCheckbox
                disableCloseOnSelect
              />
            </Box>
            {isDeliveryRequest ? (
              <Box mb={4}>
                <Typography variant="body2">
                  Weight{" "}
                  <Typography variant="caption">
                    &nbsp;(package adds up in multiple of 0.5kg)
                  </Typography>
                </Typography>
                <Box
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  {console.log(formik.values.weight)}
                  <PrettoSlider
                    valueLabelDisplay="auto"
                    aria-labelledby="discrete-slider"
                    value={formik.values.weight}
                    name="weight"
                    onChange={handleWeightChange}
                    defaultValue={0}
                    step={0.5}
                    min={0}
                    max={20}
                    style={{
                      height: 5,
                    }}
                    error={
                      formik.touched.weight && Boolean(formik.errors.weight)
                    }
                    helperText={formik.touched.weight && formik.errors.weight}
                    onBlur={formik.handleBlur}
                  />
                  <Box className={classes.smallBox}>
                    {formik.values.weight}kg
                  </Box>
                </Box>
              </Box>
            ) : (
              <>
                <Box>
                  <Typography variant="body2">
                    Allowable Weight
                    <Typography variant="caption">
                      &nbsp;(package adds up in multiple of 0.5kg)
                    </Typography>
                  </Typography>{" "}
                  <Box
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                    mt={2}
                  >
                    <Box className={classes.smallBox}>
                      {formik.values.weights[0]}kg
                    </Box>
                    <Box className={classes.smallBox}>
                      {formik.values.weights[1]}kg
                    </Box>
                  </Box>
                </Box>
                <Box
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    rowGap: 10,
                  }}
                >
                  <PrettoSlider
                    style={{ width: "100%" }}
                    value={formik.values.weights}
                    onChange={handleWeightsChange}
                    track="inverted"
                    valueLabelDisplay="auto"
                    aria-labelledby="range-slider"
                    defaultValue={[0, 5]}
                    step={0.5}
                    min={0}
                    max={20}
                  />
                </Box>
              </>
            )}
            <Typography variant="body2"> Dimensions(cm)</Typography>
            <Grid container spacing={1} className={classes.dimensions}>
              <Grid item xs={12} sm={4}>
                <Typography variant="body2">Length</Typography>
                <AutoComplete
                  options={currencies}
                  isDisabled={disable}
                  handleChange={handleAutoCompleteChange}
                  formik={formik}
                  objectValue="length"
                  placeholder="Length"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant="body2">Breath</Typography>
                <AutoComplete
                  options={currencies}
                  isDisabled={disable}
                  handleChange={handleAutoCompleteChange}
                  formik={formik}
                  objectValue="breadth"
                  placeholder="Breadth"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant="body2">Height</Typography>
                <AutoComplete
                  options={currencies}
                  isDisabled={disable}
                  handleChange={handleAutoCompleteChange}
                  formik={formik}
                  objectValue="height"
                  placeholder="Height"
                />
              </Grid>
            </Grid>
            {/* {isDeliveryRequest || (request?.isDeliveryRequest && ( */}
            {/* // (request?.isDeliveryRequest || ( */}
            <Box
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                columnGap: 5,
              }}
              mt={2}
            >
              {/* <Typography variant='body2'>Urgent:</Typography>
                  <Box
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      rowGap: 10,
                      marginTop: '0.7rem',
                    }}
                  >
                    <FormControl>
                      <RadioGroup
                        row
                        aria-labelledby='demo-radio-buttons-group-label'
                        defaultValue='female'
                        value={formik.values.urgent}
                        name='urgent'
                        onChange={handleFormikChange}
                        SelectProps={{
                          native: true,
                        }}
                        error={
                          formik.touched.urgent &&
                          Boolean(formik.errors.urgent)
                        }
                        helperText={
                          formik.touched.urgent &&
                          formik.errors.urgent
                        }
                        onBlur={formik.handleBlur}
                      >
                        <FormControlLabel
                          value='low'
                          control={<Radio />}
                          label='Low'
                          // onClick={handlePriceFilter}
                          data-filter={'Low'}
                        />
                        <FormControlLabel
                          value='medium'
                          control={<Radio />}
                          label='Medium'
                          // onClick={handlePriceFilter}
                          data-filter={'Medium'}
                          // onClick={popupState.close}
                        />
                        <FormControlLabel
                          value='high'
                          control={<Radio />}
                          label='High'
                          // onClick={handlePriceFilter}
                          data-filter={'High'}
                          // onClick={popupState.close}
                        />
                      </RadioGroup>
                    </FormControl>
                  </Box> */}
            </Box>
            {/* // ))} */}

            <Box
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                columnGap: 5,
              }}
              mt={3}
            >
              <Typography variant="body2">
                {isDeliveryRequest
                  ? "Desired Delivery date:"
                  : "Departure date:"}
              </Typography>

              <Box>
                {console.log(
                  "I was triggered during render",
                  formik.values.deliveryDate
                )}
                <TextField
                  variant="outlined"
                  fullWidth
                  type="date"
                  id="deliveryDate"
                  name="deliveryDate"
                  value={getMuiDateFormat(formik.values.deliveryDate)}
                  onChange={handleFormikChange}
                  error={
                    formik.touched.deliveryDate &&
                    Boolean(formik.errors.deliveryDate)
                  }
                  helperText={
                    formik.touched.deliveryDate && formik.errors.deliveryDate
                  }
                  onBlur={formik.handleBlur}
                />
              </Box>
            </Box>
            <Box>
              <Typography variant="body2">Price Range: </Typography>
              <Box
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
                mt={2}
              >
                <Box className={classes.smallBox}>
                  ${formik.values.amount[0]}
                </Box>
                <Box className={classes.smallBox}>
                  ${formik.values.amount[1]}
                </Box>
              </Box>
            </Box>

            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                rowGap: 10,
              }}
            >
              <PrettoSlider
                style={{ width: "100%" }}
                value={formik.values.amount}
                onChange={handleamountChange}
                track="inverted"
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                defaultValue={[0, 5]}
                step={5}
                min={5}
                max={100}
              />
            </Box>
            <Box mt={2}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formik.values.negotiate}
                    onChange={handleCheckBoxChange}
                    name="negotiate"
                  />
                }
                label="Open to negotiate"
              />
            </Box>
          </form>
          <Box
            style={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              columnGap: 20,
              marginTop: "1rem",
            }}
          >
            <Button
              variant="contained"
              style={{
                backgroundColor: "#fff",
                color: "#111",
                width: "8rem",
                borderRadius: "0px",
              }}
              onClick={handleCancel}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              disabled={!formik.dirty || !formik.isValid || formik.isSubmitting}
              onClick={handleSubmit}
              className={`${classes.submit} ${classes_g.greenButton}`}
            >
              {/* {loading ? ( */}
              {/* <CircularProgress size={25} color='inherit' /> */}
              {/* ) : ( */}
              Submit
              {/* )} */}
              {formik.isSubmitting && (
                <CircularProgress style={{ marginLeft: "1rem" }} size={24} />
              )}
            </Button>
          </Box>
        </Grid>
        <Grid item sm={12} md={6} lg={6} alignItems="center">
          <Box className={classes.greenText}>
            <Typography variant="body2">Safety Guidance</Typography>
            <Typography variant="body2">
              1: Do not enter phone numbers in any of the fields. Phone numbers
              should only be exchanged after accepting to transact.
            </Typography>
            <Typography variant="body2">
              2: Do not exchange bank card or bank details . After you have
              accepted a transaction we advise safe money transfers like PayPal
              or direct bank transfer.
            </Typography>
            <Typography variant="body2">
              3: When expecting to inspect goods ensure you meet in a secure and
              public place.
            </Typography>
          </Box>
        </Grid>
      </Grid>
      {/* <ConfirmDialogBox
        // open={isOpen}
        toggleDialog={toggleCancelOpen}
        title={'Delivery Request Successfully Posted'}
      /> */}
    </Box>
  );
};

export default CreatePost;
