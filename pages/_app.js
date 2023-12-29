import React from "react";
import AOS from "aos";
import "../node_modules/aos/dist/aos.css";
import "../styles/bootstrap.min.css";
import "../styles/animate.min.css";
import "../styles/remixicon.css";
import "../styles/flaticon.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "swiper/css";
import "swiper/css/bundle";
// Navbar CSS
import "../styles/navbar.css";
// Footer CSS
import "../styles/footer.css";
// Globals CSS
import "../styles/globals.css";
// Responsive CSS
import "../styles/responsive.css";

import Head from "next/head";
import ScrollToTop from "src/public/ScrollToTop";


import { UserDataProvider } from "context/userData";
import { DataProvider } from "context/data";

import AuthStateChanged from "src/hooks/AuthStateChanged";

import EditControl from "src/admin/EditControl";
import Loader from "src/public/Loader";
import Navbar from "src/public/Navbar";
import Footer from "src/public/Footer";
import Navbar2 from "src/public/Navbar2";
import { useRouter } from "next/router";


function MyApp({ Component, pageProps }) {
  const router = useRouter()
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Head>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
        <meta charSet="utf-8" />
        <link rel="canonical" href="https://xn--zb0b93v0rlpgb594av4a.kr"></link>
        <meta name="robots" content="index,follow"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <UserDataProvider>
        <DataProvider>
          <AuthStateChanged>
            {router.pathname==="/"? <Navbar /> : <Navbar2 />}
            <Component {...pageProps} />
            <EditControl />
            <Loader />
            <Footer />
          </AuthStateChanged>
        </DataProvider>
      </UserDataProvider>

      <ScrollToTop />
    </>
  );
}

export default MyApp;