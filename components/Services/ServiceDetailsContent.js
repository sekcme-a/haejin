import React from "react";
import Link from "next/link";

const ServiceDetailsContent = () => {
  return (
    <>
      <div className="services-details-area pt-100 pb-75">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="services-details-content">
                <Link href="/services">
                  <a className="back-to-services">
                    <i className="ri-arrow-left-line"></i> Beck to Services
                  </a>
                </Link>

                <img src="/images/services-details.jpg" alt="혜진종합관리" />

                <h3>Business Strategy</h3>
                <p>
                  It’s a daunting challenge: How do you move forward at speed
                  despite enormous uncertainty? Radar Strategy provides the
                  answer. Our unique “Today Forward, Future Back” approach
                  enables you to create value now as you move toward your future
                  vision, with the flexibility to adapt as scenarios change.
                  We’ll help you make critical choices and choreograph your
                  transformation journey as you bring your core to full
                  potential and build new growth engines.
                </p>
                <p>
                  Our team of global experts help you achieve sustainable,
                  organic growth by focusing on three critical building blocks:
                  an outside-in approach that puts customers first, a uniquely
                  great customer experience and internal capabilities that
                  ensure you deliver optimal customer interactions at every
                  touchpoint.
                </p>

                <h3>How It Works & How We Do It</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit cursus
                  amet sem venenatis faucibus non maecenas ultricies feugiat
                  amet tellus condimentum eu sed sit ut tempus felis sit
                  sagittis morbi sed ultricies feugiat amet tellu indum eu sed
                  sit ut tempus felis sit sagittis morbi sed.
                </p>
                <ul>
                  <li>Cursus amet sem venenatis faucibus non maecenas</li>
                  <li>Faucibus non maecenas feugiat amet tellus condimentum</li>
                  <li>
                    Venenatis faucibus non maecenas feugiat amet tellus lorem
                    text
                  </li>
                  <li>Inded anythingfeugiat amet tellus condims</li>
                  <li>
                    Tenenatis faucibus non maecenas <b>feugiat</b> amet tellus
                  </li>
                </ul>
 
                <h3>Business Planning & Strategy</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit cursus
                  amet sem venenatis faucibus non maecenas ultricies feugiat
                  amet tellus condimentum eu sed sit ut tempus felis sit
                  sagittis morbi sed ultricies feugiat amet tellu indum eu sed
                  sit ut tempus felis sit sagitti morbi sed lorem Ultricies
                  feugiat amet tellus condimentum eu sed sit loremut tempus
                  felis sit sagittis morbi sed ultricies feugiat ultricies
                  feugiat amet tellus condimentum eu sed sit ut tempus felis sit
                  sagittis morbi sed ultricies feugiat amet tellu.
                </p>

                <blockquote className="blockquote">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit fames
                    fusce venenatis mattis lorem orci neque mi nascetur
                    tristique vitae tincidunt sit aliquam iaculis placerat is
                    mattis consectetur adipiscing elit.
                  </p>
                  <span>By Wonner</span>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailsContent;
