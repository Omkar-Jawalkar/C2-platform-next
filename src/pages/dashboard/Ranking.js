import React, { useState } from "react";
import { useDisclosure } from "@chakra-ui/react";

import {
  Flex,
  Button,
  Select,
  HStack,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  Text,
} from "@chakra-ui/react";
import { DownloadIcon, HamburgerIcon } from "@chakra-ui/icons";
import SearchBar from "@/pages/dashboard/SearchBar";

const Ranking = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex p={4}>
        <Flex
          width={"full"}
          gap={"10px"}
          direction={{ base: "column", md: "row" }}
        >
          <SearchBar name="Search" />
          <Flex gap={"10px"}>
            <Select variant="filled" placeholder="Branch">
              {" "}
              <option value="option1">Computer</option>
              <option value="option2">IT</option>
              <option value="option3">Mechanical</option>
              <option value="option3">Civil</option>
            </Select>
            <Select variant="filled" placeholder="ALL">
              {" "}
              <option value="option1">GFG</option>
              <option value="option2">LeetCode</option>
              <option value="option3">HackerRank</option>
              <option value="option3">Github</option>
            </Select>
          </Flex>
          <Button onClick={onOpen} rightIcon={<HamburgerIcon />}>
            Analytics
          </Button>
          <Button rightIcon={<DownloadIcon />}>Download</Button>
        </Flex>

        <Flex></Flex>
      </Flex>

      {/* This is a Drawer */}

      <Drawer onClose={onClose} isOpen={isOpen} size={{ base: "sm", md: "md" }}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Pie Chart</DrawerHeader>
          <DrawerBody>
            <p>Some data regarding pie chart</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Ranking;
