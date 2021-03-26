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
            <p className="resume-card__name">Dedan Kimathi University</p>
            <p className="resume-card__details">
              Am currently a student in Dedan Kimathi University of Technology persuing bachelor of science in computer science. Fourth year second semester
            </p>
          </div>
        </div>
        <div className="col-lg-6 resume=card">
          <h4 className="resume-card__heading">Experience</h4>
          <div className="resume-card__body">
            <h5 className="resume-card__title">FreeLancer</h5>
            <p className="resume-card__name">3 years + Experience</p>
            <p className="resume-card__details">
              I have been programming and working on personal project for 3 years where i have gained experience in various languages.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 resume-languages">
          <h5 className="resume-language__heading">Language and Frameworks</h5>
          <div className="resume-language__body mt-3">
            {languages.map((language) => (
              <Bar value={language} />
            ))}
          </div>
        </div>
        <div className="col-lg-6 resume-languages">
          <h5 className="resume-language__heading">Tools and Softwares</h5>
          <div className="resume-language__body mt-3">
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
