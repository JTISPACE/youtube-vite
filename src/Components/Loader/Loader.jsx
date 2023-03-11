import React from 'react'
import "./loader.css"

function Loader({type}) {
        const counter = 8;
    const SkeletonLoader = () => (
        <div  className="video-card-loader">
                <div className="thumbnail-loader"></div>
                <div className="channel-box-loader">
                    <div className="channel-pic-loader"></div>
                    <div className="video-title-box-loader">
                        <div className="video-name-loader"></div>
                        <div className="video-name-loader-2"></div>
                        <div className="channel-name-box-loader">
                            <div className="channel-name-loader"></div>
                            <div className="video-views-loader"></div>
                        </div>

                    </div>

                     

                </div>

            </div>
    );
    
   if (type === "feed" ) return ( Array(counter).fill(<SkeletonLoader/>)
    
  )
}

export default Loader