import React from "react";
import "../Components/RelatedVideocard.css"

import { FiMoreVertical } from "react-icons/fi";

function RelatedVideocard({ title, thumbnail, channelTitle}) {

 
    

  return (
    <>
      <div className="related-video-card">
        <div className="rel-thumbnail">
          <img src={thumbnail} alt="youtubeThumbnail" />
        </div>
        <div className="rel-channel-box">
         
          <div className="video-title-box">
            <span className="rel-video-name">{title}</span>
            <div className="rel-channel-name-box">
              <span className="rel-channel-name">{channelTitle}</span>
              <span className="rel-video-views">
               4 hours ago
              </span>
            </div>
          </div>

          <FiMoreVertical className="rel-fa-icon" />
        </div>
      </div>
    </>
  );
}

export default RelatedVideocard;
