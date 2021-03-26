import React from "react";
import api from "../assets/icons/api.svg";
import ux from "../assets/icons/ux.svg";
import computer from "../assets/icons/computer.svg";
import SkillCard from "./SkillCard";
const skills = [
  {
    icon: computer,
    title: "Frontend Development",
    about:
      "I can build beautiful, responsive and scalable websites using Html, Css and Reactjs",
  },
  {
    icon: api,
    title: "Backend Development",
    about: "I can handle databases and apis using nodejs and expressjs",
  },
  {
    icon: ux,
    title: "UI/UX Designer",
    about: "I can create minimalist user interfaces using adobe xd",
  },
];

const About = () => {
  return (
    <div className="about">
      <h6 className="about__intro">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam
        quia asperiores ad veritatis neque commodi.
      </h6>
      <div className="container about__container">
        <h6 className="about__heading">What I offer</h6>
        <div className="row">
          {skills.map((skill) => (
            <SkillCard skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
