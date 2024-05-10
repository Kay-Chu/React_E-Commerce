import React from "react";
import Subtitle from "./Subtitle";


const Services = () => {
  const servicesData = [
    {
      title: "EXCLUSIVE WESTLAW ASIA OFFERS\r\nMEMBERS OF THE HONG KONG BAR ASSOCIATION!",
      imageSrc: "/images/service1.png",
    },
    {
      title: "THOMSON REUTERSS\r\nPRACTICAL LAW SUPPORT",
      imageSrc: "/images/service2.png",
    },
    {
      title: "FIND OUT ABOUT WETLAW ASIA",
      imageSrc: "/images/service3.png",
    },
  ];

  return (
    <div className="services">

      <div className="container">

<Subtitle text="Featured Services" />

        {servicesData.map((service, index) => (
          <div className="row mb-4" key={index}>
            <div className="col-md-12">
              <div className="service d-flex justify-content-between">
                <h5 className="service-title"
                style={{color: "#0178ae"}}
                >{service.title}</h5>
                
                <div >
                <img
                    className="service-image"
                    src={service.imageSrc}
                    alt={service.title}
                    style={{ paddingRight: "20px", width: "220px" }}
                  />
                  <button className="service-button"
                  >
                  <i className="fa fa-angle-double-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
