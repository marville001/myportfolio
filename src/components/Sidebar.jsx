import React from "react";

import facebook from "../assets/icons/facebook.svg";
import github from "../assets/icons/github.svg";
import instagram from "../assets/icons/instagram.svg";
import pin from "../assets/icons/pin.svg";
import tie from "../assets/icons/tie.svg";
import mightycoder from "../assets/mightycoder.svg";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <img src={mightycoder} alt="avatar" className="sidebar__avatar" />
      <div className="sidebar__name">
        Martin <span>Mwangi</span>
      </div>
      <div className="sidebar__item sidebar__title">Web Developer</div>
      <a href="">
        <div className="sidebar__item">
          <img src={tie} alt="resume" className="sidebar__icon" /> Download
          Resume
        </div>
      </a>
      <figure className="sidebar__social-icons my-2">
        <a href="">
          <img src={facebook} className="sidebar__icon mr-3" alt="facebook" />
        </a>
        <a href="">
          <img src={instagram} className="sidebar__icon" alt="instagram" />
        </a>
      </figure>
      <div className="sidebar__contact">
        <div className="sedebar__item">
          <a href="">
            <img src={github} alt="" className="sidebar__icon" />
            github
          </a>
        </div>
        <div className="sidebar__location">
          <img src={pin} alt="location" className="sidebar__icon" />
          Murang'a Kenya
        </div>
        <div className="sidebr__item">mwangimartin1904@gmail.com</div>
        <div className="sidebr__item">+254700207054 / +254762075082</div>
      </div>
      <div className="sidebar__item sidebar__email">email me</div>
    </div>
  );
};

export default Sidebar;
