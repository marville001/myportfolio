import React from "react";
import react from "../assets/icons/react.svg";
import Bar from "./Bar";

const languages = [
  { icon: react, name: "React", level: "80" },
  { icon: react, name: "Python", level: "65" },
  { icon: react, name: "Java", level: "60" },
];

const tools = [
  { icon: react, name: "Figma", level: "50" },
  { icon: react, name: "Adobe XD", level: "70" },
  { icon: react, name: "Pycharm", level: "90" },
];

const Resume = () => {
  return (
    <div className="container resume">
      <div className="row">
        <div className="col-lg-6 resume=card">
          <h4 className="resume-card__heading">Education</h4>
          <div className="resume-card__body">
            <h5 className="resume-card__title">Computer Science</h5>
            <p className="resume-card__name">Academy of Technology</p>
            <p className="resume-card__details">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit
              corrupti facere optio.
            </p>
          </div>
        </div>
        <div className="col-lg-6 resume=card">
          <h4 className="resume-card__heading">Experience</h4>
          <div className="resume-card__body">
            <h5 className="resume-card__title">Lorem, ipsum.</h5>
            <p className="resume-card__name">Lorem, ipsum dolor.</p>
            <p className="resume-card__details">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit
              corrupti facere optio.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 resume-language">
          <h5 className="resume-language__heading">Language and Frameworks</h5>
          <div className="resume-language__body">
            {languages.map((language) => (
              <Bar value={language} />
            ))}
          </div>
        </div>
        <div className="col-lg-6 resume-language">
          <h5 className="resume-language__heading">Tools and Softwares</h5>
          <div className="resume-language__body">
            {tools.map((tool) => (
              <Bar value={tool} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
