import React from "react";
import Navbar from "components/Layout/Navbar";
import PageBanner from "src/public/PageBanner";
import Link from 'next/link';
import Footer from "components/Layout/Footer/Footer";

export default function Custom404() {
  return (
    <>

      <PageBanner title="404 Error" homeText="Home" homeUrl="/" />

      <div className="error-area ptb-100">
        <div className="container">
          <div className="error-content">
            <img src="/images/error.png" alt="혜진종합관리" />
            <h3>Error 404 : 페이지를 찾을 수 없습니다.</h3>
            <p>
            죄송합니다. 요청하신 페이지를 찾을 수 없습니다. 입력하신 주소가 올바른지 다시 한번 확인해 주시거나, 웹사이트의 업데이트로 인해 페이지가 이동되었을 수 있습니다. 불편을 드려 죄송합니다.
            </p>
            <Link href="/">
              <a className="default-btn">Back to Homepage</a>
            </Link>
          </div>
        </div>
      </div>

    </>
  );
}
