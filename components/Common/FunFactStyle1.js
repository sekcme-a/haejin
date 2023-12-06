import React from "react";

const FunFactStyle1 = () => {
  return (
    <>
      <div className="fun-fact-area pt-100 pb-75">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-sm-6 col-6">
              <div className="single-funfact-card">
                <h3>
                  <span className="number">1,286</span>
                  <span className="small-text">+</span>
                </h3>
                <p>
                  Happy <br /> Clients
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-6">
              <div className="single-funfact-card">
                <h3>
                  <span className="number">1,383</span>
                  <span className="small-text">+</span>
                </h3>
                <p>
                  Total <br /> Projects
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-6">
              <div className="single-funfact-card">
                <h3>
                  <span className="number">1,185</span>
                  <span className="small-text">+</span>
                </h3>
                <p>
                  Worldwide <br /> Partner
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-6">
              <div className="single-funfact-card">
                <h3>
                  <span className="number">1,682</span>
                  <span className="small-text">+</span>
                </h3>
                <p>
                  Positive <br /> Review
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="fun-fact-shape-1">
          <img src="/images/features/shape-1.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default FunFactStyle1;
