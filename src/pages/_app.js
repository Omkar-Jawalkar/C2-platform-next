import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Footer from "../../components/common/Footer";
import Navbar from "../../components/common/Navbar";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      {" "}
      <Navbar />
      <Component {...pageProps} /> <Footer />
    </ChakraProvider>
  );
}
