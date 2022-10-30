import React from "react";
import profilePic from "../img/profilePic.jpeg";
import git from "../img/git.svg";
import slack from "../img/slack.svg";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="container">
      <div className="profile">
        <img id="profile__img" src={profilePic} alt="Profile" />
        <h4 id="twitter">Akinbande Amos</h4>
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
      <Footer />
    </div>
  );
};

export default Home;
