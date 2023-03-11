import React from 'react'
import { FiMoreVertical } from "react-icons/fi";
import "../Components/SearchCard.css";

function SearchCard({ title, thumbnail, channelTitle, description, channelPic}) {
  return (
    <>
      <div className="search-video-card">
        <div className="search-thumbnail">
          <img src={thumbnail} alt="youtubeThumbnail" />
        </div>
        <div className="search-channel-box">
         
          <div className="search-title-box">
            <div className='search-video-name-box'>
            <span className="search-video-name">{title}</span>
            <FiMoreVertical className="search-fa-icon" />

            </div>
            <div className="search-channel-name-box">
              <div className='search-channel-thumbnail'>
                <img src={channelPic} alt="youtubeThumbnail" />

                </div>
              <span className="search-channel-name">{channelTitle}</span>
              

              {/* <span className="search-video-views">
               4 hours ago
              </span> */}
            </div>
            <span className="search-description">{description}</span>
          </div>

          
        </div>
      </div>
    </>
  )
}

export default SearchCard