/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useHistory, useNavigate } from "react-router-dom";
import {
  auth,
  logInWithEmailAndPassword,
  signInWithGoogle,
  registerWithEmailAndPassword,
} from "../../Firebse/firebase";
import {
  Typography,
  Box,
  TextField,
  Button,
  InputAdornment,
  IconButton,
  CircularProgress,
} from "@material-ui/core";
import styles from "./AuthStyles";
import useStyles from "styles/commonStyles";
import UseToggle from "../hooks/useToggleInput";
// import ConfirmDialogBox from "Dialogs/ConfirmDialogBox";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import AppleIcon from "@mui/icons-material/Apple";
import GoogleIcon from "@mui/icons-material/Google";

function SignUP() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const [showPass, togglePass] = UseToggle(true);
  const handleClickShowPassword = () => {
    togglePass();
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const classes_g = useStyles();
  const classes = styles();
  // const history = useHistory();
  const navigate = useNavigate();
  const register = () => {
    if (!password) alert("Please enter password");
    registerWithEmailAndPassword(email, password);
    console.log("dsfjsd", registerWithEmailAndPassword);
  };
  useEffect(() => {
    if (loading) return;
    // if (user) history.replace("/dashboard");
    if (user) navigate("/auth/login");
    // else if(!user
  }, [loading, navigate, user]);
  // }, [user, loading]);
  return (
    <Box>
      {/* <form> */}
      <Box className={classes.body}>
        <Box className={classes.inputs}>
          <TextField
            id="outlined-basic"
            placeholder="Enter Your email address"
            variant="outlined"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            // error={
            //   formik.touched.email && Boolean(formik.errors.email)
            // }
            // helperText={formik.touched.email && formik.errors.email}
            // onBlur={formik.handleBlur}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    edge="end"
                  >
                    {/* {formik.values.email &&
                    Object.keys(formik.errors).length <= 0 && (
                      <DoneIcon color='success' />
                    )} */}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            id="outlined-basic"
            placeholder="Enter Your password"
            variant="outlined"
            type={showPass ? "password" : "text"}
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            // error={
            //   formik.touched.password &&
            //   Boolean(formik.errors.password)
            // }
            // helperText={
            //   formik.touched.password && formik.errors.password
            // }
            // onBlur={formik.handleBlur}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPass ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Typography variant="subtitle1">OR</Typography>
        <Button
          variant="contained"
          color="primary"
          style={{
            backgroundColor: "#E3E3E3",
            border: "2px solid #A3A3A3",
            marginTop: "2rem",
            color: "#111",
            cursor: "pointer",
          }}
          onClick={signInWithGoogle}
          // disabled={renderProps.disabled}
          startIcon={<GoogleIcon className={classes.icons} />}
        >
          Google
        </Button>

        <Button
          startIcon={<AppleIcon className={classes.icons} />}
          variant="contained"
          size="large"
          style={{
            backgroundColor: "#E3E3E3",
            border: "2px solid #A3A3A3",
          }}
          onClick={signInWithGoogle}
        >
          Apple
        </Button>
        <Button
          variant="contained"
          size="large"
          type="submit"
          className={`${classes.signupBtn} ${classes_g.greenBtn}`}
          style={{ fontWeight: "bold" }}
          // disabled={
          //   !formik.dirty ||
          //   !formik.isValid ||
          //   formik.isSubmitting ||
          //   Object.values(formik.values).some((x) => x === null || x === "")
          // }
          onClick={register}
        >
          {loading ? <CircularProgress size={25} color="inherit" /> : "Sign Up"}
        </Button>
      </Box>
      {/* </form> */}
      {/* <ConfirmDialogBox
        open={isCancelOpen}
        toggleDialog={toggleCancelOpen}
        title={
          'Congrats for signing up to BOTTE, You have 2 bonus Points  Now you can send / courier parcels -enjoy'
        }
      />  */}
    </Box>

    // <div className="register">
    //   <div className="register__container">
    //     <input
    //       type="text"
    //       className="register__textBox"
    //       value={name}
    //       onChange={(e) => setName(e.target.value)}
    //       placeholder="Full Name"
    //     />
    //     <input
    //       type="text"
    //       className="register__textBox"
    //       value={email}
    //       onChange={(e) => setEmail(e.target.value)}
    //       placeholder="E-mail Address"
    //     />
    //     <input
    //       type="password"
    //       className="register__textBox"
    //       value={password}
    //       onChange={(e) => setPassword(e.target.value)}
    //       placeholder="Password"
    //     />
    //     <button className="register__btn" onClick={register}>
    //       Register
    //     </button>
    //     <button
    //       className="register__btn register__google"
    //       onClick={signInWithGoogle}
    //     >
    //       Register with Google
    //     </button>
    //     <div>
    //       Already have an account? <Link to="/">Login</Link> now.
    //     </div>
    //   </div>
    // </div>
  );
}
export default SignUP;
