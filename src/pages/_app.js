import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Footer from "../../components/common/Footer";
import Navbar from "../../components/common/Navbar";
import { Box } from "@chakra-ui/react";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      {" "}
      <Box backgroundColor={"#abc4ff"} minH={"100vh"} position={"relative"}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </Box>
    </ChakraProvider>
  );
}
