import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FiHome } from 'react-icons/fi';
import { FiVideo } from 'react-icons/fi';
import { MdSubscriptions } from 'react-icons/md';
import { MdHistory } from 'react-icons/md';
import { MdOutlineVideoLibrary } from 'react-icons/md';
import { FiSettings } from 'react-icons/fi';
import { FiHelpCircle } from 'react-icons/fi';
import { FiFlag } from 'react-icons/fi';
import { MdOutlineFeedback} from 'react-icons/md';
import Topbar from './Topbar';
import MobileMenu from './MobileMenu';
import { useSelector } from 'react-redux';

function Sidebar ({playerClassName}) {

    // const [ sideToggle, setSideToggle] = useState(false)

    // const ToggleSidebar = () => {
    //     sideToggle === true ? setSideToggle(false) : setSideToggle(true);
    // }

        const toggleSide = useSelector((state) => state.toggle.value)
        
        

    return (
      <>
        

        <div className={`sidebar ${toggleSide && 'active'}`}>
          <nav>
            <ul className="links">
              <div className="link-container">
                <li>
                  <FiHome className="fa-icon" />
                  <a href="#">Home</a>
                </li>
                <li>
                  <FiVideo className="fa-icon" />
                  <a href="#">Shorts</a>
                </li>
                <li>
                  <MdSubscriptions className="fa-icon" />
                  <a href="#">Subscription</a>
                </li>
                <hr />
                <li>
                  <MdOutlineVideoLibrary className="fa-icon" />
                  <a href="#">Library</a>
                </li>
                <li>
                  <MdHistory className="fa-icon" />
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
                  <FiSettings className="fa-icon" />
                  <a href="#">Settings</a>
                </li>
                <li>
                  <FiFlag className="fa-icon" />
                  <a href="#">Report history</a>
                </li>
                <li>
                  <FiHelpCircle className="fa-icon" />
                  <a href="#">Help</a>
                </li>
                <li>
                  <MdOutlineFeedback className="fa-icon" />
                  <a href="#">Send feedback</a>
                </li>
              </div>
            </ul>
          </nav>
        </div>
      </>
    );
}
export default Sidebar