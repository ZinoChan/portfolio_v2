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

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Toaster />
    </>
  );
}

export default MyApp;
