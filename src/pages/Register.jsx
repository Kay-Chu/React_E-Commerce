import React from "react";
import { Footer, Navbar } from "../components";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <div class="row">
          <div className="col-md-4 col-lg-6 col-sm-8 mx-auto">
            <img src="/images/thomsonreuters.png" />
          </div>
        </div>
        <div class="row my-4 h-100">
          <div
            className="col-md-4 col-lg-6 col-sm-8 mx-auto p-5"
            style={{ backgroundColor: "#f9f9f9" }}
          >
            <h3
              className=""
              style={{ color: "#ffa734", fontWeight: "lighter" }}
            >
              Westlaw Asia Account Register
            </h3>
            <form>
              <div class="form my-3">
                <label for="Name">Full Name</label>
                <input
                  type="email"
                  class="form-control"
                  id="Name"
                  placeholder="Enter Your Name"
                />
              </div>
              <div class="form my-3">
                <label for="Email">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="Email"
                  placeholder="name@example.com"
                />
              </div>
              <div class="form  my-3">
                <label for="Password">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="Password"
                  placeholder="Password"
                />
              </div>
              <div className="text-center">
                <button
                  class="my-2 customized_button"
                  type="submit"
                  style={{width: "100%"}}
                >
                  CONTINUE
                </button>
              </div>
              <div className="my-3 ">
                <br></br>
                <p className="text-center">OR</p>
                <p className="text-center">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="text-decoration-underline text-info"
                  >
                    Login HERE!
                  </Link>{" "}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
