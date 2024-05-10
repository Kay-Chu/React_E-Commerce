import React from "react";

const Footer = () => {
  return (
    <>
<footer className="mb-0 justify-content-between bg-light">
  <div className="d-flex align-items-center justify-content-center p-4">
    <div className="col">
      <img src="images/thomsonreuters.png" alt="Thomson Reuters Logo" />
    </div>
    <div className="col d-flex align-items-center">
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
    <div className="col d-flex align-items-center">
      <div className="mr-3">
        <p style={{ color: 'gray' }}>INFOMATION</p>
      </div>
      <ul className="list-unstyled">
        <li><a href="#" style={{ fontWeight:'lighter', color: 'gray', textDecoration: 'none' }}>TERMS OF USE & DISCLAIMER</a></li>
        <li><a href="#" style={{ fontWeight:'lighter', color: 'gray', textDecoration: 'none' }}>PRIVACY AGREEMENT</a></li>
      </ul>
    </div>
    <div className="col d-flex align-items-center mt-3">
      <div className="mr-3">
        <p style={{ color: 'gray' }}>CONTACT</p>
      </div>
      <p style={{ fontWeight:'lighter', color: 'gray' }}>
        15F, 14 Tai Koo Wan Road<br></br>
        Taikoo Shing<br></br>
        Hong Kong<br></br>
        Fax: +852 2520 6954<br></br>
      </p>
    </div>
    <div className="col d-flex flex-column align-items-center">
      <div className="col d-flex">
        <i class="fab fa-facebook pl-2" style={{color: 'gray'}}></i>
        <i class="fab fa-instagram pl-2" style={{color: 'gray'}}></i>
        <i class="fab fa-twitter pl-2" style={{color: 'gray'}}></i>
      </div>
      
      <p style={{ color: 'gray' }}>@2024 THOMSON REUTERS</p>
    </div>
  </div>
</footer>

    </>
  );
};

export default Footer;
