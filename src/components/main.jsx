import React from "react";

const Home = () => {
  return (
    <>
      <div className=" container hero border-1 pb-3">
        <div className="card bg-light text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src="./images/law.jpg"
            alt="Card"
            height={500}
          />
          <div className="card-img-overlay d-flex align-items-center ">
            <div className="container"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
            >
              <h5 className="card-title fs-1 text fw-lighter">
                SWEET & MAXWELL
              </h5>
              <hr className="my-4" />
              <p className="card-text fs-6 d-none d-sm-block ">
                Sweet & Maxwell is a British publisher specializing in legal
                publications and has been operating in Hong Kong for over 10
                years. It has become one of Asia's most respected providers for
                the business and legal professions.
              </p>
              <p className="card-text fs-3">
                Enjoy Our Professional & Efficient Services!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
