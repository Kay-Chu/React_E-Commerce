import React from "react";
import { Footer, Navbar, ShoppingCart } from "../components";


const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 mt-2 mb-3 p-5 py-3 bg-light ">
        <h1 className="text-center">About Us</h1>
        <hr />
        <h4 className="pt-5"
        style={{color:"#0178ae"}}
        >SWEET & MAXWELL</h4>
        <p className="lead">
          Sweet & Maxwell is proud to be part of Thomson Reuters. By combining
          more than 200 years of history in business and legal publishing with
          an expert local editorial team in Hong Kong, Sweet & Maxwell has
          become one of AsiaÂ’s most respected providers for the business and
          legal professions. Sweet & Maxwell delivers detailed and specialist
          knowledge, understanding, interpretation and commentary across a wide
          range of essential subjects reflecting the very latest trends in Asian
          Business. Sweet & Maxwell has been operating in Hong Kong for over 10
          years and delivers print and online information in books, journals,
          periodicals and looseleaf formats to customers in Hong Kong, Macau,
          Japan, Korea, Taiwan and Mongolia. We are pleased to include within
          our customer base leading local and global law firms, accounting
          firms, tax firms, financial institutions, government bodies and
          academic institutions. Our authors represent some of the leading
          practitioners and academics in the territory, producing essential
          practitioner and student works.
        </p>

        <h4 className="py-4" style={{color:"#0178ae"}}>SWEET & MAXWELL AND THOMSON REUTERS</h4>
        <p className="lead">
          Thomson Reuters is the worldÂ’s leading source of intelligent
          information for businesses and professionals, combining industry
          expertise with innovative technology to deliver critical information
          to leading decision makers in the financial, legal, tax and
          accounting, scientific, healthcare and media markets, powered by the
          worldÂ’s most trusted news organization. With headquarters in New York
          and major operations in London and Eagan, Minnesota, Thomson Reuters
          employs more than 50,000 people in 93 countries.
        </p>
        <div className="p-5 row ">
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card "
            style={{height:"150px"}}
            >
              <img
                className="card-img-top img-fluid"
                src="/images/WestlawHK.jpg"
              />
              <div className="card-body ">
                <h6 className="card-title text-center">WESTLAW HK</h6>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-80"
            style={{height:"150px"}}>
              <img
                className="card-img-top img-fluid"
                src="/images/Westlawint.jpg"
                alt=""
                height={160}
              />
              <div className="card-body">
                <h6 className="card-title text-center">WESTLAW INTERNATIONAL</h6>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-80"
            style={{height:"150px"}}>
              <img
                className="card-img-top img-fluid"
                src="/images/WestlawBusiness.jpg"
                alt=""
                height={160}
              />
              <div className="card-body">
                <h6 className="card-title text-center">WESTLAW BUSINESS</h6>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-80"
            style={{height:"150px"}}>
              <img
                className="card-img-top img-fluid"
                src="/images/westlawchina.jpg"
                alt=""
                height={160}
                maxHeight="20px"
              />
              <div className="card-body pb-0">
                <h6 className="card-title text-center">WESTLAW CHINA</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ShoppingCart />
      <Footer />
    </>
  );
};

export default AboutPage;
