import React from 'react'
import YouTube from 'react-youtube'
import YoutubePlayer from '../../Pages/YoutubePlayer'
import '../Video/video.css'

function Video({videoId}) {

  // const opts = {
  //     height: '360',
  //     width: '640'
  //   }


  return (
    <>
      <div className="video-container">
        <YouTube
          className='video-frame'
          iframeClassName="video-iframe"
          // style={{ border: "3px solid red", width: "640px" , height:"auto" }}
          videoId={videoId}
        />
      </div>
    </>
  );
}

export default Video