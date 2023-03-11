import React, {useState} from 'react'
import { FiMoreVertical } from 'react-icons/fi';




function Videocard ({title,thumbnail,channelTitle, channelPic, views}){

   

    function viewCount(views){
        

        if (views.length === 8){
            return `${views.slice(0, 2)}M`;
        }

        if (views.length === 7){
            return `${views.slice(0,1)}M`
        }

        if (views.length === 6){
            return `${views.slice(0, 3)}K`;
        }

        if (views.length === 5){
            return `${views.slice(0, 2)}K`;
        }

        if (views.length === 4){
            return `${views.slice(0, 1)}K`; 
        }
    }
    
    


    
    return (
      <>
        <div className="video-card">
          <div className="thumbnail">
            <img src={thumbnail} alt="youtubeThumbnail" />
          </div>
          <div className="channel-box">
            <div className="channel-pic">
              <img src={channelPic} alt="channelAvatar" />
            </div>
            <div className="video-title-box">
              <span className="video-name">{title}</span>
              <div className="channel-name-box">
                <span className="channel-name">{channelTitle}</span>
                <span className="video-views">
                   {viewCount(views)} views &#x2022; 4 hours ago
                </span>
              </div>
            </div>

            <FiMoreVertical className="fa-icon" />
          </div>
        </div>
      </>
    );
}


export default Videocard