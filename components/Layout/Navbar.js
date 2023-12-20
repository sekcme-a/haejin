import React from "react";
import Link from "utils/ActiveLink";

const NavbarStyle2 = () => {
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
                    src="/images/logo.jpeg"
                    alt="Black logo"
                    className="black-logo"
                    style={{width: "130px", marginLeft: "20px"}}
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
                    <Link href="">
                      <a className="nav-link">
                        Home
                      </a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      About <i className="ri-arrow-down-s-line"></i>
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="/about" activeClassName="active">
                          <a className="nav-link">About Style - 1</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/about-2" activeClassName="active">
                          <a className="nav-link">About Style - 2</a>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Services <i className="ri-arrow-down-s-line"></i>
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="/services" activeClassName="active">
                          <a className="nav-link">Services</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/service-details" activeClassName="active">
                          <a className="nav-link">Services Details</a>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link href="#" activeClassName="active">
                      <a className="nav-link">
                        Pages <i className="ri-arrow-down-s-line"></i>
                      </a>
                    </Link>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="/pricing" activeClassName="active">
                          <a className="nav-link">Pricing</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/team" activeClassName="active">
                          <a className="nav-link">Team</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/faq" activeClassName="active">
                          <a className="nav-link">FAQ</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/testimonials" activeClassName="active">
                          <a className="nav-link">Testimonials</a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          User Pages <i className="ri-arrow-right-s-line"></i>
                        </a>
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link href="/login" activeClassName="active">
                              <a className="nav-link">Login</a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link href="/register" activeClassName="active">
                              <a className="nav-link">Register</a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              href="/forgot-password"
                              activeClassName="active"
                            >
                              <a className="nav-link">Forgot Password</a>
                            </Link>
                          </li>
                        </ul>
                      </li>

                      <li className="nav-item">
                        <Link href="/terms-of-service" activeClassName="active">
                          <a className="nav-link">Terms of Service</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/privacy-policy" activeClassName="active">
                          <a className="nav-link">Privacy Policy</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/coming-soon" activeClassName="active">
                          <a className="nav-link">Coming Soon</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/404" activeClassName="active">
                          <a className="nav-link">404 Error Page</a>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Case Study <i className="ri-arrow-down-s-line"></i>
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="/case-study" activeClassName="active">
                          <a className="nav-link">Case Study</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/case-study-details"
                          activeClassName="active"
                        >
                          <a className="nav-link">Case Study Details</a>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Blog <i className="ri-arrow-down-s-line"></i>
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="/blog" activeClassName="active">
                          <a className="nav-link">Blog Grid</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/blog-right-sidebar"
                          activeClassName="active"
                        >
                          <a className="nav-link">Blog Right Sidebar</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/blog-details" activeClassName="active">
                          <a className="nav-link">Blog Details</a>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link href="/contact" activeClassName="active">
                      <a className="nav-link">Contact</a>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="others-options d-flex align-items-center">
                <div className="option-item">
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
 
                <div className="option-item">
                  <Link href="/contact">
                    <a className="default-btn">
                      Contact Us
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

export default NavbarStyle2;
