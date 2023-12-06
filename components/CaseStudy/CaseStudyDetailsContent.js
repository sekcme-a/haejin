import React from "react";

const CaseStudyDetailsContent = () => {
  return (
    <>
      <div className="case-study-details-area pt-100 pb-75">
        <div className="container">
          <div className="case-study-details-desc">
            <div className="case-study-details-header">
              <div className="row justify-content-center align-items-center">
                <div className="col-lg-8 col-md-12">
                  <h3>Product Engineering</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat duis
                    aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur.
                  </p>
                </div>

                <div className="col-lg-4 col-md-12">
                  <ul className="case-study-information">
                    <li>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="content">
                          <h5>Client:</h5>
                          <span>
                            <a href="https://envytheme.com/" target="_blank" rel="noreferrer">
                              동우개발 LTD
                            </a>
                          </span>
                        </div>
                        <div className="content">
                          <h5>Date:</h5>
                          <span>20.08.2022</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="content">
                          <h5>Website:</h5>
                          <span>
                            <a href="https://envytheme.com/" target="_blank" rel="noreferrer">
                              동우개발.com
                            </a>
                          </span>
                        </div>
                        <div className="content">
                          <h5>Category:</h5>
                          <span>
                            Agency
                          </span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
 
            <div className="case-study-details-content">  
              <img src="/images/case-study-details.jpg" alt="동우개발" />

              <h3>
                <span>01.</span> Сhallenge
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit cursus
                amet sem venenatis faucibus non maecenas ultricies feugiat amet
                tellus condimentum eu sed sit ut tempus felis sit sagittis morbi
                sed ultricies feugiat amet tellu indum eu sed sit ut tempus
                felis sit sed.
              </p>
              <ul>
                <li>Cursus amet sem venenatis faucibus non maecenas</li>
                <li>Faucibus non maecenas feugiat amet tellus condimentum</li>
                <li>
                  Venenatis faucibus non maecenas feugiat amet tellus lorem text
                </li>
                <li>Inded anythingfeugiat amet tellus condims</li>
                <li>
                  Tenenatis faucibus non maecenas <b>feugiat</b> amet tellus
                </li>
              </ul>
         
              <h3>
                <span>02.</span> Solutions
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit cursus
                amet sem venenatis faucibus non maecenas ultricies feugiat amet
                tellus condimentum eu sed sit ut tempus felis sit sagittis morbi
                sed ultricies feugiat amet tellu indum eu sed sit ut tempus
                felis sit sed.
              </p>
          
              <p><b>1) Market Analysis</b> <b>2) Business Innovation</b> <b>3) Finance Strategy</b> <b>4) Corporate Management</b></p>
            
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit cursus
                amet sem venenatis faucibus non maecenas ultricies feugiat amet
                tellus condimentum eu sed sit ut tempus felis sit sagittis morbi
                sed ultricies feugiat amet tellu indum eu sed sit ut tempus
                felis sit sed.
              </p>
              
              <h3>
                <span>03.</span> Results
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit cursus
                amet sem venenatis faucibus non maecenas ultricies feugiat amet
                tellus condimentum eu sed sit ut tempus felis sit sagittis morbi
                sed ultricies feugiat amet tellu indum eu sed sit ut tempus
                felis sit sed.
              </p>
              <blockquote className="blockquote"> 
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit fames
                  fusce venenatis mattis lorem orci neque mi nascetur tristique
                  vitae tincidunt sit aliquam iaculis placerat is mattis
                  consectetur adipiscing elit.
                </p>
                <span>By Wonner</span>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudyDetailsContent;
