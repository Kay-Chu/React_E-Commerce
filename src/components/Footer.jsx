import React from "react";

const Footer = () => {
  return (
    <footer className="d-flex align-items-center justify-content-center bg-light p-4 mx-0">

        <div className="row ">
          <div className="col-12 col-sm-6 col-md-2 d-flex align-items-center  justify-content-center">
            <img src="/images/thomsonreuters.png" alt="Thomson Reuters Logo" />
          </div>
          <div className="col-12 col-sm-6 col-md-2" />
           
          <div className="col-12 col-sm-6 col-md-2 d-flex align-items-center">
            <div className="mr-3">
              <p style={{ color: 'gray' }}>SERVICES</p>
            </div>
            <ul className="list-unstyled">
              <li><a href="#" style={{ fontWeight:'lighter', color: 'gray', textDecoration: 'none' }}>Online Bookstore</a></li>
              <li><a href="#" style={{ fontWeight:'lighter', color: 'gray', textDecoration: 'none' }}>EBook</a></li>
              <li><a href="#" style={{ fontWeight:'lighter', color: 'gray', textDecoration: 'none' }}>About Us</a></li>
              <li><a href="#" style={{ fontWeight:'lighter', color: 'gray', textDecoration: 'none' }}>Contact Us</a></li>
            </ul>
          </div>
          <div className="col-12 col-sm-6 col-md-2 d-flex align-items-center">
            <div className="mr-3">
              <p style={{ color: 'gray' }}>INFOMATION</p>
            </div>
            <ul className="list-unstyled">
              <li><a href="#" style={{ fontWeight:'lighter', color: 'gray', textDecoration: 'none' }}>TERMS OF USE & DISCLAIMER</a></li>
              <li><a href="#" style={{ fontWeight:'lighter', color: 'gray', textDecoration: 'none' }}>PRIVACY AGREEMENT</a></li>
            </ul>
          </div>
          <div className="col-12 col-sm-6 col-md-2 d-flex align-items-center">
            <div className="mr-3">
              <p style={{ color: 'gray' }}>CONTACT</p>
            </div>
            <p style={{ fontWeight:'lighter', color: 'gray' }}>
              15F, 14 Tai Koo Wan Road<br />
              Taikoo Shing<br />
              Hong Kong<br />
              Fax: +852 2520 6954<br />
            </p>
          </div>
          <div className="col-12 col-sm-6 col-md-2 d-flex  justify-content-center flex-column align-items-center">
            <div className="d-flex">
              <i className="fab fa-facebook pl-2" style={{ color: 'gray' }}></i>
              <i className="fab fa-instagram pl-2" style={{ color: 'gray' }}></i>
              <i className="fab fa-twitter pl-2" style={{ color: 'gray' }}></i>
            </div>
            <p style={{ color: 'gray' }}>@2024 THOMSON REUTERS</p>
          </div>
        </div>

    </footer>
  );
};

export default Footer;