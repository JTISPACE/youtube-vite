import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiHome } from "react-icons/fi";
import { FiVideo } from "react-icons/fi";
import { MdSubscriptions } from "react-icons/md";
// import { MdHistory } from 'react-icons/md';
import { MdOutlineVideoLibrary } from "react-icons/md";

function MobileMenu() {

   const [navbar, setNavbar] = useState()

  const hideNav = ()=>{
    console.log(window.scrollY)
    // if(window.scrollY >= 80){
    //   console.log('scroll')
    //   setNavbar(true);

    // }else{
    //   setNavbar(false);
    // }
    
  }

  window.addEventListener('scroll', hideNav);

 

  
  
 

  return (
    <>
      <div className={navbar ? `mobile-menu active ` : `mobile-menu`}>
        <ul className="mobile-links">
          <div className="link-box">
            <Link to={"/"} style={{ textDecoration: "none", color: "#fff" }}>
              <li>
                <FiHome size={20} />
                <a href="#">Home</a>
              </li>
            </Link>
          </div>
          <div className="link-box">
            <li>
              <FiVideo size={20} />
              <a href="#">Shorts</a>
            </li>
          </div>
          <div className="link-box">
            <li>
              <MdSubscriptions size={20} />
              <a href="#">Subscription</a>
            </li>
          </div>
          <div className="link-box">
            <li>
              <MdOutlineVideoLibrary size={20} />
              <a href="#">Library</a>
            </li>
          </div>
          {/* <div className="link-box history-btn"><li><MdHistory className="fa-icon"/><a href="#">History</a></li></div> */}
        </ul>
      </div>
    </>
  );
}

export default MobileMenu;
