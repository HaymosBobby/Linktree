import React from "react";
import internLogo from "../img/internLogo.png";
import I4G from "../img/I4G.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="line"></div>
      <div className="footer_cont">
        <img src={internLogo} alt="internLogo" className="int" />
        <h5>HNG Internship 9 Frontend Task</h5>
        <img src={I4G} alt="i4g" className="i4g" />
      </div>
    </div>
  );
};

export default Footer;
