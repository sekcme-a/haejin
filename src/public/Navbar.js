import React from "react";
import Link from "utils/ActiveLink";
import { useMonitorSize } from "./useMonitorSize";

const Navbar = () => {
  const {monitorWidth} = useMonitorSize()
  const [menu, setMenu] = React.useState(true);
  const toggleNavbar = () => {
    setMenu(!menu);
  };
  React.useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
  });

  const classOne = menu
    ? "collapse navbar-collapse mean-menu"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
       <div id="navbar" className="navbar-area fixed-top">
        <div className="main-navbar">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-light">
              <Link href="/">
                <a className="navbar-brand">
                  <img
                    src="/image/logo.jpeg"
                    alt="혜진종합관리"
                    className="black-logo"
                    style={{width: "80px", marginLeft: "20px"}}
                  />
                </a>
              </Link>

              <button
                onClick={toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              > 
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav me-auto">
                  <li className="nav-item">
                    <Link href="/">
                      <a className="nav-link">
                        Home
                      </a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      회사소개 <i className="ri-arrow-down-s-line"></i>
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="/info/greet" activeClassName="active">
                          <a className="nav-link">인사말</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/info/overview" activeClassName="active">
                          <a className="nav-link">회사 개요</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/info/management" activeClassName="active">
                          <a className="nav-link">경영방침</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/info/partner" activeClassName="active">
                          <a className="nav-link">협력사</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/info/history" activeClassName="active">
                          <a className="nav-link">연혁</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/info/map" activeClassName="active">
                          <a className="nav-link">오시는 길</a>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      사업 소개 <i className="ri-arrow-down-s-line"></i>
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="/management/security" activeClassName="active">
                          <a className="nav-link">경비보안관리</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/management/sanitation" activeClassName="active">
                          <a className="nav-link">위생용역관리</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/management/immigration" activeClassName="active">
                          <a className="nav-link">이주관리</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/management/prevention" activeClassName="active">
                          <a className="nav-link">범죄예방</a>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link href="#" activeClassName="active">
                      <a className="nav-link">
                        업무영역 및 현황 <i className="ri-arrow-down-s-line"></i>
                      </a>
                    </Link>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="/business/security" activeClassName="active">
                          <a className="nav-link">경비용역장점</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/business/resources" activeClassName="active">
                          <a className="nav-link">인력보유 및 교육</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/business/equipment" activeClassName="active">
                          <a className="nav-link">장비보유현황</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/business/management" activeClassName="active">
                          <a className="nav-link">관리실적</a>
                        </Link>
                      </li>
                     
                    </ul>
                  </li>

                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      인재채용 <i className="ri-arrow-down-s-line"></i>
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="/job/advertisement" activeClassName="active">
                          <a className="nav-link">채용 공고</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/job/application"
                          activeClassName="active"
                        >
                          <a className="nav-link">입사지원</a>
                        </Link>
                      </li>
                    </ul>
                  </li>

                </ul>
              </div>

              <div className="others-options d-flex align-items-center">
                {/* <div className="option-item">
                  <form className="search-box">
                    <input
                      type="text"
                      className="input-search"
                      placeholder="Search..."
                    />
                    <button type="submit">
                      <i className="ri-search-line"></i>
                    </button>
                  </form>
                </div>
  */}
                <div className="option-item">
                  <Link href="https://gw.dwgroup.kr">
                    <a className="default-btn" target="_blank" style={monitorWidth>991 ? {padding:"8px 14px", fontSize:'14px'} : {}} >
                      인트라넷 로그인
                    </a>
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
