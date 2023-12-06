import React from "react";
import Navbar from "components/Layout/Navbar";
import PageBanner from "components/Common/PageBanner";
import AboutOurCompany from "components/About/AboutOurCompany";
import ScrollCount from "components/Common/ScrollCount";
import OurExpertise from "components/About/OurExpertise";
import WorkingProcess from "components/About/WorkingProcess";
import WhyChooseUsStyle2 from "components/Common/WhyChooseUsStyle2";
import TestimonialStyle2 from "components/Common/TestimonialStyle2";
import TeamMemberStyle2 from "components/Common/TeamMemberStyle2";
import Faq from "components/Common/Faq";
import Footer from "components/Layout/Footer/Footer";

export default function About() {
  return (
    <>
      <Navbar />

      <PageBanner title="About One" homeText="Home" homeUrl="/" />

      <AboutOurCompany />

      <ScrollCount />

      <OurExpertise />

      <WorkingProcess />

      <WhyChooseUsStyle2 />

      <TestimonialStyle2 />

      <TeamMemberStyle2 />

      <Faq />

      <Footer />
    </>
  );
}
