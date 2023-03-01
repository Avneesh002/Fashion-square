import {
  ChakraProvider,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  extendTheme,
  Box,
  Button,
  Text,
  HStack,
  PinInput,
  PinInputField,
} from "@chakra-ui/react";
import { useState } from "react";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../Pages/Signup_Login/FireBase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../Redux/Auth/Auth.action";

const activeLabelStyles = {
  transform: "scale(0.90) translateY(-24px)",
};
export const theme = extendTheme({
  components: {
    Form: {
      variants: {
        floating: {
          container: {
            _focusWithin: {
              label: {
                ...activeLabelStyles,
              },
            },
            "input:not(:placeholder-shown) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label":
              {
                ...activeLabelStyles,
              },
            label: {
              top: 0,
              left: 0,
              zIndex: 2,
              position: "absolute",
              backgroundColor: "white",
              pointerEvents: "none",
              transformOrigin: "left top",
            },
          },
        },
      },
    },
  },
});

export default function Floating_Input_Lebel() {
  const [number, setNumber] = useState("");
  const [user, setUser] = useState("");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [loading, setIsLoading] = useState(false);
  const [flag, setFlag] = useState(false);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  function setUpRecaptha() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            getOtp();
          },
          "expired-callback": () => {},
        },
        auth
      );
    }
  }

  function getOtp() {
    setIsLoading(true);
    setUpRecaptha();
    const appVerifier = window.recaptchaVerifier;
    const phoneNumber = "+91" + number;

    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        console.log("getOtp", confirmationResult);
        setFlag(true);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
        setIsLoading(false);
      });
  }

  function onOtpVerify() {
    setIsLoading(true);
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        console.log("veryfyotp", res);
        console.log("uid",res.user.uid)
        console.log("uid",res.user.displayName)
        console.log("uid",res.user.photoURL)
        dispatch(login(res.user.accessToken));
        setIsLoading(false);
        setUser(res.operationType);
        if (res.operationType === "signIn") {
          return navigate("/");
        }
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
        console.log(err);
      });
  }

  return (
    <ChakraProvider theme={theme}>
      <Box
        p={4}
        display={"flex"}
        alignItems="center"
        flexDirection={"column"}
        gap={6}
      >
        {flag ? (
          <HStack>
            <PinInput value={otp} onChange={setOtp}>
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
            </PinInput>
          </HStack>
        ) : (
          <FormControl
            variant="floating"
            id="mobile-number"
            isRequired
            isInvalid
          >
            <div id="recaptcha-container" />
            <Input
              size="lg"
              type={"number"}
              value={number}
              variant={"flushed"}
              onChange={(e) => setNumber(e.target.value)}
              placeholder=" "
            />
            <FormLabel>
              {flag ? "Please type the OTP sent to" : "Mobile Number"}
            </FormLabel>
            {number.length > 0 && number.length < 10 ? (
              <FormErrorMessage position={"absolute"} right="0">
                10 Digit Valid Mobile No. Required
              </FormErrorMessage>
            ) : null}
          </FormControl>
        )}

        {flag ? (
          <Button
            onClick={onOtpVerify}
            width={"full"}
            size="lg"
            mt={6}
            variant="solid"
            _hover={{ bg: "#e81864" }}
            bg={"#D3145A"}
          >
            Submit
          </Button>
        ) : (
          <Button
            onClick={getOtp}
            loadingText="Sending"
            width={"full"}
            size="lg"
            mt={6}
            variant="solid"
            _hover={number.length < 10 ? null : { bg: "#e81864" }}
            disabled={number.length < 10 ? true : false}
            bg={number.length < 10 ? null : "#D3145A"}
          >
            Next
          </Button>
        )}

        <Text>{error}</Text>
        <Text>{user}</Text>
        {loading ? <Text>Loading...</Text> : null}
      </Box>
    </ChakraProvider>
  );
}
