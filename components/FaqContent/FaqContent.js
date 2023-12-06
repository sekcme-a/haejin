import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const FaqContent = () => {
  return (
    <>
      <div className="faq-area-without-color ptb-100">
        <div className="container">
          <div className="section-title">
            <span>Ask Any Questions</span>
            <h2>Boost Business With Creative Idea & Brand Solutions With Us</h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-7 col-md-12">
              <div className="faq-accordion">
                <Accordion preExpanded={["a"]}>
                  <AccordionItem uuid="a">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Company Provides A Full Range of Services?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Donec sollicitudin molestie malesuada. Pellentesque in
                        ipsum id orci porta dapibus. Curabitur arcu erat
                        accumsan id imperdiet et porttitor at sem. Nulla
                        porttitor accumsan tincidunt.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="b">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        How Long It Will Take For Web Development?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Donec sollicitudin molestie malesuada. Pellentesque in
                        ipsum id orci porta dapibus. Curabitur arcu erat
                        accumsan id imperdiet et porttitor at sem. Nulla
                        porttitor accumsan tincidunt.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="c">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        What About Money Back Guarantee!
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Donec sollicitudin molestie malesuada. Pellentesque in
                        ipsum id orci porta dapibus. Curabitur arcu erat
                        accumsan id imperdiet et porttitor at sem. Nulla
                        porttitor accumsan tincidunt.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="d">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        How to Create an Account?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Donec sollicitudin molestie malesuada. Pellentesque in
                        ipsum id orci porta dapibus. Curabitur arcu erat
                        accumsan id imperdiet et porttitor at sem. Nulla
                        porttitor accumsan tincidunt.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="e">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        How to I get the service?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Donec sollicitudin molestie malesuada. Pellentesque in
                        ipsum id orci porta dapibus. Curabitur arcu erat
                        accumsan id imperdiet et porttitor at sem. Nulla
                        porttitor accumsan tincidunt.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqContent;
