import axios from "axios";
import {
  //   RecaptchaVerifier,
  //   signInWithPhoneNumber,
  signOut,
} from "firebase/auth";
import { auth } from "../../Pages/Signup_Login/FireBase";
import {
  AUTH_SIGN_IN_ERROR,
  AUTH_SIGN_IN_LOADING,
  AUTH_SIGN_IN_SUCCESS,
  AUTH_SIGN_OUT,
} from "./Auth.actinType";

export const login = (creds) => async (dispatch) => {
  //   dispatch({ type: AUTH_SIGN_IN_LOADING });
  //   try {
  //     let res = await axios.post("https://reqres.in/api/login", creds);
  //     let token = res.data;
  dispatch({ type: AUTH_SIGN_IN_SUCCESS, payload: creds });
  //   } catch (error) {
  //     dispatch({ type: AUTH_SIGN_IN_ERROR });
  //   }
};

export const logout = () => async (dispatch) => {
  signOut(auth)
    .then((res) => {
      console.log("logout", res);
      dispatch({ type: AUTH_SIGN_OUT });
    })
    .catch((err) => {
      dispatch({ type: AUTH_SIGN_IN_ERROR });
    });
};

// const auth = getAuth();
// signOut(auth).then(() => {
//   // Sign-out successful.
// }).catch((error) => {
//   // An error happened.
// });

//firebase auth

// export const setUpRecaptha = () => {
//   if (!window.recaptchaVerifier) {
//     window.recaptchaVerifier = new RecaptchaVerifier(
//       "recaptcha-container",
//       {
//         size: "invisible",
//         callback: (response) => {
//           // onSignup();
//           getOtp();
//         },
//         "expired-callback": () => {},
//       },
//       auth
//     );
//   }
// };

// export const getOtp = (number) => (dispatch) => {
//   dispatch({ type: AUTH_SIGN_IN_LOADING });
//   setUpRecaptha();
//   const appVerifier = window.recaptchaVerifier;
//   const phoneNumber = "+91" + number;

//   signInWithPhoneNumber(auth, phoneNumber, appVerifier)
//     .then((confirmationResult) => {
//       window.confirmationResult = confirmationResult;
//       console.log("auth/action/L-54", confirmationResult);
//       //   dispatch({type:AUTH_SIGN_IN_SUCCESS});
//       // setResult(confirmationResult);
//     })
//     .catch((error) => {
//       dispatch({ type: AUTH_SIGN_IN_ERROR });
//       console.log(error);
//     });
// };

// export const onOtpVerify = (otp) => (dispatch) => {
//   dispatch({ type: AUTH_SIGN_IN_LOADING });
//   window.confirmationResult
//     .confirm(otp)
//     .then(async (res) => {
//       console.log(res);
//       dispatch(AUTH_SIGN_IN_SUCCESS);
//       //   setUser(res.operationType);
//       //   changeAuthStatus();
//       //   if (res.operationType === "signIn") {
//       //     return navigate("/");
//       //   }
//     })
//     .catch((err) => {
//       //   setError(err.message);
//       //   setisLoading(false);
//       console.log(err);
//       dispatch({ type: AUTH_SIGN_IN_ERROR });
//     });
// };
