import React from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, useDisclosure, VStack } from "@chakra-ui/react";
import {FaHome} from "react-icons/fa";
const AdminSidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();


  return (
    <>
      <HamburgerIcon
        fontSize="2xl"
        color="black"
        ref={btnRef}
        onClick={onOpen}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="xs"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            {/* <Link to="/"> */}
             <FaHome onClick={onClose} />
            {/* </Link> */}
          </DrawerHeader>
          <DrawerBody>
            <VStack spacing={8} direction="column">
              {/* {CategoryData.map((ele, i) => {
                return (
                  <Box
                    key={i}
                    width="100%"
                    borderBottom="1px solid black"
                    px="10px"
                    p="10px"
                    onClick={() => {
                      setProductTtype(
                        ele.c_name.toLowerCase().replaceAll(" ", "_")
                      );
                      setTimeout(() => {
                        onClose();
                      }, 500);
                    }}
                    _hover={{
                      cursor: "pointer",
                      color: "teal",
                      borderBottom: "1px solid teal",
                    }}
                  >
                    <NavLink to="/products">
                      <Box
                        display="flex"
                        flexDirection="row"
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        <Text fontSize="lg" fontWeight="bold">
                          {ele.c_name}
                        </Text>
                        <FontAwesomeIcon icon={faChevronRight} />
                      </Box>
                    </NavLink>
                  </Box>
                );
              })} */}
              <h1>a</h1>
              <h1>b</h1>
              <h1>a</h1>
              <h1>b</h1>
              <h1>a</h1>
              <h1>b</h1>
              <h1>a</h1>
              <h1>b</h1>
              <h1>a</h1>
              <h1>b</h1>
              
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default AdminSidebar;
