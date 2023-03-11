import React from "react";
import {
  HStack,
  Heading,
  VStack,
  Button,
  Link as ReachLink,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";

const MenuItem = ({ children, url, name }) => {
  return (
    <Link as={ReachLink} href={url}>
      <Text color={"whiteAlpha.900"} fontSize="lg">
        {name}
      </Text>
    </Link>
  );
};

const Navbar = () => {
  return (
    <HStack justifyContent={"space-between"} p={6} backgroundColor={"#1167b1"}>
      <Heading color={"whiteAlpha.900"} size="lg">
        {" "}
        C2 Platform
      </Heading>

      <HStack spacing={12}>
        <MenuItem url={"/home"} name={"Home"} />
        <MenuItem url={"/dashboard"} name={"Dashboard"} />
        <MenuItem url={"/aboutus"} name={"About Us"} />
      </HStack>

      <HStack spacing={2}>
        <Button href="/signup"> Sign In </Button>
        <Button href="/login"> Login </Button>
      </HStack>
    </HStack>
  );
};

export default Navbar;
