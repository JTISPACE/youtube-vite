import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiHome } from "react-icons/fi";
import { FiVideo } from "react-icons/fi";
import { MdSubscriptions } from "react-icons/md";
import { MdHistory } from "react-icons/md";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import { FiHelpCircle } from "react-icons/fi";
import { FiFlag } from "react-icons/fi";
import { FiMenu } from "react-icons/fi";
import { MdOutlineFeedback } from "react-icons/md";
import MobileMenu from "./MobileMenu";
import logo from "../img/YouTubeWhiteLogo.png";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toggle } from "../States/ToggleState";

import "../Components/playersidebar.css";

function PlayerSidebar() {
  const dispatchToggle = useDispatch();

  const toggleSide = useSelector((state) => state.toggle.value);

  const [sidebarOver, setSidebarOver] = useState("");

  function playerSidebarOver() {
    setSidebarOver("player-sidebar-over");
  }

  function playerSidebarLeave() {
    setSidebarOver("");
  }

  function dispatchPsToggle() {
    dispatchToggle(toggle({ payload: toggleSide }));
  }

  return (
    <>
      <div className="mobile-menu">
        <MobileMenu />
      </div>
      <div
        className={`player-sidebar-overlay ${toggleSide && "active"}`}
        onLoad={dispatchPsToggle}
      >
        <div className={`player-sidebar ${toggleSide && "active"}`}>
          <div className="pg-sidebar-logo">
            <button className="pg-sidebar-icon">
              <FiMenu size={22} onClick={dispatchPsToggle} />
            </button>

            <img src={logo} alt="youtube-logo" />
          </div>
          <div
            className={`player-sidebar-nav ${sidebarOver}`}
            onMouseEnter={playerSidebarOver}
            onMouseLeave={playerSidebarLeave}
          >
            <nav>
              <ul className="links">
                <div className="link-container">
                  <Link
                    to={"/"}
                    style={{ textDecoration: "none", color: "#fff" }}
                  >
                    <li>
                      <FiHome size={20} />
                      <a href="#">Home</a>
                    </li>
                  </Link>
                  <li>
                    <FiVideo size={20} />
                    <a href="#">Shorts</a>
                  </li>
                  <li>
                    <MdSubscriptions size={20} />
                    <a href="#">Subscription</a>
                  </li>
                  <hr />
                  <li>
                    <MdOutlineVideoLibrary size={20} />
                    <a href="#">Library</a>
                  </li>
                  <li>
                    <MdHistory size={20} />
                    <a href="#">History</a>
                  </li>
                </div>

                <hr />
                <span className="link-text">Explore</span>
                <div className="link-container">
                  <li>
                    <i className="fa-solid fa-icon fa-fire"></i>
                    <a href="#">Trending</a>
                  </li>
                  <li>
                    <i className="fa-solid fa-icon fa-music"></i>
                    <a href="#">Music</a>
                  </li>
                  <li>
                    <i className="fa-solid fa-icon fa-gamepad"></i>
                    <a href="#">Gaming</a>
                  </li>
                  <li>
                    <i className="fa-solid fa-icon fa-newspaper"></i>
                    <a href="#">News</a>
                  </li>
                  <li>
                    <i className="fa-solid fa-icon fa-trophy"></i>
                    <a href="#">Sports</a>
                  </li>
                  <hr />
                </div>

                <li>
                  <i className="fa-solid fa-icon fa-plus"></i>
                  <a href="#">Browse Channels</a>
                </li>

                <hr />

                <span className="link-text">More from Youtube</span>

                <div className="link-container">
                  <li>
                    <i className="fa-brands fa-icon yt-nav fa-youtube"></i>
                    <a href="#">Youtube Premuim</a>
                  </li>
                  <li>
                    <i className="fa-solid fa-icon yt-nav fa-circle-play"></i>
                    <a href="#">Youtube Music</a>
                  </li>
                  <li>
                    <i className="fa-brands fa-icon yt-nav fa-square-youtube"></i>
                    <a href="#">Youtube Kids</a>
                  </li>
                  <li>
                    <i className="fa-solid fa-icon yt-nav fa-tv"></i>
                    <a href="#">Youtube TV</a>
                  </li>
                </div>

                <hr />

                <div className="link-container">
                  <li>
                    <FiSettings size={20} />
                    <a href="#">Settings</a>
                  </li>
                  <li>
                    <FiFlag size={20} />
                    <a href="#">Report history</a>
                  </li>
                  <li>
                    <FiHelpCircle size={20} />
                    <a href="#">Help</a>
                  </li>
                  <li>
                    <MdOutlineFeedback size={20} />
                    <a href="#">Send feedback</a>
                  </li>
                </div>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default PlayerSidebar;
