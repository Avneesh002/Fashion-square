import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Input,
  FormControl,
  Text,
  Avatar,
  Spacer,
  Flex,
  HStack,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Redux/Auth/Auth.action";
import { BsPersonFill } from "react-icons/bs";
import { auth } from "./FireBase";
import { updateProfile } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";

export const User = () => {
  const [userName, setUserName] = useState({
    name: "",
    profileImg: "",
  });
  const [name, setName] = useState("");
  const [url, setURL] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);

  const dispatch = useDispatch();
  const { data } = useSelector((store) => store.auth);

  const handleLogout = () => {
    dispatch(logout());
  };
  const user = auth.currentUser;

  const handleUserProfile = (name, url) => {
    updateProfile(user, {
      displayName: name,
      photoURL: url,
    })
      .then((res) => {
        console.log("updateprofile", res.displayName);
      })
      .catch((error) => {
        console.log(error);
      });

    onClose();
  };

  useEffect(() => {
    if (user !== null) {
      // The user object has basic properties such as display name, email, etc.
      const displayName = user.displayName;
      // const email = user.email;
      const photoURL = user.photoURL;
      // const emailVerified = user.emailVerified;
      setUserName({
        name: displayName,
        profileImg: photoURL,
      });

      // The user's ID, unique to the Firebase project. Do NOT use
      // this value to authenticate with your backend server, if
      // you have one. Use User.getToken() instead.
      // const uid = user.uid;
      // console.log("user", displayName, email, photoURL, emailVerified, uid);
    }
  }, [onOpen]);

  return (
    <>
      <Menu>
        <MenuButton>
          <BsPersonFill
            // fontSize="2xl"
            className="header-icon"
            color={data.isAuth ? "green" : "black"}
          />
        </MenuButton>
        <MenuList borderRadius="2px">
          {data.isAuth ? (
            <>
              <MenuItem>
                <HStack bg={"black"} p="5px" alignItems={"center"} w="full">
                  <Avatar size={"md"} src={userName && userName.profileImg} />
                  <Spacer />
                  <Text as={"h2"} color="white">
                    {userName && userName.name}
                  </Text>
                </HStack>
              </MenuItem>
              <MenuItem>
                <Button
                  width="100%"
                  p="-1"
                  borderRadius="none"
                  colorScheme="black"
                  _hover={{ bg: "black", color: "white" }}
                  variant="outline"
                  onClick={handleLogout}
                >
                  LOG OUT
                </Button>
              </MenuItem>
            </>
          ) : (
            <Link to="/login">
              <MenuItem>
                <Button
                  width="100%"
                  p="-1"
                  borderRadius="none"
                  colorScheme="black"
                  _hover={{ bg: "black", color: "white" }}
                  variant="outline"
                >
                  LOG IN
                </Button>
              </MenuItem>
            </Link>
          )}
          <MenuItem>
            {data.isAuth ? (
              <Button
                onClick={onOpen}
                disabled={data.isAuth}
                width="100%"
                p="-1"
                borderRadius="none"
                colorScheme="black"
                _hover={{ bg: "black", color: "white" }}
                variant="outline"
              >
                Profile
              </Button>
            ) : null}
          </MenuItem>
          <MenuItem _hover={{ backgroundColor: "gray.100" }}>Wishlist</MenuItem>
          <MenuItem _hover={{ backgroundColor: "gray.100" }}>
            Your Orders
          </MenuItem>
          <MenuItem _hover={{ backgroundColor: "gray.100" }}>
            Your Refferals
          </MenuItem>
        </MenuList>
      </Menu>
      {/* Modal */}

      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update Profile</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Name"
              />
              <Input
                type="text"
                value={url}
                onChange={(e) => setURL(e.target.value)}
                placeholder="Enter Image URL"
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button
              variant="ghost"
              onClick={() => handleUserProfile(name, url)}
            >
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
