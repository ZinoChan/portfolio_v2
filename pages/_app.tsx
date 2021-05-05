import "@styles/globals.css";
import "@fontsource/lora";
import "@fontsource/poppins";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/900.css";
import Navbar from "../components/Navbar";
import { useState } from "react";
import Router from "next/router";
import Loader from "@components/Loader";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  Router.events.on("routeChangeStart", () => setLoading(true));
  Router.events.on("routeChangeComplete", () => setLoading(false));
  Router.events.on("routeChangeError", () => setLoading(false));

  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Loader loading={loading} />
      <Toaster />
    </>
  );
}

export default MyApp;
