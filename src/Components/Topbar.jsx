import React, { useState, createContext } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from "react-redux";
import { toggle } from '../States/ToggleState'
import { search } from '../States/Search';
import logo from "../img/YouTubeWhiteLogo.png";
import { FiMenu } from 'react-icons/fi';
import { FiSearch } from 'react-icons/fi';
import { FiMic } from 'react-icons/fi';
import { FiMoreVertical } from 'react-icons/fi';
import SearchBox from "./SearchBox";
import { useNavigate, useLocation } from 'react-router-dom';

import { pstoggle } from "../States/PSToggleState";



function Topbar (){

   const toggleSide = useSelector((state) => state.toggle.value);
   const pstoggleSide = useSelector((state) => state.pstoggle.value);
   const location = useLocation()

   console.log(location.pathname)

  

    const [searchValue, setSearchValue] = useState('')

    // function getSearchValue(){

    //   console.log(searchText.value)

    // }

    const navigate = useNavigate()
    const dispatchToggle = useDispatch()
    
    

     const dispatchSearch = useDispatch();

    function dispatchSidebar(){

      if (location.pathname = "/"){
        dispatchToggle(toggle({payload : toggleSide}))
      }

      if(location.pathname = "/video/"){
        dispatchToggle(pstoggle({payload : pstoggleSide}))
      }
  

    }
    
    
   

    

    

    return (
      <div className="topbar">
        <div className="logo">
          <button className='sidebar-icon'>
            <FiMenu
              size={22}
              onClick={dispatchSidebar}
            />
          </button>

          <img src={logo} alt="youtube-logo" onClick={()=>{navigate('/')}} />
        </div>
        <div className="search-box">
          <SearchBox />
          {/* <input className="search" type="text" onChange={(e)=> dispatchSearchText(e.target.value)} placeholder="Search"></input> */}
          
          <button className="mic-btn">
            <FiMic className="fa-icon" />
          </button>
        </div>

        <div className="account-box">
          <FiMoreVertical className="fa-icon more-icon" />
          <button className="sign-in-btn">
            <i className="fa-regular fa-circle-user"></i>SIGN IN
          </button>
        </div>
      </div>
    );
}


export default Topbar