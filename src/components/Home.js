import React from "react";
import profilePic from "../img/profilePic.jpeg";
import git from "../img/git.svg";
import slack from "../img/slack.svg";
import internLogo from "../img/internLogo.png";
import I4G from "../img/I4G.png";

const Home = () => {
  return (
    <div className="container">
      <div className="profile">
        <img id="profile__img" src={profilePic} alt="Profile" />
        <h4 id="twitter">Haymosx</h4>
      </div>
      <div className="links">
        <ul>
          <a
            id="twitter"
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/AkinbandeAmos"
          >
            <li>Twitter Link</li>
          </a>
          <a
            id="btn__zuri"
            target="_blank"
            rel="noreferrer"
            href="https://training.zuri.team/"
          >
            <li>Zuri Team</li>
          </a>
          <a
            id="books"
            target="_blank"
            rel="noreferrer"
            href="http://books.zuri.team"
          >
            <li>Zuri Books</li>
          </a>
          <a
            id="book__python"
            target="_blank"
            rel="noreferrer"
            href="https://books.zuri.team/python-for-beginners?ref_id=U043TUJMJTH"
          >
            <li>Python Books</li>
          </a>
          <a
            id="pitch"
            target="_blank"
            rel="noreferrer"
            href="https://background.zuri.team"
          >
            <li>Background Check for Coders</li>
          </a>
          <a
            id="book__design"
            target="_blank"
            rel="noreferrer"
            href="https://books.zuri.team/design-rules"
          >
            <li>Design Books</li>
          </a>
        </ul>
      </div>
      <div className="icon">
        <a target="_blank" rel="noreferrer" href="https://slack.com">
          <img src={slack} alt="slack" />
        </a>
        <a target="_blank" rel="noreferrer" href="https://github.com">
          <img src={git} alt="github" />
        </a>
      </div>
      <div className="footer">
        <div className="line"></div>
        <div className="footer_cont">
          <img src={internLogo} alt="internLogo" className="int" />
          <h5>HNG Internship 9 Frontend Task</h5>
          <img src={I4G} alt="i4g" className="i4g" />
        </div>
      </div>
    </div>
  );
};

export default Home;
