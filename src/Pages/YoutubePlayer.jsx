import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Video from "../Components/Video/Video";
import "./youtubeplayer.css";
import RelatedVideos from "../Components/RelatedVideos";
import PlayerSidebar from "../Components/PlayerSidebar";
import { viteApi } from "../Components/Display";

function YoutubePlayer() {
  const { videoId } = useParams();

  const [isError, setIsError] = useState(false);
  //  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${viteApi}`
      )
      .then((response) => {
        getvideoComment(response.data.items);
      })
      .catch((error) => {
        console.log(error);
        setIsError(true);
      });
  }, []);

  //  const [commentData, setCommentData] = useState([]);

  // async function getvideoComment(comments) {
  //   console.log(comments);
  // }

  return (
    <>
      <div className="videoplayer offset">
        <PlayerSidebar />
        <div className="videodetails">
          <div key={videoId} className="videoplayer-frame">
            <Video videoId={videoId} />
          </div>
          {/* <div className='videoplayer__videoinfo'>
                    {!isLoading ? <VideoInfo
                      title={videoInfo.snippet}
                      description={videoInfo.description}
                      publishedDate={videoInfo.publishedDate}
                      channelTitle={videoInfo.channelTitle}
                      channelImage={videoInfo.channelImage}
                      viewCount={videoInfo.viewCount}
                      likeCount={videoInfo.likeCount}
                      dislikeCount={videoInfo.dislikeCount}
                      subs={videoInfo.subs}
                      /> : null
                    }
                  </div> */}
        </div>
        <div className="related-video-col">
          <RelatedVideos relatedVideoId={videoId} />
        </div>
      </div>
    </>
  );
}

export default YoutubePlayer;
