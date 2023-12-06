import React from "react";
import Link from "next/link";

const Cta = () => {
  return (
    <>
      <div className="container">
        <div className="cta-area ptb-100">
          <div className="cta-content">
            <span>Have a project in mind?</span>
            <h3>Let&apos;s get to work!</h3>
          </div>

          <div className="cta-btn-box">
            <Link href="/contact">
              <a className="default-btn">Contact Us</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cta;
