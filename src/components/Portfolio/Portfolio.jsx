import React from "react";
import "./Portfolio.css";

function Portfolio() {
  return (
    <div className="Portfolio">
      <h1>This is my Portfolio:</h1>
      <p>
        I've done some projects in Front as well as in Back. Some of them are:
      </p>
      <p>Frontend:</p>
      <ul>
        <li>Boostrap Investigation: (HTML, CSS, JavaScript, Boostrap)</li>
        <li>
          Quiz: (HTML, CSS, JavaScript, Single Page Application (SPA), API's
          research, Bootstrap).
        </li>
      </ul>
      <p>Backend:</p>
      <ul>
        <li>E-commerce (MySQL, Express, NodelS, Sequelize).</li>
        <li>Social Network (MongoDB, Mongoose, Express)</li>
      </ul>
      <p>
        Click on the Github logo to check my repositories and have a detailed
        sight about the code of the projects :)
      </p>
      <a href="https://github.com/nblancoz">
        <img id="github" src="../assets/Github-logo.png" alt="" />
      </a>
    </div>
  );
}

export default Portfolio;
