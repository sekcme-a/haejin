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
import ScrollToTop from "components/Layout/ScrollToTop";


import { UserDataProvider } from "context/userData";
import { DataProvider } from "context/data";

import AuthStateChanged from "components/hooks/AuthStateChanged";

import EditControl from "components/admin/EditControl";
import Loader from "components/Common/Loader";


function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Head>
        <title>동우개발 - 함께 동행하는 동우그룹</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <UserDataProvider>
        <DataProvider>
          <AuthStateChanged>
            <Component {...pageProps} />
            <EditControl />
            <Loader />
          </AuthStateChanged>
        </DataProvider>
      </UserDataProvider>

      <ScrollToTop />
    </>
  );
}

export default MyApp;