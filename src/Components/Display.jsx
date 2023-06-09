

import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import Loader from "./Loader/Loader";
import DisplayError from "./Errors/DisplayError";
import axios from "axios";
import { DateTime } from "luxon";
import Videocard from "./Videocard";
import { useDispatch } from "react-redux";
import { toggle } from "../States/ToggleState";
import { save, getStore, search } from "../States/VideoStore";


import { useEffect} from "react";
import { toast } from "react-toastify";
import MobileMenu from "./MobileMenu";





export const viteApi = import.meta.env.VITE_APP_KEY


function Display() {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [snippetData, setSnippetData] = useState([]);
  const [lastScrollY, setLastScrollY] = useState(false);


  const handleScroll = (e) => {
    const { scrollTop } = e.target;
    console.log(scrollTop)
    setLastScrollY(scrollTop > 100);

  };
  



   


  const dispatch = useDispatch();

  

  

  
  const videos = JSON.parse(localStorage.getItem("videos"))

  // require('dotenv').config()


  useEffect( () => {
    
   
    if (!videos) {

      async function fetchData(){

      try {
      const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=16&regionCode=NG&key=${viteApi}`
        )
        getVideoSnippet(response.data.items);
        dispatch(save(response.data.items))

     
        
      } catch (error) {
        toast.error('Something went wrong')
        setIsError(true)
         
         
        
      }
    }
    fetchData();
      
      
    } else if (videos) {
      const all_videos = videos;
      
      getVideoSnippet(all_videos);
    }

   

   
    
  }, []);

  async function getVideoSnippet(snippet) {
    const newSnippet = [];

    for (const video of snippet) {
      const videoId = video.id;
      const videoSnippet = video.snippet;
      const channelId = videoSnippet.channelId;
      const response = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=AIzaSyBTe99sOwtK0m9ArPenAF8RsrPQeQBtjXw`
      );
      const channelImage =
        response.data.items[0].snippet.thumbnails.default?.url;
      const title = videoSnippet.title;
      const image = videoSnippet.thumbnails.standard?.url;

      const views = video.statistics.viewCount;
      const timestamp = DateTime.fromISO(snippet.publishedAt).toRelative();
      const channelTitle = videoSnippet.channelTitle;

      newSnippet.push({
        videoId,
        videoSnippet,
        channelId,
        title,
        image,
        views,
        timestamp,
        channelTitle,
        channelImage,
      });
    }
    setSnippetData(newSnippet);
    // dispatch(save(newSnippet));
    setIsLoading(false);
  }

  if (isError) {
    return <DisplayError />;
  }

  return (
    <>
    {lastScrollY ? null : <MobileMenu/>}
    
      <div id="display"  className="display offset" onScroll={handleScroll}>
        {isLoading ? (
          <Loader type={"feed"} />
        ) : (
          snippetData?.map((item) => {
            return (
              <div key={item.videoId}>
              <Link
                
               
                to={`/video/${item.videoId}`}
                style={{ textDecoration: "none" }}
              >
                
                <Videocard
                 
                  thumbnail={item.image}
                  title={item.title}
                  channelTitle={item.channelTitle}
                  channelPic={item.channelImage}
                  views={item.views}
                />
              </Link>
              
              </div>
            );
          })
        )}
      </div>
    </>
  );
}

export default Display;
