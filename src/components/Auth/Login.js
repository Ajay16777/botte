/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../../Firebse/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import styles from "./AuthStyles";
import useStyles from "styles/commonStyles";
import UseToggle from "../hooks/useToggleInput";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import {
  Typography,
  Box,
  TextField,
  Button,
  InputAdornment,
  IconButton,
  CircularProgress,
} from "@material-ui/core";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    console.log("user", user);
    if (user) navigate("/");
  }, [user, loading, navigate]);

  const classes_g = useStyles();
  const classes = styles();
  const [showPass, togglePass] = UseToggle(true);
  const handleClickShowPassword = () => {
    // console.log('showPass', showPass);
    togglePass();
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    logInWithEmailAndPassword(email, password);
  }

  


  return (
    // <div className="login">
    //   <div className="login__container">
    //     <input
    //       type="text"
    //       className="login__textBox"
    //       value={email}
    //       onChange={(e) => setEmail(e.target.value)}
    //       placeholder="E-mail Address"
    //     />
    //     <input
    //       type="password"
    //       className="login__textBox"
    //       value={password}
    //       onChange={(e) => setPassword(e.target.value)}
    //       placeholder="Password"
    //     />
    //     <button
    //       className="login__btn"
    //       onClick={() => logInWithEmailAndPassword(email, password)}
    //     >
    //       Login
    //     </button>
    //     <button className="login__btn login__google" onClick={signInWithGoogle}>
    //       Login with Google
    //     </button>
    //     <div>
    //       <Link to="/reset">Forgot Password</Link>
    //     </div>
    //     <div>
    //       Don't have an account? <Link to="/register">Register</Link> now.
    //     </div>
    //   </div>
    // </div>
    <Box>
       <Box className={classes.body}>
         <Box style={{ padding: '0rem 1.5rem 0rem' }}>
           <Typography variant='body2'>
             By continuing, you are setting up a new account and agree
             to our
             <Link
              to='/conditions'
              style={{
                textDecoration: 'underline',
                color: '#000',
                verticalAlign: 'unset',
              }}
            >
              Terms and Policies.
            </Link>{' '}
            Don’t worry we will never share your data or post anything
            on your behalf.
          </Typography>
        </Box>
        
        
            <Button
              variant='contained'
              color='primary'
              style={{
                backgroundColor: '#E3E3E3',
                border: '2px solid #A3A3A3',
                marginTop: '2rem',
                color: '#111',
                cursor: 'pointer',
              }}
              onClick={signInWithGoogle}
              // disabled={renderProps.disabled}
              startIcon={<GoogleIcon className={classes.icons} />}
            >
              Google
            </Button>
        <Button
          startIcon={<AppleIcon className={classes.icons} />}
          variant='contained'
          size='large'
          style={{
            backgroundColor: '#E3E3E3',
            border: '2px solid #A3A3A3',
          }}
          onClick={signInWithGoogle}
        >
          Apple
        </Button>

        <Typography variant='subtitle1'>OR</Typography>
        {/* <form > */}
          <Box
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              rowGap: 14,
            }}
          >
            <TextField
              id='outlined-basic'
              placeholder='Enter Your email address'
              variant='outlined'
              type='email'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              // error={
              //   formik.touched.email && Boolean(formik.errors.email)
              // }
              // helperText={formik.touched.email && formik.errors.email}
              // onBlur={formik.handleBlur}
              // InputProps={{
              //   endAdornment: (
              //     <InputAdornment position='end'>
              //       <IconButton
              //         aria-label='toggle password visibility'
              //         edge='end'
              //       >
              //         {formik.values.email &&
              //           Object.keys(formik.errors).length <= 0 && (
              //             <DoneIcon color='success' />
              //           )}
              //       </IconButton>
              //     </InputAdornment>
              //   ),
              // }}
            />
            <TextField
              id='outlined-basic'
              placeholder='Enter Your password'
              variant='outlined'
              type={showPass ? 'password' : 'text'}
              name='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              // InputProps={{
              //   endAdornment: (
              //     <InputAdornment position='end'>
              //       <IconButton
              //         aria-label='toggle password visibility'
              //         onClick={handleClickShowPassword}
              //         onMouseDown={handleMouseDownPassword}
              //         edge='end'
              //       >
              //         {showPass ? <VisibilityOff /> : <Visibility />}
              //       </IconButton>
              //     </InputAdornment>
              //   ),
              // }}
              // error={
              //   formik.touched.password &&
              //   Boolean(formik.errors.password)
              // }
              // helperText={
              //   formik.touched.password && formik.errors.password
              // }
              // onBlur={formik.handleBlur}
            />
          </Box>
          <Box className={classes.forgot}>
            <Button
              variant='standard'
              style={{ textDecoration: 'underline', fontWeight: 500 }}
              to='/forgotPassword'
              component={Link}
            >
              Forgot Your Password ?
            </Button>
          </Box>
          <Button
            variant='contained'
            size='large'
            type='submit'
            className={`${classes.signupBtn} ${classes_g.greenBtn}`}
            style={{ fontWeight: 'bold' }}
            // disabled={
            //   !formik.dirty ||
            //   !formik.isValid ||
            //   formik.isSubmitting ||
            //   Object.values(formik.values).some(
            //     (x) => x === null || x === ''
            //   )
            // }
            onClick={handleSubmit}
          >
            {loading ? (
              <CircularProgress size={25} color='inherit' />
            ) : (
              'Log In'
            )}
          </Button>
        {/* </form> */}
      </Box>
    </Box>
  );
}
export default Login;


