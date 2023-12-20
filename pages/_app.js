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
        <title>혜진종합관리 - 입주민들의 안락한 생활을 위해 노력하고 있습니다.</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
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