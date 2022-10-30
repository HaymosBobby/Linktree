import React from "react";
import Footer from "../components/Footer";
import arrow_left from "../img/arrow_left.svg";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not_found">
      <div className="wrapper">
        <h6>404 error</h6>
        <h1>We can’t find that page</h1>
        <h4 className="desk">
          Sorry, the page you are looking for doesn't exist.
        </h4>
        <h4 className="mob">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </h4>
        <div className="button">
          <Link to="/" className="btn btn_light">
            <img src={arrow_left} alt="back" /> Go back
          </Link>
          <a href="/" className="btn btn_pry">
            Take me home
          </a>
        </div>
      </div>
      <div className="container">
        <Footer />
      </div>
    </div>
  );
};

export default NotFound;
