import React from "react";
import { Box, useDisclosure } from "@chakra-ui/react";
import { useRef } from "react";
import {
  HStack,
  Heading,
  VStack,
  Button,
  Link as ReachLink,
  Text,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Stack,
  Input,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Link from "next/link";

const MenuItem = ({ children, bg, color, onClick, url, name }) => {
  return (
    <Box rounded={"2xl"}>
      <Link backgroundColor={bg} as={ReachLink} onClick={onClick} href={url}>
        <Text color={color} fontSize="lg">
          {name}
        </Text>
      </Link>
    </Box>
  );
};

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  return (
    <>
      <HStack
        justifyContent={"space-between"}
        p={6}
        backgroundColor={"#1167b1"}
      >
        <Heading color={"whiteAlpha.900"} size="lg">
          {" "}
          C2 Platform
        </Heading>

        <HStack display={{ base: "none", md: "flex" }} spacing={12}>
          <MenuItem color={"whiteAlpha.900"} url={"/home"} name={"Home"} />
          <MenuItem
            color={"whiteAlpha.900"}
            url={"/dashboard"}
            name={"Dashboard"}
          />
          <MenuItem
            color={"whiteAlpha.900"}
            url={"/aboutus"}
            name={"About Us"}
          />
        </HStack>

        <HStack display={{ base: "none", md: "flex" }} spacing={2}>
          <Button href="/signup"> Sign In </Button>
          <Button href="/login"> Login </Button>
        </HStack>

        <HamburgerIcon
          ref={btnRef}
          colorScheme="teal"
          onClick={onOpen}
          display={{ base: "flex", md: "none" }}
          fontSize={"3xl"}
          color={"whiteAlpha.900"}
        />
      </HStack>

      {/* This is the Drawer */}
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>

          <DrawerBody>
            <Stack textAlign={"center"} spacing={4} direction={"column"}>
              <MenuItem
                url={"/home"}
                color={"black"}
                onClick={onClose}
                name={"Home"}
              />
              <MenuItem
                onClick={onClose}
                url={"/dashboard"}
                name={"Dashboard"}
              />
              <MenuItem
                bg={"red"}
                onClick={onClose}
                url={"/aboutus"}
                name={"About Us"}
              />

              <HStack
                textAlign={"center"}
                display={{ base: "flex" }}
                spacing={2}
                justifyContent={"center"}
                pt={6}
              >
                <Button onClick={onClose} href="/signup">
                  {" "}
                  Sign In{" "}
                </Button>
                <Button onClick={onClose} href="/login">
                  {" "}
                  Login{" "}
                </Button>
              </HStack>
            </Stack>
          </DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Navbar;
