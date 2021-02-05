import React from "react";

import facebook from "../assets/icons/facebook.svg";
import github from "../assets/icons/github.svg";
import instagram from "../assets/icons/instagram.svg";
import pin from "../assets/icons/pin.svg";
import tie from "../assets/icons/tie.svg";
import mightycoder from "../assets/mightycoder.svg";
import resume from "../assets/resume.pdf"

const Sidebar = () => {

  const handleEmail = ()=>{
    window.open("mailto:mwangimartin1904@gmail.com");
  }

  return (
    <div className="sidebar">
      <img src={mightycoder} alt="avatar" className="sidebar__avatar" />
      <div className="sidebar__name">
        Martin <span>Mwangi</span>
      </div>
      <div className="sidebar__item sidebar__title">Web Developer</div>
      <a href={resume} download="resume.pdf">
        <div className="sidebar__item sidebar__resume">
          <img src={tie} alt="resume" className="sidebar__icon" /> Download
          Resume
        </div>
      </a>
      <figure className="sidebar__social-icons my-2">
        <a href="https://www.facebook.com/marville001">
          <img src={facebook} className="sidebar__icon mr-3" alt="facebook" />
        </a>
        <a href="https://www.instagram.com/marville001">
          <img src={instagram} className="sidebar__icon" alt="instagram" />
        </a>
      </figure>
      <div className="sidebar__contact">
        <div className="sidebar__item sidebar__github">
          <a href="https://www.github.com/marville001">
            <img src={github} alt="" className="sidebar__icon mr-2" />
            github
          </a>
        </div>
        <div className="sidebar__location">
          <img src={pin} alt="location" className="sidebar__icon mr-2" />
          Murang'a Kenya
        </div>
        <div className="sidebr__item my-3">mwangimartin1904@gmail.com</div>
        <div className="sidebr__item">+254700207054</div>
      </div>
      <div onClick={handleEmail} className="sidebar__item sidebar__email">email me</div>
    </div>
  );
};

export default Sidebar;
