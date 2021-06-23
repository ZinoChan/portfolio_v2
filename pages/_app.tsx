import "@styles/globals.css";
import "@fontsource/lora";
import "@fontsource/poppins";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/900.css";
import Navbar from "../components/Navbar";
import Router from "next/router";

import { Toaster } from "react-hot-toast";
import NProgress from "nprogress";
import { useEffect, useState } from "react";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  const [isDarkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    if (isDarkTheme) {
      document?.querySelector("body").classList.add("dark");
    }
    if (!isDarkTheme) {
      document?.querySelector("body").classList.remove("dark");
    }
  }, [isDarkTheme]);
  return (
    <>
      <Navbar setDarkTheme={setDarkTheme} isDarkTheme={isDarkTheme} />
      <Component {...pageProps} />
      <Toaster />
    </>
  );
}

export default MyApp;
