import React from "react";
import Link from "next/link";

const TopServices = () => {
  return (
    <>
      <div className="features-area pt-100 pb-75">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-features-card">
                <div className="number">01</div>
                <h3>
                  <Link href="/info/greet">
                    <a>회사소개</a>
                  </Link>
                </h3>
                <ul className="features-list">
                  <li>
                    <Link href="/info/greet">
                      <a>인사말 Greetings</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/info/overview">
                      <a>회사 개요 Company Overview</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/info/management">
                      <a>경영방침 Management Philosophy</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-features-card">
                <div className="number">02</div>
                <h3>
                  <Link href="/management/security">
                    <a>사업분야</a>
                  </Link>
                </h3>
                <ul className="features-list">
                  <li>
                    <Link href="/management/security">
                      <a>경비보안관리 Security Management</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/management/sanitation">
                      <a>위생용역관리 Sanitation Management</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/management/immigration">
                      <a>이주관리 Immigration Management</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/management/prevention">
                      <a>범죄예방 Crime Prevention</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-features-card">
                <div className="number">03</div>
                <h3>
                  <Link href="/business/security">
                    <a>업무영역 및 현황</a>
                  </Link>
                </h3>
                <ul className="features-list">
                  <li>
                    <Link href="/business/security">
                      <a>경비용역장점 Security Outsourcing</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/business/resources">
                      <a>인력보유 및 교육 Human Resources</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/business/equipment">
                      <a>장비보유현황 Equipment Inventory</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/business/management">
                      <a>관리실적 Management Performance</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="features-shape-1">
          <img src="/images/features/shape-1.png" alt="현황 이미지" />
        </div>
      </div>
    </>
  );
};

export default TopServices;
