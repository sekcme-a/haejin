import EditButton from "src/admin/EditButton";
import useData from "context/data";
import React from "react";

const PR = {position:"relative"}


const Partner = () => {
  const {data} = useData()

  const list = [
    {
      img:"/images/info/logo/default_logo1.png",
      title:"2Z SOFT",
      subtitle:"이지소프트",
      url:"https://www.naver.com"
    },
    {
      img:"/images/info/logo/default_logo2.png",
      title:"2Z SOFT",
      subtitle:"이지소프트"
    },
    {
      img:"/images/info/logo/default_logo1.png",
      title:"2Z SOFT",
      subtitle:"이지소프트",
      url:"https://www.naver.com"
    },
    {
      img:"/images/info/logo/default_logo2.png",
      title:"2Z SOFT",
      subtitle:"이지소프트"
    },
  ]


  return (
    <>
      <div className="team-area-without-color pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <span>Partner Company</span>
            <h2>혜진종합관리의 협력사를 소개합니다.</h2>
          </div>

          <div className="row justify-content-center" style={PR}>
            <EditButton mode="arrOfObj_partner"
              type='info' item="partner_list" text="협력사"
            />
            {data?.info?.partner_list?.map((item, index) => (

              <div className="col-lg-3 col-sm-6" key={index}>
                <div className="single-team-item">
                  <div className="team-image">
                    <img src={item.imgUrl} alt={item.title ?? "협력사 바탕"} style={{height:"200px", objectFit:"contain"}}/>
                    { item.url &&
                      <div className="social">
                        <a target="_blank" href={item.url} rel="noreferrer">
                          <h6 style={{color:"white", cursor:"pointer"}} >홈페이지 보러가기</h6>
                        </a>
                      </div>
                    }
                  </div>
                  <div className="team-content">
                    <h3>{item.title}</h3>
                    <span>{item.subtitle}</span>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>

        <div className="team-shape-1">
          <img src="/images/team/shape-1.png" alt="협력사" />
        </div>
      </div>
    </>
  );
};

export default Partner;
