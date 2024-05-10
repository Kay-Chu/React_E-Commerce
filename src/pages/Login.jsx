import React from "react";
import { Link } from "react-router-dom";
import { Footer, Navbar } from "../components";

const Login = () => {
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
              Westlaw Asia Login
            </h3>
            <form>
              <div class="my-3">
                <label for="display-4">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
              </div>
              <div class="my-3">
                <label for="floatingPassword display-4">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                />
              </div>

              <div className="text-center">
                <button
                  class="my-2 customized_button"
                  type="submit"
                  style={{width: "100%"}}
                >
                  LOGIN
                </button>
              </div>
              <div className="my-3 ">
                <br></br>
                <p className="text-center">OR</p>
                <p className="text-center">
                  Do not have an account?{" "}
                  <Link
                    to="/register"
                    className="text-decoration-underline text-info"
                  >
                    Register HERE!
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

export default Login;
