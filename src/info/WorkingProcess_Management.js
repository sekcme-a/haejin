import useData from "context/data";
import React from "react";
import EditButton from "src/admin/EditButton";

const WorkingProcess = () => {
  const {data} = useData()


  return (
    <>
      <div className="working-process-area pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <span>Management Philosophy</span>
            <h2 style={{position:"relative"}}>
              {data?.info?.management_title}
              <EditButton type="info" item="management_title" text="제목" />
            </h2>
          </div>

          <div className="row justify-content-center">

            
            <div className="col-lg-3 col-sm-6">
              <div className="single-working-process-card">
                <div className="number">01</div>
                <h3 style={{position:"relative"}}>
                  {data.info.management_content_title1}
                  <EditButton type="info" item="management_content_title1" text="제목1" />
                </h3>
                <p style={{position:"relative"}}>
                  {data.info.management_content_text1}
                  <EditButton type="info" item="management_content_text1" text="내용1" />
                </p>
              </div>
            </div>


            <div className="col-lg-3 col-sm-6">
              <div className="single-working-process-card">
                <div className="number">02</div>
                <h3 style={{position:"relative"}}>
                  {data.info.management_content_title2}
                  <EditButton type="info" item="management_content_title2" text="제목2" />
                </h3>
                <p style={{position:"relative"}}>
                  {data.info.management_content_text2}
                  <EditButton type="info" item="management_content_text2" text="내용2" />
                </p>
              </div>
            </div>


            <div className="col-lg-3 col-sm-6">
              <div className="single-working-process-card">
                <div className="number">03</div>
                <h3 style={{position:"relative"}}>
                  {data.info.management_content_title3}
                  <EditButton type="info" item="management_content_title3" text="제목3" />
                </h3>
                <p style={{position:"relative"}}>
                  {data.info.management_content_text3}
                  <EditButton type="info" item="management_content_text3" text="내용3" />
                </p>
              </div>
            </div>


            <div className="col-lg-3 col-sm-6">
              <div className="single-working-process-card">
                <div className="number">04</div>
                <h3 style={{position:"relative"}}>
                  {data.info.management_content_title4}
                  <EditButton type="info" item="management_content_title4" text="제목4" />
                </h3>
                <p style={{position:"relative"}}>
                  {data.info.management_content_text4}
                  <EditButton type="info" item="management_content_text4" text="내용4" />
                </p>
              </div>
            </div>

            <div className="working-process-line"></div>
          </div>
        </div>
      </div>


    </>
  );
};

export default WorkingProcess;
